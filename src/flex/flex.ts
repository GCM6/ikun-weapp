import KComponent from '../common/component';

KComponent({
  properties: {
    kId: String,

    style: String,

    vertical: Boolean,

    wrap: {
      type: Boolean,
      optionalTypes: [String],
    },

    justify: String,

    align: String,

    gap: {
      type: String,
      optionalTypes: [Number],
    },
  },
});
