<script lang="ts">
import IsButton from "@/components/IsButton.vue";
export default {
  components: {
    IsButton,
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a href="#" class="logo">
          <img
            src="./../assets/images/logo.svg"
            alt="Логотип"
            width="218px"
            height="50px"
          />
        </a>
        <is-button></is-button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
  }
}
</style>