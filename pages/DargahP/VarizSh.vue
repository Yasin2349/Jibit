<template>
  <div class="w-full h-[700px] bg-cover bg-no-repeat bg-bottom py-20 flex justify-center items-center relative" 
       style="">
    <div class="w-3/5 h-full flex justify-center items-center">
      <img src="https://jibit.ir/wp-content/themes/jibit/images/pip/main-photo.svg" alt="image not found!" class="w-[520px] h-[480px] mt-10 z-1 object-cover" />
    </div>
    <div class="w-2/5 h-full flex flex-col justify-start text-right">
      <div class="divdis mt-[50px]">
        <div class="logo-divimg">
          <div class="logo"></div>
        </div>
      </div>
      
      <p class="text-[40px] font-bold text-[#1a2d4b]-500 mt-[10px]  w-[72%] font-vazir3">
        بدون محدودیت با<br>
واریز شناسه دار XDGPay
      </p>
      <p class="w-[72%] text-[18px] leading-[29px] text-[#4d5768] mt-4 font-vazir2" dir="rtl">
        سرویس واریز شناسه‌دار این امکان را به مشتریان کسب و کار‌ها می‌دهد تا بدون محدودیت در مبلغ تراکنش و با انتخاب روش مناسب از خدمات واریز وجه و پرداخت استفاده کنند.
      </p>
      <div class="w-[72%] flex justify-end items-center mt-20 gap-2">
        <input dir="rtl" type="submit" value="تماس با تیم  فروش >"
               class="w-[170px] h-[50px] border border-gray-400 rounded-md text-black text-sm font-vazir3 hover:bg-gray-200 transition" />
        <input dir="rtl" type="submit" value="درخواست سرویس >"
               class="w-[170px] h-[50px] bg-[#226ce9] text-white text-sm rounded-md border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] transition" />
      </div>
    </div>
  </div>
  <div class="w-[83%] h-[80px] flex items-center m-auto">
    <ul class="w-full flex justify-center items-center direction-rtl">
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo1"></li>
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo2"></li>
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo3"></li>
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo4"></li>
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo5"></li>
    </ul>
  </div>
  
  <div class="div-about2">
    <div class="image"></div>
    <div class="objects">
      <div class="divdis2">
      </div>
      <p class="title2"><b>بدون نیاز به اطلاعات حساب مبدا</b></p>
      <div class="divtext2">
        <p class="text2">بازگرداندن وجه پرداخت شده در درگاه به حساب مبدا با فراخوانی API مربوطه یا با یک کلیک از داخل پنل و بدون نیاز به درخواست مستقیم شماره کارت یا شبای پرداخت‌کننده.</p>
      </div>
    </div>
  </div>
  <div class="div-about2">
    <div class="objects">
      <div class="divdis2">
      </div>
      <p class="title2" style="padding-right: 18%;"><b>ابزار‌ها و روش‌های واریز</b></p>
      <div class="divtext2">
        <p class="text2" style="text-align: right;margin-right: 18%;">دارندگان شناسه واریز XDGPay می‌توانند فرآیند واریز وجوه خود را از روش‌های چون پایا، ساتنا و حساب به حساب و همینطور از طریق ابزار‌های موبایل بانک، اینترنت بانک، دستگاه‌های ATM و ابزار‌های متعدد دیگر صورت پذیرد.</p>
      </div>
    </div>
    <div class="image2"></div>
  </div>
  <div class="div-about2">
    <div class="image" style="background-image: url(https://jibit.ir/wp-content/themes/jibit/images/pip/photo-3.svg);"></div>
    <div class="objects">
      <div class="divdis2">
      </div>
      <p class="title2"><b>فرآیند تایید واریز</b></p>
      <div class="divtext2">
        <p class="text2">فرآیند تایید افزایش موجودی با سرویس واریز شناسه‌دار در سه مرحله انجام می‌پذیرد.
