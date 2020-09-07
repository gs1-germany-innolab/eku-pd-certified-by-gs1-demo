
<template>
  <div class="outer dtl" :style="coloredStrokes">
    <div class="inner dtl" :style="coloredFill">
      <div class="dtlCaption" :style="{ fontSize: font_size}">Digital Type Label</div>
      <div class="dtlRow" :style="{ fontSize: font_size}">{{gs1id}}</div>
      <div class="dtlRow" :style="{ fontSize: font_size}">{{manufacturer}}</div>
      <div class="dtlRow" :style="{ fontSize: font_size}">Power: {{power}} kW</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DigitalTypeLabel",
  components: {},
  props:["power", "gs1id","manufacturer", "color","font_size"],
  data: function () {
    return {
      
    };
  },
  computed: {
    
    coloredStrokes() {
      return {
        "border-color": this.color,
        background: `repeating-linear-gradient(-45deg, transparent, transparent 3px, ${this.color} 3px, ${this.color} 5px)`,
      };
    },
    coloredFill() {
      return {
        "border-color": this.color,
        background: this.color,
      };
    },
  },
};
</script>

<style>
.dtlCaption {
  color: white;
  border: none;
  font-weight: bold;
  margin: auto;
  margin-top: 5px;
}
.dtlRow {
  width: 95%;
  padding-left: 2px;
  color: black;
  border-style: solid;
  border-width: 1px;
  margin: auto;
  margin-top: 10px;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(0, 0, 0, 0.2);
}
.outer.dtl {
  width: 290px;
  height: 230px;
}
.inner.dtl {
  width: 270px;
  height: 210px;
  margin: auto;
  display: inline-block;
}
.dtl {
  padding: 7px 0;

  border-style: groove;
  border-width: 3px;
  border-radius: 50px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
}
</style>
