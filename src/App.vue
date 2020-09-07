<template>
  <div id="app">
    <DigitalTypeLabel
      color="green"
      :power="pump1Power"
      gs1id="urn:epc:id:giai:0614141.12345400"
      manufacturer="Manufacturer 001"
      font_size="16px"
      top="75%"
      left="30%"
      style="z-index:0;"
    ></DigitalTypeLabel>
    <DigitalTypeLabel
      color="green"
      :power="pump2Power"
      gs1id="urn:epc:id:giai:0614141.12345401"
      manufacturer="Manufacturer 002"
      font_size="16px"
      top="73%"
      left="52%"
      style="z-index:0;"
    ></DigitalTypeLabel>

    <div v-if="chapter101">
      <TextBox
        left="10px"
        top="20px"
        width="500px"
        height="400px"
        color="green"
      >You are mining for resources in a remote area without electricity. You need to setup a micro grid to power your mashines.</TextBox>

      <div id="redNeedPower">
        <img src="@/assets/needPower.png" class="mr-3" alt="needPower" width="300" height="275" />
      </div>
      <div id="pNeedPower">
        <p>Need power!</p>
      </div>
      <div id="pPowerbalance">
        <p>Powerbalance:</p>
      </div>
      <div id="pkW">
        <p>{{powerBalance}}kW</p>
      </div>
      <div id="redLightning">
        <img src="@/assets/roterBlitz.png" class="mr-3" alt="redLightning" width="175" height="225" />
      </div>

      <div id="rentGeneratorBtn">
        <button type="button" class="btn btn-info btn-lg" @click="goToStore">Go to local store</button>
      </div>
    </div>

    <div v-if="chapter102">
      <div class="jumbotron" style="background-color: #895D54; z-index:10;">
        <h2 class="display-4" style="color: #E5DDDB;">Welcome to your local rental store!</h2>
        <p
          class="lead"
          style="color: #E5DDDB;"
        >Here you can rent different generators to cover your energy needs.</p>
        <h2
          style="color: #E61117;"
          v-if="!valid.enoughKW"
        >Reminder: Current energy demand {{powerBalance}}kW</h2>
        <hr class="my-4" />
        <img
          src="@/assets/redGenerator.png"
          class="mr-3"
          alt="QuestionMark"
          width="200"
          height="170"
        />
        <img
          src="@/assets/blueGenerator.png"
          class="mr-3"
          alt="QuestionMark"
          width="200"
          height="170"
        />
        <img
          src="@/assets/greenGenerator.png"
          class="mr-3"
          alt="QuestionMark"
          width="200"
          height="170"
        />
        <img
          src="@/assets/yellowGenerator.png"
          class="mr-3"
          alt="QuestionMark"
          width="200"
          height="170"
        />
        <hr class="my-4" />
        <img src="@/assets/redETL.png" class="m-4" alt="QuestionMark" width="180" height="170" />
        <img src="@/assets/blueETL.png" class="m-3" alt="QuestionMark" width="180" height="170" />
        <img src="@/assets/greenETL.png" class="m-3" alt="QuestionMark" width="180" height="170" />
        <img src="@/assets/yellowETL.png" class="m-4" alt="QuestionMark" width="180" height="170" />
        <hr class="my-4" />
        <div class="form-check-inline mr-5 ml-5">
          <input
            class="form-check-input position-static mr-5 ml-5"
            type="checkbox"
            id="blankCheckbox"
            value="option1"
            aria-label="..."
            v-model="redGenerator"
          />
        </div>
        <div class="form-check-inline mr-5 ml-5">
          <input
            class="form-check-input position-static mr-5 ml-5"
            type="checkbox"
            id="blankCheckbox"
            value="option1"
            aria-label="..."
            v-model="blueGenerator"
          />
        </div>
        <div class="form-check-inline mr-5 ml-5">
          <input
            class="form-check-input position-static mr-5 ml-5"
            type="checkbox"
            id="blankCheckbox"
            value="option1"
            aria-label="..."
            v-model="greenGenerator"
          />
        </div>
        <div class="form-check-inline ml-5 mr-5">
          <input
            class="form-check-input position-static ml-5 mr-5"
            type="checkbox"
            id="blankCheckbox"
            value="option1"
            aria-label="..."
            v-model="yellowGenerator"
          />
        </div>
        <hr class="my-4" />
        <button type="button" class="btn btn-info btn-lg" @click="rent">Rent generators</button>
      </div>
    </div>
    <div v-if="chapter103">
      <div v-if="blueGenerator">
        <div id="blueGenerator">
          <img
            src="@/assets/blueGenerator.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
        <div id="QMblueGenerator">
          <img
            src="@/assets/questionMark.png"
            class="mr-3"
            alt="QuestionMark"
            width="130"
            height="110"
            @click="showETL1"
          />
        </div>
        <div v-if="bGEcoTypeLabel">
          <div id="bGETL">
            <img
              src="@/assets/blueETL.png"
              class="mr-3"
              alt="QuestionMark"
              width="220"
              height="200"
            />
          </div>
        </div>
      </div>
      <div v-if="redGenerator">
        <div id="redGenerator">
          <img
            src="@/assets/redGenerator.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
        <div id="QMredGenerator">
          <img
            src="@/assets/questionMark.png"
            class="mr-3"
            alt="QuestionMark"
            width="130"
            height="110"
            @click="this.showETL2"
          />
        </div>
        <div v-if="rGEcoTypeLabel">
          <div id="rGETL">
            <img src="@/assets/redETL.png" class="mr-3" alt="QuestionMark" width="220" height="200" />
          </div>
        </div>
        <div v-if="smoke">
          <div id="showSmoke">
            <img src="@/assets/smoke.png" class="mr-3" alt="QuestionMark" width="220" height="200" />
          </div>
        </div>
      </div>
      <div v-if="greenGenerator">
        <div id="greenGenerator">
          <img
            src="@/assets/greenGenerator.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
        <div id="QMgreenGenerator">
          <div>
            <img
              src="@/assets/questionMark.png"
              class="mr-3"
              alt="QuestionMark"
              width="130"
              height="110"
              @click="showETL3"
            />
          </div>
        </div>
        <div v-if="gGEcoTypeLabel">
          <div id="gGETL">
            <img
              src="@/assets/greenETL.png"
              class="mr-3"
              alt="QuestionMark"
              width="220"
              height="200"
            />
          </div>
        </div>
      </div>
      <div v-if="yellowGenerator">
        <div id="yellowGenerator">
          <img
            src="@/assets/yellowGenerator.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
        <div id="QMyellowGenerator">
          <div>
            <img
              src="@/assets/questionMark.png"
              class="mr-3"
              alt="QuestionMark"
              width="130"
              height="110"
              @click="this.showETL4"
            />
          </div>
        </div>
        <div v-if="yGEcoTypeLabel">
          <div id="yGETL">
            <img
              src="@/assets/yellowETL.png"
              class="mr-3"
              alt="QuestionMark"
              width="220"
              height="200"
            />
          </div>
        </div>
      </div>
      <div id="positivePowerbalance">
        <img
          src="@/assets/positivePowerbalance.png"
          class="mr-3"
          alt="QuestionMark"
          width="270"
          height="210"
        />
      </div>
      <div id="pPText">
        <p>Powerbalance:</p>
      </div>
      <div id="greenLightning">
        <img src="@/assets/greenBlitz.png" class="mr-3" alt="redLightning" width="175" height="225" />
      </div>

      <p id="chapter103Powerbalance">+{{positivePowerBalance}}kW</p>
    </div>
    <div v-if="chapter104">
      <div v-if="blueGenerator">
        <div id="blueGenerator">
          <img
            src="@/assets/blueGenerator.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
      </div>
      <div v-if="redGenerator">
        <div id="redGenerator">
          <img
            src="@/assets/redGenerator.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
        <div id="rGETL">
          <img src="@/assets/errorETL.png" class="mr-3" alt="QuestionMark" width="220" height="200" />
        </div>
      </div>
      <div id="showSmoke">
        <img src="@/assets/smoke.png" class="mr-3" alt="QuestionMark" width="220" height="200" />
      </div>
      <div v-if="greenGenerator">
        <div id="greenGenerator">
          <img
            src="@/assets/greenGenerator.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
      </div>
      <div v-if="yellowGenerator">
        <div id="yellowGenerator">
          <img
            src="@/assets/yellowGenerator.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
      </div>
      <div id="redLightning">
        <img src="@/assets/roterBlitz.png" class="mr-3" alt="redLightning" width="175" height="225" />
      </div>
      <div id="errorETLText">
        <TextBox left="10px" top="20px" width="500px" height="400px" color="red">
          The Digital Type Label was tuned!
          <br />The Generator has been operated outside specifications!
          <br />Overheat leads to power outage.
        </TextBox>
      </div>
      <div id="chapter1EndingBtn">
        <button
          type="button"
          class="btn btn-info btn-lg"
          @click="endChapter1"
        >See the difference with CertifiedByGS1</button>
      </div>
    </div>
    <div v-if="chapter201">
      <div id="useCaseCh2">
        <img src="@/assets/qmwb.png" class="mr-3" alt="QuestionMark" width="500" height="500" />
      </div>
      <div id="useCaseTextCh2">
        <p>
          Problem:
          <br />If it was not signed,
          <br />it might have been tuned.
          <br />This could result in a high damage!
          <br />Solution:
          <br />Signed data from the manufacturer!
        </p>
      </div>
      <div id="redNeedPower">
        <img src="@/assets/needPower.png" class="mr-3" alt="needPower" width="300" height="275" />
      </div>
      <div id="chain">
        <img src="@/assets/chain.png" class="mr-3" alt="needPower" width="450" height="150" />
      </div>
      <div id="pNeedPower">
        <p>Need power!</p>
      </div>
      <div id="pPowerbalance">
        <p>Powerbalance:</p>
      </div>
      <div id="pkW">
        <p>{{powerBalance}}kW</p>
      </div>
      <div id="redLightning">
        <img src="@/assets/roterBlitz.png" class="mr-3" alt="redLightning" width="175" height="225" />
      </div>
      
      <div id="rentGeneratorBtn">
        <button type="button" class="btn btn-info btn-lg" @click="goToStoreCh2">Go to local store</button>
      </div>
    </div>
    <div v-if="chapter202">
      <div class="jumbotron" style="background-color: #895D54; z-index:10;">
        <h2 class="display-4" style="color: #E5DDDB;">Welcome to your local rental store!</h2>
        <p
          class="lead"
          style="color: #E5DDDB;"
        >Here you can rent different generators to cover your energy needs.</p>
        <h2
          style="color: #E61117;"
          v-if="!valid.enoughKW"
        >Reminder: Current energy demand {{powerBalance}}kW</h2>
        <hr class="my-4" />
        <img
          src="@/assets/redGeneratorCh2.png"
          class="mr-3"
          alt="QuestionMark"
          width="200"
          height="170"
        />
        <img
          src="@/assets/blueGeneratorCh2.png"
          class="mr-3"
          alt="QuestionMark"
          width="200"
          height="170"
        />
        <img
          src="@/assets/greenGeneratorCh2.png"
          class="mr-3"
          alt="QuestionMark"
          width="200"
          height="170"
        />
        <img
          src="@/assets/yellowGeneratorCh2.png"
          class="mr-3"
          alt="QuestionMark"
          width="200"
          height="170"
        />
        <div v-if="showExpShop">
          <div id="expShop">
            <br />
            <img src="@/assets/qmwb.png" class="mr-3" alt="QuestionMark" width="450" height="210" />
            <div id="expShopText">
              <p>
                These devices were signed by the manufacturer
                <br />and therefore these devices also have signed data.
                <br />You can recognize this by the certification.
                <br />This device and the corresponding data
                <br />are therefore trustworthy.
              </p>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <img src="@/assets/redETLCh2.png" class="m-4" alt="QuestionMark" width="180" height="170" />
        <img src="@/assets/blueETLCh2.png" class="m-3" alt="QuestionMark" width="180" height="170" />
        <img src="@/assets/greenETLCh2.png" class="m-3" alt="QuestionMark" width="180" height="170" />
        <img
          src="@/assets/yellowETLCh2.png"
          class="m-4"
          alt="QuestionMark"
          width="180"
          height="170"
        />
        <hr class="my-4" />
        <div class="form-check-inline mr-5 ml-5">
          <input
            class="form-check-input position-static mr-5 ml-5"
            type="checkbox"
            id="blankCheckbox"
            value="option1"
            aria-label="..."
            v-model="redGenerator"
          />
        </div>
        <div class="form-check-inline mr-5 ml-5">
          <input
            class="form-check-input position-static mr-5 ml-5"
            type="checkbox"
            id="blankCheckbox"
            value="option1"
            aria-label="..."
            v-model="blueGenerator"
          />
        </div>
        <div class="form-check-inline mr-5 ml-5">
          <input
            class="form-check-input position-static mr-5 ml-5"
            type="checkbox"
            id="blankCheckbox"
            value="option1"
            aria-label="..."
            v-model="greenGenerator"
          />
        </div>
        <div class="form-check-inline ml-5 mr-5">
          <input
            class="form-check-input position-static ml-5 mr-5"
            type="checkbox"
            id="blankCheckbox"
            value="option1"
            aria-label="..."
            v-model="yellowGenerator"
          />
        </div>
        <hr class="my-4" />
        <button type="button" class="btn btn-info btn-lg" @click="rentCh2">Rent generators</button>
        <button
          type="button"
          class="btn btn-info btn-lg ml-5"
          @click="autoRentCh2"
        >Auto rent generator</button>
        <div id="QMShop">
          <img
            src="@/assets/questionMark.png"
            class="mr-3"
            alt="QuestionMark"
            width="130"
            height="110"
            @click="this.showExpInShop"
          />
        </div>
      </div>
    </div>
    <div v-if="chapter203">
      <div v-if="blueGenerator">
        <div id="blueGenerator">
          <img
            src="@/assets/blueGeneratorCh2.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
        <div id="QMblueGenerator">
          <img
            src="@/assets/questionMark.png"
            class="mr-3"
            alt="QuestionMark"
            width="130"
            height="110"
            @click="showETL1"
          />
        </div>
        <div v-if="bGEcoTypeLabel">
          <div id="bGETL">
            <img
              src="@/assets/blueETLCh2.png"
              class="mr-3"
              alt="QuestionMark"
              width="220"
              height="200"
            />
          </div>
        </div>
      </div>
      <div v-if="redGenerator">
        <div id="redGenerator">
          <img
            src="@/assets/redGeneratorCh2.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
        <div id="QMredGenerator">
          <img
            src="@/assets/questionMark.png"
            class="mr-3"
            alt="QuestionMark"
            width="130"
            height="110"
            @click="this.showETL2"
          />
        </div>
        <div v-if="rGEcoTypeLabel || this.endingExplanation">
          <div id="rGETL">
            <img
              src="@/assets/redETLCh2.png"
              class="mr-3"
              alt="QuestionMark"
              width="220"
              height="200"
            />
          </div>
          <div id="etlTrustExp">
            <img src="@/assets/qmwb.png" class="mr-3" alt="QuestionMark" width="400" height="200" />
          </div>
          <div id="trustPfeil">
            <img src="@/assets/pfeil.png" class="mr-3" alt="QuestionMark" width="175" height="120" />
          </div>
          <div id="trustText">
            <p>
              The label is trustworthy because
              <br />it was signed by the manufacturer himself.
              <br />So this device was not tuned.
            </p>
          </div>
          <div id="expProblem">
            <img src="@/assets/qmwb.png" class="mr-3" alt="QuestionMark" width="550" height="350" />
          </div>
          <div id="expProblemText">
            <p>
              Summarized:
              <br />If we receive signed data
              <br />from a device signed by the manufacturer,
              <br />we can "blindly" trust this device
              <br />and thus avoid damage through manipulation.
            </p>
          </div>
        </div>
        <div id="endButton">
          <button type="button" class="btn btn-primary btn-lg" @click="endStory">End story</button>
        </div>
      </div>
      <div v-if="greenGenerator">
        <div id="greenGenerator">
          <img
            src="@/assets/greenGeneratorCh2.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
        <div id="QMgreenGenerator">
          <div>
            <img
              src="@/assets/questionMark.png"
              class="mr-3"
              alt="QuestionMark"
              width="130"
              height="110"
              @click="showETL3"
            />
          </div>
        </div>
        <div v-if="gGEcoTypeLabel">
          <div id="gGETL">
            <img
              src="@/assets/greenETLCh2.png"
              class="mr-3"
              alt="QuestionMark"
              width="220"
              height="200"
            />
          </div>
        </div>
      </div>
      <div v-if="yellowGenerator">
        <div id="yellowGenerator">
          <img
            src="@/assets/yellowGeneratorCh2.png"
            class="mr-3"
            alt="QuestionMark"
            width="200"
            height="170"
          />
        </div>
        <div id="QMyellowGenerator">
          <div>
            <img
              src="@/assets/questionMark.png"
              class="mr-3"
              alt="QuestionMark"
              width="130"
              height="110"
              @click="this.showETL4"
            />
          </div>
        </div>
        <div v-if="yGEcoTypeLabel">
          <div id="yGETL">
            <img
              src="@/assets/yellowETLCh2.png"
              class="mr-3"
              alt="QuestionMark"
              width="220"
              height="200"
            />
          </div>
        </div>
      </div>
      <div id="positivePowerbalance">
        <img
          src="@/assets/positivePowerbalance.png"
          class="mr-3"
          alt="QuestionMark"
          width="270"
          height="210"
        />
      </div>
      <div id="pPText">
        <p>Powerbalance:</p>
      </div>
      <div id="greenLightning">
        <img src="@/assets/greenBlitz.png" class="mr-3" alt="redLightning" width="175" height="225" />
      </div>
     
      <p id="chapter103Powerbalance">+{{positivePowerBalance}}kW</p>
    </div>
  </div>
