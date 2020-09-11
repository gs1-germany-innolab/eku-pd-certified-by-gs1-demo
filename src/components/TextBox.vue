<template>
  <div class="textBox textBoxBorder" :style="computedStyle">
    <div class="innerTextBox textBoxBorder" :style="`border-color: ${this.color}; background: ${this.color}; border-color: ${this.color};`">
      <slot></slot>
    </div>
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
        background: `repeating-linear-gradient(-45deg, transparent, transparent 1px, ${this.color} 2px, ${this.color} 5px)`,
      };
    },
  },
};
</script>

<style>
.textBoxBorder{
    border-style: groove;
  border-width: 3px;
  border-radius: 2vw;

}
.innerTextBox {
  width: 96%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  display: inline-block;
}
.textBox {
  position: absolute;
  
  font-size: calc(4px + 2vw);
  color: black;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
}
</style>

