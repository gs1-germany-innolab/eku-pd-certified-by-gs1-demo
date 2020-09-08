
<template>
  <ShowHideBox :top="top" :left="left" :right="right" :width="width" height="auto" show="true">
    <div class="textBox" :style="computedStyle">
      <slot></slot>
    </div>
  </ShowHideBox>
</template>
<script>
import ShowHideBox from "./ShowHideBox.vue";

export default {
  name: "TextBox",
  components: { ShowHideBox },
  props: ["width", "color", "top", "left", "right"],
  data: function () {
    return {
      show: true,
    };
  },
  computed: {
    computedStyle() {
      return {
        "border-color": this.color,
        background: `repeating-linear-gradient(-45deg, transparent, transparent 3px, ${this.color} 3px, ${this.color} 5px)`,
      };
    },
  },
  methods: {
    toggle: function () {
      this.show = !this.show;
    },
  },
};
</script>

<style>
.textBox {
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;

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
