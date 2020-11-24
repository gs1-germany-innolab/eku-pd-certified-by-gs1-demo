<template>
  <div class="textBox textBoxBorder" :style="computedStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TextBox",
  components: {},
  props: ["width", "color", "top", "left", "right"],
  computed: {
    computedStyle() {
      return {
        width: this.width,
        top: this.top,
        left: this.left,
        right: this.right,
        color: this.color
      };
    },
  },
};
</script>

<style>
.textBox {
  position: absolute;
  border-style: none;
  background-color: rgb(229, 246, 250);
  text-align: center;
}
</style>

