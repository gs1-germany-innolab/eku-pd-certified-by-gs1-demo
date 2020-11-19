<template>
  <div style="text-align:right;position:relative">
    <div class="progress" :style="`width:100%;position:absolute;left:0;height:100%;top:0;z-index:15; border-style: none; border-radius: 0;`">
      <div
        class="progress-bar"
        role="progressbar"
        :style="`height:100%; width: ${Math.min(this.counter,100)}%; background-color:${this.color}; position:absolute; left:0; border-style: none; border-radius: 0;`"
      ></div>
    </div>
    <button
      :disabled="counter<100"
      type="button"
      class="btn btn-primary btn-lg"
      v-on:click="$emit('click')"
      :style="`font-size: calc(5px + 1vw); font-weight: bold; background-color:${this.color};border-color:${this.color};z-index:100;position:relative;width:100%;height:100%;border-style: none; border-radius: 0;`"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "ProgressBarToButton",
  components: {},
  props: ["color", "counter"],
};
</script>

<style>
</style>

