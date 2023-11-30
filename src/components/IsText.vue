<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    error: {
      type: Boolean,
      default: false,
    },
    white: {
      type: Boolean,
      default: true,
    },
    'green-light': {
      type: Boolean,
      default: false,
    },
    gray: {
      type: Boolean,
      default: false,
    },
    h1: {
      type: Boolean,
      default: false,
    },
    h2: {
      type: Boolean,
      default: false,
    },
    h3: {
      type: Boolean,
      default: false,
    },
    h4: {
      type: Boolean,
      default: false,
    },
    h5: {
      type: Boolean,
      default: false,
    },
    h6: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    classObject() {
      return {
        red: this.color,
        error: this.error,
        white: this.white,
        gray: this.gray,
        'green-light': this.greenLight,
        h1: this.h1,
        h2: this.h2,
        h3: this.h3,
        h4: this.h4,
        h5: this.h5,
        h6: this.h6,
        bold: this.bold,
      };
    },
  },
};
</script>

<template>
  <component
    :is="tag"
    :class="classObject"
  >
    <slot />
  </component>
</template>

<style lang="scss">
@import '../assets/scss/_vars.scss';
.h1 {
  color: var(--white);
  font-size: 104px;
  font-weight: 900;
  line-height: 1;
}

.h2 {
  color: var(--white);
  font-size: 48px;
  font-weight: 600;
  line-height: 1.5;
}

.h3 {
  color: var(--white);
  font-size: 32px;
  font-weight: 400;
  line-height: 1.5;
}

.h4 {
  color: var(--white);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

.h5 {
  color: var(--white);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
}

.h6 {
  color: var(--white);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.55;
}

.bold {
  font-weight: 700;
}

.white {
  color: var(--white);
}
.error {
  color: var(--orange);
}
.gray {
  color: var(--gray);
}
.green-light {
  color: var(--green-light);
}

@media (max-width: $mobile) {
  .h2 {
    font-size: 32px;
  }
  .h6 {
    font-size: 14px;
  }
}
// @media ((max-width: $laptop) and (min-width: calc($tablet-large + 1px))) {
//   .heading-h1 {
//     font-size: 80px;
//   }

//   .heading-h3 {
//     font-size: 24px;
//   }
// }

// @media (max-width: $mobile) {
//   .heading-h1 {
//     font-size: 60px;
//   }

//   .heading-h3 {
//     font-size: 24px;
//   }
// }
</style>
