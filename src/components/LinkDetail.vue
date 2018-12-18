<template>
  <div class="product-wrapper">
    <h1>{{ product.title }}</h1>
    <h3>{{ product.subtitle }}</h3>
    <h5>{{ product.price }}</h5>
    <span v-html="product.description"></span>
  </div>
</template>

<script>
const apiUrl = process.env.VUE_APP_APISERVER;
export default {
  name: "LinkDetail",
  data() {
    return {
      product: {
        title: "",
        subtitle: "",
        description: "",
        price: ""
      }
    };
  },
  mounted() {
    let { id } = this.$route.params;
    this.axios.get(`${apiUrl}/linksubmission/${id}`).then(doc => {
      console.log(doc);
      this.product = doc.data.product;
    });
  }
};
</script>

<style csoped>
.product-wrapper {
  width: 50%;
  margin: auto;
}
</style>
