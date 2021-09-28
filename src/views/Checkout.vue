<template>
  <div id="wrapper">
    <div class="container">
      <div class="my-1">
        <h5 class="heading-f" style="font-weight: normal">Checkout <router-link :to="{name: 'Categories'}" class="float-right">Browse Menus</router-link></h5>
      </div>
      <template v-if="items.length">
        <div id="menu-list">
          <div
            class="
              menu-list-item
              d-flex
              align-items-center
              justify-content-between
            "
            v-for="item in items"
            :key="item.id"
          >
            <div class="d-flex align-items-center">
              <div>
                <img :src="item.image" alt="" width="50" />
              </div>
              <div class="ml-2">
                <h5 class="fs-2">{{ item.name }}</h5>
                <div>
                  <h6 class="fs-1">$ {{ item.price }}</h6>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column align-items-end">
              <div>
                <span class="cursor-pointer mr-1" @click="addProduct(item)"><i class="fas fa-plus-circle"></i></span>
                <input
                  type="text"
                  name="project_amount"
                  id="project_amount"
                  class="arithmetic mr-1"
                  :value="item.quantity"
                  @change="updateQuantity($event, item)"
                />
                <span class="ml-1 cursor-pointer mr-1"  @click="removeProduct(item)"><i class="fas fa-minus-circle"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div id="checkout-info">
          <div class="d-flex justify-content-between my-1">
            <div>
              <strong>Total</strong>
            </div>
            <div>
              <strong>${{ total.toFixed(2) }}</strong>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="container py-5 text-center">
          <i class="far fa-frown fa-3x mb-4 text-muted"></i>
          <h3>No cart items</h3>
          <p class="text-muted">Browse <router-link :to="{ name: 'Categories'}" class="text-black">Menus</router-link> to add order</p>
        </div>
      </template>
      <div class="d-flex justify-content-center mb-5">
        <router-link :to="{name: 'Order'}" class="btn theme-btn">Place Order</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {};
  },
  methods: {
    addProduct(product) {
      this.$store.dispatch("Cart/addToCart", product);
    },
    removeProduct(product) {
      this.$store.dispatch("Cart/removeFromCart", product);
    },
    updateQuantity(event, product){
      if(parseInt(event.target.value) < 1){
        alert('Cannot add 0 items. reverting back to previous quantity')
        event.target.value = product.quantity
        return
      }
      this.$store.dispatch("Cart/updateQuantity", {quantity : event.target.value, product: product});
    }
  },
  computed: {
    items() {
      return this.$store.getters["Cart/getItems"];
    },
    total() {
      return this.$store.getters["Cart/totalPrice"];
    },
  },
};
</script>

<style>
</style>