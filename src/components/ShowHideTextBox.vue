
<template>
  <ShowHideBox :top="top" :left="left" :right="right" :width="width" height="auto" show="true">
    <TextBox width="100%" top="0" left="0" :color="color">
      <slot></slot>
    </TextBox>
  </ShowHideBox>
</template>
<script>
import ShowHideBox from "./ShowHideBox.vue";
import TextBox from "./TextBox.vue";

export default {
  name: "ShowHideTextBox",
  components: { ShowHideBox, TextBox },
  props: ["width", "color", "top", "left", "right"],
};
</script>

<style>
</style>
