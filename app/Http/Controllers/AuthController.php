<?php
namespace App\Http\Controllers;

use App\User;
use DB;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Password;
use JWTAuth;
use Mail;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator;

class AuthController extends Controller
{
    /**
     * API Register
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $credentials = $request->only('name', 'email', 'password');

        //crea reglas de validacion
        $rules = [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
        ];

        // Al modelo Validator le manda las credenciales y las reglas
        $validator = Validator::make($credentials, $rules);
        //Error
        if ($validator->fails()) {
            return response()->json(['ok' => false, 'error' => $validator->messages()]);
        }

        $name = $request->name;
        $email = $request->email;
        $password = $request->password;

        //Guardamos en la base de datos el usuario
        $user = User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password)]);

        //Creamos un codigo de verificacion random
        $verification_code = str_random(30); //Generate verification code

        // insertamos con el DB que nos da laravel guarda el id que se acaba de generar y el token de verificacion.
        DB::table('user_verifications')->insert(['user_id' => $user->id, 'token' => $verification_code]);

        /**
         * Luwgo lo que hacemos es enviar un correo electronico.
         */
        $subject = "Por favor verifique su registro a la aplicacion.";
        Mail::send('email.verify', ['name' => $name, 'verification_code' => $verification_code],
            function ($mail) use ($email, $name, $subject) {
                $mail->from(getenv('FROM_EMAIL_ADDRESS'), "Prode de Libertadores Ramiro");
                $mail->to($email, $name);
                $mail->subject($subject);
            });

        return response()->json(['success'=> true, 'message'=> 'Gracias por registrarse. Verifique su correo electrónico para completar el registro.']);

    }

    public function verifyUser($verification_code)
    {
        $check = DB::table('user_verifications')->where('token', $verification_code)->first();
        if (!is_null($check)) {
            $user = User::find($check->user_id);
            if ($user->is_verified == 1) {
                return response()->json([
                    'ok' => true,
                    'message' => 'Account already verified..',
                ]);
            }
            $user->update(['is_verified' => 1]);
            DB::table('user_verifications')->where('token', $verification_code)->delete();
            return view("verificar", [
                'ok' => true,
                'message' => 'You have successfully verified your email address.',
            ]);
        }
        return view("verificar", ['ok' => false, 'error' => "Verification code is invalid."]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $rules = [
            'email' => 'required|email',
            'password' => 'required',
        ];
        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json(['ok' => false, 'error' => $validator->messages()], 401);
        }

        $credentials['is_verified'] = 1;

        try {
            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['ok' => false, 'error' => 'We cant find an account with this credentials. Please make sure you entered the right information and you have verified your email address.'], 404);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['ok' => false, 'error' => 'Failed to login, please try again.'], 500);
        }
        // all good so return the token
        return response()->json(['ok' => true, 'data' => ['token' => $token]], 200);
    }
    /**
     * Log out
     * Invalidate the token, so user cannot use it anymore
     * They have to relogin to get a new token
     *
     * @param Request $request
     */
    public function logout(Request $request)
    {
        $this->validate($request, ['token' => 'required']);

        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json(['ok' => true, 'message' => "You have successfully logged out."]);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['ok' => false, 'error' => 'Failed to logout, please try again.'], 500);
        }
    }

    public function recover(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            $error_message = "Your email address was not found.";
            return response()->json(['ok' => false, 'error' => ['email' => $error_message]], 401);
        }
        try {
            Password::sendResetLink($request->only('email'), function (Message $message) {
                $message->subject('Your Password Reset Link');
            });
        } catch (\Exception $e) {
            //Return with error
            $error_message = $e->getMessage();
            return response()->json(['ok' => false, 'error' => $error_message], 401);
        }
        return response()->json([
            'ok' => true, 'data' => ['message' => 'A reset email has been sent! Please check your email.'],
        ]);
    }
}
