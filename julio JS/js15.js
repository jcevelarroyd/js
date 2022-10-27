let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', buscarItems);

// Adiciona item
function addItem(e) {
    e.preventDefault();

    // Pega o valor do <input>
    let newItem = document.getElementById('item').value;

    // Criar novo elemento <li>
    let li = document.createElement('li');
    // Adiciona classe
    li.className = 'list-group-item';
    // Adiciona o texto no novo elemento com o valor armazenado no newItem
    li.appendChild(document.createTextNode(newItem));

    // Cria o elemento botão para deletar um item
    let deletebtn = document.createElement('button');

    // Adiciona classe para para o botão deletar
    deletebtn.className = 'btn btn-danger  btn- float-end delete';

    //Acrescenta o texto no novo elemento
    deletebtn.appendChild(document.createTextNode('x'));

    // Acrescenta o botão no elemento li
    li.appendChild(deletebtn);
    itemList.appendChild(li); // Adiciona o novo item na lista
    form.reset(); // Limpa o formulário
}

    // Função Remove Item
    function removeItem(e) {
        if (e.target.classList.contains('delete')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

    // função buscarItems
    function buscarItems(e) {
        // Converte o textow digitado para o minúsculo
        let text = e.target.value.toLowerCase();
        // Busca todos o itens
        let items = itemList.getElementsByTagName('li');
        // Converte os itens para array
        Array.from(items).forEach(function(item) {
            // Busca o primeiro itemda lista
            let itemName = item.firstChild.textContent;
            // Busca o item na lista que começa com o mesmo texto digitado
            if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
                item.style.display = 'block'; //exibe o item
            } else{
                item.style.display = 'none'; // oculta o item
            }
        });
    }


