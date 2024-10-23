<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Card from "./Card.vue";

interface IProducts {}

interface Proportion {
  coffee: number;
  milk: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  proportion: Proportion;
}

export default defineComponent({
  components: {
    Card,
  },
  name: "Products",
 
  setup() {
    const products = ref<Product[]>([]);
    const search = ref<string>("");
    const loading = ref<boolean>(true);

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/products`
        );
        if (!response.ok) throw new Error("Falha ao buscar produtos");
        const data = await response.json();

        products.value = data.map((product: Product) => ({
          ...product,
          price: Number(product.price),
        }));
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        loading.value = false;
      }
    };

    const filteredProducts = computed(() =>
      products.value.filter((product) =>
        product.name.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    const trackSearch = () => {
      console.log("Usuário está buscando:", search.value);
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      search,
      filteredProducts,
      loading,
      trackSearch,
    };
  },
});
</script>

<template>
  <section>
    <span>
      <h2>Enjoy a new blend of coffee style</h2>
      <p>
        Explore all flavours of coffee with us. There is always a new cup worth
        experiencing
      </p>
    </span>

    <div class="wrapper">
      <Card
        v-for="(product, index) in filteredProducts"
        :key="index"
        :product="product"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  padding: 40px 35px;
}

span {
  display: grid;
  gap: 16px;

  text-align: center;
}

h2 {
  font-weight: 700;
  font-size: 32px;

  color: var(--brown-600);
}

p {
  font-weight: 400;
  font-size: 16px;

  color: var(--gray-200);
}

.wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px 20px;
}

@media (min-width: 768px) {
  section {
    gap: 32px;

    padding: 60px 65px;
  }

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  section {
    padding: 93px 82px;
  }

  h2 {
    font-size: 54px;
  }

  p {
    font-size: 20px;
  }
}
</style>
