<template>
<div>
<div v-for="item in cart" :key="item.id">
    {{ item.title }}
    <div>{{ item.price }}</div>
    <div class="quantity">
    <a href="#" class="quantity__minus" @click="reduceItemQuantity(item)"><span>-</span></a>
    <input name="quantity" type="text" class="quantity__input" :value="item.quantity">
    <a href="#" class="quantity__plus" @click="addItemQuantity(item)"><span>+</span></a>
  </div>
</div>
    <div>{{ totalPrice }}</div>
</div>
</template>
<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    data() {
        return {
            cart: [],
            totalPrice: null,
        }
    },
    setup() {
        const store = useStore()
             return {
             store,
             }  
    },
    created() {
        this.cart = this.store.state.cart;
        const total = this.cart.reduce((curentTotal, item) => {
            return item.price + curentTotal}, 0)
            this.totalPrice = total  
    },
    methods: {
        addItemQuantity (item) {
    this.$store.dispatch('addItemQuantity', item)
  },
        reduceItemQuantity (item) {
          this.$store.dispatch('reduceItemQuantity', item )
        }
    }
 
})
</script>
<style>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.quantity__minus,
.quantity__plus {
  display: block;
  width: 22px;
  height: 23px;
  margin: 0;
  background: #dee0ee;
  text-decoration: none;
  text-align: center;
  line-height: 23px;
}
.quantity__minus:hover,
.quantity__plus:hover {
  background: #575b71;
  color: #fff;
} 
.quantity__minus {
  border-radius: 3px 0 0 3px;
}
.quantity__plus {
  border-radius: 0 3px 3px 0;
}
.quantity__input {
  width: 32px;
  height: 19px;
  margin: 0;
  padding: 0;
  text-align: center;
  border-top: 2px solid #dee0ee;
  border-bottom: 2px solid #dee0ee;
  border-left: 1px solid #dee0ee;
  border-right: 2px solid #dee0ee;
  background: #fff;
  color: #8184a1;
}
.quantity__minus:link,
.quantity__plus:link {
  color: #8184a1;
} 
.quantity__minus:visited,
.quantity__plus:visited {
  color: #fff;
}
</style>
