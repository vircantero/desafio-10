

// const boton = document.getElementById("button")



// boton.addEventListener( 'mouseover' , ()=>{
//         boton.style.backgroundColor = "red"
// } )

// boton.addEventListener('mouseout' , ()=>{
//     boton.style.backgroundColor = 'aqua'
// })




// const persona = [
//     {
//         name: "sfdsdsd",
//         ege:2323
//     },
//     {
//         name: "sfdsdsd",
//         ege:2323
//     },
//     {
//         name: "sfdsdsd",
//         ege:2323
//     }
// ]


// persona.push({name:"Khalil", ege:2323})

// console.log(persona.length);






// function bienvenida(){
//     console.log('hola mundo');
// }

// bienvenida()



const container_movies = document.getElementById('container_movies')
const counter_cart = document.getElementById('counter_cart')
const container_cart = document.getElementById('container_cart')
const clear_cart = document.getElementById('clear_cart')

const cart = []

clear_cart.addEventListener('click',cartClear )

getMovies()

function getMovies(){
    movies.forEach(item => {
        // console.log(item);
        const content_movie = document.createElement('div')
        content_movie.classList.add('card')
        content_movie.innerHTML = `
            <h1>${item.title}</h1>
            <img src="${item.poster_path}">
            <p>${item.overview}</p>
            <button class="btn_carts" value="${item.id}">comprar</button>
        `
        container_movies.appendChild(content_movie)
    });

    const moviesId = document.querySelectorAll('.btn_carts');

    moviesId.forEach(item =>{
        item.addEventListener('click', addToCart)
    })
    // console.log(moviesId);
}

function addToCart(event){

    const idMovie = event.target.value

    const movie = movies.find( movie => movie.id === parseInt(idMovie))

    if(movie){
        cart.push(movie)
        counter_cart.innerText = cart.length
        console.log(cart);
        cartDisplay(movie)
    }
}


function cartDisplay(product){

    const cart_movie = document.createElement('div')
    cart_movie.classList.add('card')
    cart_movie.innerHTML = `
        <h1>${product.title}</h1>
        <img src="${product.poster_path}">
        <p>${product.overview}</p>
        <button class="btn_item-cart" value="${product.id}">Borrar</button>
    `

    const borrarPorducto = cart_movie.querySelector('.btn_item-cart')

    console.log(borrarPorducto);

    borrarPorducto.addEventListener('click', removeItemCart)

    container_cart.appendChild(cart_movie)
}

function cartClear () {
    cart.length = 0
    counter_cart.innerText = '0'
    container_cart.innerHTML = ''
}


function removeItemCart(event){
    const productId = event.target.value

    const indice = cart.findIndex(movie => movie.id === parseInt(productId))

    if(indice !== -1){
        cart.splice( indice , 1)
        counter_cart.innerText = cart.length
        container_cart.innerHTML = ''
        cart.forEach( item =>{
            cartDisplay(item)
        })
    }

}




















































const modal = document.getElementById('modal');

const closeBtn = document.querySelector('.close');

counter_cart.addEventListener('mouseover', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});