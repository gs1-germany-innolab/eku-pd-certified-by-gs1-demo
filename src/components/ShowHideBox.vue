
<template>
  <div
    :style="{position:`absolute`, left: left, right:right, top: top, width: width, height: height}"
  >
    <div v-if="showing" @click="toggle">
      <slot></slot>
    </div>
    <div v-if="!showing" @click="toggle">
      <img
        src="@/assets/GS1_Symbol_Info_Sign_RGB_2015-04-16.png"
        alt="Info"
        style="width: calc(8px + 5vw);position:absolute;top:0;left:0;"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowHideBox",
  components: {},
  props: ["top", "left", "right", "width", "height", "show"],
  watch: {
    show: function (newVal, oldVal) {
      console.log("show changed from " + oldVal + " to " + newVal);
      this.showing = oldVal != newVal ? newVal : this.showing;
    },
  },
  data: function () {
    return {
      showing: false,
    };
  },
  mounted() {
    this.showing = this.show;
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
