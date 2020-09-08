<template>
  <div class="textBox" :style="computedStyle">
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
        "border-color": this.color,
        top: this.top,
        left: this.left,
        right: this.right,
        background: `repeating-linear-gradient(-45deg, transparent, transparent 3px, ${this.color} 3px, ${this.color} 5px)`,
      };
    },
  },
};
</script>

<style>
.textBox {
  position: absolute;

  padding: 7px 0;

  font-size: 40px;
  color: black;

  border-style: groove;
  border-width: 3px;
  border-radius: 50px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
}
</style>
