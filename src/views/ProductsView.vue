<template>
  <div>
    <div v-for="product in showProducts" :key="product.id">
        <div>
         <ProductDescription 
         :title="product.title"
         :description="product.subtitle"
         :newproduct="product.isNewProduct"
         />
         <button @click="addProductToCart(product)">Add Product</button>
        </div>
            <BaseButton @click="$router.push( `/products/${product.id} `)"  />
    </div>
    {{ cart }}
  
  </div>
</template>

<script >
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
import ProductDescription from '@/components/ProductDescription.vue'

export default defineComponent({
  components: {BaseButton, ProductDescription},
  data() {
    return {
      showProducts: [],
      randomItem: [],
      products: [],
      cart: []
    }
  },
setup() {
  const store = useStore()
  const route = useRoute()
  const queryName = route.query
  return {
    store, queryName, 
  }
},
computed: {
   doneProducts () {
    return this.$store.getters.getProductByQueryName
   },
   
},
created() { 
   this.products = this.store.state.products
   this.cart = this.store.state.cart
   let query = Object.keys(this.queryName)
   this.randomItem = this.products[Math.floor(Math.random()*this.products.length)];
   this.showProducts = this.doneProducts(query[0])
   
} ,
methods: {
  addProductToCart (product) {
    this.$store.dispatch('addProductToCart', product)
  },

  
}

})
</script>

<style>

</style>