</template>

<script>
import DigitalTypeLabel from "./components/DigitalTypeLabel.vue";
import TextBox from "./components/TextBox.vue";

export default {
  name: "App",
  components: {
    DigitalTypeLabel,
    TextBox,
  },
  data: function () {
    return {
      chapter101: true,
      chapter102: false,
      chapter103: false,
      chapter104: false,
      chapter201: false,
      chapter202: false,
      chapter203: false,
      redGenerator: false,
      blueGenerator: false,
      greenGenerator: false,
      yellowGenerator: false,
      rGEcoTypeLabel: false,
      bGEcoTypeLabel: false,
      gGEcoTypeLabel: false,
      yGEcoTypeLabel: false,
      smoke: false,
      shopValidated: false,
      positivePowerBalance: -180,
      pump1Power: -100,
      pump2Power: -80,
      endingExplanation: false,
      showExpShop: false,
    };
  },
  methods: {
    showExpInShop: function () {
      if (this.showExpShop == false) {
        this.showExpShop = true;
      } else {
        this.showExpShop = false;
      }
    },
    rent: function () {
      console.log("Renting done");
      if (this.checkForValidation()) {
        this.positivePowerBalance += 175;
        if (this.greenGenerator == true) {
          this.positivePowerBalance += 25;
        }
        if (this.blueGenerator == true) {
          this.positivePowerBalance += 50;
        }
        this.chapter101 = false;
        this.chapter102 = false;
        this.chapter103 = true;
      }
    },
    rentCh2: function () {
      console.log("Renting done in chapter 2");
      if (this.checkForValidation()) {
        this.positivePowerBalance += 175;
        if (this.greenGenerator == true) {
          this.positivePowerBalance += 25;
        }
        if (this.blueGenerator == true) {
          this.positivePowerBalance += 50;
        }
        this.chapter201 = false;
        this.chapter202 = false;
        this.chapter203 = true;
      }
    },
    autoRentCh2: function () {
      console.log("Auto renting done in chapter 2");
      this.positivePowerBalance += 200;
      this.redGenerator = true;
      this.greenGenerator = true;
      this.yellowGenerator = true;
      this.chapter201 = false;
      this.chapter202 = false;
      this.chapter203 = true;
    },
    goToStore: function () {
      console.log("Went to store");
      this.chapter101 = false;
      this.chapter102 = true;
    },
    goToStoreCh2: function () {
      console.log("Went to store in chapter 2");
      this.chapter201 = false;
      this.chapter202 = true;
    },
    showETL4: function () {
      if (this.chapter103 == true) {
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
      } else {
        if (this.yGEcoTypeLabel == false) {
          this.yGEcoTypeLabel = true;
          this.endingExplanation = true;
        } else {
          this.yGEcoTypeLabel = false;
        }
      }
    },
    showETL3: function () {
      if (this.chapter103 == true) {
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
      } else {
        if (this.gGEcoTypeLabel == false) {
          this.gGEcoTypeLabel = true;
          this.endingExplanation = true;
        } else {
          this.gGEcoTypeLabel = false;
        }
      }
    },
    showETL2: function () {
      if (this.chapter103 == true) {
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
      } else {
        if (this.rGEcoTypeLabel == false) {
          this.rGEcoTypeLabel = true;
          this.endingExplanation = true;
        } else {
          this.rGEcoTypeLabel = false;
        }
      }
    },
    showETL1: function () {
      if (this.chapter103 == true) {
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
      } else {
        if (this.bGEcoTypeLabel == false) {
          this.bGEcoTypeLabel = true;
          this.endingExplanation = true;
        } else {
          this.bGEcoTypeLabel = false;
        }
      }
    },
    endChapter1: function () {
      this.chapter201 = true;
      this.chapter104 = false;
      this.chapter103 = false;
      this.chapter102 = false;
      this.chapter101 = false;
      this.redGenerator = false;
      this.greenGenerator = false;
      this.blueGenerator = false;
      this.yellowGenerator = false;
      this.smoke = false;
      this.rGEcoTypeLabel = false;
      this.bGEcoTypeLabel = false;
      this.gGEcoTypeLabel = false;
      this.yGEcoTypeLabel = false;
      this.positivePowerBalance = -180;
    },
    endStory: function () {
      this.chapter101 = true;
      this.chapter102 = false;
      this.chapter103 = false;
      this.chapter104 = false;
      this.chapter203 = false;
      this.chapter202 = false;
      this.chapter201 = false;
      this.redGenerator = false;
      this.greenGenerator = false;
      this.blueGenerator = false;
      this.yellowGenerator = false;
      this.rGEcoTypeLabel = false;
      this.bGEcoTypeLabel = false;
      this.gGEcoTypeLabel = false;
      this.yGEcoTypeLabel = false;
      this.positivePowerBalance = -180;
    },
    checkForValidation() {
      this.shopValidated = true;
      if (this.valid.enoughKW == true) {
        return true;
      }
      return false;
    },
  },
  computed: {
    valid: function () {
      var enoughKW = false;

      if (
        this.redGenerator == true &&
        this.yellowGenerator == true &&
        this.greenGenerator == true
      ) {
        enoughKW = true;
      }
      if (
        this.redGenerator == true &&
        this.yellowGenerator == true &&
        this.blueGenerator == true
      ) {
        enoughKW = true;
      }
      if (
        this.redGenerator == true &&
        this.yellowGenerator == true &&
        this.greenGenerator == true &&
        this.blueGenerator == true
      ) {
        enoughKW = true;
      }

      return {
        enoughKW: enoughKW,
      };
    },
    powerBalance() {
      return this.pump1Power + this.pump2Power;
    },
  },
};
</script>

