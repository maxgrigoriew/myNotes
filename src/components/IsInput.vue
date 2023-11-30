<script>
import { ref, defineComponent } from 'vue';

export default {
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      default: 'Введите значение',
    },
  },

  data() {
    return {
      isVisiblePassword: false,
    };
  },
  methods: {
    changeVisiblePassword() {
      this.isVisiblePassword = !this.isVisiblePassword;
    },
  },
};
</script>
<template>
  <div class="input">
    <label class="input__label">
      <span class="input__title"> {{ title }}</span>
      <input
        :type="[type === 'text' || isVisiblePassword ? 'text' : 'password']"
        class="input__text"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </label>
    <button
      v-if="type === 'password'"
      @click="changeVisiblePassword"
      class="input__icon"
    >
      <img
        v-if="isVisiblePassword"
        src="../assets/images/icon-visible.svg"
        alt=""
      />
      <img
        v-else
        src="../assets/images/icon-hide.svg"
        alt=""
      />
    </button>
  </div>
</template>
<style lang="scss">
.input {
  position: relative;
  width: 100%;
  &__label {
    display: block;
  }
  &__title {
    display: inline-block;
    padding-left: 24px;
    color: var(--gray);
    margin-bottom: 8px;
  }
  &__text {
    background: var(--white);
    width: 100%;
    height: 72px;
    padding: 0 56px 0 30px;
    border-radius: 36px;
    border: 2px solid transparent;
    transition: border var(--transition);

    &::placeholder {
      color: var(--gray);
      font-size: 18px;
      line-height: 1.55;
    }
    &:focus {
      border: 2px solid var(--green-light);
    }
    &:hover {
      border: 2px solid var(--green-light);
    }
  }

  &__icon {
    padding: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
    position: absolute;
    right: 26px;
    bottom: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    img {
      width: 18px;
      height: 14px;
    }
  }
}
</style>
