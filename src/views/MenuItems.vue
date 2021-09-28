<template>
  <div id="wrapper">
    <div class="container" v-if="items.length">
      <!-- begin:Search -->
      <div id="search" class="my-1">
        <form onsubmit="return false">
          <div class="form-group">
            <div class="input-group mb-3">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                class="search"
                v-model="search_field"
                @change="search"
              />
              <div class="input-group-append">
                <button class="btn bg-primary text-white" @click="search">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- end:Search -->
      <!-- begin:Breadcrumb -->
      <div id="breadcrumb">
        <ol class="breadcrumb" style="background:#fdfdfd !important">
          <li class="breadcrumb-item"><a href="/home">Home</a></li>
          <li class="breadcrumb-item"><a href="/menu">Our Menus</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ (typeof items[0] == 'object')? items[0]['category'] : '' }}</li>
        </ol>
      </div>
      <!-- end:Breadcrumb -->
      <!-- begin:MenuList -->
      <div id="menu-list">
        <!-- begin:MenuListItem -->

        <div
          class="menu-list-item"
          v-for="(item, index) in items"
          v-bind:key="index"
        >
          <div class="d-flex align-items-center justify-content-between">
            <router-link :to="{name : 'single-product', params : { id : item.id }}" class="take-full-space">
              <!-- begin:LeftDiv -->
              <div class="d-flex align-items-center">
                <div>
                  <img :src="item.image" alt="" width="55" />
                </div>
                <div class="ml-2">
                  <h6 class="font-weight-normal">{{ item.name }}</h6>
                  <h6 class="font-weight-bold text-muted">$ {{ parseInt(item.price).toFixed(2) }}</h6>
                </div>
              </div>
              <!-- end:LeftDiv --></router-link
            >
            <!-- begin:RightDiv -->
            <div class="mx-1">
              <button class="btn btn-theme" @click="addProduct(item)">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
            <!-- end:RightDiv -->
          </div>
        </div>
        <!-- end:MenuListItem -->
      </div>
      <!-- end:MenuList -->
    </div>
    <div class="container" v-else>
      <h6>No menu items </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItems",
  data() {
    return {
      menuItems: [],
      items: [],
      search_field: ''
    };
  },
  methods: {
    async getProducts(){
      // fetch products
      return await this.$http.get("/products.json").then((res) => {
          return res.data;
      });
    },
    addProduct(product){
      this.$store.dispatch('Cart/addToCart', product)
    },
    search(){
      this.items = this.menuItems.filter(i => i.name.includes(this.search_field));
    }
  },
  beforeRouteEnter (to, from, next) { 
     next(async vm => { 
      let products = await vm.getProducts()
      products = products.filter(i => { return i.category_id == parseInt(to.params.id)})
      if(products.length){
        vm.menuItems = products;
        vm.items = products;
      }
    })
  }
};
</script>

<style>
</style>