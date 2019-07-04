################################

Consideraciones:
	Aspectos visuales mejorables.
		- Si un usuario NO esta logeado y hace click en guardar el servidor responde 401 Unauthorized, el mensaje al usuario podria mejorarse.
		- De la misma manera, al actualizarse una prediccion, al usuario no se le muestra ningun mensaje que tambien podria mejorarse.
		- Al traer los prodes existentes simplemente agrego botones llamados "Prodes existentes".
	Considero que si bien son aspectos visuales mejorables, no son de gran impacto en el proyecto.

	Consideraciones de diseño
		- SOLAMENTE guardo en localstorage lo que ingreso el usuario en la nueva prediccion que va a generar, en los otro prodes ya existentes; Esto lo realice de esta manera ya que al ver un prode existente y sobreescribirle los datos en localstorage parece que los datos locales sin guardar son los traidos de la base de datos.
		- En caso de empatar, es necesesario clickear un radiobutton para definir un ganador.
		- Los GET a los partidos de cualquier usuario son publicos; Los put/post necesitan permisos. 

################################