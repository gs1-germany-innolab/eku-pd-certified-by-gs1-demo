
<template>
  <div :style="{position:`absolute`, left: left, top: top, width: width, height: height}">
    <div v-if="show" @click="toggle">
      <slot></slot>
    </div>
    <div v-if="!show" @click="toggle">
      <img src="@/assets/questionMark.png" alt="QuestionMark" width="200px" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowHideBox",
  components: {},
  props: ["top", "left", "width", "height", "show"],
  data: function () {
    return {};
  },
  methods: {
    toggle: function () {
      this.show = !this.show;
    },
  },
};
</script>

<style>
</style>
