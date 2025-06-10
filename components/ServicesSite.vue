<template>
    <div class="div1">
        <div class="divbtns">
            <button type="submit" name="services" class="radio-site" v-for="tab in tabs" :key="tab.id" @click="changepage(tab)">{{ tab.value }}</button>
        </div>
        
            <div class="div2" >
                <transition name="slide-fade" mode="out-in">
                    <div class="page" v-if="shTab === 'tab1'" :key="shTab"><h1>page1</h1></div>
                    <div class="page" v-else-if="shTab === 'tab2'" ><h1>page2</h1></div>
                    <div class="page" v-else-if="shTab === 'tab3'"><h1>page3</h1></div>
                    <div class="page" v-else-if="shTab === 'tab4'"><h1>page4</h1></div>
                    <div class="page" v-else-if="shTab === 'tab5'"><h1>page5</h1></div>
                </transition>
            </div>
        

    </div>
</template>

<script>
export default {
  name: 'ServicesSite',
  data() {
    return {
      tabs:[{name:'tab5', value:'درگاه پرداخت'} , {name:'tab4', value:'سرویس های استعلامی'} , {name:'tab3', value:'واریز شناسه دار'} , {name:'tab2', value:'تسویه و انتقال وجه'} , {name:'tab1', value:'احراز هویت بایومتریک'}],
      shTab: "tab1"
    }
  },
  methods:{
    changepage(tab){
        this.shTab = tab.name;
    }
  }
}

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
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-fade-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.div1{
    width: 80%;
    height: 610px;
    margin: auto;
}
.divbtns{
    width: 100%;
    display: flex;
    height: 100px;
    direction: rtl;
}
.radio-site{
    width: 19%;
    height: 80px;
    margin: auto;
    border: 0px;
    background-color: #f2f5fb;
    color: rgba(48,60,79,.3);
    font-family: Vazir3;
    font-size: 18px;
    font-weight: bolder;
}
.div2{
    width: 100%;
    height: 510px;
    background-color: white;
    box-shadow: 0px 10px 20px rgb(231, 231, 231);
    display: flex;
    overflow-x: auto;
}
.page{
    width: 100%;
    height: 100%;
}
.page h1{
    width: 100%;
    text-align: center;
}
</style>