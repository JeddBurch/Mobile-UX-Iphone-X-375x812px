<template>
  <div id="wrapper">
    <div class="container">
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
      <!-- begin:MenuList -->
      <div id="menu-list" v-if="categories.length">
        <!-- begin:MenuListItem -->

        <div
          class="menu-list-item"
          v-for="(item, index) in categories"
          v-bind:key="index"
        >
          <router-link :to="{name: 'menu-item', params: { id: item.id }}">
            <div class="d-flex align-items-center justify-content-between">
              <!-- begin:LeftDiv -->
              <div class="d-flex align-items-center">
                <div>
                  <img :src="item.image" alt="" width="55"/>
                </div>
                <div class="ml-2">
                  <div>{{item.name}}</div>
                </div>
              </div>
              <!-- end:LeftDiv -->
              <!-- begin:RightDiv -->
              <div>
                <span class="mr-2"><i class="fas fa-plus fa-lg"></i></span>
              </div>
              <!-- end:RightDiv -->
            </div>
          </router-link>
        </div>
        <!-- end:MenuListItem -->
      </div>
      <!-- end:MenuList -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesItems",
  props: ["categories"],
  data(){
    return {
      search_field: ''
    }
  },
  methods: {
    search(){
      this.$emit('search', this.search_field);
    }
  }
};
</script>

<style>
</style>