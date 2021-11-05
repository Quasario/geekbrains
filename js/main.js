let products = [
    { id: 1, title: 'Monitor', price: 400 },
    { id: 2, title: 'Headphones', price: 250 },
    { id: 3, title: 'Keyboard', price: 150 },
    { id: 4, title: 'Mouse', price: 100 },
    { id: 5, title: 'Speakers', price: 50 },
    { id: 6, title: 'Mousepad', price: 20 }
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
let renderProduct = (obj = { title: 'Пусто', price: 'Пусто' }) => {
    return `<div class="item-card">
                <img src="img/${obj.title}.webp" alt="item 1">
                <div class="item-shadow">
                    <input id="addButton" type="button" value="Add to Cart">
                </div>
                <div class="item-text">
                    <h3>${obj.title}</h3>
                    <p>${obj.price}&dollar;</p>
                </div>
            </div>`
};

let renderPage = list => {
    let productsList = list.map(item => renderProduct(item));
    document.querySelector('.products').innerHTML = productsList.join("\n");
};

renderPage(products);