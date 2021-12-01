Vue.component('cart', {
    props: ['cartList'],
    template: `
        <div class="cart-items">
            <h1>SHOPPING CART</h1>
            <h2 v-if="!cartList.length">CART IS EMPTY</h2>

            <div class="cart-positions">
                <item v-for='position of cartList' :item='position'></item>
            </div>

            <div class="total">
                <h3>TOTAL PRICE: <span class="cart_total">{{ $root.cartTotal+'$' }}</span></h3>
                <a href="index.html" v-if="cartList.length">&#10132;</a>
            </div>
        </div>
    `
});

Vue.component('item', {
    props: ['item'],
    template: `
        <div class="cart-item" :key="item.id">
            <img :src="item.img" v-bind:alt="'item ' + item.id + ' image'">
            <div class="position-text">
                <h3>{{ item.title }}</h3>
                <p>{{ item.price }}&dollar;</p>
            </div>

            <div class="quantity-regulation">
                <button class="bucket-icon" @click='$root.deleteCartPosition(item)'>
                    &#128465;
                </button>
                <h3 class="position-quantitiy">{{ item.quantity }}</h3>
                <div class="arrows">
                    <button @click='$root.increaseQuantity(item)'>
                        &#129129;
                    </button>
                    <button @click='$root.decreaseQuantity(item)'>
                        &#129131;
                    </button>
                </div>
            </div>
        </div>
    `
});