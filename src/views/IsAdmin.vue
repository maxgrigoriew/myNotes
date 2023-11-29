
<script>
import IsHeader from "@/components/IsHeader.vue";
import IsModal from "@/components/IsModal.vue";

export default {
  components: {
    IsHeader,
    IsModal,
  },
};
</script>


<template>
  <div class="home">
    <IsHeader />
    <!-- <IsModal /> -->

    <div class="admin">
      <div class="container">
        <div class="admin__inner">
          <div class="admin__content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_vars.scss";

.admin {
  --content-width: 488px;

  margin-top: var(--header-height);
  &__inner {
    position: relative;
    min-height: calc(100vh - var(--header-height));

    display: flex;
    justify-content: space-between;
  }

  &__content {
    max-width: var(--content-width);
    gap: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &__title {
    max-width: var(--content-width);
  }
  &__subtitle {
    color: var(--gray) !important;
    max-width: 394px;
  }

  &__img {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    object-fit: contain;
    object-position: bottom right;
    padding-left: calc(var(--content-width) + 70px);
  }
}

@media ((max-width: $laptop) and (min-width: calc($tablet-large + 1px))) {
  .admin {
    --content-width: 380px;
    &__title {
      font-size: 80px;
    }

    &__subtitle {
      font-size: 24px;
      line-height: 32px;
    }

    &__img {
      padding-left: calc(var(--content-width) + 20px);
    }
  }
}

@media ((max-width: $tablet-large)) {
  .admin {
    &__inner {
      flex-direction: column;
    }

    &__inner {
      padding-top: 40px;
    }
    &__content {
      max-width: 100%;
      align-items: center;
      text-align: center;
      gap: 20px;
    }

    &__subtitle {
      max-width: 100%;
    }

    &__img {
      position: static;
      padding-left: 0;
      margin: 0 70px;
    }
  }
}

@media ((max-width: $mobile)) {
  .admin {
    &__inner {
      padding-top: 20px;
    }
    &__img {
      margin: 0 10px;
    }
  }
}
</style>
