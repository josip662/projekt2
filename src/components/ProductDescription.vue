<template>
    <div>
      <div v-show="newproduct">newproduct</div>  
      <div>{{ title }}</div>
      <div>{{ description }}</div>
    </div>
</template>

<script >
import { defineComponent } from 'vue'

export default defineComponent({
   props: {
    title: String,
    description: String,
    newproduct: Boolean,
    price: Number
   }
})
</script>
