<script>
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
        <a href="#" class="header__logo">
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
@import "../assets/scss/_vars.scss";
.header {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  right: 0;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark);
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: $mobile) {
  .header {
    &__logo {
      width: 154px;
    }
  }
}
</style>