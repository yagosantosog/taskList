let contador = 0;
const input = document.getElementById('inputTask');
const add = document.getElementById('add-btn');
const main = document.getElementById('listArea');
const del = document.getElementById('delete-btn');

add.onclick = function addTarefa() {
    let valorDigitado = input.value;
    contador++;

    if((valorDigitado !== "") && (valorDigitado !== null) && (valorDigitado !== undefined)) {
        let novoItem = ` <div id="${contador}" class="item">
        <div id="icon_${contador}" onclick = "marcarTarefa(${contador})" class="item-icon">
            <img src="/IMG/circle.svg">
        </div>
        <div onclick = "marcarTarefa(${contador})" class="item-name">
            ${valorDigitado}
        </div>
        <div class="item-btn">
            <button onclick = "deletar(${contador})" class="delete"><img src="/IMG/delete.svg">Deletar</button>
        </div>
    </div>`;

    main.innerHTML += novoItem;

    input.value = "";
    input.focus();
    }
}

input.addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        add.click();
    }
})

function deletar (id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let icon = document.getElementById('icon_' + id);
    let classe = item.getAttribute('class');


    if(classe == "item") {
        item.classList.add("clicked");
        console.log(item.classList)
        icon.querySelector('img').setAttribute('src', '/IMG/check_circle.svg');

        item.parentNode.appendChild(item);
    }else {
        item.classList.remove("clicked");
        console.log(item.classList)
        icon.style.background = ``;
        icon.querySelector('img').setAttribute('src', '/IMG/circle.svg');
    }
}

