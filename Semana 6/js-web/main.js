//document acessa o documento html .entra dentro da referencia querySelector e este procura o primeiro elemento html descrito no seletor em css
                        //tag
//document.querySelector('button');
                        //id
//document.querySelector('#tecla_pom');
                        //atributo
//document.querySelector('input[type=button]');

                        //classe
// document.querySelector('.tecla_pom').play();

 //se adicionarmos () a função é executada antes do usuario interagir
// document.querySelector('.tecla_pom').onclick=playSom;
                                //atributo do html que recebe uma função
//classList[1] = acessa o elemento de indice um da lista de classes

const listaTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado!')
    }
}

for (let i = 0; i < listaTeclas.length; i++) {

    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    // resolve o problema do autoplay
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
