<template>
  <div id="app" class="fullsize">

      <!-- overlay -->
  <div style="width: 100vw; height:100vh;top:0;left:0;position:absolute;z-index:9;background:white;"  v-if="showHello">
  </div>
    
 <TextBox
      v-if="showHello"
      left="5vw"
      top="10vh"
      width="90vw"
      style="z-index: 10;"
    >
      <div style="padding:1vw;width:100%;">
        <p>
          This is an interactive presentation of the usage of data and IDs <a href="https://github.com/gs1-germany-innolab/CertifiedByGS1-Konzepte" target="_blank">Certified by GS1</a>
          in a real life use case developed by <a href="https://www.ekupd.com/" target="_blank">EKU Power Drives</a>.          
          
        </p>
     
        <b style="margin-top:2vw;margin-bottom:2vw;">
            Interested in the Ideas? Develop them with us!
            Contact <a href="mailto:certified@gs1.de">the Certified by GS1 Team</a>!
        </b>
      </div>

      <progress-bar-to-button
        :counter="100"
        @click="showHello=false;"
        :color="lighningBlue"
        style="margin:5vw;"
        >Start the Demo</progress-bar-to-button
      >
    </TextBox>


<!-- pumps -->
<div v-for="(pump, index) in pumps"
        :key="pump.gs1id"
:style="`top:33vw;left:${18 + 25 * index}vw;position:absolute;z-index:1;width:13vw;`">
      <img
        src="@/assets/copyRighted/pump.png"
        alt="Pump"
        style="width:100%;"
      />
    <ShowHideDigitalTypeLabel
      :color="hacked ? lightningRed : lightningGreen"
      :type="pumps[index]"
      top="0"
      left="2vw"
      style="z-index: 2"
      :certified="certified"
      :show="triggerTypelabel"
    ></ShowHideDigitalTypeLabel>
