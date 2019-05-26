import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditarAvatar from './EditarAvatar';

class App extends Component {
	
	render() {
		return (
			<BrowserRouter>
				<div class="col text-center p-2">{/* mt-4 */}</div>
				<div class="col text-center p-2"></div> 
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'));

{
	/* <div class="col text-center p-2">
<form class="form-horizontal">
  <div class="row form-group"><label for="avatar-style" class="col-sm-3 control-label">Estilo</label>
    <div class="col-sm-9">
      <label><input type="radio" id="avatar-style-circle" name="avatar-style" value="Circle"> Circulo</label>

      <label><input type="radio" id="avatar-style-transparent" name="avatar-style" value="Transparent"> Transparente</label>
    </div>
  </div>
  <div class="row form-group"><label for="topType" class="col-sm-3 control-label">💈 Pelo</label>
    <div class="col-sm-9">
      <select id="topType" class="form-control">
        <option value="NoHair">Sin pelo</option>
        <option value="Eyepatch">Parche</option>
        <option value="Hat">Gorro</option>
        <option value="Hijab">Hijab</option>
        <option value="Turban">Turban</option>
        <option value="WinterHat2">Gorro Coya</option>
        <option value="WinterHat3">Gorro de invierno</option>
        <option value="WinterHat4">Gorro de invierno con orejas</option>
        <option value="WinterHat1">Gorro de invierno ruso</option>
        <option value="LongHairFrida">Pelo Frida</option>
        <option value="LongHairBun">Rodete</option>
        <option value="LongHairDreads">Rastas</option>
        <option value="ShortHairDreads02">Rastas cortas</option>
        <option value="LongHairFro">Pelo Afro</option>
        <option value="LongHairFroBand">Pelo Afro con vincha</option>
        <option value="LongHairBob">Pelo corte bob</option>
        <option value="LongHairNotTooLong">Pelo corto lacio</option>
        <!-- <option value="LongHairShavedSides">LongHairShavedSides</option> -->
        <option value="LongHairMiaWallace">Pelo corto con flequillo</option>
        <option value="LongHairCurly">Pelo largo risado</option>
        <option value="LongHairCurvy">Pelo largo ondulado</option>
        <option value="LongHairBigHair">Pelo largo</option>
        <option value="LongHairStraight">Pelo largo lacio</option>
        <option value="LongHairStraight2">Pelo largo lacio 2</option>
        <option value="LongHairStraightStrand">Pelo largo lacio 3</option>
        <option value="ShortHairDreads01">Pelo corto</option>
        <option value="ShortHairFrizzle">Pelo corto 1</option>
        <option value="ShortHairShaggyMullet">Pelo corto 2</option>
        <option value="ShortHairShortCurly">Pelo corto 3</option>
        <option value="ShortHairShortFlat">Pelo corto 4</option>
        <option value="ShortHairShortRound">Pelo corto 5</option>
        <option value="ShortHairShortWaved">Pelo corto 6</option>
        <option value="ShortHairSides">Pelo corto 7</option>
        <option value="ShortHairTheCaesar">Pelo corto 8</option>
        <option value="ShortHairTheCaesarSidePart">Pelo corto 9</option>
      </select></div>
  </div>
  <div class="row form-group"><label for="hairColor" class="col-sm-3 control-label">↳ Color</label>
    <div class="col-sm-9">
      <select id="hairColor" class="form-control">
        <option value="Black">Negro</option>
        <option value="Brown">Castaño</option>
        <option value="BrownDark">Castaño oscuro</option>
        <option value="Blonde">Castaño claro</option>
        <option value="BlondeGolden">Rubio</option>
        <option value="PastelPink">Rosa</option>
        <option value="Platinum">Platinado</option>
        <option value="Red">Rojo</option>
        <option value="Auburn">Anaranjado</option>
        <option value="SilverGray">Gris</option>
      </select></div>
  </div>

  <div class="row form-group"><label for="accessoriesType" class="col-sm-3 control-label">👓 Accesorios</label>
    <div class="col-sm-9"><select id="accessoriesType" class="form-control">
        <option value="Blank">Nada</option>
        <option value="Kurt">Lentes de sol</option>
        <option value="Sunglasses">Lentes de sol 2</option>
        <option value="Wayfarers">Lentes de sol 3</option>
        <option value="Prescription01">Lentes de lectura 1</option>
        <option value="Prescription02">Lentes de lectura 2</option>
        <option value="Round">Lentes de lectura 3</option>

      </select></div>
  </div>

  <div class="row form-group"><label for="facialHairType" class="col-sm-3 control-label">✂️ Barba</label>
    <div class="col-sm-9"><select id="facialHairType" class="form-control">
        <option value="Blank">Nada</option>
        <option value="BeardMedium">BeardMedium</option>
        <option value="BeardLight">BeardLight</option>
        <option value="BeardMagestic">BeardMagestic</option>
        <option value="MoustacheFancy">MoustacheFancy</option>
        <option value="MoustacheMagnum">MoustacheMagnum</option>
      </select></div>
  </div>

  <div class="row form-group"><label for="facialHairColor" class="col-sm-3 control-label">↳ Color</label>
    <div class="col-sm-9"><select id="facialHairColor" class="form-control">
        <option value="Black">Negro</option>
        <option value="Brown">Castaño</option>
        <option value="BrownDark">Castaño oscuro</option>
        <option value="Blonde">Castaño claro</option>
        <option value="BlondeGolden">Rubio</option>
        <option value="Platinum">Platinado</option>
        <option value="Red">Rojo</option>
        <option value="Auburn">Anaranjado</option>
      </select></div>
  </div>

  <div class="row form-group"><label for="clotheType" class="col-sm-3 control-label">👔 Ropa</label>
    <div class="col-sm-9"><select id="clotheType" class="form-control">
        <option value="BlazerShirt">Remera y saco</option>
        <option value="BlazerSweater">Sweater y saco</option>
        <option value="CollarSweater">Sweater</option>
        <option value="GraphicShirt">Remera estampada</option>
        <option value="Hoodie">Buzo</option>
        <option value="Overall">Jardinero</option>
        <option value="ShirtCrewNeck">Remera cuello redondo</option>
        <option value="ShirtScoopNeck">Remera cuello redondo 2</option>
        <option value="ShirtVNeck">Remera cuello en v</option>
      </select></div>
  </div>
  <div class="row form-group"><label for="clotheColor" class="col-sm-3 control-label">↳ Color</label>
    <div class="col-sm-9"><select id="clotheColor" class="form-control">
        <option value="Black">Negro</option>
        <option value="Blue01">Azul 1</option>
        <option value="Blue02">Azul 2</option>
        <option value="Blue03">Azul 3</option>
        <option value="Gray01">Gris 1</option>
        <option value="Gray02">Gris 2</option>
        <option value="Heather">Gris 3</option>
        <option value="PastelBlue">Celeste</option>
        <option value="PastelGreen">Verde</option>
        <option value="PastelOrange">Naranja</option>
        <option value="PastelYellow">Amarillo</option>
        <option value="PastelRed">Rosa</option>
        <option value="Pink">Rosa 2</option>
        <option value="Red">Rojo</option>
        <option value="White">Blanco</option>
      </select></div>
  </div>
  <div class="row form-group"><label for="graphicType" class="col-sm-3 control-label">↳ Gráfica</label>
    <div class="col-sm-9"><select id="graphicType" class="form-control">
        <option value="Bat">Murcielago</option>
        <option value="Cumbia">Cumbia</option>
        <option value="Deer">Ciervo</option>
        <option value="Diamond">Diamante</option>
        <option value="Hola">Hola</option>
        <option value="Pizza">Pizza</option>
        <option value="Resist">Resist</option>
        <option value="Selena">Selena</option>
        <option value="Bear">Oso</option>
        <option value="SkullOutline">Calavera</option>
        <option value="Skull">Calavera</option>
      </select></div>
  </div>
  <div class="row form-group"><label for="eyeType" class="col-sm-3 control-label">👁 Ojos</label>
    <div class="col-sm-9"><select id="eyeType" class="form-control">
        <option value="Close">Cerrados</option>
        <option value="Cry">Llorando</option>
        <option value="Default">Default</option>
        <option value="Dizzy">Muerto</option>
        <option value="EyeRoll">Para arriba</option>
        <option value="Happy">Felices</option>
        <option value="Hearts">Corazones</option>
        <option value="Side">Costado</option>
        <option value="Squint">Achinados</option>
        <option value="Surprised">Sorpresa</option>
        <option value="Wink">Giño</option>
        <option value="WinkWacky">Giño</option>
      </select></div>
  </div>
  <div class="row form-group"><label for="eyebrowType" class="col-sm-3 control-label">✏️ Cejas</label>
    <div class="col-sm-9"><select id="eyebrowType" class="form-control">
        <option value="Angry">Enojadas</option>
        <option value="AngryNatural">Enojadas 2</option>
        <option value="Default">Default</option>
        <option value="DefaultNatural">Default 2</option>
        <option value="FlatNatural">Gruesas</option>
        <option value="RaisedExcited">Hacia arriba</option>
        <option value="RaisedExcitedNatural">Hacia arriba 2</option>
        <option value="SadConcerned">Triste</option>
        <option value="SadConcernedNatural">Triste 2</option>
        <option value="UnibrowNatural">Unicejas</option>
        <option value="UpDown">Arriba y abajo</option>
        <option value="UpDownNatural">Arriba y abajo 2</option>
      </select></div>
  </div>
  <div class="row form-group"><label for="mouthType" class="col-sm-3 control-label">👄 Boca</label>
    <div class="col-sm-9"><select id="mouthType" class="form-control">
        <option value="Concerned">Sorprendido</option>
        <option value="Default">Default</option>
        <option value="Disbelief">Consternado</option>
        <option value="Eating">Comiendo</option>
        <option value="Grimace">Mostrando dientes</option>
        <option value="Sad">Triste</option>
        <option value="ScreamOpen">Gritando</option>
        <option value="Serious">Serio</option>
        <option value="Smile">Sonriendo</option>
        <option value="Tongue">Lengua</option>
        <option value="Twinkle">Sonrisa</option>
        <option value="Vomit">Vomitando</option>
      </select></div>
  </div>
  <div class="row form-group"><label for="skinColor" class="col-sm-3 control-label">🎨 Piel</label>
    <div class="col-sm-9"><select id="skinColor" class="form-control">
        <option value="Tanned">Tostada</option>
        <option value="Yellow">Amarilla</option>
        <option value="Pale">Palida</option>
        <option value="Light">Clara</option>
        <option value="Brown">Morena</option>
        <option value="DarkBrown">Morena oscura</option>
        <option value="Black">Negra</option>
      </select></div>
  </div>

</form>


</div> */
}

{
	/* <Avatar
          avatarStyle='Transparent'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        /> */
}
