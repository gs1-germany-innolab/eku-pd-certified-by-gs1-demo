<template>
  <ShowHideBox :top="top" :left="left" width="290px" height="230px" show>
    <DigitalTypeLabel
      :font_size="font_size"
      :color="color"
      :type="type"
    ></DigitalTypeLabel>
  </ShowHideBox>
</template>
<script>
import ShowHideBox from "./ShowHideBox.vue";
import DigitalTypeLabel from "./DigitalTypeLabel.vue";

export default {
  name: "ShowHideDigitalTypeLabel",
  components: { ShowHideBox, DigitalTypeLabel },
  props: [
    "color",
    "font_size",
    "top",
    "left",
    "type"
  ],
};
</script>

<style>
</style>
