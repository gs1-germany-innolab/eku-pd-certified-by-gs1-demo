<template>
  <div id="app">
    <div v-if="chapter101">
    <div class="media">
        <div @click="showPic1">
        <img src="@/assets/questionMark.png" class="mr-3" alt="QuestionMark" width="220" height="175">
        </div>
        <div v-if="pic1">
            <img src="@/assets/qmwb.png" class="mr-3" alt="QuestionMark" width="600" height="375">
        </div>
    </div>
    <div id="redNeedPower">
      <img src="@/assets/needPower.png" class="mr-3" alt="QuestionMark" width="300" height="275">
    </div>
    <div id="redLightning">
      <img src="@/assets/roterBlitz.png" class="mr-3" alt="QuestionMark" width="175" height="225">
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
      pic1: false,
      pic2: false,
      pic3: false
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
