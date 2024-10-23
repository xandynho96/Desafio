<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./Heading.vue";
import Products from "./Products.vue";

export default defineComponent({
  components: {
    Heading,
    Products,
  },
});
</script>

<template>
  <Heading />
  <Products />
</template>

 