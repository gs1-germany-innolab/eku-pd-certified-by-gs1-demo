<template>
  <TextBox width="calc(60px + 12vw)" height="calc(60px + 10vw)" :color="color">
      <div style="margin-bottom:0.7vw;">
    <div class="dtlCaption">{{ type.caption }}</div>
    <div class="dtlRow">{{ type.asset }}</div>
    <div class="dtlRow">{{ type.gs1id }}</div>
    <div class="dtlRow">{{ type.label3 }}</div>
    <div class="dtlRow">{{ type.label4 }}</div>
    <img src="@/assets/cert.png" class="cert" alt="Certified" v-if="certified" />
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
  computed: {
    coloredStrokes() {
      return {
        "border-color": this.color,
        background: `repeating-linear-gradient(-45deg, transparent, transparent 1px, ${this.color} 2px, ${this.color} 5px)`,
      };
    },
  },
  mounted() {
    console.log(this.type);
  },
};
</script>

<style>
.cert {
  width: 5vw;
  position: absolute;
  left: 11vw;
  top: 11vw;
}
.dtlCaption {
  color: white;
  border: none;
  font-weight: bold;
  margin: auto;
  margin-top: 5px;
  font-size: calc(5px + 1vw);
}
.dtlRow {
  width: 95%;
  color: black;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.5vw;
  margin: auto;
  margin-bottom: 0.2vw;
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(0, 0, 0, 0.2);
  font-size: calc(3px + 1vw);
}
</style>