</div>

    <TextBox
      v-if="!dynamic"
      right="1vw"
      top="1vh"
      width="35vw"
      :color="powerBalance < 0 ? lightningRed : lightningGreen"
      style="z-index: 1; font-weight: bold"
      >Total Capacity {{ powerBalance }} kW</TextBox
    >

    <!-- Balance/Load Indicator -->
    <TextBox
      v-if="dynamic"
      right="1vw"
      top="1vh"
      width="35vw"
      :color="totalLoad === 0 ? lightningGreen : lightningRed"
      style="z-index: 1; font-weight: bold"
    >
      Power Balance: {{ Math.round(totalLoad) }} kW
      <br />
    </TextBox>

    <!-- Shop Button -->
    <button
      type="button"
      class="btn btn-info btn-lg"
      @click="
        () => {
          this.showStore = true;
        }
      "
      v-if="powerBalance < 0 && !showNoCertText"
      :style="`width:35vw; right:1vw; top:7vw;z-index:2; position:absolute;background-color:${this.lighningBlue}; border-style: none; border-radius: 0;`"
    >
      Rent Generators
    </button>

    <!-- Lighning icon -->
    <div style="position: absolute; left: 40vw; top: 15vw; z-index: 1">
      <img
        :src="
          powerBalance < 0 || this.totalLoad != 0
            ? require(`@/assets/redLightning.png`)
            : require(`@/assets/greenLightning.png`)
        "
        class="mr-3"
        alt="Red Lightning"
        style="width: calc(5px + 10vw);"
      />
    </div>

    <!-- explain 1 -->
    <TextBox
      v-if="showInitText"
      left="1vw"
      top="1vw"
      width="35vw"
      style="z-index: 1"
      show="true"
      >You are mining resources in a remote area without electricity. You need
      to setup a micro grid to power your machines.</TextBox>

    <!-- shop -->
    <div
      class="jumbotron"
      style="
        background-color: white;
        position: absolute;
        z-index: 10;
        width: 96vw;
        height: 96vh;
        top: 2vh;
        left: 2vw;
        overflow: auto;
      "
      v-if="showStore"
    >
      <h2 class="display-4">Distributor Eve</h2>
      <p class="lead" >
        Rent generators to produce the electric energy needed in
        the field.
      </p>
      <hr class="my-4" />
      <!-- Generators (in shop) -->
      <div
        style="display: inline-block"
        v-for="(generator, index) in generators"
        :key="generator.pic"
      >
        <img :src="generator.pic" class="mr-3" alt="Generator" width="200" />
        <DigitalTypeLabel
          :style="`z-index:${20 - index}; position:relative;`"
          :type="generator"
          :color="lightningBlue"
          width="190px"
          height="210px"
          :certified="certified"
        ></DigitalTypeLabel>
        <div class="form-check-inline mr-5 ml-5">
          <input
            class="form-check-input position-static mr-5 ml-5"
            type="checkbox"
            id="blankCheckbox"
            value="option1"
            aria-label="..."
            v-model="generator.active"
          />
        </div>
      </div>
      <hr class="my-4" />
      <h2 style="color: #454545">
        Energy demand:
        <span v-if="powerBalance < 0">{{ -powerBalance }}kW</span>
        <span v-if="powerBalance >= 0">satisfied</span>
      </h2>
      <button
        type="button"
        class="btn btn-info btn-lg"
        @click="rent"
        :style="`background-color:${this.lighningBlue};border-style: none; border-radius: 0;`"
      >
        Rent Generators
      </button>
      <button
        type="button"
        class="close"
        aria-label="Close"
        style="position: absolute; right: 1vw; top: 0.5vw;border-style: none; border-radius: 0;"
        @click="rent"
      >
        <span aria-hidden="true">&times;</span>
      </button>

      <TextBox
        v-if="certified"
        left="1vw"
        top="1vw"
        width="35vw"
        style="z-index: 21"
        show="true"
        >Authenticity of the digital type label is guaranteed by a signature of
        the manufacturer. The manufactruer's identity is authenticated by
        GS1.</TextBox
      >
    </div>
    <!-- end shop -->

    <!-- Generators (in desesrt) -->
    <div
      v-for="(generator, index) in generators"
      :key="generator.pic"
      :style="`z-index:2;display:inline-block;position:absolute;top:41vw;left: ${
        index * 25 + 5
      }vw;`"
    >
      <div v-if="generator.active">
        <img
          :src="generator.pic"
          class="mr-3"
          alt="Generator"
          style="width: calc(10vw + 50px); position: absolute; left: 0; top: 0"
        />
        <img
          src="@/assets/smoke.png"
          class="mr-3"
          alt="Smoke"
          style="
            width: calc(8vw + 10px);
            position: absolute;
            top: -3vw;
            left: -3vw;
          "
          v-if="generator.smoking"
        />

        <ShowHideDigitalTypeLabel
          :type="generator"
          :color="generator.smoking ? lightningRed : lightningGreen"
          width="190px"
          height="210px"
          style="position: relative; top: 0; left: 2vw"
          :show="generator.smoking || triggerTypelabel"
          :certified="certified"
        ></ShowHideDigitalTypeLabel>
      </div>
    </div>
    <!-- end Generators (in desesrt) -->

    <!-- explain 2 -->
    <TextBox
      v-if="showNoCertText && !overheated"
      left="1vw"
      top="1vw"
      width="35vw"
      style="z-index: 1"
      show="true"
      >You have rented a few generators according to the digital type label
      provided by the retailer. Everything seems to be running
      smoothly.
      </TextBox>

    <!-- smoking progress button -->
    <progress-bar-to-button
      v-if="showNoCertText && !overheated"
      :counter="100 - 10 * timer"
      style="width: 35vw; right: 1vw; top: 7vw; z-index: 2; position: absolute"
      :color="lightningRed"
      v-on:click="overheat"
      >Are the generators working as expected?</progress-bar-to-button
    >

    <!-- explain 3 -->
    <TextBox
      v-if="showNoCertText && overheated"
      left="1vw"
      top="1vw"
      width="35vw"
      :color="lightningRed"
      style="z-index: 1"
      show="true"
    >
      The Digital Type Label was tuned!
      <br />The Generator has been operated outside specifications!
      <br />Overheating leads to a power outage.
    </TextBox>

    <!-- certify progress button -->
    <progress-bar-to-button
      v-if="showNoCertText && overheated"
      :counter="100 - 10 * timer"
      @click="endNoCert"
      style="width: 35vw; right: 1vw; top: 7vw; z-index: 2; position: absolute"
      :color="lighningBlue"
    >
      What if the digital type label had been
      <br />Certified By GS1 ?
    </progress-bar-to-button>

    <!----------------------------------------------------------------------------------------------------------------------->

    <!-- explain 4 -->
    <TextBox
      v-if="showExplainCertified && powerBalance < 0"
      left="1vw"
      top="1vw"
      width="35vw"
      :color="lightningGreen"
      style="z-index: 2"
    >
      Problem: How can the user know that data is authentic?
      <br />Solution: A trustworthy digital signature by the manufacturer can be
      verified automatically.
      <br />
      <img
        src="@/assets/short-chain.png"
        class="mr-3"
        alt="Certificate Chain"
        style="width: 30vw"
      />
    </TextBox>

    <!-- explain 5 -->
    <TextBox
      v-if="showExplainCertified && powerBalance >= 0"
      left="1vw"
      top="1vw"
      width="35vw"
      style="z-index: 1"
      show="true"
    >
      A complete chain of trust authentificates the identity of the device
      manufacturer and the correctness of the type labels.
      <br />Congratulations! You have setup a stable micro grid!
    </TextBox>

    <!-- certify progress button -->
    <progress-bar-to-button
      v-if="showExplainCertified && powerBalance >= 0"
      :counter="100 - 10 * timer"
      @click="endTypeLabelStory"
      style="width: 35vw; right: 1vw; top: 7vw; z-index: 2; position: absolute"
      :color="lighningBlue"
      >Start Operations</progress-bar-to-button
    >

    <!----------------------------------------------------------------------------------------------------------------------->

    <!-- explain 6 -->
    <TextBox
      v-if="dynamic && !hacked && !certified"
      left="1vw"
      top="1vw"
      width="35vw"
      style="z-index: 1"
      >Dynamic data is used to regulate the grid, concretely to optimize the
      generator efficiency and hence minimise fuel consumption.</TextBox
    >

    <progress-bar-to-button
      v-if="dynamic && !hacked && !certified"
      :counter="100 - 10 * timer"
      @click="hackData"
      style="width: 35vw; right: 1vw; top: 7vw; z-index: 2; position: absolute"
      color="black"
      >Hack Data!</progress-bar-to-button
    >

    <!-- explain 7 -->
    <TextBox
      v-if="hacked"
      left="1vw"
      top="1vw"
      width="35vw"
      :color="lightningRed"
      style="z-index: 1"
    >
      The status information received from the pumps has been hacked to show 0
      load. All generators have been switched off and your operations grind to a
      hold.
    </TextBox>

    <progress-bar-to-button
      v-if="dynamic && hacked && !certified"
      :counter="100 - 10 * timer"
      @click="dynamicCert"
      style="width: 35vw; right: 1vw; top: 7vw; z-index: 2; position: absolute"
      color="lighningBlue"
    >
      What if the dynamic data had been
      <br />Certified By GS1 ?
    </progress-bar-to-button>

    <!----------------------------------------------------------------------------------------------------------------------->

    <TextBox
      v-if="dynamic && certified && !showPPU"
      left="1vw"
      top="1vw"
      width="35vw"
      :color="lightningGreen"
      style="z-index: 1"
    >
      Problem: Is the machine "who" it claims to be? Is the data from the
      machine authentic?
      <br />Solution: Again, a trustworthy digital signature can remedy the
      situation. Here the machine authenticates its own data by a digital
      signature. The machine is authenticated by the manufacturer who in turn
      gets an authentic Id from GS1.
      <br />
      <img
        src="@/assets/chain.png"
        class="mr-3"
        alt="Certificate Chain"
        style="width: 30vw"
      />
    </TextBox>

    <progress-bar-to-button
      v-if="dynamic && certified && !showPPU"
      :counter="100 - 10 * timer"
      @click="
        showPPU = true;
        timer = 10;
      "
      style="width: 35vw; right: 1vw; top: 7vw; z-index: 2; position: absolute"
      :color="lighningBlue"
      >Pay Per Use</progress-bar-to-button
    >

    <TextBox
      v-if="showPPU"
      left="1vw"
      top="1vw"
      width="35vw"
      style="z-index: 1"
    >
      Certified usage data is signed by a trusted device and can not be tampered
      with by you, the rental company, or anyone. Such trustworthy data is
      needed as a basis for pay per use models to bill the used kWhs instead of
      just renting the generator for a fixed time period.
      <br />
      <img
        src="@/assets/chain.png"
        class="mr-3"
        alt="Certificate Chain"
        style="width: 30vw"
      />
    </TextBox>

    <progress-bar-to-button
      v-if="showPPU"
      :counter="100 - 10 * timer"
      @click="
        showCredits = true;
        timer = 10;
      "
      style="width: 35vw; right: 1vw; top: 7vw; z-index: 2; position: absolute"
      :color="lighningBlue"
      >Credits</progress-bar-to-button
    >

    <TextBox
      v-if="showCredits"
      left="1vw"
      top="1vw"
      width="98vw"
      style="z-index: 10"
    >
      <a
        href="https://github.com/gs1-germany-innolab/eku-pd-certified-by-gs1-demo"
        class="github-corner"
        aria-label="View source on GitHub"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style="
            fill: #151513;
            color: #fff;
            position: absolute;
            top: 0;
            border: 0;
            right: 0;
          "
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style="transform-origin: 130px 106px"
            class="octo-arm"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            class="octo-body"
          />
        </svg>
      </a>
      <div style="font-size: 1vw;text-align:left;padding:1vw;width:100%;">
        <h1>Credits</h1>
        <p>
          This presentation hihglights how the ideas developed within the
          Certified by GS1 project by <a href="https://www.gs1-germany.de/" target="_blank">GS1 Germany</a> can be applied in a real life
          use case developed by <a href="https://www.ekupd.com/" target="_blank">EKU Power Drives</a>. The initial Design and implementation of this
          presentation was done by Kevin Ochudlo and Dr. Sebastian Schmittner of <a href="https://www.eecc.de/" target="_blank">EECC</a>. The designed was improved in version 2 
          to meet the GS1 corporate design criteria
          with the help of Gina Hinrichs, GS1. Many thanks to all contributors! 
        </p>
            <ul style="display: flex; justify-content: space-between; margin:3vw;">
            <li style="display: inline-block;">
            <a href="https://github.com/gs1-germany-innolab/CertifiedByGS1-Konzepte" target="_blank">
          <img
            src="@/assets/Certified_by_GS1_Logo.png"
            class="logo"
            alt="Certified by GS1"
            title="Certified by GS1"
          />
        </a>
            </li>
            <li style="display: inline-block;">
        <a href="https://www.gs1-germany.de/" target="_blank">
          <img
            src="@/assets/GS1-Germany-Logo.png"
            class="logo"
            alt="GS1 Germany"
            title="GS1 Germany"
          />
        </a>
        </li>
            <li style="display: inline-block;">
        <a href="https://www.ekupd.com/" target="_blank">
          <img
            src="@/assets/EKUlogoh.png"
            class="logo"
            alt="EKU Power Drives"
            title="EKU Power Drives"
          />
        </a>
        </li>
            <li style="display: inline-block;">
        <a href="https://www.eecc.de/" target="_blank">
          <img
            src="@/assets/eecc_logo.png"
            class="logo"
            alt="EECC"
            title="EECC"
          />
        </a>
        </li>
        </ul>
        <br>
        <h1 style="margin-top:2vw;margin-bottom:2vw;">
            Interested in the Ideas? Develop them with us!
            Contact <a href="mailto:certified@gs1.de">the Certified by GS1 Team</a>!
        </h1>
        <br>
        <p>
        This interactive presentation was build with
        <ul>
          <li>
            <a href="https://vuejs.org" target="_blank">Vue.js</a>
          </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
          </li>
        </ul>
        <a
          href="https://github.com/gs1-germany-innolab/eku-pd-certified-by-gs1-demo"
          >It is open source on Github.</a
        >
        </p>
      </div>

      <progress-bar-to-button
        v-if="showPPU"
        :counter="100 - 10 * timer"
        @click="restart"
        :color="lighningBlue"
        >Restart</progress-bar-to-button
      >
    </TextBox>
  </div>
</template>

<script>
import DigitalTypeLabel from "./components/DigitalTypeLabel.vue";
import ShowHideDigitalTypeLabel from "./components/ShowHideDigitalTypeLabel.vue";
import TextBox from "./components/TextBox.vue";
import ProgressBarToButton from "./components/ProgressBarToButton.vue";

export default {
  name: "App",
  components: {
    DigitalTypeLabel,
    TextBox,
    ShowHideDigitalTypeLabel,
    ProgressBarToButton,
  },
  data: function () {
    return {
      showHello: true,
      showInitText: true,
      showStore: false,
      showNoCertText: false,
      overheated: false,
      timer: null,
      timerInterval: null,
      randomDataInterval: null,
      certified: false,
      showExplainCertified: false,
      hacked: false,
      dynamic: false,
      totalLoad: 0,
      triggerTypelabel: false,
      showPPU: false,
      showCredits: false,
      lightningRed: "#F26334",
      lightningGreen: "#00b74f",
      lighningBlue: "#002c6c",

      pumps: [
        {
          caption: "",
          capacity: -100,
          asset: "Pump 1",
          gs1id: "8004 40471112342",
          label3: "Manufacturer 001",
          label4: "",
          health: 99,
          load: -70,
        },
        {
          caption: "",
          capacity: -80,
          asset: "Pump 2",
          gs1id: "8004 061414112345401",
          label3: "Manufacturer 002",
          label4: "",
          health: 99,
          load: -50,
        },
        {
          caption: "",
          capacity: -30,
          asset: "Pump 3",
          gs1id: "8004 40471112322",
          label3: "Manufacturer 003",
          label4: "",
          health: 99,
          load: -20,
        },
      ],
      generators: [
        {
          caption: "",
          label4: "",
          capacity: 100,
          asset: "Generator 1",
          gs1id: "8004 404711165434",
          label3: "Manufacturer A",
          active: false,
          pic: require("@/assets/copyRighted/Generator1.png"),
          smoking: false,
          health: 99,
          load: 50,
        },
        {
          caption: "",
          label4: "",
          capacity: 80,
          asset: "Generator 2",
          gs1id: "8004 40471116542",
          label3: "Manufacturer A",
          active: false,
          pic: require("@/assets/copyRighted/Generator2.png"),
          smoking: false,
          health: 99,
          load: 20,
        },
        {
          caption: "",
          label4: "",
          capacity: 50,
          asset: "Generator 3",
          gs1id: "8004 404712123",
          label3: "Manufacturer B",
          active: false,
          pic: require("@/assets/copyRighted/Generator3.png"),
          smoking: false,
          health: 99,
          load: 20,
        },
        {
          caption: "",
          label4: "",
          capacity: 30,
          asset: "Generator 4",
          gs1id: "8004 40994712321",
          label3: "Manufacturer C",
          active: false,
          pic: require("@/assets/copyRighted/Generator4.png"),
          smoking: false,
          health: 99,
          load: 20,
        },
      ],
    };
  },
  mounted: function () {
    this.resetPumpsAndGenerators();
    this.timerInterval = setInterval(this.tick, 250);
    this.randomDataInterval = setInterval(this.randomData, 500);
  },
  beforeDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    if (this.randomDataInterval) {
      clearInterval(this.randomDataInterval);
      this.randomDataInterval = null;
    }
  },
  methods: {
    restart: function () {
      location.reload();
    },
    tick: function () {
      //console.log(this.timer);
      this.timer -= 0.25;
    },
    overheat() {
      this.overheated = true;
      console.log("BOOM! ;)");
      console.log(this.generators);
      for (var generator of this.generators) {
        if (generator.active) {
          console.log("smoking:");
          console.log(generator);
          console.log("power balance:", this.powerBalance);
          generator.smoking = true;
          generator.label4 = "Load Capacity: ??? kW";
          if (this.powerBalance < 0) {
            break;
          }
        }
      }
      this.timer = 10;
    },
    rent: function () {
      console.log("Renting");
      this.showStore = false;
      if (this.powerBalance < 0) {
        return;
      }

      this.showInitText = false;
      this.timer = 10;
      if (!this.certified) {
        this.showNoCertText = true;
      }
    },
    resetPumpsAndGenerators() {
      for (var generator of this.generators) {
        generator.caption = "Digital Type Label";
        generator.active = false;
        generator.smoking = false;
        generator.label4 = "Load Capacity: " + generator.capacity + " kW";
      }
      for (var pump of this.pumps) {
        pump.label4 = "Max. Load: " + -pump.capacity + " kW";
        pump.caption = "Digital Type Label";
      }
    },
    endNoCert: function () {
      this.certified = true;
      this.showExplainCertified = true;
      this.showNoCertText = false;
      this.resetPumpsAndGenerators();
    },
    endTypeLabelStory: function () {
      this.certified = false;
      this.showExplainCertified = false;
      this.dynamic = true;
      this.timer = 10;
      this.triggerTypelabel = false;
      this.triggerTypelabel = true;
    },
    randomData: function () {
      if (!this.dynamic) {
        return;
      }
      this.totalLoad = 0;
      var apparentLoad = 0;
      for (var pump of this.pumps) {
        pump.caption = "Status";
        pump.health += 1.0 - 2 * Math.random();
        pump.health = Math.min(Math.max(10, pump.health), 100);
        pump.label3 = "Health: " + Math.round(pump.health) + " %";

        pump.load += 2.0 - 4 * Math.random();
        pump.load = Math.min(Math.max(pump.capacity, pump.load), 0);
        this.totalLoad += pump.load;
        if (!this.hacked) {
          apparentLoad += pump.load;
        }
        pump.label4 =
          "Current Load: " +
          (this.hacked ? "0" : Math.round(-pump.load)) +
          " kW";
      }

      for (var generator of this.generators) {
        generator.caption = "Status";
        generator.load = Math.min(generator.capacity, -apparentLoad);
        this.totalLoad += generator.load;
        apparentLoad += generator.load;

        generator.health += 2.0 - 4 * Math.random();
        generator.health = Math.min(Math.max(10, generator.health), 100);
        generator.label3 = "Health: " + Math.round(generator.health) + " %";
        if (generator.load === 0) {
          generator.health = 100;
          generator.label3 = "Shut Down.";
        }

        generator.label4 =
          "Current Load: " + Math.round(generator.load) + " kW";
      }
    },
    hackData: function () {
      this.hacked = true;
      this.timer = 10;
    },
    dynamicCert: function () {
      this.hacked = false;
      this.certified = true;
      this.triggerTypelabel = false;
      this.triggerTypelabel = true;
      this.timer = 10;
    },
  },
  computed: {
    powerBalance() {
      return (
        this.pumps.map((x) => x.capacity).reduce((x, y) => x + y, 0) +
        this.generators
          .map((x) => (x.active && !x.smoking ? x.capacity : 0))
          .reduce((x, y) => x + y, 0)
      );
    },
  },
};
</script>

<style>
/* unvisited link */
a:link {
  color: #008dbd;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: #008dbd;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: #008dbd;
  text-decoration: none;
}

/* selected link */
a:active {
  color: #008dbd;
  text-decoration: none;
}

.fullsize {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

html,body{
    background-color: #a87b62;
}

#app {
  height: auto;
  padding-top: 53%; /* css trick to set hight to percentage of width */
  background-image: url("assets/copyRighted/bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: "Gotham SSm A", "Gotham SSm B", Verdana, sans-serif;
  font-size: calc(6px + 1vw);
  text-align: center;
  color: #002c6c;
}

.logo {
  height: calc(8vw + 10px);
  margin: auto;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
