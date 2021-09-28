export default {
  namespaced: true,
  state: {
      items: []
  },
  getters: {
    count(state) {
      if(!state.items.length){
        return 0;
      }

      let counter = 0
      state.items.map(i => {
        counter = parseInt(i.quantity) + counter
      })

      return counter
    },
    getItems(state){
      return state.items;
    },
    totalPrice(state){
      if(!state.items.length){
        return 0;
      }
      let total = 0
      state.items.map(i => {
        total = total + (parseInt(i.price) * parseInt(i.quantity))
      })

      return total
    },
    getProduct : (state) => id => state.items.find( i => i.id == id)
  },
  mutations: {
    ADD_TO_CART (state, item){
      let productIndex = state.items.findIndex( i => i.id == item.id); 

      if(productIndex > -1){
        state.items[productIndex]['quantity']++
      }else{
        item.quantity = parseInt(item.quantity) + 1
        state.items.push(item)
      }
    },
    REMOVE_FROM_CART(state, item){
      let productIndex = state.items.findIndex( i => i.id == item.id); 

      if(productIndex < 0){ 
        state.items.splice(productIndex, 1)
        return
      }

      if(state.items[productIndex]['quantity'] == 1){
        state.items.splice(productIndex, 1)
        return
      }
      
      state.items[productIndex]['quantity']--
    },
    UPDATE_QUANTITY(state, payload){
      let productIndex = state.items.findIndex( i => i.id == payload.product.id);
      
      if(productIndex > -1){
        state.items[productIndex]['quantity'] = payload.quantity
      }else{
        payload.product.quantity = payload.quantity;
        state.items.push(payload.product)
      }
    }
  },
  actions: {
    addToCart({commit}, payload){
      commit('ADD_TO_CART', payload)
    },
    removeFromCart({commit}, payload){
      commit('REMOVE_FROM_CART', payload)
    },
    updateQuantity({commit}, payload){
      commit('UPDATE_QUANTITY', payload)
    },
  },
};
