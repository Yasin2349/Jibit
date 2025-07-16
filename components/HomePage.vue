<template>
  <MyMenu />
  <DivImg />
  <BrandLogos />
  <BoxAbout />
  <AboutSer />
  <ServicesSite/>

  <div class="w-11/12 max-w-5xl h-auto mx-auto flex flex-col sm:flex-row items-end mt-0 mb-11 font-vazir justify-end pr-[30px] p-text-res-tekye"  style="margin-top: 100px;">
    <div class="w-full sm:w-auto">
      <p class="w-full text-[24px] sm:text-[32px] text-[#303c4f] text-right leading-[40px] sm:leading-[85px]">
        پل مطمئن پرداخت رمزارزی
      </p>
      <p class="w-full text-right text-[#697281] rtl text-sm sm:text-base">
        صدها کسب‌وکار نوین ایرانی با تکیه بر درگاه پرداخت رمزارزی XdgPay، مسیر دریافت پرداخت‌های دیجیتال را ساده و ایمن کرده‌اند.
      </p>
    </div>
  </div>

  <div class="about3 flex flex-col sm:flex-row justify-center items-center w-11/12 max-w-5xl h-auto sm:h-[300px] mx-auto gap-4">
    <div
      class="w-full sm:w-1/2 h-auto sm:h-full rounded-[15px] shadow-md
             bg-[url('https://jibit.ir/wp-content/themes/jibit/images/home2/bg_big_numbers_left.svg')]
             bg-cover bg-right-top bg-no-repeat rtl p-6"
    >
      <div
        class="w-[85px] h-[85px] bg-white rounded-[15px] shadow-md
               mt-8 mr-[3%] ml-auto relative"
      >
        <div
          class="w-1/2 h-1/2
                 bg-[url('https://jibit.ir/wp-content/themes/jibit/images/home2/logo-cash.svg')]
                 bg-center bg-cover bg-no-repeat absolute top-1/2 left-1/2
                 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>
      <div class="mt-4 pr-6">
        <p class="font-vazir text-[24px] sm:text-[30px] text-[#303c4f] rtl">+۲۵۰ همت</p>
      </div>
      <div class="mt-4 pr-6">
        <p class="font-vazir4 text-[14px] sm:text-[15px] text-[#303c4f] font-bold rtl">
          گردش مالی سالیانه روی پلتفرم XdgPay
        </p>
      </div>
    </div>

    <div
      class="w-full sm:w-1/2 h-auto sm:h-full rounded-[15px] shadow-md
             bg-[url('https://jibit.ir/wp-content/themes/jibit/images/home2/bg_big_numbers_right.svg')]
             bg-cover bg-right-top bg-no-repeat rtl p-6"
    >
      <div
        class="w-[85px] h-[85px] bg-white rounded-[15px] shadow-md
               mt-8 mr-[3%] ml-auto relative"
      >
        <div
          class="w-1/2 h-1/2
                 bg-[url('https://jibit.ir/wp-content/themes/jibit/images/home2/logo-transfer.svg')]
                 bg-center bg-cover bg-no-repeat absolute top-1/2 left-1/2
                 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>
      <div class="mt-4 pr-6">
        <p class="font-vazir text-[24px] sm:text-[30px] text-[#303c4f] rtl">+1 میلیارد</p>
      </div>
      <div class="mt-4 pr-6">
        <p class="font-vazir4 text-[14px] sm:text-[15px] text-[#303c4f] font-bold rtl">
          درخواست سالانه از طریق APIهای پرداخت رمزارز
        </p>
      </div>
    </div>
  </div>

  <div
    class="about-services w-11/12 max-w-5xl h-auto sm:h-[270px] mx-auto mt-[100px] rounded-[15px]
           bg-white bg-[url('//jibit.ir/wp-content/themes/jibit/images/transferor/trynow-background.png')]
           bg-top bg-center bg-no-repeat bg-[length:50%] shadow-[0_8.64px_28.8px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row justify-center items-center rtl mb-[175px] gap-8 sm:gap-0"
  >
    <div class="w-full sm:w-3/5 pr-0 sm:pr-[12%] pl-0 sm:pl-[2%] box1-about-s">
      <p class="text-[22px] sm:text-[28px] font-vazir  pt-5 sm:pt-[20px] pl-0 sm:pl-[10%] leading-[40px] sm:leading-[70px] p-title" style="margin-top: 0%; text-align: right;">
        شروع استفاده از XdgPay
      </p>
      <p class="text-[14px] sm:text-[17px] font-vazir3 text-[#797979] text-start text-start2">
        با ایجاد حساب کاربری، از سرویس‌های پرداخت رمزارزی XdgPay برای توسعه پرداخت‌های دیجیتال و مدیریت مالی هوشمند کسب‌وکارتان بهره‌مند شوید.
      </p>
      <button
          class="mt-5 w-[160px] h-[42px] font-Vazir bg-[#226ce9] border border-[#226ce9]
                text-white text-sm rounded-md hover:bg-[#2247e9]
                transition btns1" 
        >
          ساخت حساب کاربری &gt;
        </button>
      <div style="width: 100%; display: flex; justify-content: center;margin-top: 35px;">
        <button
          class="mt-5 w-[160px] h-[42px] font-Vazir bg-[#226ce9] border border-[#226ce9]
                text-white text-sm rounded-md hover:bg-[#2247e9]
                transition btns2"
        >
          ساخت حساب کاربری &gt;
        </button>
      </div>
    </div>
    <div class="w-full sm:w-2/5 pr-0 sm:pr-[6%]">
      <p class="text-[14px] sm:text-[17px] font-vazir3 text-[#797979] text-start pt-5 sm:pt-[20px] mt-14 sm:mt-[60px] pl-0 sm:pl-[40%] text-start2">
        برای طراحی پلن اختصاصی و دسترسی به امکانات پیشرفته با ما در ارتباط باشید.
      </p>
      <button
          class="mt-5 w-[170px] h-[42px] border border-gray-300 
                text-gray-600 text-sm rounded-md font-vazir3 hover:bg-gray-200
                transition btns1"
          >
          تماس با تیم فروش &gt;
        </button>
      <div style="width: 100%; display: flex; justify-content: center;margin-top: 35px;">
        <button
          class="mt-5 w-[170px] h-[42px] border border-gray-300 
                text-gray-600 text-sm rounded-md font-vazir3 hover:bg-gray-200
                transition btns2"
          >
          تماس با تیم فروش &gt;
        </button>
      </div>

    </div>
  </div>

  <Footer class="mt-[160px]" />
</template>

<script setup>
import AboutSer from './AboutSer.vue';
import BoxAbout from './BoxAbout.vue';
import BrandLogos from './BrandLogos.vue';
import DivImg from './DivImg.vue';
import Footer from './Footer.vue';
import MyMenu from './MyMenu.vue';
import ServicesSite from './ServicesSite.vue';
</script>

<style scoped>
@font-face {
  font-family: Vazir4;
  src: url('/Vazir-Thin.woff');
}
.font-vazir {
  font-family: Vazir, sans-serif;
}
.font-vazir4 {
  font-family: Vazir4, sans-serif;
}
.rtl {
  direction: rtl;
}
.btns{
  font-family: Vazir3;
}
@media screen and (max-width: 612px) {
  .p-text-res-tekye{
    margin-top: 75px;
  }
  .about-services{
    height: 500px !important;
  }
  .box1-about-s{
    height: 250px !important;
  }
  .p-title{
    font-size: 25px !important;
    text-align: center !important;
  }
  .text-start2{
    font-size: 15px !important;
    width: 70%;
    margin: auto;
    text-align: center !important;
  }
  .btns2{
    display: block !important;
    margin: auto !important;
  }
  .btns1{
    display: none !important;
  }
}
@media screen and (max-width: 900px) {
  .p-title{
    line-height: 50px;
  }
}
.btns2{
  display: none;
}
</style>
