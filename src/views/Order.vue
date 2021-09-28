<template>
  <div id="wrapper">
    <div class="container">
      <div class="my-1 d-flex justify-content-between">
        <h5 class="heading-f" style="font-weight: bold">Order</h5>
        <div v-if="items.length">
          <p>Receipt <span class="font-weight-bold"> #1200112</span></p>
        </div>
      </div>
      <template v-if="items.length">
        <div class="mb-4">
          <p class="text-center">
            Thank You. Your order
            <span class="font-weight-bold"> #1200112</span> has been
            successfully placed
          </p>
        </div>
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
            <div class="d-flex flex-column align-items-end pr-2">
              <h6 class="font-weight-bold">${{ item.price.toFixed(2) }}</h6>
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
        <div class="d-flex justify-content-center mb-5">
          <router-link :to="{ name: 'Checkout' }" class="btn theme-btn"
            >Back to Cart</router-link
          >
        </div>
      </template>
      <template v-else>
        <div class="container py-5 text-center">
          <i class="far fa-frown fa-3x mb-4 text-muted"></i>
          <h3>No orders</h3>
          <p class="text-muted">Browse <router-link :to="{ name: 'Categories'}" class="text-black">Menus</router-link> to add order</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      menuItems: [
        {
          id: 1,
          name: "cheeze pizza",
          imgUrl: "/images/pizza-transparent.png",
        },
        {
          id: 2,
          name: "veggie pizza",
          imgUrl: "/images/pizza/veggie.jpg",
        },
        {
          id: 3,
          name: "peproni pizza",
          imgUrl: "/images/pizza/pepperoni.png",
        },
        {
          id: 4,
          name: "BBQ chicken pizza",
          imgUrl: "/images/cake.jpg",
        },
      ],
    };
  },
  methods: {},
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