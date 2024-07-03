import KComponent from '../shared/component';

KComponent({
  properties: {
    kId: String,

    style: String,

    open: Boolean,

    options: {
      type: Array,
      value: [],
    },

    title: String,

    subTitle: String,

    cancelText: String,

    overlay: {
      type: Boolean,
      value: true,
    },

    overlayClosable: {
      type: Boolean,
      value: true,
    },

    zIndex: {
      type: Number,
      value: 11000,
    },
  },

  methods: {
    onSelect(event: WechatMiniprogram.TouchEvent) {
      const { index } = event.currentTarget.dataset;
      const { options } = this.data;
      const item = options[index];

      if (item.disabled) return;
      this.triggerEvent('selected', { selected: item, index });
    },

    onCancel() {
      this.triggerEvent('cancel');
      this.triggerEvent('close');
    },

    onClickOverlay() {
      this.triggerEvent('click-overlay');

      if (this.data.overlayClosable) {
        this.triggerEvent('close');
      }
    },
  },
});
