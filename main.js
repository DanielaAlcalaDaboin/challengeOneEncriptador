// almacenamos en una variable el texto ingresado en minúsculas

let decryptedWord='';
let newText = '';
let result='';
//Función encargada de deencriptar el texto
function decrypt() {
        let text = document.getElementById('box-text').value.toLowerCase(); 
        //Eliminamos los acentos
        text= text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        //Eliminamos los carcateres espciales
        text = text.replace(/[^a-zA-Z ]/g, "");
          
        hideImage();

    for (let i=0; i< text.length;i++){
  
        if (text[i]=== 'a'){
            decryptedWord= decryptedWord + text[i];
            i = i+1;

        } else if (text[i] === 'o'){
            decryptedWord= decryptedWord + text[i];
            i = i+3;
  
        } else if (text[i] === 'e'){
            decryptedWord= decryptedWord + text[i];
            i = i+4;
  
        } else if (text[i] === 'i'){
            decryptedWord= decryptedWord + text[i];
            i = i+3;
  
        } else if (text[i] === 'u'){
            decryptedWord= decryptedWord + text[i];
            i = i+3;
  
        }  else {
            decryptedWord = decryptedWord + text[i];
        }
    }
    result= document.getElementById("hidden-text").innerHTML = decryptedWord
    
    return result;
}
//Función encargada de encriptar el texto
function encrypt() {
    // almacenamos en una variable el texto ingresado
    let text = document.getElementById('box-text').value.toLowerCase();
      //Eliminamos los acentos
      text= text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
       //Eliminamos los carcateres espciales
       text = text.replace(/[^a-zA-Z ]/g, "");
    
    hideImage()

    for (let i=0; i < text.length; i++){
 
        if (text[i]==='e') {
            newText = newText + 'enter';

        } else if (text[i] === 'i') {
            newText = newText + 'imes';

        }else if (text[i] === 'a') {
            newText = newText + 'ai';

        } else if (text[i] === 'o') {
            newText = newText + 'ober';

        } else if (text[i] === 'u') {
            newText = newText + 'ufat';
        } else {
            newText = newText + text[i];
         }
      
    }
    console.log(newText);
    result = document.getElementById("hidden-text").innerHTML = newText;
   
    return result;
}
//Función encargada de ocultar la imagen antes de mostrar el texto desencriptado
function hideImage() {
    //Validamos que la imagen se oculte al darle click en valida
    let image = document.getElementById("img-box-result").style.visibility = 'hidden';
    
    if(image === 'hidden'){
        document.getElementById("hidden-text").style.visibility = 'visible';
    }
}
//Botón que permite copiar el texto
function copy(){
    let content = document.getElementById("hidden-text");
    content.select();
    document.execCommand('copy');
}

