function traduzir() {
    const inputFrase = document.getElementById('frase');
    const divTraducao = document.getElementById('traducao');
    const botaoCopiar = document.getElementById('botao-copiar');

    // Chave da API do Google Tradutor
    const apiKey = "AIzaSyCN7z-AoMQut7uynZPZwWTI8itDJ237O7A";

    // Enviar uma solicitação de tradução usando a API do Google Tradutor
    fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            q: inputFrase.value,
            target: "en" // idioma de destino
        })
    })
    .then(response => response.json())
    .then(data => {
        const traducao = data.data.translations[0].translatedText;
        divTraducao.innerHTML = ` ${traducao}`;
    })
    .catch(error => {
        console.error("Erro ao traduzir a frase:", error);
        divTraducao.innerHTML = "<strong>Erro ao traduzir a frase!</strong>";
    });
}

const inputFrase = document.getElementById('frase');
inputFrase.addEventListener('input', function() {
    traduzir();
});

  function copiarTexto() {
	const divTraducao = document.getElementById('traducao');
	const range = document.createRange();
	range.selectNode(divTraducao);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	alert("Texto copiado para a área de transferência!");
}