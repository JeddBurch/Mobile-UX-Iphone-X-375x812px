<template>
  <div class="nav-drawer" id="drawer">
    <ul class="navigation-links">
      <li>
        <a href="#" @click="navRoute($event, 'Home')">Home</a>
      </li>
      <li>
        <a href="#" @click="navRoute($event, 'Categories')">Menu Items</a>
      </li>
      <li>
        <a href="#" @click="navRoute($event, 'Checkout')">Checkout</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavDrawer",
  props: ["open"],
  data() {
    return {};
  },
  methods: {
    navRoute(event, routeName) {
      event.preventDefault();
      this.$emit("nav-route");
      if (this.$router.currentRoute.name !== routeName) {
        this.$router.push({ name: routeName });
      }
    },
  },
  watch: {
    open: function (value) {
      if (value) {
        document.getElementById("drawer").classList.add("open");
      } else {
        document.getElementById("drawer").classList.remove("open");
      }
    },
  },
};
</script>

<style>
.navigation-links {
  margin-top: 1rem;
  list-style: none;
}
.navigation-links li {
  margin-bottom: 1rem;
}
.navigation-links a {
  font-weight: bold;
}
</style>