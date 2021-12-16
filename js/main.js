const URL = 'https://raw.githubusercontent.com/Quasario/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogURL: '/catalogData.json', //ссылка на каталог товаров
        cartURL: '/getBasket.json', //ссылка на предварительное содержимое корзины
        productsAll: [], //массив всех товаров
        products: [], //массив товаров, отображаемый на странице
        userSearch: '', //текст в поисковой строка
        cartItems: [], //список товаров в корзине
        cartTotal: 0, //сумма корзины
        output: '', //переменная для вывода сообщения о пустом поиске
    },
    methods: {
        filterSearch() {
            console.log(this.userSearch);
            this.output = this.userSearch;
            const regexp = new RegExp(this.output, 'i');
            this.products = this.productsAll.filter(product => regexp.test(product.title));
        },
        getJSON(site) {
            return fetch(site)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                });
        },

        addProduct(position) {
            let find = this.cartItems.find(el => el.id === position.id);
            if (find) {
                find.quantity++;
            } else {
                const prod = Object.assign({ quantity: 1 }, position);//создание нового объекта на основе двух, указанных в параметрах
                this.cartItems.push(prod)
            }
            this.getCartTotal()
        },
        increaseQuantity(x) {
            x.quantity++;
            this.getCartTotal();
        },
        decreaseQuantity(x) {
            x.quantity--;
            if (x.quantity == 0) {
                this.deleteCartPosition(x);
            }
            this.getCartTotal();
        },
        deleteCartPosition(x) {
            this.cartItems.splice(this.cartItems.indexOf(x), 1);
            this.getCartTotal();
        },
        getCartTotal() {
            let sum = 0
            for (item of this.cartItems) {
                sum += parseInt(item.price * item.quantity);
            }
            this.cartTotal = sum;
            console.log(this.cartTotal);
            console.log(this.cartItems);
        }
    },
    mounted() {
        this.getJSON(URL + this.catalogURL)
            .then(data => {
                for (let el of data) {
                    this.productsAll.push(el);
                }
                this.products = this.productsAll;
                console.log(this.products);
            });

        this.getJSON(URL + this.cartURL)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
                console.log(this.cartItems);
                this.getCartTotal();
            });
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