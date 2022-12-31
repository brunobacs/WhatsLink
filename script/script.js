// Use https://wa.me/<number> where the <number> is a full phone number in international format.

// Essa função converte o texto da mensagem para um formato de url
// encoded = encodeURI(uri)

// Receber o numero e a urlencodedtext = mensagem

//https://wa.me/numero?text=urlencodedtext

function linkmessage(){
    let message = document.getElementById("message").value;
    let phone = document.getElementById("phone").value;
    const head = "https://wa.me/";
    const texto = "?text=";


    var uri = encodeURIComponent(message);
    var joined = head +  phone + texto + uri;

    //console.log(joined);
    
    document.getElementById("linkgerado").innerHTML = `<p><a href="${joined}" target="_blank"><button>O link está pronto!</button></a></p>`;
}