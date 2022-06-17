const pizzas = [
    {
        id: 1,
        nombre: 'Margarita',
        ingredientes: [ 'Queso', 'Tuco' ],
        precio: 200,
        img: "img/margarita.jpeg"
    },
    {
        id: 2,
        nombre: 'Fugazzeta',
        ingredientes: [ 'Queso', 'Tuco','Jamon'],
        precio: 300,
        img: "img/fugazzeta.jpeg"
    },
    {
        id: 3,
        nombre: 'Choclo',
        ingredientes: [ 'Queso', 'Tuco', 'Choclo' ],
        precio: 600,
        img: "img/choclo.jpeg"
    },
    {
        id: 4,
        nombre: 'Peperonni',
        ingredientes: [ 'Queso', 'Tuco', 'Peperonni' ],
        precio: 270,
        img: "img/peperonni.jpeg"
    },
    {
        id: 5,
        nombre: 'Panceta',
        ingredientes: [ 'Queso', 'Tuco', 'Panceta' ],
        precio: 800,
        img: "img/panceta.jpeg"
    },
    {
        id: 6,
        nombre: 'Anana',
        ingredientes: [ 'Queso', 'Tuco', 'Anana' ],
        precio: 100,
        img: "img/anana.jpeg"
    }
];

// Convertimos un array de objetos en formato JSON
const pizzasStorage = JSON.stringify(pizzas)

localStorage.setItem("pizzas", pizzasStorage);

// DOM
const container = document.getElementById("producto-contenedor");
const form = document.getElementById("form");
const pizzaId = document.getElementById("pizzaId");

// Escuchar un evento dentro de el formulario
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const pizza = pizzas.find( pizza => pizza.id == pizzaId.value );
    // console.log(pizza)

    const mostrarPizza = (pizza) => {
        if (pizza == undefined) {
            container.innerHTML = `La pizza no existe!`
        } else {
            container.innerHTML = `<div class="producto">
                                        <div class="card">
                                            <div class="card-image">
                                                <img src="${pizza.img}">
                                                <span class="card-title">${pizza.nombre}</span>
                                            </div>
                                            <div class="card-content">
                                                <p>Ingredientes: ${pizza.ingredientes}</p>
                                                <p> $${pizza.precio}</p>
                                            </div>
                                        </div>
                                    </div>`
        }
    };
    
    mostrarPizza(pizza);

})


















