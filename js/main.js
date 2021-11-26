const URL = 'https://raw.githubusercontent.com/Quasario/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        productsAll: [], //массив всех товаров
        products: [], //массив товаров, отображаемый на странице
        // message: ''
        // imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        // show: false
    },
    methods: {
        filterSearch(value) {
            console.log(value);
            const regexp = new RegExp(value, 'i');
            this.products = this.productsAll.filter(product => regexp.test(product.title));
        },
        getProductsList(site) {
            return fetch(site)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },
        deleteProducts() {
            this.products = [];
            console.log(this.products);
        }
        // getJson(url) {
        //     return fetch(url)
        //         .then(result => result.json())
        //         .catch(error => {
        //             console.log(error);
        //         })
        // },
        // addProduct(product) {
        //     console.log(product.id_product);
        // }
    },
    mounted() {
        this.getProductsList(`${URL}/catalogData.json`)
            .then(data => {
                for (let el of data) {
                    this.productsAll.push(el);
                }
                this.products = this.productsAll;
                console.log(this.products);
            });
        // this.getJson(`getProducts.json`)
        //     .then(data => {
        //         for (let el of data) {
        //             this.products.push(el);
        //         }
        //     })
    }
})


// class Products {
//     constructor() {
//         this.productsList;
//         this.getProductsList()
//             .then(data => {
//                 this.productsList = data;
//                 this.renderPage();
//                 this.getProductsSum();
//             });
//     }

//     renderPage() {
//         let itemList = this.productsList.map(item => this.createBlock(item));
//         document.querySelector('.products').innerHTML = itemList.join("\n");
//     }

//     createBlock(obj = { title: 'Пусто', price: 'Пусто' }) {
//         return (`<div class="item-card">
//                     <img src="img/${obj.title}.webp" alt="item 1">
//                     <div class="item-shadow">
//                         <input id="addButton" type="button" value="Add to Cart">
//                     </div>
//                     <div class="item-text">
//                         <h3>${obj.title}</h3>
//                         <p>${obj.price}&dollar;</p>
//                     </div>
//                 </div>`);
//     }

//     getProductsList() {
//         return fetch(`${URL}/catalogData.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     getProductsSum() {
//         let total = 0;
//         for (let item of this.productsList) {
//             total += parseInt(item.price);
//         }
//         console.log(`Суммарная стоимость товаров на странице: ${total}$`);
//     }
// }

// let items = new Products();



// class Cart {
//     constructor() {
//         this.cartList;
//         this.getCartList()
//             .then(data => {
//                 this.cartList = data.contents;
//                 this.renderCart();
//                 this.getCartSum();
//             });
//     }

//     renderCart() {
//         let itemList = this.cartList.map(item => this.createBlock(item));
//         document.querySelector('.cart-positions').innerHTML = itemList.join("\n");
//     }

//     createBlock(obj = { title: 'Пусто', price: 'Пусто', quantity: 'Пусто' }) {
//         return (`<div class="cart-item">
//                     <img src="img/${obj.title}.webp" alt="item 2">
//                     <div class="position-text">
//                         <h3>${obj.title}</h3>
//                         <p>${obj.price}&dollar;</p>
//                     </div>
//                     <h3 class="position-quantitiy">${obj.quantity}</h3>
//                 </div>`);
//     }

//     deleteItem() { //улаляет элемент из корзины

//     }

//     addItem() { //менят количество единиц определенного товара в корзине

//     }

//     getCartList() {
//         return fetch(`${URL}/getBasket.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     getCartSum() { //возвращает суммарную стоимость товаров в корзине
//         let cart_total = document.querySelector('.cart_total');
//         let total = 0;
//         for (let item of this.cartList) {
//             total += parseInt(item.price) * item.quantity;
//         }
//         cart_total.innerHTML = total + '$';
//     }
// }

// let cart = new Cart();