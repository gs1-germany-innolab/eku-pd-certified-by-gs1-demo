<template>
  <div id="app">
    <div id="background1">
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
    <div id="pNeedPower">
      <p>Need power!</p>
    </div>
    <div id="pPowerbalance">
      <p>Powerbalance:</p>
    </div>
    <div id="pkW">
      <p>-200kW</p>
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
      <button type="button" class="btn btn-info btn-lg" @click="goToStore">Go to local store</button>
    </div>
  </div>
  </div>
  <div v-if="chapter102">
    <div class="jumbotron" style="background-color: #895D54;">
      <h2 class="display-4" style="color: #E5DDDB;">Welcome to your local rental store!</h2>
      <p class="lead" style="color: #E5DDDB;">Here you can rent different generators to cover your energy needs.</p>
      <h2 style="color: #E61117;">Reminder: You need 200kW</h2>
        <hr class="my-4">
        <img src="@/assets/redGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
        <img src="@/assets/blueGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
        <img src="@/assets/greenGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
        <img src="@/assets/yellowGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
        <hr class="my-4">
        <img src="@/assets/redETL.png" class="m-4" alt="QuestionMark" width="180" height="170">
        <img src="@/assets/blueETL.png" class="m-3" alt="QuestionMark" width="180" height="170">
        <img src="@/assets/greenETL.png" class="m-3" alt="QuestionMark" width="180" height="170">
        <img src="@/assets/yellowETL.png" class="m-4" alt="QuestionMark" width="180" height="170">
        <hr class="my-4">
        <div class="form-check-inline mr-5 ml-5">
          <input class="form-check-input position-static mr-5 ml-5" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." v-model="redGenerator">
        </div>
        <div class="form-check-inline mr-5 ml-5">
          <input class="form-check-input position-static mr-5 ml-5" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." v-model="blueGenerator">
        </div>
        <div class="form-check-inline mr-5 ml-5">
          <input class="form-check-input position-static mr-5 ml-5" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." v-model="greenGenerator">
        </div>
        <div class="form-check-inline ml-5 mr-5">
          <input class="form-check-input position-static ml-5 mr-5" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." v-model="yellowGenerator">
        </div>
        <hr class="my-4">
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
          <img src="@/assets/redETL.png" class="mr-3" alt="QuestionMark" width="220" height="200">
        </div>
    </div>
    <div v-if="smoke">
      <div id="showSmoke">
        <img src="@/assets/smoke.png" class="mr-3" alt="QuestionMark" width="220" height="200">
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
          <img src="@/assets/blueETL.png" class="mr-3" alt="QuestionMark" width="220" height="200">
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
          <img src="@/assets/greenETL.png" class="mr-3" alt="QuestionMark" width="220" height="200">
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
          <img src="@/assets/yellowETL.png" class="mr-3" alt="QuestionMark" width="220" height="200">
        </div>
    </div>
    </div>
    <div id="positivePowerbalance">
      <img src="@/assets/positivePowerbalance.png" class="mr-3" alt="QuestionMark" width="270" height="210">
    </div>
    <div id="pPText">
      <p>Powerbalance:</p>
    </div>
    <div id="greenLightning">
      <img src="@/assets/greenBlitz.png" class="mr-3" alt="redLightning" width="175" height="225">
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
  </div>
  <div v-if="chapter104">
    <div v-if="redGenerator">
      <div id="redGenerator">
        <img src="@/assets/redGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
      </div>
      <div id="rGETL">
        <img src="@/assets/errorETL.png" class="mr-3" alt="QuestionMark" width="220" height="200">
      </div>
    </div>
    <div id="showSmoke">
        <img src="@/assets/smoke.png" class="mr-3" alt="QuestionMark" width="220" height="200">
      </div>
    <div v-if="greenGenerator">
      <div id="greenGenerator">
        <img src="@/assets/greenGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
      </div>
    </div>
    <div v-if="blueGenerator">
      <div id="blueGenerator">
        <img src="@/assets/blueGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
      </div>
    </div>
    <div v-if="yellowGenerator">
      <div id="yellowGenerator">
        <img src="@/assets/yellowGenerator.png" class="mr-3" alt="QuestionMark" width="200" height="170">
      </div>
    </div>
    <div id="redLightning">
      <img src="@/assets/roterBlitz.png" class="mr-3" alt="redLightning" width="175" height="225">
    </div>
    <div id="errorETL">
      <img src="@/assets/errorBG.png" class="mr-3" alt="redLightning" width="250" height="250">
    </div>
    <div id="errorOverheat">
      <img src="@/assets/errorBG.png" class="mr-3" alt="redLightning" width="250" height="250">
    </div>
    <div id="errorRunning">
      <img src="@/assets/errorBG.png" class="mr-3" alt="redLightning" width="250" height="250">
    </div>
    <div id="errorDistributor">
      <img src="@/assets/errorBG.png" class="mr-3" alt="redLightning" width="250" height="250">
    </div>
    <div id="errorPfeil">
      <img src="@/assets/pfeil.png" class="mr-3" alt="redLightning" width="150" height="150">
    </div>
    <div id="errorETLText">
      <p>Electronic type <br> label is not <br> trust worthy!</p>
    </div>
    <div id="errorOverheatText">
      <p>Overheat! <br> Power down!</p>
    </div>
    <div id="errorRunningText">
      <p>The generator <br> is running <br> outside of his <br> specs!</p>
    </div>
    <div id="errorDistributorText">
      <p>Distributor <br> exaggerated <br> with specs!</p>
    </div>
    <div id="chapter1EndingBtn">
      <button type="button" class="btn btn-info btn-lg" @click="endChapter1">Acknowledge</button>
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
      chapter101: true,
      chapter102: false,
      chapter103: false,
      chapter104: false,
      pic1: false,
      pic2: false,
      pic3: false,
      redGenerator: false,
      blueGenerator: false,
      greenGenerator: false,
      yellowGenerator: false,
      rGEcoTypeLabel: false,
      bGEcoTypeLabel: false,
      gGEcoTypeLabel: false,
      yGEcoTypeLabel: false,
      smoke: false,
      error: false
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
    console.log("Renting done");
    this.chapter101 = false;
    this.chapter102 = false;
    if (this.redGenerator == false && this.blueGenerator == false && this.greenGenerator == false && this.yellowGenerator == false) {
      this.redGenerator = true;
      this.greenGenerator = true;
      this.yellowGenerator = true;
      this.chapter103 = true;
    }
    this.redGenerator = true;
    this.chapter103 = true;
  },
  goToStore: function() {
    console.log("Went to store");
    this.chapter101 = false;
    this.chapter102 = true;
  },
  showETL4: function() {
    if (this.yGEcoTypeLabel == false) {
        this.yGEcoTypeLabel = true;
        if (this.smoke === true) {
          this.chapter103 = false;
          this.chapter104 = true;
        }
        this.smoke = true;
      } else {
        this.yGEcoTypeLabel = false;
      } 
  },
  showETL3: function() {
    if (this.gGEcoTypeLabel == false) {
        this.gGEcoTypeLabel = true;
        if (this.smoke === true) {
          this.chapter103 = false;
          this.chapter104 = true;
        }
        this.smoke = true;
      } else {
        this.gGEcoTypeLabel = false;
      } 
  },
  showETL2: function() {
    if (this.rGEcoTypeLabel == false) {
        this.rGEcoTypeLabel = true;
        if (this.smoke === true) {
          this.chapter103 = false;
          this.chapter104 = true;
        }
        this.smoke = true;
      } else {
        this.rGEcoTypeLabel = false;
      } 
  },
  showETL1: function() {
    if (this.bGEcoTypeLabel == false) {
        this.bGEcoTypeLabel = true;
        if (this.smoke === true) {
          this.chapter103 = false;
          this.chapter104 = true;
        }
        this.smoke = true;
      } else {
        this.bGEcoTypeLabel = false;
      } 
  },
  endChapter1: function() {
    this.chapter104 = false;
    this.chapter103 = false;
    this.chapter102 = false;
    this.chapter101 = true;
    this.redGenerator = false;
    this.greenGenerator = false;
    this.blueGenerator = false;
    this.yellowGenerator = false;
    this.smoke = false;
  }
}
}
</script>

