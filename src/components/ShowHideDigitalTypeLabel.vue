<template>
  <ShowHideBox :top="top" :left="left" width="290px" height="230px" :show="show">
    <DigitalTypeLabel :certified="certified" :color="color" :type="type"></DigitalTypeLabel>
  </ShowHideBox>
</template>
<script>
import ShowHideBox from "./ShowHideBox.vue";
import DigitalTypeLabel from "./DigitalTypeLabel.vue";

export default {
  name: "ShowHideDigitalTypeLabel",
  components: { ShowHideBox, DigitalTypeLabel },
  props: ["color", "top", "left", "type", "show", "certified"],
};
</script>

<style>
</style>
