export { default as Test } from '../../components/Test.vue'
export { default as CDetailContentsSection } from '../../components/c-detailContentsSection/c-detailContentsSection.vue'
export { default as CTopBtnSection01 } from '../../components/c-topBtnSection01/c-topBtnSection01.vue'
export { default as CTopBtnSection01Button01 } from '../../components/c-topBtnSection01/c-topBtnSection01_button01.vue'
export { default as CTopBottomBlock01 } from '../../components/c-topBottomBlock01/c-topBottomBlock01.vue'
export { default as CTopBottomBlock01Canvas01 } from '../../components/c-topBottomBlock01/c-topBottomBlock01_canvas01.vue'
export { default as CDetailExplanationSection } from '../../components/c-detailExplanationSection/c-detailExplanationSection.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
