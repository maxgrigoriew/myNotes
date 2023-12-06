<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import IsButton from '@/components/IsButton.vue';
export default {
  components: {
    IsButton,
  },
  computed: mapState({
    isLoginModal: (state) => state.isLoginModal,
  }),
  methods: { ...mapMutations(['changeOpenModal']), ...mapActions(['logout']) },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a
          href="#"
          class="header__logo"
        >
          <img
            src="./../assets/images/logo.svg"
            alt="Логотип"
            width="218px"
            height="50px"
          />
        </a>
        <is-button
          tag="a"
          @click="
            {
              $store.state.isAuth
                ? $router.push('/admin')
                : $store.commit('changeOpenModal');
            }
          "
          v-if="$route.name === 'home'"
          >Войти</is-button
        >

        <is-button
          v-if="$route.name === 'admin'"
          @click="logout"
          >выйти</is-button
        >
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '../assets/scss/_vars.scss';
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
