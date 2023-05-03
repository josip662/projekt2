<template>
  <div>
     <div>
        <ProductDescription 
        :newproduct="product.isNewProduct"
        :title="product.title"
        :description="product.subtitle"
        />
        
     </div>
  </div>
</template>

<script >
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ProductDescription from '@/components/ProductDescription.vue'

export default defineComponent({
  components: {ProductDescription},
  data() {
    return {
      product: {},
    }
  },
setup() {
  const route = useRoute()
  const paramsId = route.params.id
  const store = useStore()
  return {
    store,
    paramsId,
  }
},
created() { this.product = this.store.state.products.filter( item => item.id === Number(this.paramsId) )
  this.product = this.product[0] 
},


})
</script>

<style>

</style>