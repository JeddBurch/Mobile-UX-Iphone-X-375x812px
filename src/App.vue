<template>
  <div id="app">
    <div id="header" :class="headerClass">
      <div class="container">
        <div class="d-flex justify-content-between">
          <h5 class="heading-f">
            <router-link :to="{ name: 'Home' }">Resturatant App</router-link>
          </h5>
          <div class="top-menu">
            <router-link :to="{name : 'Home'}" class="mr-1 fs-2 cursor-pointer"><i class="icon-home"></i></router-link>
            <template v-if="history && $route.name != 'Home'">
              <span class="mr-1 fs-2 cursor-pointer" @click="goBack"><i class="icon-chevron-left"></i></span>
            </template>
            <span class="mr-4 position-relative">
              <template v-if="parseInt(itemCart)">
                <span class="cart-item-count">{{ itemCart }}</span>
              </template>
              <router-link :to="{ name: 'Checkout' }"
                ><i class="icon-cart-outline fs-3"></i
              ></router-link>
            </span>
            <!-- <span class="cursor-pointer" @click="toggleDrawer"><i class="icon-menu"></i></span> -->
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <div class="container">
      <div class="text-center mt-3">
        <div>
          <span class="fs-1">www.example.com</span>
        </div>
        <div>
          <span class="fs-1">Copyright &#169; 2021 All Right Reserved</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      headerClass: "",
      isOpen: false,
      history: 0,
    };
  },
  created() {
    if (this.$router.currentRoute.name == "Home") {
      this.dynamicHeader(this.$router.currentRoute);
    }
  },
  methods: {
    dynamicHeader(route) {
      if (route.name == "Home") {
        this.headerClass = "clear-bg";
        window.addEventListener("scroll", this.checkHeader);
      } else {
        window.removeEventListener("scroll", this.checkHeader);
        this.headerClass = "";
      }
    },
    checkHeader() {
      if (window.pageYOffset < 50) {
        this.headerClass = "clear-bg";
      } else {
        this.headerClass = "";
      }
    },
    toggleDrawer() {
      this.isOpen = !this.isOpen;
    },
    goBack(){
      this.$router.back();
    }
  },
  computed: {
    itemCart() {
      return this.$store.getters["Cart/count"];
    },
  },
  watch: {
    $route(to) {
      this.history = window.history.length
      this.dynamicHeader(to);
    },
  },
};
</script>

<style>
#app {
  background-color: #f9f9f9;
}
</style>

