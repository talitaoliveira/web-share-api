const btnShare = document.getElementById("btn-compartilhar")

btnShare.addEventListener("click", () => {
    if(navigator.share) {
        navigator.share({
            title: 'Blog - Talita Oliveira',
            text: 'Veja mais posts no blog.',
            url: 'http://blog.talitaoliveira.com.br/',
        })
        .then(() => console.log('Compartilhado com Sucesso'))
        .catch((error) => console.log('Erro ao compartilhar', error));
    }else{
        alert("Navigator.share não disponível, tenta num celular :)")
    }
})