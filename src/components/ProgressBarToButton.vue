<template>
  <div :style="computedStyle">
    <div class="progress" :style="`width:100%;position:absolute;left:0;height:50%;top:25%;z-index:15;`">
      <div
        class="progress-bar"
        role="progressbar"
        :style="`width: ${this.counter}%; background-color:${this.color};`"
      ></div>
    </div>
    <button
      :disabled="counter<100"
      type="button"
      class="btn btn-primary btn-lg"
      v-on:click="$emit('click')"
      :style="`font-size: calc(5px + 1vw); font-weight: bold; background-color:${this.color};border-color:${this.color};z-index:100;position:relative;`"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "ProgressBarToButton",
  components: {},
  props: ["color", "top", "left", "right", "counter", "width", "height"],
  computed: {
    computedStyle() {
      return {
        position: "absolute",
        top: this.top,
        left: this.left,
        right: this.right,
        width: this.width,
        "text-align": "right",
      };
    },
  },
};
</script>

<style>
</style>

