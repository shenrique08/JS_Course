function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.lenght == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebeHomem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemHomem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adultoHomem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/velhoHomem.jpg')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebeMulher.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemMulher.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adultaMulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/velhaMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `\nDetectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
