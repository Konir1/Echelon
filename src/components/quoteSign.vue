<template>
  <div class="container">
    <h1>
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
</style>

<script>
import { defineComponent, ref } from "vue";
import quotes from "../assets/quotes.json";

export default defineComponent({
  name: "quoteSign",
  setup() {
    let quoteArr = [];
    quotes["quotes"].forEach((element) => {
      quoteArr.push(element.quote);
    });

    //bit of randomization for the quotes

    for (let i = quoteArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quoteArr[i], quoteArr[j]] = [quoteArr[j], quoteArr[i]];
    }

    return {
      typeArray: ref(quoteArr),
    };
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typingSpeed: 65,
      erasingSpeed: 35,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-family: "MachineStd";
}
h1 {
  font-size: 2.8rem;
  color: white;
  span.typed-text {
    color: #d2b94b;
    font-family: "MachineStd";
  }
  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 2px;
    background-color: #daa520;
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    animation: none;
  }
}
@keyframes cursorBlink {
  49% {
    background-color: #daa520;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
