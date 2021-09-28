<template>
  <div id="wrapper">
    <div class="container">
      <div id="search" class="my-1">
        <form action="">
          <div class="form-group">
            <div class="input-group mb-3">
              <input
                type="text"
                name="search"
                id="search"
                class="search"
                placeholder="Search items you are looking for..."
              />
              <div class="input-group-append">
                <button class="btn bg-primary text-white">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- menu list -->
      <div id="menu-list">
        <div
          class="
            menu-list-item
            d-flex
            align-items-center
            justify-content-between
          "
        >
          <div class="d-flex align-items-center">
            <div>
              <img src="images/Pizza-Transparent.png" alt="" width="50" />
            </div>
            <div class="ml-2">
              <div>
                <strong>Pizza</strong>
              </div>
              <div>
                <span class="fs-1 font-weight-bold">$200.00</span>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column align-items-end">
            <a href="#" class="text-black"><i class="fas fa-shopping-cart fa-2x"></i></a>
          </div>
        </div>
      </div><!--// menu list -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
</style>