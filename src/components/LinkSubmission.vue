<template>
  <v-form ref="form" class="form-link" v-model="valid" lazy-validation>
    <v-alert :value="isError" type="error"> Server Error </v-alert>
    <v-text-field
      v-model="link"
      label="Link Url"
      :rules="linkRules"
      required
    ></v-text-field>
    <v-btn :class="{ red: !valid, green: valid }" @click="submit">
      submit
    </v-btn>
  </v-form>
</template>
<script>
const apiUrl = process.env.VUE_APP_APISERVER;
export default {
  name: "LinkSubmission",
  data() {
    return {
      valid: true,
      isError: false,
      link: "",
      linkRules: [
        v => !!v || "Link Required",
        v => /https:\/\/fabelio.com/.test(v) || "Link must from fabelio only"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.axios
          .post(`${apiUrl}/LinkSubmission`, { url: this.link })
          .then(doc => {
            if (!doc) {
              this.isError = true;
            }
            let id = doc.data.product._id;
            this.$router.push({ name: "detail", params: { id } });
          });
      }
    }
  }
};
</script>

<style csoped>
.form-link {
  width: 50%;
  margin: auto;
}
</style>
