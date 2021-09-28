<template>
  <div>
    <div class="resturant-hero position-relative">
      <div id="resturant-showcase">
        <div class="overlay"></div>
        <div class="resturant-logo">
          <div class="thumbnail">
            <img
              src="/images/mcdonald.png"
              alt=""
              width="130"
              height="130"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="wrapper" class="my-5">
      <div class="container">
        <div id="description" class="my-2">
          <div class="mb-2">
            <strong class="font-weight-bold">Description</strong>
          </div>
          <div>
            <p class="lh-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quasi facilis id odio! Molestiae ratione accusantium itaque
              inventore nisi facilis delectus maxime,
            </p>
          </div>
        </div>
        <div class="my-4">
          <div class="mb-1">
            <span class="mx-1"><i class="fas fa-map-marker-alt"></i></span
            ><span>Brisbane , Australia</span>
          </div>
          <div class="mb-1">
            <span class="mx-1"><i class="fas fa-phone-alt"></i></span
            ><span>(911) 22 0011 2222 , 22 0011 2221</span>
          </div>

          <div class="mb-1">
            <span class="mx-1"><i class="fas fa-envelope"></i></span
            ><span>enquer@mcdonald.com</span>
          </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
