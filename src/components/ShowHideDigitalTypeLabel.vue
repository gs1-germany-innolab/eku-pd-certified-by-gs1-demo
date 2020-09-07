<template>
  <ShowHideBox :top="top" :left="left" width="290px" height="230px" show>
    <DigitalTypeLabel
      :font_size="font_size"
      :color="color"
      :manufacturer="manufacturer"
      :gs1id="gs1id"
      :power="power"
      :asset="asset"
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
    "power",
    "gs1id",
    "manufacturer",
    "color",
    "font_size",
    "top",
    "left",
    "asset"
  ],
};
</script>

<style>
</style>