<style>
#rightPump {
    position: fixed;
    right:650px;
    bottom:50px;
    margin:0;
    padding:0;
}
#leftPump {
    position: fixed;
    left:580px;
    bottom:200px;
    margin:0;
    padding:0;
}
#leftPic {
    position: fixed;
    left: 600px;
    bottom:330px;
}
#rightPic {
    position: fixed;
    right: 600px;
    bottom: 200px;
}
#redNeedPower {
    position: fixed;
    right:50px;
    bottom:650px;
    margin:0;
    padding:0;
}
#redLightning {
    position: fixed;
    left: 870px;
    bottom:550px;
    margin:0;
    padding:0;
}
#upperleftPic {
    position: fixed;
    left:100px;
    top:50px;
    margin:0;
    padding:0;
}
#useCase {
    position: fixed;
    left:80px;
    bottom:450px;
    margin:0;
    padding:0;
}
#rentGeneratorBtn {
    position: fixed;
    right: 130px;
    bottom: 580px;
    margin:0;
    padding:0;
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
    left: 350px;
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
#positivePowerbalance {
    position: fixed;
    right: 100px;
    bottom: 700px;
}
#pPText {
    position: fixed;
    right: 125px;
    bottom: 780px;
    color: black;
    font-size: 37px;
}
#pNeedPower {
    position: fixed;
    right: 110px;
    bottom: 800px;
    color: black;
    font-size: 40px;
}
#pPowerbalance {
    position: fixed;
    right: 85px;
    bottom: 750px;
    color: black;
    font-size: 40px;
}
#pkW {
    position: fixed;
    right: 150px;
    bottom: 700px;
    color: black;
    font-size: 40px;
}
#greenLightning {
    position: fixed;
    left: 870px;
    bottom:550px;
    margin:0;
    padding:0;
}
#showSmoke {
    position: fixed;
    right: 150px;
    bottom: 100px;
}
#errorETL {
    position: fixed;
    right: 250px;
    bottom: 600px;
}
#errorOverheat {
    position: fixed;
    left: 150px;
    bottom: 50px;
}
#errorRunning {
    position: fixed;
    left: 150px;
    bottom: 650px;
}
#errorDistributor {
    position: fixed;
    left: 150px;
    bottom: 350px;
}
#errorPfeil {
    position: fixed;
    right: 150px;
    bottom: 450px;
}
#errorETLText {
  position: fixed;
  right: 275px;
  bottom: 635px;
  color: black;
  font-size: 35px;
}
#errorOverheatText {
  position: fixed;
  left: 160px;
  bottom: 700px;
  color: black;
  font-size: 40px;
}
#errorRunningText {
  position: fixed;
  left: 170px;
  bottom: 360px;
  color: black;
  font-size: 35px;
}
#errorDistributorText {
  position: fixed;
  left: 180px;
  bottom: 100px;
  color: black;
  font-size: 35px;
}
#chapter1EndingBtn {
  position: fixed;
  left: 850px;
  bottom: 50px;
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
