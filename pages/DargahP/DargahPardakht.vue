<template>
  <div class="w-full h-auto bg-cover bg-no-repeat bg-bottom py-30 flex justify-center items-center relative" 
       style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/pattern-right-desktop.svg');">
    <div class="container mx-auto flex flex-col lg:flex-row justify-center items-center">
      <div class="w-full lg:w-3/5 flex justify-left items-center mb-8 lg:mb-0 ml-0" style="height: 300px;">
        <img src="https://jibit.ir/wp-content/themes/jibit/images/projectx/main-photo.svg" alt="image not found!" class="w-full max-w-[520px] h-auto mt-6 z-1 object-cover img-1" />
      </div>
      <div class="w-full lg:w-2/5 flex flex-col justify-start text-right px-4">
        <div class="divdis mt-6">
          <div class="logo-divimg">
            <div class="logo"></div>
          </div>
        </div>
        <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2d4b] mt-4 w-full lg:w-[72%] font-vazir3 title11" style="line-height: 50px">
          {{ langStore.t('title_dargah') }}
        </p>
        <p class="w-full lg:w-[72%] text-base sm:text-lg leading-relaxed text-[#4d5768] mt-4 font-vazir2 text-dargah" dir="rtl">
          {{ langStore.t('text_dargah') }}
        </p>
        <div class=" lg:w-[72%] flex flex-col sm:flex-row justify-end items-center mt-10 gap-2 div-btns">
          <input dir="rtl" type="submit" :value="langStore.t('btn_dakhast')"
                 class="w-full sm:w-[170px] h-[45px] border border-gray-400 rounded-md text-black text-sm font-vazir3 hover:bg-gray-200 transition btn1" />
          <input dir="rtl" type="submit" :value="langStore.t('btn_dakhast2')"
                  class="w-full sm:w-[170px] h-[45px] bg-[#226ce9] text-white text-sm rounded-md border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] transition mt-2 sm:mt-0 btn2" />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="w-full max-w-[100%] h-auto flex items-center m-auto py-6">
    <ul class="w-full max-w-[100%] flex flex-wrap justify-center items-center direction-rtl gap-4 ul-brand">
      <li class="w-[100px] h-[30px] list-none bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo1"></li>
      <li class="w-[100px] h-[30px] list-none bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo2"></li>
      <li class="w-[100px] h-[30px] list-none bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo3"></li>
      <li class="w-[100px] h-[30px] list-none bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo4"></li>
      <li class="w-[100px] h-[30px] list-none bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo5"></li>
      <li class="w-[100px] h-[30px] list-none bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo6"></li>
    </ul>
  </div> -->
  <div class="w-full h-auto mt-12">
    <ul class="h-full flex flex-wrap justify-center items-center mx-auto gap-4 px-4">
      <li class="w-full sm:w-[280px] rounded-[15px] h-[252px] bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)] p-6 li-box">
        <div class="w-[55px] h-[55px] mt-4 mr-4 bg-center bg-cover"
             style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/feat4.svg')"></div>
        <p class="w-full text-right text-lg sm:text-xl text-[#303c4f] font-vazir "> {{ langStore.t('title_box_about1') }}</p>
        <p class="w-full text-right font-vazir2 text-sm sm:text-base font-bold text-[#697281]">
          {{ langStore.t('text_box_about1') }}
        </p>  
      </li>
      <li class="w-full sm:w-[280px] rounded-[15px] h-[252px] bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)] p-6 li-box">
        <div class="w-[55px] h-[55px] mt-4 mr-4 bg-center bg-cover"
             style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/feat3.svg')"></div>
        <p class="w-full text-right text-lg sm:text-xl text-[#303c4f] font-vazir">{{ langStore.t('title_box_about2') }}</p>
        <p class="w-full text-right font-vazir2 text-sm sm:text-base font-bold text-[#697281]">
          {{ langStore.t('text_box_about2') }}
        </p>
      </li>
      <li class="w-full sm:w-[280px] rounded-[15px] h-[252px] bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)] p-6 li-box">
        <div class="w-[55px] h-[55px] mt-4 mr-4 bg-center bg-cover"
             style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/feat2.svg')"></div>
        <p class="w-full text-right text-lg sm:text-xl text-[#303c4f] font-vazir">{{ langStore.t('title_box_about3') }}</p>
        <p class="w-full text-right font-vazir2 text-sm sm:text-base font-bold text-[#697281]">
          {{ langStore.t('text_box_about3') }}
        </p>
      </li>
      <li class="w-full sm:w-[280px] rounded-[15px] h-[252px] bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)] p-6 li-box">
        <div class="w-[55px] h-[55px] mt-4 mr-4 bg-center bg-cover"
             style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/feat1.svg')"></div>
        <p class="w-full text-right text-lg sm:text-xl text-[#303c4f] font-vazir">{{ langStore.t('title_box_about4') }}</p>
        <p class="w-full text-right font-vazir2 text-sm sm:text-base font-bold text-[#697281]">
          {{ langStore.t('text_box_about4') }}
        </p>
      </li>
    </ul>
  </div>
  <div class="div-about2 container mx-auto mt-16">
    <div class="flex flex-col lg:flex-row items-center gap-6">
      <div class="image w-full lg:w-1/2"></div>
      <div class="objects w-full lg:w-1/2"  style="margin-bottom: 25px;">
        <div class="divdis2">
          <div class="logo-divimg2"></div>
        </div>
        <p class="title2"><b>{{ langStore.t('title_about_dargah3') }}</b></p>
        <div class="divtext2">
          <p class="text2">
            {{ langStore.t('text_about_dargah3') }}
          </p>
        </div>
        <div class="divdis2">
          <div class="logo-about2"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="div-about3 container mx-auto mt-12">
    <div class="flex flex-col lg:flex-row gap-6 div-rtl" >
      <div class="about3-box1 w-full lg:w-1/3">
        <div class="imgbox1"></div>
        <p class="p-title-box1">{{ langStore.t('title_about_dargah5') }}</p>
        <p class="text-box1">{{ langStore.t('text_about_dargah5') }}</p>
      </div>  
      <div class="about3-box2 w-full lg:w-1/3">
        <div class="imgbox2"></div>
        <p class="p-title-box1">{{ langStore.t('title_about_dargah4') }}</p>
        <p class="text-box1">{{ langStore.t('text_about_dargah4') }}</p>
      </div>
      <div class="about3-box3 w-full lg:w-1/3">
        <div class="imgbox3"></div>
        <p class="p-title-box1">{{ langStore.t('title_about_dargah3') }}</p>
        <p class="text-box1">{{ langStore.t('text_about_dargah3') }}</p>
      </div>
    </div>
  </div>
  <div class="div-pizito container mx-auto mt-12">
    <div class="div-pizito2">
      <img class="logo-pizito" src="https://jibit.ir/wp-content/themes/jibit/images/projectx/payzito.svg">
      <div class="divdis-text-pizitp">
        <p class="title-pizito"><b>پی‌زیتو؛ افزونه درگاه پرداخت</b></p>
        <p class="text-pizito">رایگان برای مشتریان XDGPay و بدون نیاز به پیاده‌سازی API بر بستر WordPress و Joomla.</p>
      </div>
      <button class="btn-free">نسخه رایگان ></button>
    </div>
  </div>
  <div class="div-about4 container mx-auto mt-12">
    <div class="div-title-about4" style="direction: rtl;">
      <p class="title-about4">{{ langStore.t('title_tarefe_dargah111') }}</p>
      <p class="text-about4"></p>
    </div>
    <div class="table-about4">
      <div class="row1-about4">
        <p class="p-table1">{{ langStore.t('amount_tarefe_dargah') }}</p>
        <p class="p2-table1">{{ langStore.t('number_tarefe_dargah') }}</p>
      </div>
    </div>
    <div class="table2-about4">
      <div class="row21-about4">
        <div class="col21-about4">
          <p class="p-table2">{{ langStore.t('text3_number_tarefe_dargah') }}<br><span class="p11-table2">{{ langStore.t('text32_number_tarefe_dargah') }}</span></p>
        </div>
        <div class="col22-about4">
          <p class="p2-table2"><span class="check-circle"><i class="fas fa-check"></i></span>{{ langStore.t('text_number_tarefe_dargah') }}</p>
        </div>
      </div>
      <div class="row22-about4">
        <div class="col23-about4">
          <input dir="rtl" type="submit" :value="langStore.t('text2_number_tarefe_dargah')"
                 class="w-[170px] h-[45px] border border-gray-300 rounded-md text-black text-sm font-vazir3 hover:bg-gray-200 transition btn-tel btn1" />
        </div>
        <div class="col24-about4">
          <p class="p2-table2"><span class="check-circle"><i class="fas fa-check"></i></span>{{ langStore.t('text_number_tarefe_dargah') }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="about-services container mx-auto mt-12 mb-[100px]">
    <div class="flex flex-col lg:flex-row gap-6" style="direction: rtl;">
      <div class="div-1-about-services w-full lg:w-3/5">
        <p class="title-about-services">استفاده از سرویس‌های XDGPay</p>
        <p class="text-about-services">با ایجاد حساب کاربری از خدمات XDGPay برای رشد و ارتقا فرآیند و عملیات مالی کسب و کارتان استفاده کنید.</p>
        <input dir="rtl" type="submit" value="ساخت حساب کاربری >"
               class="w-[170px] h-[50px] bg-[#226ce9] text-white text-sm rounded-md border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] mt-4 transition " />
      </div>
      <div class="div-2-about-services w-full lg:w-2/5">
        <p class="text-about-services2">برای ایجاد بسته اختصاصی کسب و کار‌تان با ما تماس بگیرید.</p>
        <input dir="rtl" type="submit" value="تماس با تیم فروش >" 
               class="w-[170px] h-[50px] border border-gray-400 rounded-md text-black text-sm font-vazir3 hover:bg-gray-200 transition mt-4 btn1" />
      </div>
    </div>
  </div>
  <Footer style="margin-top: 150px;"></Footer>
</template>

<script setup>
import { useLangStore } from '@/stores/lang'

const langStore = useLangStore()
langStore.loadLangFromCookie()
</script>

<style scoped>
@font-face {
  font-family: Vazir;
  src: url(../public/Vazir-Bold.woff);
}
@font-face {
  font-family: Vazir2;
  src: url(../public/Vazir-Thin.woff);
  font-weight: bold;
}
@font-face {
  font-family: Vazir3;
  src: url(../public/Vazir-Medium.ttf);
}
@media screen and (max-width: 1024px) {
  .divdis.mt-6{
    padding-right: 0%;
  }
  .image{
    height: 500px !important;
  }
  .imgbox1 , .imgbox2 , .imgbox3{
    height: 350px !important;
  }
}
@media screen and (max-width:600px) {
  .title11{
    font-size: 25px !important;
  }
  .img-1{
    margin-top: 270px;
  }
  .about-services{
    height: 500px !important;
  }
  .btn-tel{
    font-size: 12px !important;
  }
}
.w-full {
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  color: #1a2d4b;
}

.container {
  max-width: 1200px;
  padding: 0 1rem;
}

.font-vazir { font-family: Vazir; }
.font-vazir2 { font-family: Vazir2; }
.font-vazir3 { font-family: Vazir3; }

.logo-divimg {
  width: 80px;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(143, 143, 143, 0.25);
  border-radius: 25px;
}

.logo {
  width: 50px;
  height: 50px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/projectx-logo.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.divdis {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 0%;
}

.direction-rtl {
  direction: rtl;
}

.li_logo1 { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/nobitex.svg); }
.li_logo1:hover { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/nobitex.svg); filter: brightness(1.2); }
.li_logo2 { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/snappay.svg); }
.li_logo2:hover { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/snappay.svg); filter: brightness(1.2); }
.li_logo3 { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/bitpin.svg); }
.li_logo3:hover { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/bitpin.svg); filter: brightness(1.2); }
.li_logo4 { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/wallex.svg); }
.li_logo4:hover { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/wallex.svg); filter: brightness(1.2); }
.li_logo5 { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/aban_tether.svg); }
.li_logo5:hover { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/aban_tether.svg); filter: brightness(1.2); }
.li_logo6 { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/azki-sarmaye.svg); }
.li_logo6:hover { background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/azki-sarmaye.svg); filter: brightness(1.2); }

