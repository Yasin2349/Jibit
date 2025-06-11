<template>
  <div class="div1">
    <div class="divbtns">
      <button
        type="submit"
        class="radio-site"
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: shTab === tab.name }"
        @click="changepage(tab)"
      >
        {{ tab.value }}
      </button>
    </div>

    <div class="div2">
      <transition :name="transitionName" mode="out-in">
        <div class="page" :key="shTab">
          <div v-if="shTab === 'tab1'" class="page1" style="background-color: blue;">page1</div>
          <div v-else-if="shTab === 'tab2'" class="page1" style="background-color: red;">page2</div>
          <div v-else-if="shTab === 'tab3'" class="page1" style="background-color: black;">page3</div>
          <div v-else-if="shTab === 'tab4'" class="page1" style="background-color: aqua;">page4</div>
          <div v-else-if="shTab === 'tab5'" class="page1" style="background-color: greenyellow;">page5</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesSite",
  data() {
    return {
      tabs: [
        { name: "tab5", value: "درگاه پرداخت" },
        { name: "tab4", value: "سرویس های استعلامی" },
        { name: "tab3", value: "واریز شناسه دار" },
        { name: "tab2", value: "تسویه و انتقال وجه" },
        { name: "tab1", value: "احراز هویت بایومتریک" },
      ],
      shTab: "tab1",
      lastTabIndex: 0,
      transitionName: "slide-left",
    };
  },
  methods: {
    changepage(tab) {
      const newIndex = this.tabs.findIndex((t) => t.name === tab.name);
      this.transitionName =
        newIndex > this.lastTabIndex ? "slide-left" : "slide-right";
      this.lastTabIndex = newIndex;
      this.shTab = tab.name;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: Vazir;
  src: url(../public/Vazir-Bold.ttf);
}
@font-face {
  font-family: Vazir2;
  src: url(../public/Vazir-Thin.ttf);
}
@font-face {
  font-family: Vazir3;
  src: url(../public/Vazir-Medium.ttf);
}
.div1 {
  width: 80%;
  height: 610px;
  margin: auto;
  margin-bottom: 80px;
}
.divbtns {
  width: 100%;
  display: flex;
  height: 100px;
  direction: rtl;
}
.radio-site {
  width: 19%;
  height: 80px;
  margin: auto;
  border: 0px;
  background-color: #f2f5fb;
  color: rgba(57, 65, 78, 0.438);
  font-family: Vazir3;
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 15px;
}
.radio-site.active {
  background-color: hsl(0, 0%, 100%);
  border: solid 1px rgb(224, 224, 224);
  color: rgb(0, 0, 0);
}

.div2 {
  width: 100%;
  height: 510px;
  background-color: white;
  box-shadow: 0px 10px 20px rgb(231, 231, 231);
  display: flex;
  overflow-x: hidden;
  position: relative;
}
.page {
  width: 100%;
  height: 100%;
  position: absolute;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease;
}
.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}


.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease;
}
.slide-right-enter-from {
transform: translateX(100%);
  opacity: 0;
  
}
.slide-right-enter-to {
    transform: translateX(0);
  opacity: 1;
  
}
.slide-right-leave-from {
    transform: translateX(0);
  opacity: 1;
  
}
.slide-right-leave-to {
    transform: translateX(-100%);
  opacity: 0;
}
.page1{
    text-align: center;
    padding-top: 200px;
    font-family: Vazir3;
    font-size: 20px;
    font-weight: bolder;
    color: rgb(90, 90, 90);
    height: 100%;
}
</style>
