var items = [];

const loadData = ()=>{
    tags = '';
    contenedor = document.getElementById('tags');

    let data =  localStorage.getItem('items');

    if( data != null){
        items = JSON.parse(data)
    }

    items
    .map(item => {
        tags += `
            <div class="tag">
                <div class="close" onClick="eliminarItem('${item.value}')">x</div>
                ${item.value}
            </div>
        `;
    })

    contenedor.innerHTML = tags;
}

const addData = e => items = [...items, {value: e.target.value}]

const pulsar = e => {
    if (e.keyCode === 13 && !e.shiftKey) {

        let input = document.getElementById('addTag');
        if(input.value.trim() != ''){
            e.preventDefault();
            addData(e);
            localStorage.setItem('items', JSON.stringify(items))
            input.value = '';

            loadData();
        }
    }
}

const eliminarItem = value => {
    items = items.filter(item => ( item.value !== value));
    localStorage.setItem('items', JSON.stringify(items))
    loadData();
}

//Init App
loadData();