.div-about2 {
  height: auto;
  padding: 2rem 0;
}

.image {
  height: 400px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/photo-1.svg');
  background-color: #f2f5fb;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  border: 1px solid rgb(209, 209, 209);
}

.objects {
  padding: 1rem;
}

.divdis2 {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.logo-divimg2 {
  width: 88px;
  height: 88px;
  box-shadow: 0px 0px 10px rgba(143, 143, 143, 0.25);
  border-radius: 25px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/photo-1-logo.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.title2 {
  font-size: 1.5rem;
  font-family: Vazir3;
  direction: rtl;
  color: #303c4f;
  margin-top: 1rem;
}

.text2 {
  font-size: 1rem;
  font-family: Vazir3;
  direction: rtl;
  color: #687385;
}

.divtext2 {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.logo-about2 {
  width: 120px;
  height: 65px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/banks.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 15px;
}

.div-about3 {
  height: auto;
  padding: 2rem 0;
}

.about3-box1, .about3-box2, .about3-box3 {
  padding: 1rem;
}

.imgbox1, .imgbox2, .imgbox3 {
  height: 200px;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  border: 1px solid rgb(209, 209, 209);
}

.imgbox1 { background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feature-3.svg'); }
.imgbox2 { background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feature-2.svg'); }
.imgbox3 { background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feature-1.svg'); }

.p-title-box1 {
  font-size: 1.25rem;
  font-family: Vazir;
  color: #303c4f;
  text-align: start;
  margin-top: 1rem;
  direction: rtl;
}

.text-box1 {
  font-size: 0.9rem;
  font-family: Vazir3;
  direction: rtl;
  margin-top: 0.5rem;
  color: #4d5768;
}

.logo2-box1, .logo2-box2, .logo2-box3 {
  width: 88px;
  height: 88px;
  box-shadow: 0px 0px 10px rgba(143, 143, 143, 0.25);
  border-radius: 25px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.logo2-box1 { background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feat-icon1.svg'); }
.logo2-box2 { background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feat-icon2.svg'); }
.logo2-box3 { background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feat-icon3.svg'); }

.div-pizito {
  height: auto;
  border-top: 1px solid rgb(219, 219, 219);
  border-bottom: 1px solid rgb(219, 219, 219);
  padding: 2rem 0;
}

.div-pizito2 {
  height: auto;
  background: linear-gradient(90deg, #fff 50%, #e5dcfa 100%);
  border: 1px solid #dcdfe4;
  border-radius: 15px;
  display: flex;
  justify-content: right;
  direction: rtl;
  align-items: center;
  padding: 1.5rem;
}

.logo-pizito {
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}

.divdis-text-pizitp {
  text-align: right;
}

.title-pizito {
  font-size: 1.5rem;
  font-family: Vazir;
  color: #303c4f;
  margin-bottom: 0.5rem;
}

.text-pizito {
  font-size: 1rem;
  font-family: Vazir3;
  color: #395075;
}

.btn-free {
  width: 120px;
  height: 50px;
  background-color: #7547ca;
  border-radius: 10px;
  color: white;
  font-family: Vazir3;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 1rem;
  margin: auto;
}

.div-about4 {
  height: auto;
  padding: 2rem 0;
}

.div-title-about4 {
  padding: 1rem 0;
}

.title-about4 {
  font-size: 1.5rem;
  font-family: Vazir3;
  margin-right: 6%;
}

.text-about4 {
  font-size: 1rem;
  font-family: Vazir3;
  color: rgb(129, 129, 129);
  padding-left: 20%;
  margin-right: 6%;
}

.table-about4 {
  width: 88%;
  height: 80px;
  background: linear-gradient(270deg, #74e2df -5.69%, #226ce9 64.82%);
  border-radius: 10px;
  margin: auto;
  margin-top: 1rem; 
  
}

.table2-about4 {
  width: 88%;
  height: auto;
  border: 1px solid rgb(209, 209, 209);
  border-radius: 10px;
  padding: 1rem;
  background-color: #f2f5fb;
  margin: auto;
}

.row1-about4 {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}

.p-table1, .p2-table1 {
  width: 50%;
  text-align: right;
  color: white;
  font-family: Vazir;
  font-size: 1rem;
  padding-right: 3%;
}

.row21-about4, .row22-about4 {
  display: flex;
  
  border-bottom: 1px solid #dcdfe4;
  padding: 1rem 0;
}

.col21-about4, .col22-about4, .col23-about4, .col24-about4 {
  width: 100%;
  text-align: right;
}

.p-table2 {
  font-size: 1.25rem;
  font-family: Vazir;
  direction: rtl;
}

.p2-table2 {
  font-size: 1rem;
  font-family: Vazir3;
  direction: rtl;
}

.p11-table2 {
  color: rgb(156, 156, 156);
  font-size: 0.9rem;
}

.check-circle {
  width: 24px;
  height: 24px;
  background-color: #4caf99;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
}
.about-services{
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79%;
  height: 270px;
  margin: auto;
  border-radius: 15px;
  margin-top: 100px;
  background: url(//jibit.ir/wp-content/themes/jibit/images/transferor/trynow-background.png) center top / 50% no-repeat #fff;
  box-shadow: 0 8.64px 28.8px rgba(0, 0, 0, .06);
  direction: rtl;
}

.div-1-about-services, .div-2-about-services {
  padding: 1rem;
}

.title-about-services {
  font-size: 1.5rem;
  font-family: Vazir;
}

.text-about-services, .text-about-services2 {
  font-size: 1rem;
  font-family: Vazir3;
  color: #797979;
}

/* Media Queries */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }

  .title2, .title-about4, .title-pizito, .title-about-services {
    font-size: 1.25rem;
  }

  .text2, .text-about4, .text-pizito, .text-about-services, .text-about-services2 {
    font-size: 0.9rem;
  }

  .p-title-box1 {
    font-size: 1.1rem;
  }

  .text-box1 {
    font-size: 0.85rem;
  }

  .image, .objects {
    height: 300px;
  }

  .imgbox1, .imgbox2, .imgbox3 {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .w-full {
    background-size: cover;
    padding: 1rem 0;
  }

  .image, .objects {
    width: 100%;
    height: 250px;
  }

  .div-about3 {
    flex-direction: column;
  }

  .about3-box1, .about3-box2, .about3-box3 {
    width: 100%;
  }

  .div-pizito2 {
    flex-direction: column;
    text-align: center;
  }

  .logo-pizito {
    margin-right: 0;
  }

  .divdis-text-pizitp {
    width: 100%;
    text-align: center;
  }

  .about-services {
    flex-direction: column;
  }

  .div-1-about-services, .div-2-about-services {
    width: 100%;
    text-align: center;
  }

  .title-about-services, .text-about-services2 {
    padding-left: 0;
  }

  .p-table1, .p2-table1 {
    font-size: 0.9rem;
  }

  .p-table2 {
    font-size: 1rem;
  }

  .p2-table2 {
    font-size: 0.9rem;
  }
}

@media (max-width: 640px) {
  .title2, .title-about4, .title-pizito, .title-about-services {
    font-size: 1.1rem;
  }

  .text2, .text-about4, .text-pizito, .text-about-services, .text-about-services2 {
    font-size: 0.85rem;
  }

  .p-title-box1 {
    font-size: 1rem;
  }

  .text-box1 {
    font-size: 0.8rem;
  }

  .logo-divimg, .logo-divimg2, .logo2-box1, .logo2-box2, .logo2-box3 {
    width: 70px;
    height: 70px;
  }

  .logo {
    width: 40px;
    height: 40px;
  }

  .btn-free {
    width: 100px;
    height: 40px;
    font-size: 0.8rem;
  }

  input[type="submit"] {
    width: 100%;
    max-width: 150px;
  }
}
.title11{
  width: 100%;
}
.text-dargah{
  width: 100%;
  margin-top: 30px;
}
.div-btns{
  width: 100%;
}
.ul-brand li{
  margin: auto;
}
.li-box{
  padding: 15px;
}
.btn1{
  color: rgb(92, 92, 92);
}
.btn2{
  color: white;
}

</style>