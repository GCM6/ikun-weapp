import KComponent from '../shared/component';

KComponent({
  externalClasses: ['hover-class', 'title-class', 'label-class', 'value-class'],

  properties: {
    kId: String,

    style: String,

    title: String,

    label: String,

    value: String,

    size: String,

    center: Boolean,

    border: {
      type: Boolean,
      value: true,
    },

    icon: String,

    arrow: Boolean,

    clickable: Boolean,

    url: String,

    openType: {
      type: String,
      value: 'navigateTo',
    },

    ariaRole: String,

    ariaLabel: String,
  },

  methods: {
    onTap(event: WechatMiniprogram.TouchEvent) {
      this.triggerEvent('click', event);
      this.navigate();
    },

    navigate() {
      const { url, openType } = this.data;

      if (url) {
        (wx as any)[openType]({ url });
      }
    },
  },
});
