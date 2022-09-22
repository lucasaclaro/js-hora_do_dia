function carregar() {
    var msg = document.getElementById("conteudo-texto")
    var imagem = document.getElementById("conteudo-imagem")
    var conteudo = document.getElementById("conteudo")
    var data = new Date()
    var hora = data.getHours()



    if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        imagem.src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-brasil.jpg"
        document.body.style.backgroundImage = 'linear-gradient(to right, rgb(230, 146, 20), rgb(132, 145, 21))'
    } else if (hora >= 19) {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        imagem.src="https://st2.depositphotos.com/4404267/6487/i/450/depositphotos_64872759-stock-photo-full-moon-in-night-sky.jpg"
        document.body.style.backgroundImage = 'linear-gradient(to right, rgb(4, 11, 102), rgb(132, 145, 21))'

    } else if (hora <= 5) {
        msg.innerHTML = `Boa madrugada! Agora é(são) ${hora} hora(s).`
        imagem.src="https://st2.depositphotos.com/4404267/6487/i/450/depositphotos_64872759-stock-photo-full-moon-in-night-sky.jpg"
        document.body.style.backgroundImage = 'linear-gradient(to right, rgb(4, 11, 102), rgb(132, 145, 21))'
    } else {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        imagem.src="https://mega.ibxk.com.br/2017/01/24/24172623393254.jpg"
        document.body.style.backgroundImage = 'linear-gradient(to right, rgb(85, 77, 9), rgb(132, 145, 21))'
    }

}
