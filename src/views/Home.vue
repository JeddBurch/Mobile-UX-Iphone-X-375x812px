<template>
  <div>
    <div class="resturant-hero position-relative">
      <div id="resturant-showcase"></div>
      <div class="overlay"></div>
      <div class="resturant-logo">
        <div class="thumbnail">
          <img src="/images/mcdonald.png" alt="" width="130" />
        </div>
      </div>
    </div>
    <div id="wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="select-wrapper m-auto">
              <select name="" class="language">
                <option value="English">English</option>
                <option value="Dutch">Dutch</option>
                <option value="Swiss">Swiss</option>
                <option value="Polish">Polish</option>
                <option value="Polish">Hindi</option>
                <option value="Polish">Turkish</option>
                <option value="Polish">chinese</option>
              </select>
            </div>
          </div>
          <!-- right content -->
          <div class="col-md-6">
            <div class="text-center">
              <div class="m-auto restuarant-menu">
                <router-link :to="{name: 'Categories'}"><img src="/images/menu.jpg" alt="" width="200"/></router-link>
              </div>
            </div>
          </div>
          <!--// right content -->

          <!-- left content -->
          <div class="col-md-6">
            <div id="description" class="my-2">
              <div class="mb-2">
                <h4 class="heading-f" style="font-weight:bold">Mc Donald</h4>
                <p class="lh-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit quasi facilis id odio! Molestiae ratione accusantium
                  itaque inventore nisi facilis delectus maxime,
                </p>
              </div>
              <div class="my-2">
                <div class="mb-1">
                  <p>
                    <span class="mr-2"
                      ><i class="fas fa-map-marker-alt"></i></span
                    ><span>Brisbane , Australia</span>
                  </p>

                  <p>
                    <span class="mr-2"><i class="fas fa-phone-alt"></i></span
                    ><span>(911) 22 0011 2222 , 22 0011 2221</span>
                  </p>

                  <p>
                    <span class="mr-2"><i class="fas fa-envelope"></i></span
                    ><span>enquer@mcdonald.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--// left content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
