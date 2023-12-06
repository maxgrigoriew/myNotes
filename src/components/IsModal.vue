<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  emits: ['auth'],
  props: {
    errors: {
      type: Array,
    },
  },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },

      confirmPassword: '',
      modal: '',
      isOpenModal: true,
    };
  },
  computed: mapState({
    isLoginModal: (state) => state.isLoginModal,
  }),
  methods: {
    onClickOutside() {
      this.isOpenModal = false;
      this.changeStatusModal();
      this.changeOpenModal();
    },
    auth() {
      this.$emit('auth', this.login);
    },
    ...mapMutations(['changeStatusModal', 'changeOpenModal']),
  },
};
</script>

<template>
  <transition name="fade">
    <div
      v-if="isOpenModal"
      ref="modal"
      class="modal modal--active"
      v-click-outside="onClickOutside"
    >
      <is-button
        class="modal__close"
        @click="onClickOutside"
        round
        >x</is-button
      >
      <div class="modal__inner">
        <is-text
          v-if="isLoginModal"
          h2
          bold
          class="modal__title"
          >Вход в ваш аккаунт</is-text
        >
        <is-text
          v-else
          h2
          bold
          class="modal__title"
          >Регистрация</is-text
        >
        <div class="modal__inputs">
          <is-input
            v-model="login.email"
            title="Логин"
          />
          <is-input
            v-model="login.password"
            title="Пароль"
          />
          <is-input
            v-if="!isLoginModal"
            type="password"
            v-model="confirmPassword"
            title="Пароль ещё раз"
          />
        </div>
        <div class="modal__bottom-wrapper">
          <div class="modal__bottom-inner">
            <div
              class="modal__bottom-buttons"
              v-if="isLoginModal"
            >
              <is-text
                tag="span"
                h6
                gray
                class="modal__bottom-text"
                >Нет аккаунта?</is-text
              >
              <button
                class="modal__bottom-link"
                @click="changeStatusModal"
              >
                Зарегистрируйтесь
              </button>
            </div>

            <is-button
              class="modal__bottom-btn"
              @click="auth({ email, password })"
              >Войти</is-button
            >
          </div>
          <is-text
            v-if="errors.length"
            h6
            error
            class="modal__bottom-error"
          >
            <span
              v-for="(item, ind) in errors"
              :key="ind"
            >
              {{ item }}.
            </span>
          </is-text>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import '../assets/scss/_vars.scss';

.modal {
  display: none;
  position: fixed;
  max-width: 780px;
  width: 100%;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dark-middle);
  border-radius: 40px;
  padding: 80px;

  &--active {
    display: block;
  }
  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__inputs {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 24px;
  }

  &__bottom {
    &-inner {
      display: flex;
      justify-content: space-between;
    }
    &-buttons {
      display: flex;
      align-items: center;
    }

    &-text {
      margin-right: 4px;
    }

    &-link {
      border: none;
      cursor: pointer;
      background-color: transparent;
      color: var(--green-light);
      font-size: 18px;
      font-weight: 700;
      line-height: 1.55;
      padding: 0;
    }

    &-btn {
      margin-left: auto;
    }

    &-error {
      margin-top: 28px;
      padding: 8px 20px;
      border-radius: 24px;
      background: rgba(255, 116, 97, 0.1);
    }
  }
}

@media (max-width: $desktop) {
  .modal {
    padding: 56px;
    max-width: 594px;

    &__bottom {
      &-inner {
        align-items: center;
      }
      &-buttons {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
}

@media (max-width: $tablet) {
  .modal {
    max-width: var(--container-width);
    left: var(--container-offset);
    right: var(--container-offset);
    transform: translateY(-50%);
    width: auto;

    &__bottom {
      &-inner {
        align-items: center;
      }
      &-buttons {
        flex-direction: row;
        align-items: flex-start;
      }
    }
  }
}

@media (max-width: $mobile) {
  .modal {
    &__inner {
      gap: 28px;
    }
    &__inputs {
      gap: 16px;
    }
    &__bottom {
      &-inner {
        flex-wrap: wrap;
      }
      &-buttons {
        flex-direction: row;
        margin: 12px auto 0;
        order: 2;
      }

      &-link {
        font-size: 14px;
      }

      &-error {
        text-align: center;
      }
    }
  }
}
</style>
