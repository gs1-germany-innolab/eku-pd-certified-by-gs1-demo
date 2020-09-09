<template>
  <div class="outer dtl" :style="coloredStrokes">
    <div class="inner dtl" :style="coloredFill">
      <div class="dtlCaption">Digital Type Label</div>
      <div class="dtlRow">{{ type.asset }}</div>
      <div class="dtlRow">{{ type.gs1id }}</div>
      <div class="dtlRow">{{ type.manufacturer }}</div>
      <div class="dtlRow">{{ powerLabel }}</div>
    </div>
    <img src="@/assets/cert.png" class="cert" alt="Certified" v-if="certified" />
  </div>
</template>
<script>
export default {
  name: "DigitalTypeLabel",
  components: {},
  props: ["type", "color", "width", "height", "certified"],
  data: function () {
    return {};
  },
  computed: {
    powerLabel() {
      if (this.type.power < 0) {
        return "Consumes < " + -this.type.power + " kWh";
      }
      return (
        "Generates " + (this.type.smoking ? "???" : this.type.power) + " kWh"
      );
    },
    coloredStrokes() {
      return {
        "border-color": this.color,
        background: `repeating-linear-gradient(-45deg, transparent, transparent 1px, ${this.color} 2px, ${this.color} 5px)`,
      };
    },
    coloredFill() {
      return {
        "border-color": this.color,
        background: this.color,
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
  margin: auto;
  margin-top: 0.1vw;
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(0, 0, 0, 0.2);
  font-size: calc(3px + 1vw);
}

.outer.dtl {
  position: relative;
  width: calc(60px + 12vw);
  height: calc(60px + 10vw);
}
.inner.dtl {
  width: 95%;
  height: 100%;
  margin: auto;
  display: inline-block;
}
.dtl {
  padding: 7px 0;

  border-style: groove;
  border-width: 3px;
  border-radius: 2vw;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
}
</style>
