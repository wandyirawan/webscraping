<template>
  <v-data-table :headers="headers" :items="products" class="elevation-1">
    <template slot="items" slot-scope="props">
      <td>
        <router-link :to="{ name: 'detail', params: { id: props.item._id } }">
          {{ props.item.title }}
        </router-link>
      </td>
      <td>{{ props.item.price }}</td>
    </template>
  </v-data-table>
</template>

<script>
const apiUrl = process.env.VUE_APP_APISERVER;
export default {
  name: "ListSubmission",
  data() {
    return {
      headers: [
        {
          text: "Product Name",
          value: "title"
        },
        { text: "Price", value: "price" }
      ],
      products: []
    };
  },
  mounted() {
    this.axios.get(`${apiUrl}/linksubmission`).then(doc => {
      console.log(doc);
      this.products = doc.data.product;
    });
  }
};
</script>
