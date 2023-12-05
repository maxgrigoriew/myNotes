<script>
import { mapState, mapActions } from 'vuex';
import IsHeader from '@/components/IsHeader.vue';
import IsModal from '@/components/IsModal.vue';
import { http } from '@/http';
import axios from 'axios';
import AuthServices from '@/servises/AuthServises';

export default {
  components: {
    IsHeader,
    IsModal,
  },
  computed: mapState({
    isOpenModal: (state) => state.isOpenModal,
  }),
  methods: {
    ...mapActions(['auth']),
  },
  mounted() {
    this.auth({ email: 'test@yandex.ru', password: '1234' });
  },
};
</script>

<template>
  <div class="home">
    <IsHeader />
    <IsModal v-if="isOpenModal" />

    <div class="hero">
      <div class="container">
        <div class="hero__inner">
          <div class="hero__content">
            <is-text
              h1
              class="hero__title"
              >Мои заметки</is-text
            >
            <is-text
              tag="p"
              h3
              class="hero__subtitle"
            >
              Не забывай о важном, храни его в облаке.
            </is-text>
          </div>
          <img
            class="hero__img"
            src="./../assets/images/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/_vars.scss';

.hero {
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
  .hero {
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
  .hero {
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
  .hero {
    &__inner {
      padding-top: 20px;
    }
    &__img {
      margin: 0 10px;
    }
  }
}
</style>
