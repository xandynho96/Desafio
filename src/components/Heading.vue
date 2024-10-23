<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

interface IHeading {}

export default defineComponent({
  components: {
    Button,
  },
  name: "Heading",
  props: {
    product: {
      type: Object as () => IHeading,
      required: true,
    },
  },
});
</script>

<template>
  <section>
    <div>
      <span>
        <b>We’ve got your morning covered with</b>
        <h1>Coffee</h1>
        <p>
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
      </span>

      <Button>Order Now</Button>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 580px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 35px;

  background: url("../assets/heading_bg.svg") top left / cover no-repeat;
}

div {
  width: min(100%, 527px);
  display: grid;
  gap: 20px;
}

h1,
b,
p {
  color: var(--white-100);
  text-shadow: 0px 0px 40px rgba(0, 0, 0, 0.35);
}

h1 {
  font-family: "Clicker Script", sans-serif;
  font-weight: 400;
  font-size: 130px;
}

b {
  font-weight: 500;
  font-size: 18px;
}

p {
  font-weight: 400;
  font-size: 16px;
}

@media (min-width: 768px) {
  section {
    height: 768px;

    justify-content: flex-start;

    padding: 0 65px;
  }

  h1 {
    font-size: 220px;
  }

  b {
    font-size: 22px;
  }

  p {
    font-size: 20px;
  }
}

@media (min-width: 1024px) {
  section {
    padding: 0 93px;

    background-position: top center;
  }
}
</style>