ابتدا تاییدیه واریز با شناسه، تطبیق اطلاعات دارنده شناسه با واریز کننده و در نهایت تایید یا عدم تایید واریز توسط صاحبان کسب و کار، چنانچه در هر مرحله واریز وجه تایید نگردد مبلغ به حساب مبدا باز خواهد گشت.</p>
      </div>
    </div>
  </div>
  

  <div class="div-about4" style="margin-top: 100px; border-top: 1px solid #e0e0e0;">
    <div class="div-title-about4">
      <p class="title-about4">تعرفه واریز شناسه دار</p>
      <p class="text-about4">تعرفه اعلام شده بدون محاسبه مالیات بر ارزش افزوده می‌باشد، مبلغ کارمزد دریافت شناسه و واریز وجه بعلاوه 10 درصد مالیات بر ارزش افزوده کسر می‌گردد.</p>
    </div>
    <div class="table-about4">
       <div class="row1-about4">
        <p class="p-table1">مبلغ</p>
        <p class="p2-table1">لیست خدمات</p>
       </div>
    </div>
    <div class="table2-about4">
       <div class="row21-about4">
         <div class="col21-about4">
          <p class="p-table2">
5,۰۰۰ ریال<br><span class="p11-table2">به ازای هر شناسه</span></p>
         </div>
         <div class="col22-about4">
          <p class="p2-table2"><span class="check-circle"><i class="fas fa-check"></i></span>دریافت شناسه </p>
         </div>
       </div>
       <div class="row22-about4">
          <div class="col23-about4">
            <p class="p-table2">

2,5۰۰ ریال<br><span class="p11-table2">به ازای هر یک میلیون تومان</span></p>
          </div>
          <div class="col24-about4">
            <p class="p2-table2"><span class="check-circle"><i class="fas fa-check"></i></span>  واریز وجه  </p>
          </div>
       </div>
    </div>
  </div>
  <div class="about-services">
    <div class="div-1-about-services">
      <p class="title-about-services">استفاده از سرویس‌های XDGPay</p>
      <p class="text-about-services">با ایجاد حساب کاربری از خدمات XDGPay برای رشد و ارتقا فرآیند و عملیات مالی کسب و کارتان استفاده کنید.</p>
      <input dir="rtl" type="submit" value="ساخت حساب کاربری >"
               class="w-[170px] h-[50px] bg-[#226ce9] text-white text-sm rounded-md border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] mt-[20px] transition" />
    </div>
    <div class="div-2-about-services">
      <p class="text-about-services2">برای ایجاد بسته اختصاصی کسب و کار‌تان با ما تماس بگیرید.</p>
      <input dir="rtl" type="submit" value="تماس با تیم  فروش >"
               class="w-[170px] h-[50px] border border-gray-400 rounded-md text-black text-sm font-vazir3 hover:bg-gray-200 transition mt-[20px]" />
    </div>
  </div>
  <br>
  <br>
  <br>
  
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <Footer></Footer>
</template>

<script>
export default {
  name: 'DivImg'

}
</script>

