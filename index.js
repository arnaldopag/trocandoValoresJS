var minhaLista = [
    'Max Verstappen',
    'Charles Leclerc',
    'Lewis Hamilton',
    'Valteri Bottas',
    'Daniel Riccardo'
]

let botao = document.querySelector('button')

botao.addEventListener('click', atualizar)

function atualizar(){
    let mostrar = document.querySelectorAll('li')
    
    for(var i = 0; i<minhaLista.length;i++){
    mostrar[i].textContent = minhaLista[i] 
    }
}

