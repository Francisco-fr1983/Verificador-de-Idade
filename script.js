

function verificar() {
    //Pegando o ano atual
    var data = new Date()
    var ano = data.getFullYear()
    //ligação dos inputs com as variaveis
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    //Verificação de dados 
    if(fano.value.lenght === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       //res.innerHTML = `Idade Calculada: ${idade}`
       var genero = ''
       //Criar imagem Dinâmicamente.    
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       
       if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './IMG/foto-bebe-masculino.jpg')
            } else if(idade >= 10 && idade <21) {
                //Jovem
                img.setAttribute('src', './IMG/foto-jovem-masculina.jpg')
            } else if( idade < 50) {
                //Adulto.
                img.setAttribute('src', './IMG/foto-homem-adulto.jpg')
            } else  {
                //Idoso
                img.setAttribute('src', './IMG/foto-idoso.jpg')
            }

        } else if(fsex[1].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './IMG/foto-bebe-feminino.jpg')
            } else if(idade >= 10 && idade <21) {
                //Jovem
                img.setAttribute('src', './IMG/foto-jovem-feminina.jpg')

            } else if( idade < 50) {
                //Adulto.
                img.setAttribute('src', './IMG/foto-mulher-adulta.jpg')
            } else  {
                //Idoso
                img.setAttribute('src', './IMG/foto-idosa.jpg')
            }  
       }
       //Recebendo o texto dinamicamente
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img).textAlign(center)
    }

}