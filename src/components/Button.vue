<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Button",
});
</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  width: fit-content;

  padding: 12px 20px;
  border-radius: 24px;

  font-weight: 700;
  font-size: 14px;

  cursor: pointer;

  font-family: "Playfair Display", sans-serif;

  color: var(--gray-900);
  background: var(--brown-200);

  transition: all 0.3s;
}

button:hover {
  filter: brightness(1.05);
  box-shadow: 0px 6px 12px 0px rgba(249, 192, 106, 0.22);
}

@media (min-width: 768px) {
  button {
    padding: 14px 24px;

    font-size: 16px;
  }
}
</style>
