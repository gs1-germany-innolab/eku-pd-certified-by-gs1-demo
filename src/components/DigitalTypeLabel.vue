<template>
  <TextBox
    width="calc(60px + 12vw)"
    height="calc(60px + 10vw)"
    :color="color"
    style="margin-left: 2px; margin-right: 2px"
  >
    <div style="margin-bottom: 0.7vw; position:relative; padding-bottom:1vw;">
      <div class="dtlCaption">{{ type.caption }}</div>
      <div class="dtlRow">{{ type.asset }}</div>
      <div class="dtlRow">{{ type.gs1id }}</div>
      <div class="dtlRow">{{ type.label3 }}</div>
      <div class="dtlRow">{{ type.label4 }}</div>
      <img
        src="@/assets/cert.png"
        class="cert"
        alt="Certified"
        v-if="certified"
      />
    </div>
  </TextBox>
</template>
<script>
import TextBox from "./TextBox.vue";

export default {
  name: "DigitalTypeLabel",
  components: { TextBox },
  props: ["type", "color", "certified"],
  data: function () {
    return {};
  },
  mounted() {
    console.log(this.type);
  },
};
</script>

<style>
.cert {
  height: 3vw;
  position: absolute;
  right: 0;
  bottom: -1vw;
}
.dtlCaption {
  border: none;
  font-weight: bold;
  margin: auto;
  margin-top: 5px;
  font-size: calc(5px + 1vw);
}
.dtlRow {
  width: 95%;
  color: #454545;
  border-style: none;
  border-radius: 0;
  margin: auto;
  margin-bottom: 0.2vw;
  font-size: calc(1vw);
}
</style>
