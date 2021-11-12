let products = [
    { id: 1, title: 'Monitor', price: 400 },
    { id: 2, title: 'Headphones', price: 250 },
    { id: 3, title: 'Keyboard', price: 150 },
    { id: 4, title: 'Mouse', price: 100 },
    { id: 5, title: 'Speakers', price: 50 },
    { id: 6, title: 'Mousepad', price: 20 }
];

class Products {
    constructor(productsList) {
        this.productsList = productsList;
        this.renderPage();
    }

    renderPage() {
        let itemList = this.productsList.map(item => this.createBlock(item));
        document.querySelector('.products').innerHTML = itemList.join("\n");
    }

    createBlock(obj = { title: 'Пусто', price: 'Пусто' }) {
        return (`<div class="item-card">
                    <img src="img/${obj.title}.webp" alt="item 1">
                    <div class="item-shadow">
                        <input id="addButton" type="button" value="Add to Cart">
                    </div>
                    <div class="item-text">
                        <h3>${obj.title}</h3>
                        <p>${obj.price}&dollar;</p>
                    </div>
                </div>`);
    }

    getProductsSum() {
        let total = 0;
        for (let item of this.productsList) {
            total += parseInt(item.price);
        }
        return total;
    }
}

let items = new Products(products);
console.log(`Суммарная стоимость товаров на странице: ${items.getProductsSum()}$`);


class Cart {
    constructor() {

    }

    deleteItem() { //улаляет элемент из корзины

    }

    addItem() { //менят количество единиц определенного товара в корзине

    }

    getCartSum() { //возвращает суммарную стоимость товаров в корзине

    }
}