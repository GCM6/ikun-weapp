import KComponent from '../shared/component';
import transition from '../mixins/transition';

KComponent({
  properties: {
    kId: String,

    style: String,

    placement: {
      type: String,
      value: 'center',
      observer: 'observePlacement',
    },

    overlay: {
      type: Boolean,
      value: true,
    },

    overlayClosable: {
      type: Boolean,
      value: true,
    },

    shape: String,

    closable: Boolean,

    zIndex: {
      type: Number,
      value: 11000,
    },

    lockScroll: {
      type: Boolean,
      value: true,
    },
  },

  behaviors: [transition({ visibleProperty: 'open' })],

  lifetimes: {
    created() {
      this.observePlacement();
    },
  },

  methods: {
    onClickOverlay() {
      this.triggerEvent('click-overlay');

      if (this.data.overlayClosable) {
        this.triggerEvent('close');
      }
    },

    onClickClose() {
      this.triggerEvent('close');
    },

    observePlacement() {
      const { placement } = this.data;

      this.setData({ name: placement });
    },
  },
});
