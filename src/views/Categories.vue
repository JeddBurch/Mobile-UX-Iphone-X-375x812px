<template>
  <categories-items :categories="categories" @search="searchCategory"></categories-items>
</template>

<script>
import CategoriesItems from "./CategoriesItems.vue";

export default {
  name: "Categories",
  components: {
    CategoriesItems,
  },
  data() {
    return {
      categories: [],
      menu_items: [],
    };
  },
  created() {
    this.getCatgories()
  },
  methods: {
    async getCatgories() {
      // fetch your categories
      this.$http.get("/category.json").then((res) => {
          this.categories = res.data
          this.menu_items = res.data
      });
    },
    searchCategory(field){
      this.categories = this.menu_items.filter(i => i.name.includes(field));
    }
  },
};
</script>

<style>
</style>