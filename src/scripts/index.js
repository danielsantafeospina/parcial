

console.log('webpack starterkit');

let Datos = [
   
    {
        id: 1,
        nombre: 'Play Station 4',
        precio: 1300000,
        store: 'Exito',
        imagen: '//media.playstation.com/is/image/SCEA/playstation-4-pro-vertical-product-shot-01-us-07sep16?$native_t$'
    },
    {
        id: 2,
        nombre: 'Piano',
        precio: 1000000,
        store: 'Falabella',
        imagen: 'https://recursivearts.com/virtual-piano/TemplateData100/realistic-3d-piano-keyboard.webp'
    },
    {
        id: 3,
        nombre: 'Chair',
        precio: 800000,
        store: 'Exito',
        imagen: 'https://http2.mlstatic.com/silla-de-oficina-gamer-gerencial-giratoria-D_NQ_NP_913116-MCO41364828622_042020-O.webp'
    },
    
]
let $items = document.querySelector('#items');
let carrito = [];
let total = 0;
let $carrito = document.querySelector('#carrito');
let $total = document.querySelector('#total');

function renderItems () {
    for (let info of Datos) {
        
    let miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        
    let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
       
    let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info['nombre'];
        
    let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info['imagen']);
      
        
    let miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = info['precio'] + '$';
        
   let miNodoStore = document.createElement('h1');
        miNodoStore.classList.add('card-title');
        miNodoStore.textContent = info['store'];
        
         
    let miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-danger');
        miNodoBoton.textContent = 'Agregar a carrito';
        miNodoBoton.setAttribute('marcador', info['id']);
        miNodoBoton.addEventListener('click', añadirCarrito);
        
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        $items.appendChild(miNodo);
    }
}
function añadirCarrito () {
   
    carrito.push(this.getAttribute('marcador'))
    calcularTotal();
    renderizarCarrito();

}

function renderizarCarrito () {
    
    $carrito.textContent = '';
 
    let carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach(function (item, indice) {
    
    let miItem = Datos.filter(function(itemBaseDatos) {
    return itemBaseDatos['id'] == item;
    });
       
    let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
    return itemId === item ? total += 1 : total;
    }, 0);
      
    let miNodo = document.createElement('li');
    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;
        
        
     let miBoton = document.createElement('button');
     miBoton.classList.add('btn', 'btn-danger', 'mx-5');
     miBoton.textContent = 'Eliminar de carrito';
     miBoton.style.marginLeft = '1rem';
     miBoton.setAttribute('item', item);
     miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        $carrito.appendChild(miNodo);
    })
}

function borrarItemCarrito () {
    console.log()
   
    let id = this.getAttribute('item');
    carrito = carrito.filter(function (carritoId) {
        return carritoId !== id;
    });
    
    renderizarCarrito();
    calcularTotal();
}

function calcularTotal () {
    total = 0;
    for (let item of carrito) {
        let miItem = Datos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        total = total + miItem[0]['precio'];
    }
    $total.textContent = total.toFixed(2);
}

renderItems();

$(document).ready(function() {
    $('div').hover(
        function () {
            
            $(this).css({"background-color":"white"});
        }, 
        function () {
            
            $(this).css({"background-color":"blue"});
        }
    );
});

