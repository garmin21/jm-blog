<template>
  <el-select
    ref="select"
    v-model="localValue"
    class="el-select-v2"
    :autocomplete="autocomplete"
    :automatic-dropdown="automaticDropdown"
    :size="size"
    :disabled="disabled"
    :clearable="clearable"
    :filterable="filterable"
    :allow-create="allowCreate"
    :loading="loading"
    :popper-class="`el-select-v2__popper ${popperClass || ''}`"
    :remote="remote"
    :loading-text="loadingText"
    :no-match-text="noMatchText"
    :no-data-text="noDataText"
    :remote-method="remoteMethod"
    :filter-method="filterMethod || localFilterMethod"
    :multiple="multiple"
    :multiple-limit="multipleLimit"
    :placeholder="placeholder"
    :default-first-option="defaultFirstOption"
    :reserve-keyword="reserveKeyword"
    :collapse-tags="collapseTags"
    :popper-append-to-body="popperAppendToBody"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot name="header" />
    <RecycleScroller
      v-if="localOptions.length"
      ref="scroller"
      v-slot="{ item }"
      class="scroller"
      :style="scrollerStyle"
      :items="localOptions"
      :min-item-size="minItemSize"
      :key-field="valueKey"
      @visible="handleScrollerVisible"
    >
      <!-- <el-option
        :key="item[valueKey]"
        :value="item[valueKey]"
        :label="item[labelKey]"
        :disabled="item.disabled"
      >
        <slot name="default" :item="item" />
      </el-option> -->
      <slot name="default" :item="item" />
    </RecycleScroller>
    <template v-if="$slots.prefix" slot="prefix">
      <slot name="prefix" />
    </template>
    <template v-if="$slots.empty" slot="empty">
      <slot name="empty" />
    </template>
  </el-select>
</template>

<script>
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import isEqual from "lodash/isEqual";

export default {
  name: "ElSelectV2Plus",
  components: {
    RecycleScroller,
  },
  props: {
    value: {
      type: [Array, String, Number, Boolean, Object],
      default: undefined,
    },
    options: {
      type: Array,
      default: () => [],
    },
    valueKey: {
      type: String,
      default: "value",
    },
    labelKey: {
      type: String,
      default: "label",
    },
    autocomplete: {
      type: String,
      default: "off",
    },
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
      required: false,
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    minItemSize: {
      type: Number,
      default: 34,
    },
    fitInputWidth: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      localValue: "",
      localOptions: [],
      dropdownWidth: "",
    };
  },
  mounted() {
    this.updateSelectedLabel();
    if (this.$refs.select) {
      this.$watch(
        () => this.$refs.select.visible,
        (value) => {
          if (value) {
            this.updateOptions();
          }
        }
      );
    }
  },
  methods: {
    updateSelectedLabel() {
      if (!this.$refs.select) {
        return;
      }
      const { setSelected, cachedOptions } = this.$refs.select;
      const values = this.multiple ? this.localValue : [this.localValue];
      const selectedOptions = this.options.filter(option => values.includes(option[this.valueKey])).map(option => ({
        value: option[this.valueKey],
        currentLabel: option[this.labelKey],
      }));
      selectedOptions.forEach(option => {
        const cachedOption = cachedOptions.find(cachedOption => cachedOption.value === option.value);
        if (cachedOption) {
          cachedOptions.splice(cachedOptions.indexOf(cachedOption), 1, option);
        } else {
          cachedOptions.push(option);
        }
      });
      setSelected();
    },
    handleScrollerVisible() {
      const localValue  = Array.isArray(this.localValue) ? this.localValue[0] : '' 
      const firstValue = this.multiple ? localValue : this.localValue;
      const index = this.localOptions.findIndex(option => option[this.valueKey] === firstValue);
      this.$refs.scroller.scrollToItem(index);
    },
    localFilterMethod(query) {
      this.localOptions = this.options.filter((option) => option[this.labelKey].toLowerCase().includes(query.toLowerCase())
      );
    },
    updateOptions() {
      this.localOptions = this.options;
    },
    async updateDropdownWidth() {
      if (!this.$refs.select.$refs.popper || this.fitInputWidth) {
        return;
      }
      const { inputWidth } = this.$refs.select;
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      await this.$nextTick();
      const itemEl = this.$refs.select.$refs.popper.$el.querySelector(
        ".el-select-dropdown__item"
      );
      if (!itemEl) {
        return;
      }
      const style = getComputedStyle(itemEl);
      const padding =
        parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      const scrollWidth = 6;
      ctx.font = style.font;
      let width = 0;
      this.localOptions.forEach((option) => {
        const metrics = ctx.measureText(option[this.labelKey]);
        width = Math.max(metrics.width, width);
      });
      this.dropdownWidth = Math.max(
        width + padding + scrollWidth,
        inputWidth - 2
      );
    },
    focus() {
      this.$refs.select.focus();
    },
    blur() {
      this.$refs.select.blur();
    },
  },
  computed: {
    scrollerStyle() {
      return {
        width: this.dropdownWidth ? `${this.dropdownWidth}px` : "",
      };
    },
  },
  watch: {
    value: {
      handler() {
        if (!isEqual(this.value, this.localValue)) {
          this.localValue = this.value;
          this.updateSelectedLabel();
        }
      },
      deep: true,
      immediate: true,
    },
    options: {
      handler() {
        this.updateOptions();
        const inputs = this.$el.querySelectorAll("input");
        if ([].indexOf.call(inputs, document.activeElement) === -1) {
          this.updateSelectedLabel();
        }
      },
      deep: true,
    },
    localOptions() {
      this.updateDropdownWidth();
    },
  },
};
</script>

<style lang="less">
.el-select-v2__popper {
  .scroller {
    max-height: 238px;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(144, 147, 153, 0.3);

      &:hover {
        background-color: rgba(144, 147, 153, 0.5);
      }
    }
  }

  .el-scrollbar__bar {
    display: none;
  }
}
</style>
