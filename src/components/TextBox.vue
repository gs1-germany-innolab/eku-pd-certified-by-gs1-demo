
<template>
  <div :style="{position:`absolute`, left: left, top: top, width:width, height:height}">
    <div v-if="show" @click="toggle">
      <div class="dtl" :style="computedStyle">
        <slot></slot>
      </div>
    </div>
    <div v-if="!show" @click="toggle">
      <img src="@/assets/questionMark.png" alt="QuestionMark" width="200px" />
    </div>
  </div>
</template>
<script>
export default {
  name: "TextBox",
  components: {},
  props: ["width", "height", "color", "top", "left"],
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
.dtl {
  position: relative;
  left: 0px;
  top:0px;
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
