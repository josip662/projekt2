import { createStore } from 'vuex'

export default createStore({
  state () {
    return { 
      products: [
        {id: 1,
         inventory: 1, 
         quantity: 1,
         type: 'headphones', 
         title:'XX99 MARK II HEADPHONES',
         subtitle:'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
         isNewProduct: true,
         price: 2999,
         features: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
         inBox: '1x Headphone Unit 2x Reaplacment Earcup 1x User Manual 1x 3,5 5mm Audio Cable 1x Travel Bag'
        },
        {
          id: 2,
          inventory: 5,
          quantity: 1,
          type: 'headphones',
          title:'XX99 MARK I HEADPHONES',
          subtitle:'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
          isNewProduct: false,
          price: 8512
        },
        {
          id: 3,
          inventory: 8,
          quantity: 1,
          type: 'headphones',
          title:'XX59 HEADPHONES',
          subtitle:'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
          isNewProduct: false,
          price: 8512,
        },
        {
          id: 4,
          inventory: 1, 
          quantity: 1,
          type: 'earphones', 
          title:'Slusalice 1', 
          subtitle:'Ovdje ide opis Slusalica1', 
          isNewProduct: true,
          price: 5644,
        },
        {
          id: 5, 
          inventory: 2,
          quantity: 1,
          type: 'earphones', 
          title:'Slusalive 2', 
          subtitle:'Ovdje ide opis Slusalica2', 
          isNewProduct: false,
          price: 4324
        },
        {
          id: 6,
          inventory: 4, 
          quantity: 1,
          type: 'earphones', 
          title:'Slusalice 3', 
          subtitle:'Ovdje ide opis Slusalica3', 
          isNewProduct: false,
          price: 8512,
        },
        {
          id: 7, 
          inventory: 5,
          quantity: 1,
          type: 'speakers', 
          title:'Speakers 3', 
          subtitle:'Ovdje ide opis Slusalica3', 
          isNewProduct: true,
          price: 10545,
        },
        {
          id: 8, 
          inventory: 8,
          quantity: 1,
          type: 'speakers', 
          title:'Speakers 3', 
          subtitle:'Ovdje ide opis Slusalica3', 
          isNewProduct: false
        },
        {
          id: 9,
          inventory: 2, 
          quantity: 1,
          type: 'speakers', 
          title:'Speakers 3', 
          subtitle:'Ovdje ide opis Slusalica3', 
          isNewProduct: false
        },
    ],
       cart: [ ]
    
    }
  },
  getters: {
    getProductByQueryName: (state) => (type => {
      return state.products.filter(product => product.type === type)
    }),
  
  },
  mutations: {
    pushProductToCart (state, products) {
      state.cart.push({
        quantity: 1,
        id: products.id,
        title: products.title,
        price: products.price
      })
      
    },
    incrementItemQuantity (_context, cartItem) {
      cartItem.quantity++
    },
    addPrice (_context, cartItem ) {
    cartItem.price += parseFloat(cartItem.price)
    },
    decrementProductInventory (_context, product) {
      product.inventory--
    },
    decrementItemQuantity (_context, cartItem) {
      cartItem.quantity--
    },
    removeItemfromCart (state, ) {
      console.log(state.cart)
    }
  },
  actions: {
    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if(!cartItem) {
          context.commit('pushProductToCart', product )
        }
        else {
          context.commit('incrementItemQuantity', cartItem)
          context.commit('addPrice', cartItem )
        }
        context.commit('decrementProductInventory', product)
      }
    },
    addItemQuantity(context, cartItem) {
      context.commit('incrementItemQuantity', cartItem)
    },
   reduceItemQuantity(context, cartItem) {
    if (cartItem.quantity > 1) {
     context.commit('decrementItemQuantity', cartItem)
    }
    else {
      context.commit('removeItemfromCart', cartItem)
    }
   }
  },
  modules: {
  }
})
