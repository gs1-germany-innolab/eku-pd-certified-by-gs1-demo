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

  padding: 1vw 0;

  font-size: calc(5px + 2vw);
  color: black;

  border-style: groove;
  border-width: 3px;
  border-radius: 2vw;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
}
</style>