<style scoped>
.w-full{
    background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/pattern-right-desktop.svg');
    background-position: right;
    background-repeat: no-repeat, no-repeat;
    flex-grow: 1;
    display: flex;
    background-size: contain;
    justify-content: center;
    color: #1a2d4b;
    
}
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
.font-vazir {
  font-family: Vazir;
}
.font-vazir2 {
  font-family: Vazir2;
}
.font-vazir3 {
  font-family: Vazir3;
}
.logo-divimg{
  width: 80px;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0px;
  box-shadow: 0px 0px 10px rgba(143, 143, 143, 0.25);
  border-radius: 25px;
}
.logo{
  width: 50px;
  height: 50px;
  margin-right: 0px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/pip/pip-logo.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  justify-content: center;
}
.divdis{
  width: 70%;
  display: flex;
  justify-content: end;
  align-items: center;
}
.direction-rtl {
  direction: rtl;
}
.li_logo1 {
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/bidar.svg);
}
.li_logo1:hover {
  
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/bidar.svg);
  filter: brightness(1.2);
}
.li_logo2 {
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/nobitex.svg);
}
.li_logo2:hover {
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/nobitex.svg);
  filter: brightness(1.2);
}
.li_logo3 {
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/omp.svg);
}
.li_logo3:hover {
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/omp.svg);
  filter: brightness(1.2);
}
.li_logo4 {
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/snapp.svg);
}
.li_logo4:hover {
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/snapp.svg);
  filter: brightness(1.2);
}
.li_logo5 {
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/gray/bitpin.svg);
}
.li_logo5:hover {
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/logos/colorful/bitpin.svg);
  filter: brightness(1.2);
}
.div-about2{
  width: 79%;
  height: 480px;
  margin: auto;
  margin-top: 135px;
  display: flex;
  justify-items: center;
  align-items: center;
}
.image{
  width: 50%;
  height: 100%;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/pip/photo-1.svg');
  background-color: #f2f5fb ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  border: 1px solid rgb(209, 209, 209);
}
.image2{
  width: 50%;
  height: 100%;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/pip/photo-2.svg');
  background-color: #f2f5fb ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  border: 1px solid rgb(209, 209, 209);
}
.objects{
  width: 50%;
  height: 100%;
}
.divdis2{
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  
}
.logo-divimg2{
  width: 88px;
  height: 88px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0px;
  box-shadow: 0px 0px 10px rgba(143, 143, 143, 0.25);
  border-radius: 25px;
  margin-top: 60px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/photo-1-logo.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.title2{
  width: 100%;
  font-size: 32px;
  font-family: Vazir3;
  direction: rtl;
  color: #303c4f;
  margin-top: 125px;
  margin-bottom: 25px;
}
.text2{
  width: 76%;
  font-size: 17px;
  font-family: Vazir3;
  direction: rtl;
  color: #687385;
  margin-left: 0%;
  direction: rtl;
}
.divtext2{
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}
.logo-about2{
  width: 120px;
  height: 65px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/banks.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 15px;
}
.div-about3{
  width: 80%;
  height: 500px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin: auto;  
  margin-top: 80px;
}
.about3-box1{
  width: 31%;
  height: 100%;
  margin: auto;
}
.about3-box2{
  width: 31%;
  height: 100%;
  margin: auto;
}
.about3-box3{
  width: 31%;
  height: 100%;
  margin: auto;
}
.imgbox1{
  width: 100%;
  height: 55%;
  margin-top: 5%;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  border: 1px solid rgb(209, 209, 209);
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feature-3.svg');
}
.imgbox2{
  width: 100%;
  height: 55%;
  margin-top: 5%;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  border: 1px solid rgb(209, 209, 209);
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feature-2.svg');
}
.imgbox3{
  width: 100%;
  height: 55%;
  margin-top: 5%;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  border: 1px solid rgb(209, 209, 209);
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feature-1.svg');
}
.p-title-box1{
  width: 100%;
  font-size: 20px;
  font-family: Vazir;
  color: #303c4f;
  text-align: start;
  margin-top: 25px;
  direction: rtl;
}
.text-box1{
  font-size: 15px;
  font-family: Vazir3;
  direction: rtl;
  margin-top: 10px;
  color: #4d5768;
}
.logo2-box1{
  width: 88px;
  height: 88px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0px;
  box-shadow: 0px 0px 10px rgba(143, 143, 143, 0.25);
  border-radius: 25px;
  margin-top: 60px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feat-icon1.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.logo2-box2{
  width: 88px;
  height: 88px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0px;
  box-shadow: 0px 0px 10px rgba(143, 143, 143, 0.25);
  border-radius: 25px;
  margin-top: 60px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feat-icon2.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.logo2-box3{
  width: 88px;
  height: 88px; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0px;
  box-shadow: 0px 0px 10px rgba(143, 143, 143, 0.25);
  border-radius: 25px;
  margin-top: 60px;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/projectx/service-feat-icon3.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.icon-envelop{
  font-family: icomoon !important;
}
.div-pizito{
  width: 82%;
  height: 410px;
  border-top: 1px solid rgb(219, 219, 219);
  border-bottom: 1px solid rgb(219, 219, 219);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-pizito2{
  width: 96%;
  height: 200px;
  background: linear-gradient(90deg, #fff 50%, #e5dcfa 100%);
  border: 1px solid #dcdfe4;
  margin: auto;
  border-radius: 15px;
  display: flex;
  direction: rtl;
  align-items: center;
}
.logo-pizito{
  width: 120px;
  height: 120px;
  transform: scale(1.2);
  max-width: none;
  margin-right: 6%;
}
.divdis-pizito-text{
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.title-pizito{
  font-size: 28px;
  font-family: Vazir;
  color: #303c4f;
  text-align: start;
  margin-top: 5px;
  direction: rtl;
}
.text-pizito{
  font-size: 17px;
  font-family: Vazir3;
  direction: rtl;
  line-height: 55px;
  color: #395075;
  font-weight: 400;
  text-align: right;
}
.btn-free{
  width: 120px;
  height: 50px;
  background-color: #7547ca;
  margin: auto;
  border-radius: 10px;
  color: white;
  font-family: Vazir3;
  font-size: 15px;
  cursor: pointer;
}
.div-about4{
  width: 84%;
  height: 570px;
  margin: auto;
}
.div-title-about4{
  width: 100%;
  height: 200px;
  margin-top: 5px;
  direction: rtl;
  padding-top: 80px;
  padding-right: 2%;
}
.text-about4{
  font-size: 17px;
  font-family: Vazir3;
  direction: rtl;
  line-height: 55px;
  color: #395075;
  font-weight: 400;
  text-align: right;
}
.title-about4{
  font-size: 32px;
  font-family: Vazir3;
}
.text-about4{
  width: 100%;
  font-family: Vazir3;
  color: rgb(129, 129, 129);
}
.table-about4{
  width: 94%;
  height: 80px;
  background: linear-gradient(270deg, #74e2df -5.69%, #226ce9 64.82%);
  margin: auto;
  border-radius: 10px;
  margin-top: 20px;
}
.table2-about4{
  width: 94%;
  height: 250px;
  margin: auto;
  margin-top: 12px;
  border: 1px solid rgb(209, 209, 209);
  border-radius: 10px;
  padding-top: 15px;
  background-color: #f2f5fb;
}
.row1-about4{
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}
.p-table1{
  width: 32%;
  text-align: right;
  color: white;
  font-family: Vazir;
  font-size: 18px;
}
.p2-table1{
  width: 68%;
  text-align: right;
  padding-right: 5%;
  color: white;
  font-family: Vazir;
  font-size: 18px;
}
.row21-about4{
  width: 90%;
  height: 55%;
  margin: auto;
  border-bottom: 1px solid #dcdfe4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col23-about4{
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 2%;
}

.col24-about4{
  width: 68%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}
.col21-about4{
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 2%;
}

.col22-about4{
  width: 68%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}
.p-table2{
  width: 100%;
  text-align: right;
  font-family: Vazir;
  font-size: 18px;
  direction: rtl;
  font-size: 24px;
}
.p2-table2{
  width: 100%;
  text-align: right;
  font-family: Vazir3;
  font-size: 18px;
  direction: rtl;
  padding-right: 4%;
}
.p3-table2{
  width: 100%;
  text-align: right;
  font-family: Vazir3;
  font-size: 18px;
  direction: rtl;
}
.p4-table2{
  width: 100%;
  text-align: right;
  font-family: Vazir3;
  font-size: 18px;
  direction: rtl;
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
.p11-table2{
  color: rgb(156, 156, 156);
  font-size: 17px;
  line-height: 40px;
}
.row22-about4{
  width: 90%;
  height: 45%;
  margin: auto;
  border-bottom: 1px solid #dcdfe4;
  display: flex;
  justify-content: center;
  align-items: center;
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
.div-1-about-services{
  width: 60%;
  padding-right: 12%;
  padding-left: 2%;
}

.div-2-about-services{
  width: 40%;
  padding-right: 6%;
}
.title-about-services{
  font-size: 28px;
  font-family: Vazir;
  text-align: start;
  margin-top: 0px;
  direction: rtl;
  padding-top: 20px;
  padding-left: 10%;
  line-height: 70px;
}
.text-about-services2{
  font-size: 17px;
  font-family: Vazir3;
  color: #797979;
  text-align: start;
  margin-top: 60px;
  direction: rtl;
  padding-top: 20px;
  padding-left: 40%;
}

.text-about-services{
  font-size: 17px;
  font-family: Vazir3;
  color: #797979;
}

</style>