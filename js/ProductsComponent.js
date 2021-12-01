Vue.component('products', {
    props: ['products'],
    template: `
        <div class="products container">
            <product v-for="item of products" :product="item"></product>
            <div class="empty-search" v-if='!products.length'>
                <img class="container" src="img/search_background.png" alt="Empty search message">
                <h3 class="search-text">По запросу {{'"'+$root.output+'"'}} ничего не найдено...</h3>
            </div>
        </div>
    `
});

Vue.component('product', {
    props: ['product'],
    template: `
        <div class="item-card" :key="product.id">
            <img :src="product.img" v-bind:alt="'item ' + product.id + ' image'">
            <div class="item-shadow">
                <input id="addButton" type="button" value="Add to Cart" @click="$root.addProduct(product)">
            </div>

            <div class="item-text">
                <h3>{{ product.title }}</h3>
                <p>{{ product.price }}&dollar;</p>
            </div>
        </div>
    `
});