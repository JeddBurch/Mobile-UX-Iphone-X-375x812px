<template>
  <div id="wrapper" v-if="product">
    <div class="container">
      <div id="hero">
        <div class="d-flex justify-content-between align-items-center">
          <div class="left-div">
            <h1 class="font-weight-normal h4">{{ product.name }}</h1>
            <h6>
              <router-link
                :to="{ name: 'menu-item', params: { id: product.category_id } }"
                >{{ product.category }}</router-link
              >
            </h6>
            <h4 class="font-weight-bold text-muted mt-4">${{ product.price.toFixed(2) }}</h4>
          </div>
          <div class="right-div">
            <img :src="product.image" alt="" width="230" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div id="description" class="my-2">
        <div class="mb-2">
          <span class="font-weight-bold">Description</span>
        </div>
        <div>
          <p class="lh-2">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="container mb-5">
      <div id="action">
        <div class="d-flex justify-content-center flex-column">
          <div class="form-group d-flex justify-content-center">
            <div>
              <span class="cursor-pointer" @click="addProduct(product)"
                ><i class="fas fa-plus-circle"></i
              ></span>
              <input
                type="text"
                name="project_amount"
                id="project_amount"
                class="arithmetic mx-1"
                min="0"
                v-model="quantity"
              />
              <span class="cursor-pointer" @click="removeProduct(product)"
                ><i class="fas fa-minus-circle"></i
              ></span>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <a
              href="#"
              @click="updateQuantity($event, product)"
              class="btn theme-btn"
              >Add to cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  data() {
    return {
      product: null,
      quantity: 1,
    };
  },
  methods: {
    async getProducts() {
      // fetch products
      return await this.$http.get("/products.json").then((res) => {
        return res.data;
      });
    },
     someProduct() {
      this.products++
    },
    addProduct() {
      this.quantity++
    },
    removeProduct() {
      if (parseInt(this.quantity) <= 1) {
        alert("Cannot less 1 items");
        this.quantity = 1
        return false;
      }
      this.quantity--
    },
    updateQuantity(event, product) {
      event.preventDefault();
      let quantity = parseInt(document.getElementById("project_amount").value);
      if (parseInt(quantity) < 1) {
        alert("Cannot add 0 items");
        return;
      }
      this.$store.dispatch("Cart/updateQuantity", {
        quantity: quantity,
        product: product,
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      let products = await vm.getProducts();
      let product = products.find((i) => {
        return i.id == parseInt(to.params.id);
      });

      if (typeof product == "object" && Object.keys(product).length) {
        vm.$data.product = product;
      }
    });
  },
  watch: {
    product(value) {
      if (value != null) {
        let cart_product = this.$store.getters['Cart/getProduct'](value.id);
        if(cart_product !== undefined){
          this.quantity = cart_product.quantity
        }
      }
    },
  },
};
</script>

<style>
</style>
