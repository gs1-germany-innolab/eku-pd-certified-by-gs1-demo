<template>
  <div id="app">
    <div v-if="chapter101">
    <div v-if="pic1">
      <div id="useCase">
        <img src="@/assets/qmwb.png" class="mr-3" alt="QuestionMark" width="500" height="300">
      </div>
    </div>
    <div id="upperleftPic">
      <div @click="showPic1" >
        <img src="@/assets/questionMark.png" class="mr-3" alt="QuestionMark" width="200" height="165">
      </div>
    </div>
    <div id="redNeedPower">
      <img src="@/assets/needPower.png" class="mr-3" alt="needPower" width="300" height="275">
    </div>
    <div id="redLightning">
      <img src="@/assets/roterBlitz.png" class="mr-3" alt="redLightning" width="175" height="225">
    </div>
    <div id="leftPump">
      <div @click="showPic2" >
        <img src="@/assets/questionMark.png" class="mr-3" alt="QuestionMark" width="150" height="130">
      </div>
    </div>
    <div v-if="pic2">
      <div id="leftPic">
        <img src="@/assets/etl1.png" class="mr-3" alt="QuestionMark" width="220" height="200">
      </div>
    </div>
    <div v-if="pic3">
      <div id="rightPic">
        <img src="@/assets/etl2.png" class="mr-3" alt="QuestionMark" width="220" height="200">
      </div>
    </div>
    <div id="rightPump">
      <div @click="showPic3" >
        <img src="@/assets/questionMark.png" class="mr-3" alt="QuestionMark" width="150" height="130">
      </div>
    </div>
    <div id="rentGeneratorBtn">
      <button type="button" class="btn btn-info btn-lg" @click="rent">Rent generator</button>
    </div>
  </div>
  <div v-if="chapter103">
    <div v-if="redGenerator">
      <div id="redGenerator">
        <img src="@/assets/redGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
      </div>
      <div id="QMredGenerator">
        <img src="@/assets/questionMark.png" class="mr-3" alt="QuestionMark" width="130" height="110" @click="this.showETL2">
      </div>
      <div v-if="rGEcoTypeLabel">
        <div id="rGETL">
          <img src="@/assets/etl2.png" class="mr-3" alt="QuestionMark" width="220" height="200">
        </div>
    </div>
    </div>
    <div v-if="blueGenerator">
      <div id="blueGenerator">
        <img src="@/assets/blueGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
      </div>
      <div id="QMblueGenerator">
        <img src="@/assets/questionMark.png" class="mr-3" alt="QuestionMark" width="130" height="110" @click="showETL1">
      </div>
      <div v-if="bGEcoTypeLabel">
        <div id="bGETL">
          <img src="@/assets/etl2.png" class="mr-3" alt="QuestionMark" width="220" height="200">
        </div>
    </div>
    </div>
    <div v-if="greenGenerator">
      <div id="greenGenerator">
        <img src="@/assets/greenGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
      </div>
      <div id="QMgreenGenerator">
        <div>
          <img src="@/assets/questionMark.png" class="mr-3" alt="QuestionMark" width="130" height="110" @click="showETL3">
        </div>
      </div>
      <div v-if="gGEcoTypeLabel">
        <div id="gGETL">
          <img src="@/assets/etl2.png" class="mr-3" alt="QuestionMark" width="220" height="200">
        </div>
    </div>
    </div>
    <div v-if="yellowGenerator">
      <div id="yellowGenerator">
        <img src="@/assets/yellowGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
      </div>
      <div id="QMyellowGenerator">
        <div>
            <img src="@/assets/questionMark.png" class="mr-3" alt="QuestionMark" width="130" height="110" @click="this.showETL4">
        </div>
      </div>
      <div v-if="yGEcoTypeLabel">
        <div id="yGETL">
          <img src="@/assets/etl2.png" class="mr-3" alt="QuestionMark" width="220" height="200">
        </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  data: function () {
    return {
      chapter101: false,
      chapter103: true,
      pic1: false,
      pic2: false,
      pic3: false,
      redGenerator: true,
      blueGenerator: true,
      greenGenerator: true,
      yellowGenerator: true,
      rGEcoTypeLabel: false,
      bGEcoTypeLabel: false,
      gGEcoTypeLabel: false,
      yGEcoTypeLabel: false
    }
  },
  methods: {
    showPic1: function() {
      if (this.pic1 == false) {
        this.pic1 = true;
      } else {
        this.pic1 = false;
      } 
    },
    showPic2: function() {
      if (this.pic2 == false) {
        this.pic2 = true;
      } else {
        this.pic2 = false;
      }
  },
  showPic3: function() {
      if (this.pic3 == false) {
        this.pic3 = true;
      } else {
        this.pic3 = false;
      }
  },
  rent: function() {
    console.log("Rent generator");
  },
  showETL4: function() {
    if (this.yGEcoTypeLabel == false) {
        this.yGEcoTypeLabel = true;
      } else {
        this.yGEcoTypeLabel = false;
      } 
  },
  showETL3: function() {
    if (this.gGEcoTypeLabel == false) {
        this.gGEcoTypeLabel = true;
      } else {
        this.gGEcoTypeLabel = false;
      } 
  },
  showETL2: function() {
    if (this.rGEcoTypeLabel == false) {
        this.rGEcoTypeLabel = true;
      } else {
        this.rGEcoTypeLabel = false;
      } 
  },
  showETL1: function() {
    if (this.bGEcoTypeLabel == false) {
        this.bGEcoTypeLabel = true;
      } else {
        this.bGEcoTypeLabel = false;
      } 
  }
}
}
</script>