<style>
#rightPump {
  position: ab;
  right: 650px;
  bottom: 50px;
  margin: 0;
  padding: 0;
}
#leftPump {
  position: fixed;
  left: 580px;
  bottom: 200px;
  margin: 0;
  padding: 0;
}
#leftPic {
  position: fixed;
  left: 600px;
  bottom: 330px;
}
#redNeedPower {
  position: fixed;
  right: 50px;
  bottom: 650px;
  margin: 0;
  padding: 0;
}
#redLightning {
  position: fixed;
  left: 870px;
  top: 200px;
  margin: 0;
  padding: 0;
}

#rentGeneratorBtn {
  position: fixed;
  right: 130px;
  bottom: 580px;
  margin: 0;
  padding: 0;
}
#redGenerator {
  position: fixed;
  right: 55px;
  bottom: 50px;
  margin: 0;
  padding: 0;
}
#blueGenerator {
  position: fixed;
  right: 260px;
  bottom: 70px;
  margin: 0;
  padding: 0;
}
#greenGenerator {
  position: fixed;
  left: 42px;
  bottom: 50px;
  margin: 0;
  padding: 0;
}
#yellowGenerator {
  position: fixed;
  left: 300px;
  bottom: 40px;
  margin: 0;
  padding: 0;
}
#QMredGenerator {
  position: fixed;
  right: 20px;
  bottom: 140px;
  margin: 0;
  padding: 0;
}
#QMblueGenerator {
  position: fixed;
  right: 360px;
  bottom: 180px;
  margin: 0;
  padding: 0;
}
#QMgreenGenerator {
  position: fixed;
  left: 40px;
  bottom: 170px;
  margin: 0;
  padding: 0;
}
#QMyellowGenerator {
  position: fixed;
  left: 420px;
  bottom: 150px;
  margin: 0;
  padding: 0;
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
  top: 520px;
}
#bGETL {
  position: fixed;
  right: 300px;
  bottom: 280px;
}
#positivePowerbalance {
  position: fixed;
  right: 100px;
  top: 75px;
}
#pPText {
  position: fixed;
  right: 125px;
  top: 120px;
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
  top: 200px;
  margin: 0;
  padding: 0;
}
#showSmoke {
  position: fixed;
  right: 150px;
  bottom: 100px;
}
#chapter1EndingBtn {
  position: fixed;
  left: 850px;
  bottom: 50px;
}
#chapter103Powerbalance {
  position: fixed;
  right: 190px;
  top: 170px;
  color: black;
  font-size: 40px;
}
#etlTrustExp {
  position: fixed;
  right: 400px;
  top: 200px;
}
#trustPfeil {
  position: fixed;
  right: 250px;
  top: 400px;
}
#trustText {
  position: fixed;
  right: 430px;
  top: 250px;
  color: black;
  font-size: 20px;
}
#expProblem {
  position: fixed;
  left: 50px;
  top: 100px;
}
#expProblemText {
  position: fixed;
  left: 75px;
  top: 150px;
  color: black;
  font-size: 25px;
}
#useCaseTextCh2 {
  position: fixed;
  left: 130px;
  top: 150px;
  color: black;
  font-size: 25px;
}
#useCaseCh2 {
  position: fixed;
  left: 80px;
  top: 100px;
  margin: 0;
  padding: 0;
}
#chain {
  position: fixed;
  left: 105px;
  top: 400px;
  margin: 0;
  padding: 0;
}
#QMShop {
  position: absolute;
  left: 350px;
  top: 350px;
}
#expShop {
  position: relative;
}
#expShopText {
  position: relative;
  left: 0px;
  top: -175px;
  color: black;
  font-size: 18px;
  clear: both;
}
#endButton {
  position: absolute;
  bottom: 20px;
  right: 900px;
}

#app {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: url("assets/landingPage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


