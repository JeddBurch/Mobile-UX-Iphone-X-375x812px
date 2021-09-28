<template>
  <div class="mini-cart col-md-12">
    <div class="row">
      <div class="col-md-12 my-1">
        <h3 class="heading-f">Mini Cart</h3>
      </div>
      <div class="cart-items">
        <div class="col-md-12">
          <!-- row -->
          <div class="row">
            <div class="col-8">
              <img src="images/Pizza-Transparent.png" alt="" width="50" />
              <div class="ml-2">
                <h5>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore, explicabo. Iste minus amet consectetur porro et
                  aspernatur animi voluptate nemo totam exercitationem quam
                  reprehenderit voluptas a ipsum, modi praesentium dolorem.
                </h5>
                <p><span class="fs-1 font-weight-bold">$200.00</span></p>
              </div>
            </div>
            <div class="col-4 d-flex align-items-center justify-content-end">
              <a href="#" class="plus_btn"><i class="fas fa-plus"></i></a>
              <input type="text" value="1" class="item-input" />
              <a href="#" class="minus_btn"><i class="fas fa-minus"></i></a>
            </div>
          </div>
          <!--// row -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart",
};
</script>

<style>
</style>