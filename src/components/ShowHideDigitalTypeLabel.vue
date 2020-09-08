<template>
  <ShowHideBox :top="top" :left="left" width="290px" height="230px" show>
    <DigitalTypeLabel
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
    "top",
    "left",
    "type"
  ],
};
</script>

<style>
</style>
