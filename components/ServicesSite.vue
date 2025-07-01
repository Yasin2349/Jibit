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

          <!-- tab2: تسویه و انتقال وجه -->
          <div v-if="shTab === 'tab2'" class="pagee1">
            <div class="img-pag5"></div>
            <div class="document-page1">
              <div class="div-logo-page1"><div class="logo"><div class="logo5"></div></div></div>
              <div class="div-title-page1"><H3 class="title">احراز هویت بایومتریک</H3></div>
              <div class="div-text-page1"><p class="text">
                با سرویس احراز هویت بایومتریک، می‌توان به بررسی ادعای کاربر در خصوص هویت خود با استفاده از داده‌های بصری، تکنیک‌های پردازش تصویر (Image Processing) و یادگیری عمیق (Deep Learning) پرداخت و آن‌ را تایید و یا رد کرد.
              </p></div>
              <div class="div-btn-more-page1"><input type="submit" value="اطلاعات بیشتر   >" class="btn-more"></div>
            </div>
          </div>

          <!-- tab1 -->
          <div v-else-if="shTab === 'tab1'" class="pagee2">
            <div class="img-pag4"></div>
            <div class="document-page1">
              <div class="div-logo-page1"><div class="logo"><div class="logo4"></div></div></div>
              <div class="div-title-page1"><H3 class="title">تسویه و انتقال وجه</H3></div>
              <div class="div-text-page1"><p class="text">
                امکان انتقال وجوه در وب‌سرویس جیبیت به شیوه‌های متنوع برای صاحبان کسب و کار فراهم شده است. امکان جابه‌جایی وجوه از مبدا پلتفرم جیبیت به حساب مشتریان، همکاران و شرکای تجاری شما در تمامی بانک‌ها امکان‌پذیر است.
              </p></div>
              <div class="div-btn-more-page1"><input type="submit" value="اطلاعات بیشتر   >" class="btn-more"></div>
            </div>
          </div>

          <!-- tab3 -->
          <div v-else-if="shTab === 'tab3'" class="pagee3">
            <div class="img-pag3"></div>
            <div class="document-page1">
              <div class="div-logo-page1"><div class="logo"><div class="logo3"></div></div></div>
              <div class="div-title-page1"><H3 class="title">واریز شناسه دار</H3></div>
              <div class="div-text-page1"><p class="text">
                سرویس واریز شناسه‌دار این امکان را به مشتریان کسب و کار‌ها می‌دهد تا بدون محدودیت در مبلغ تراکنش و با انتخاب روش مناسب از خدمات واریز وجه و پرداخت استفاده کنند.
              </p></div>
              <div class="div-btn-more-page1"><input type="submit" value="اطلاعات بیشتر   >" class="btn-more"></div>
            </div>
          </div>

          <!-- tab4 -->
          <div v-else-if="shTab === 'tab4'" class="pagee4">
            <div class="img-pag2"></div>
            <div class="document-page1">
              <div class="div-logo-page1"><div class="logo"><div class="logo2"></div></div></div>
              <div class="div-title-page1"><H3 class="title">سرویس های استعلامی</H3></div>
              <div class="div-text-page1"><p class="text">
                با وب‌سرویس استعلامی جیبیت کسب و کار‌ها می‌توانند با ایجاد خدماتی نوین در سنجش اصالت اطلاعات بانکی و شناسایی هویت اشخاص تجربه‌ای جدید را برای مشتریان خود به وجود آورند.
              </p></div>
              <div class="div-btn-more-page1"><input type="submit" value="اطلاعات بیشتر   >" class="btn-more"></div>
            </div>
          </div>

          <!-- tab5 -->
          <div v-else-if="shTab === 'tab5'" class="page5" >
            <div class="img-pag1"></div>
            <div class="document-page1">
              <div class="div-logo-page1"><div class="logo"><div class="logo1"></div></div></div>
              <div class="div-title-page1"><H3 class="title">درگاه پرداخت</H3></div>
              <div class="div-text-page1"><p class="text">
                جیبیت به عنوان یکی از بزرگ‌ترین پرداخت‌یار‌های رسمی شاپرک (بانک مرکزی)، با ارائه درگاه پرداخت با قابلیت اتصال به درگاه‌های متنوع و مسیردهی هوشمند بین PSPها در راستای پایداری در سیستم پرداخت و افزایش درآمد در کنار کسب و کارها ایستاده است.
              </p></div>
              <div class="div-btn-more-page1"><input type="submit" value="اطلاعات بیشتر   >" class="btn-more"></div>
            </div>
          </div>

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
      this.transitionName = newIndex > this.lastTabIndex ? "slide-left" : "slide-right";
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
  margin-bottom: 0px;
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
  color: rgb(85, 86, 129);
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
  display: block;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
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
  transition: all 0.3s ease;
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
.pagee1{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pagee2{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pagee3{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pagee4{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pagee5{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.document-page1{
    width: 35%;
    height: 100%;
}
.img-pag1{
  width: 65%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/slide1.svg);
}
.img-pag2{
  width: 65%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/slide2.svg);
}
.img-pag3{
  width: 65%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/slide3.svg);
}
.img-pag4{
  width: 65%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/slide4.svg);
}
.img-pag5{
  width: 65%;
    height: 100%;
    background-position: left;
    background-size: cover;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/slide5.svg);
}
.page2{
    text-align: center;
    padding-top: 200px;
    font-family: Vazir3;
    font-size: 20px;
    font-weight: bolder;
    color: rgb(255, 255, 255);
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/slide1.svg);
    height: 100%;
    width: 65%;
    background-position: center;
    background-size: cover;
}
.page3{
    text-align: center;
    padding-top: 200px;
    font-family: Vazir3;
    font-size: 20px;
    font-weight: bolder;
    color: rgb(255, 255, 255);
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/slide1.svg);
    height: 100%;
    width: 65%;
    background-position: center;
    background-size: cover;
}
.page4{
    text-align: center;
    padding-top: 200px;
    font-family: Vazir3;
    font-size: 20px;
    font-weight: bolder;
    color: rgb(255, 255, 255);
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/slide1.svg);
    height: 100%;
    width: 65%;
    background-position: center;
    background-size: cover;
}
.page5{
    text-align: center;
    padding-top: 200px;
    font-family: Vazir3;
    font-size: 20px;
    font-weight: bolder;
    color: rgb(255, 255, 255);
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/slide1.svg);
    height: 100%;
    width: 65%;
    background-position: center;
    background-size: cover;
}
.div-logo-page1{
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: end;
  padding-right: 65px;
  align-items: center;
  margin-top: 40px;
}
.div-title-page1{
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: end;
  align-items: center;
}
.div-text-page1{
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-btn-more-page1{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: end;
  padding-right: 65px;
  align-items: center;
}
.btn-more{
  width: 135px;
  height: 45px;
  background-color: #fff;
  border: 1px solid rgb(199, 199, 199);
  font-size: 13px;
  font-family: Vazir3;
  line-height: 30px;
  direction: rtl;
  color: #303c4f;
  border-radius: 10px;
  line-height: 30px;
}
.logo{
  width: 60px;
  height: 60px;
  background-color: #FFF; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, .06);
}
.logo1{
  width: 35px;
  height: 35px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/projectx/projectx-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.logo2{
  width: 35px;
  height: 35px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/identicator/identicator-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.logo3{
  width: 35px;
  height: 35px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/pip/pip-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.logo4{
  width: 35px;
  height: 35px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/transferor/transferor-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.logo5{
  width: 35px;
  height: 35px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/alpha/alpha_logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title{
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: end;
  padding-right: 65px;
  font-family: Vazir;
  color: #303c4f;
  display: flex;
  justify-content: end;
  align-items: center;
}
.text{
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #384b69;
  text-align: start;
  padding-right: 65px;
  font-family: Vazir3;
  direction: rtl;
}
</style>
