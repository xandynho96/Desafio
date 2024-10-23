<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import Button from "./Button.vue";

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
    Button,
  },
  name: "Card",
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  setup(props) {
    const flip = ref<boolean>(false);
    const isFavorite = ref<boolean>(false);

    // Verificar se o card já está favoritado no local storage
    const checkFavorite = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      isFavorite.value = favorites.includes(props.product.id);
    };

    const toggleFavorite = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      if (isFavorite.value) {
        const index = favorites.indexOf(props.product.id);
        if (index > -1) favorites.splice(index, 1);
      } else {
        favorites.push(props.product.id);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      isFavorite.value = !isFavorite.value;
    };

    const formattedPrice = computed(() => {
      return Number(props.product.price).toFixed(2);
    });

    const viewDetail = () => {
      flip.value = !flip.value;
    };

    watch(
      () => props.product.id,
      () => {
        checkFavorite();
      },
      { immediate: true }
    );

    return {
      formattedPrice,
      viewDetail,
      flip,
      isFavorite,
      toggleFavorite,
    };
  },
});
</script>

<template>
  <div :style="{ transform: flip ? 'rotateY(180deg)' : 'none' }">
    <article class="front">
      <button
        class="favorite"
        :class="{ active: isFavorite }"
        @click="toggleFavorite"
      >
        <span v-if="isFavorite">★</span>
        <span v-else>★</span>
      </button>
      <img :src="product.image" :alt="product.name" />
      <span>
        <strong>{{ product.name }}</strong>
        <p>
          Proporção: Café {{ product.proportion.coffee }}% | Leite
          {{ product.proportion.milk }}%
        </p>
        <b>Preço: R$ {{ formattedPrice }}</b>

        <Button @click="viewDetail">Ver Detalhes</Button>
      </span>
    </article>

    <article class="back">
      <span>
        <strong>{{ product.name }}</strong>
        <p>{{ product.description }}</p>
        <Button @click="viewDetail">X</Button>
      </span>
    </article>
  </div>
</template>

<style scoped>
div {
  height: 400px;
  width: 280px;
  display: flex;
  flex-direction: column;

  position: relative;
  top: 0;
  left: 0;

  transform-style: preserve-3d;
  transition: all 0.4s ease;
}

.front {
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 9px;

  overflow: hidden;
  backface-visibility: hidden;
}

.back {
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  gap: 28px;

  text-align: center;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 9px;

  overflow: hidden;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}

.back span {
  height: 355px;
  border-radius: 9px;
}

.favorite {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: gray;
  transition: color 0.3s;
}

.favorite.active {
  color: gold;
}

.favorite span {
  background: none;
  border: none;
  padding: 0;
}

img {
  width: 100%;
  height: 222px;
  object-fit: cover;
  object-position: center;
}

span {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  position: relative;

  border-top: 0;
  border: 1px solid rgba(249, 192, 106, 0.42);
  border-radius: 0 0 9px 9px;
  padding: 14px 14px 42px;

  background: var(--white-300);
}

strong,
b {
  font-weight: 700;
  color: var(--brown-600);
}

strong {
  font-size: 18px;
}

b {
  font-size: 16px;
}

p {
  font-weight: 400;
  font-size: 14px;
  color: var(--gray-900);
}

span button {
  position: absolute;
  bottom: -22.5px;
}

@media (min-width: 768px) {
  .back span {
    height: 365px;
  }

  strong {
    font-size: 20px;
  }

  b {
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .back span {
    height: 370px;
  }

  strong {
    font-size: 22px;
  }

  b {
    font-size: 20px;
  }
}
</style>