<style>
#rightPump {
    position: absolute;
    right:0;
    bottom:50px;
    margin:0;
    padding:0;
    width:75%;
}
#leftPump {
    position: fixed;
    right:-30px;
    bottom:200px;
    margin:0;
    padding:0;
    width:135%;
}
#leftPic {
    position: fixed;
    right:150px;
    bottom:50px;
    margin:0;
    padding:0;
    width:135%;
}
#rightPic {
    position: fixed;
    left:0px;
    bottom:50px;
    margin:0;
    padding:0;
    width:142%;
}
#redNeedPower {
    position: fixed;
    left:350px;
    bottom:650px;
    margin:0;
    padding:0;
    width:142%;
}
#redLightning {
    position: fixed;
    left: -350px;
    bottom:550px;
    margin:0;
    padding:0;
    width:142%;
}
#upperleftPic {
    position: fixed;
    right:400px;
    top:50px;
    margin:0;
    padding:0;
    width:142%;
}
#useCase {
    position: fixed;
    right:250px;
    bottom:450px;
    margin:0;
    padding:0;
    width:142%;
}
#rentGeneratorBtn {
    position: fixed;
    left: 345px;
    bottom: 580px;
    margin:0;
    padding:0;
    width:142%;
}
#redGenerator {
    position: fixed;
    right: 55px;
    bottom: 50px;
    margin:0;
    padding:0;
}
#blueGenerator {
    position: fixed;
    right: 260px;
    bottom: 70px;
    margin:0;
    padding:0;
}
#greenGenerator {
    position: fixed;
    left: 42px;
    bottom: 50px;
    margin:0;
    padding:0;
}
#yellowGenerator {
    position: fixed;
    left: 300px;
    bottom: 40px;
    margin:0;
    padding:0;
}
#QMredGenerator {
    position: fixed;
    right: 20px;
    bottom: 140px;
    margin:0;
    padding:0;
}
#QMblueGenerator {
    position: fixed;
    right: 360px;
    bottom: 180px;
    margin:0;
    padding:0;
}
#QMgreenGenerator {
    position: fixed;
    left: 40px;
    bottom: 170px;
    margin:0;
    padding:0;
}
#QMyellowGenerator {
    position: fixed;
    left: 420px;
    bottom: 150px;
    margin:0;
    padding:0;
}
#yGETL {
    position: fixed;
    left: 400px;
    bottom: 250px;
}
#gGETL {
    position: fixed;
    left: 100px;
    bottom: 270px;
}
#rGETL {
    position: fixed;
    right: 40px;
    bottom: 250px;
}
#bGETL {
    position: fixed;
    right: 300px;
    bottom: 280px;
}


body {
  background-image: url("assets/landingPage.jpg");
  background-size: 100% 103%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
