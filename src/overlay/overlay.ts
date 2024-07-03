import KComponent from '../shared/component';
import transition from '../mixins/transition';

KComponent({
  properties: {
    kId: String,

    style: String,

    zIndex: {
      type: Number,
      value: 11000,
    },

    lockScroll: {
      type: Boolean,
      value: true,
    },

    ariaRole: String,

    ariaLabel: String,
  },

  behaviors: [transition({ visibleProperty: 'open', name: 'fade' })],

  methods: {
    onTap() {
      this.triggerEvent('click', { open: !this.data.open });
    },

    noop() {},
  },
});
