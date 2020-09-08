
<template>
  <div :style="{position:`absolute`, left: left, right:right, top: top, width: width, height: height}">
    <div v-if="showing" @click="toggle">
      <slot></slot>
    </div>
    <div v-if="!showing" @click="toggle">
      <img src="@/assets/questionMark.png" alt="QuestionMark" style="width: calc(20px + 10vw);position:absolute;top:0;left:0;" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowHideBox",
  components: {},
  props: ["top", "left", "right", "width", "height", "show"],
  data: function () {
    return {
        showing:false,
    };
  },
  mounted(){
      this.showing=this.show;
  },
  methods: {
    toggle: function () {
      this.showing = !this.showing;
    },
  },
};
</script>

<style>
</style>
