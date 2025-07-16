<template>
  <div class="w-full h-auto bg-cover bg-no-repeat bg-bottom py-20 flex justify-center items-center relative" 
       style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/pattern-right-desktop.svg');">
    <div class="container mx-auto flex flex-col lg:flex-row justify-center items-center">
      <div class="w-full lg:w-3/5 flex justify-center items-center mb-8 lg:mb-0">
        <img src="https://jibit.ir/wp-content/themes/jibit/images/refund/main-photo.svg" alt="image not found!" class="w-full max-w-[520px] h-auto mt-6 z-1 object-cover img-1" />
      </div>
      <div class="w-full lg:w-2/5 flex flex-col justify-start text-right px-4">
        <div class="divdis mt-6">
          <div class="logo-divimg">
            <div class="logo"></div>
          </div>
        </div>
        <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2d4b] mt-4 w-full lg:w-[72%] font-vazir3 title11" style="line-height: 50px">
          وب‌سرویس<br> استرداد وجه XdgPay
        </p>
        <p class="w-full lg:w-[72%] text-base sm:text-lg leading-relaxed text-[#4d5768] mt-4 font-vazir2 text-dargah" dir="rtl">
          وب‌سرویس استرداد وجه XdgPay، امکان بازگشت سریع و امن پرداخت‌های انجام‌شده را بدون نیاز به اطلاعات حساب مبدا فراهم می‌کند. این سرویس با پشتیبانی از دو روش انتقال آنی و پایا، برای کسب‌وکارهایی طراحی شده که نیاز به بازپرداخت سریع و بدون دردسر دارند.
        </p>
        <div class="w-full lg:w-[72%] flex flex-col sm:flex-row justify-end items-center mt-10 gap-2 div-btns">
          <input dir="rtl" type="submit" value="تماس با تیم فروش >"
                 class="w-full sm:w-[170px] h-[45px] border border-gray-400 rounded-md text-black text-sm font-vazir3 hover:bg-gray-200 transition btn1" />
          <input dir="rtl" type="submit" value="درخواست سرویس >"
                 class="w-full sm:w-[170px] h-[45px] bg-[#226ce9] text-white text-sm rounded-md border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] transition mt-2 sm:mt-0 btn2" />
        </div>
      </div>
    </div>
  </div>
  <div class="w-full h-auto mt-12">
    <ul class="h-full flex flex-wrap justify-center items-center mx-auto gap-4 px-4">
      <li class="w-full sm:w-[280px] rounded-[15px] h-auto bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)] p-6 li-box">
        <div class="w-[55px] h-[55px] mt-4 mr-4 bg-center bg-cover"
             style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/feat4.svg')"></div>
        <p class="w-full text-right text-lg sm:text-xl text-[#303c4f] font-vazir">امنیت پرداخت و جلوگیری از تقلب</p>
        <p class="w-full text-right font-vazir2 text-sm sm:text-base font-bold text-[#697281]">
          کاهش خطا و ریسک در مقایسه با روش‌های سنتی مثل کارت‌ به‌کارت یا واریز به شماره شبا.
        </p>
      </li>
      <li class="w-full sm:w-[280px] rounded-[15px] h-auto bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)] p-6 li-box">
        <div class="w-[55px] h-[55px] mt-4 mr-4 bg-center bg-cover"
             style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/feat3.svg')"></div>
        <p class="w-full text-right text-lg sm:text-xl text-[#303c4f] font-vazir leading-[50px]">تسهیل فرآیندهای مالی</p>
        <p class="w-full text-right font-vazir2 text-sm sm:text-base font-bold text-[#697281]">
          حذف مراحل دستی و کاهش هزینه‌ها و ریسک‌های عملیاتی.
        </p>
      </li>
      <li class="w-full sm:w-[280px] rounded-[15px] h-auto bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)] p-6 li-box">
        <div class="w-[55px] h-[55px] mt-4 mr-4 bg-center bg-cover"
             style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/feat2.svg')"></div>
        <p class="w-full text-right text-lg sm:text-xl text-[#303c4f] font-vazir leading-[50px]">ارتقا تجربه کاربری</p>
        <p class="w-full text-right font-vazir2 text-sm sm:text-base font-bold text-[#697281]">
          فرآیندی سریع و مکانیزه که رضایت و وفاداری مشتریان را افزایش می‌دهد.
        </p>
      </li>
      <li class="w-full sm:w-[280px] rounded-[15px] h-auto bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)] p-6 li-box">
        <div class="w-[55px] h-[55px] mt-4 mr-4 bg-center bg-cover"
             style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/feat1.svg')"></div>
        <p class="w-full text-right text-lg sm:text-xl text-[#303c4f] font-vazir leading-[50px]">نرخ موفقیت بالا</p>
        <p class="w-full text-right font-vazir2 text-sm sm:text-base font-bold text-[#697281]">
          تضمین موفقیت بالا در بازپرداخت وجه از حساب دارندگان درگاه به خریداران.
        </p>
      </li>
    </ul>
  </div>
  <div class="div-about2 container mx-auto mt-16">
    <div class="flex flex-col lg:flex-row items-center gap-6">
      <div class="image w-full lg:w-1/2" style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/photo-1.svg')"></div>
      <div class="objects w-full lg:w-1/2" style="margin-bottom: 25px;">
        
        <p class="title2"><b>بازپرداخت سریع و آسان بدون نیاز به اطلاعات حساب مبدا</b></p>
        <div class="divtext2">
          <p class="text2">
            وجه پرداخت شده در درگاه XdgPay به‌سرعت و بدون نیاز به دریافت شماره کارت یا شبای پرداخت‌کننده، تنها با فراخوانی API یا یک کلیک از پنل بازگردانده می‌شود.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="div-about2 container mx-auto mt-12">
    <div class="flex flex-col lg:flex-row items-center gap-6 div-rtl">
      <div class="objects w-full lg:w-1/2" style="margin-bottom: 25px;">
        <!-- <div class="divdis2">
          <div class="logo-divimg2" style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/photo-2-logo.svg');"></div>
        </div> -->
        <p class="title2"><b>استرداد کامل یا جزئی وجه پرداختی</b></p>
        <div class="divtext2">
          <p class="text2">
            امکان بازگشت کل یا بخشی از مبلغ پرداخت‌شده در درگاه XdgPay در صورت لغو سفارش یا انصراف از خرید، به ساده‌ترین و سریع‌ترین شکل ممکن فراهم شده است.
          </p>
        </div>
      </div>
      <div class="image w-full lg:w-1/2" style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/photo-2.svg');"></div>
    </div>
  </div>
  <p class="p-title-about3">سایر امکانات</p>
  <div class="div-about3 container mx-auto mt-12">
    <div class="flex flex-col lg:flex-row gap-6 div-rtl" style="height: 100%;">
      <div class="about3-box1 w-full lg:w-1/3">
        <div class="imgbox1"></div>
        <p class="p-title-box1">تعیین اولویت PSP‌ها</p>
        <p class="text-box1">کسب‌وکارها می‌توانند اولویت استفاده از میان PSPهای فعال را به‌دلخواه انتخاب کنند.</p>
      </div>
      <div class="about3-box2 w-full lg:w-1/3">
        <div class="imgbox2">
          <div class="imgbox21"></div>
        </div>
        <p class="p-title-box1">دریافت کارمزد از پرداخت‌کننده</p>
        <p class="text-box1">امکان کسر کارمزد پرداخت، علاوه بر مبلغ کالا یا خدمات، مستقیماً از حساب مشتری فراهم است.</p>
      </div>
      <div class="about3-box3 w-full lg:w-1/3">
        <div class="imgbox3"></div>
        <p class="p-title-box1">تسویه خودکار روزانه</p>
        <p class="text-box1">موجودی درگاه به صورت روزانه و خودکار برداشت شده و به حساب کسب‌وکار واریز می‌شود.</p>
      </div>
    </div>
  </div>
  <div class="div-about3 container mx-auto mt-12">
    <div class="flex flex-col lg:flex-row gap-6 div-rtl">
      <div class="about3-box1 w-full lg:w-1/3">
        <div class="divdis2">
          <div class="logo2-box3" style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/service-feat-icon3.svg');"></div>
        </div>
        <p class="p-title-box1">بازگشت وجه بدون محدودیت زمانی</p>
        <p class="text-box1">امکان بازگرداندن وجه در هر ساعت از شبانه‌روز و بدون محدودیت زمانی.</p>
      </div>
      <div class="about3-box2 w-full lg:w-1/3">
        <div class="divdis2">
          <div class="logo2-box2" style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/service-feat-icon2.svg');"></div>
        </div>
        <p class="p-title-box1">تایید دو مرحله‌ای</p>
        <p class="text-box1">تراکنش‌ها ابتدا به صورت پیش‌نویس ثبت شده و پس از تایید نهایی پردازش می‌شوند.</p>
      </div>
      <div class="about3-box3 w-full lg:w-1/3">
        <div class="divdis2">
          <div class="logo2-box1" style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/service-feat-icon1.svg');"></div>
        </div>
        <p class="p-title-box1">قابل استفاده در دو سطح</p>
        <p class="text-box1">امکان استفاده از سرویس‌ها هم از طریق API و هم پنل کاربری فراهم است.</p>
      </div>
    </div>
  </div>
  <div class="div-about3 container mx-auto mt-12 mb-[100px]">
    <div class="flex flex-col lg:flex-row gap-6 div-rtl">
      <div class="about3-box1 w-full lg:w-1/3">
        <div class="divdis2">
          <div class="logo2-box3" style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/service-feat-icon6.svg');"></div>
        </div>
        <p class="p-title-box1">API گزارش‌گیری برای رفع مغایرت</p>
        <p class="text-box1">ارائه گزارش‌های جامع برای مدیریت مالی و رفع مغایرت‌ها همراه با جزئیات تراکنش‌ها.</p>
      </div>
      <div class="about3-box2 w-full lg:w-1/3">
        <div class="divdis2">
          <div class="logo2-box2" style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/service-feat-icon5.svg');"></div>
        </div>
        <p class="p-title-box1">تکرار تراکنش نا‌موفق</p>
        <p class="text-box1">امکان تلاش مجدد برای تراکنش‌های ناموفق به‌صورت مستقیم از پنل.</p>
      </div>
      <div class="about3-box3 w-full lg:w-1/3">
        <div class="divdis2">
          <div class="logo2-box1" style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/service-feat-icon4.svg');"></div>
        </div>
        <p class="p-title-box1">امکان لغو تراکنش تا 60 دقیقه</p>
        <p class="text-box1">لغو تراکنش تا یک ساعت پس از ثبت، در صورت خطا یا انصراف کاربر.</p>
      </div>
    </div>
  </div>
  <div class="div-about4 container mx-auto mt-12">
    <div class="div-title-about4" style="direction: rtl;">
      <p class="title-about4">تعرفه استرداد وجه</p>
      <p class="text-about4">تعرفه اعلام شده به ازای هر درخواست موفق کسر می‌شود.</p>
    </div>
    <div class="table-about4">
      <div class="row1-about4">
        <p class="p-table1">مبلغ</p>
        <p class="p2-table1">تعداد تراکنش</p>
      </div>
    </div>
    <div class="table2-about4">
      <div class="row21-about4">
        <div class="col21-about4">
          <p class="p-table2">۰.۰۲٪<br><span class="p11-table2">کف: ۱۰,۰۰۰ ریال <br> سقف: ۵۰,۰۰۰ ریال</span></p>
        </div>
        <div class="col22-about4">
          <p class="p2-table2"><span class="check-circle"><i class="fas fa-check"></i></span> ۱ تا بی‌نهایت تراکنش</p>
        </div>
      </div>
    </div>
    <p class="p-title-about4">10% مالیات بر ارزش افزوده به تمامی مبالغ کارمزدها اضافه می‌گردد.</p>
  </div>
  <div class="about-services container mx-auto mt-12 mb-[100px]" style="justify-content: center;align-items: center; display: flex;">
    <div class="flex flex-col lg:flex-row gap-6" style="direction: rtl;">
      <div class="div-1-about-services w-full lg:w-3/5" style="height: 100%;">
        <p class="title-about-services">استفاده از سرویس‌های XDGPay</p>
        <p class="text-about-services">با ایجاد حساب کاربری از خدمات XDGPay برای رشد و ارتقا فرآیند و عملیات مالی کسب و کارتان استفاده کنید.</p>
        <input dir="rtl" type="submit" value="ساخت حساب کاربری >"
               class="w-[170px] h-[50px] bg-[#226ce9] text-white text-sm rounded-md border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] mt-4 transition" />
      </div>
      <div class="div-2-about-services w-full lg:w-2/5">
        <p class="text-about-services2">برای ایجاد بسته اختصاصی کسب و کار‌تان با ما تماس بگیرید.</p>
        <input dir="rtl" type="submit" value="تماس با تیم فروش >"
               class="w-[170px] h-[50px] border border-gray-400 rounded-md text-black text-sm font-vazir3 hover:bg-gray-200 transition mt-4" />
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
export default {
  name: 'DivImg'
}
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

.container {
  max-width: 1200px;
  padding: 0 1rem;
}

.font-vazir { font-family: Vazir; }
.font-vazir2 { font-family: Vazir2; }
.font-vazir3 { font-family: Vazir3; }

.w-full {
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  color: #1a2d4b;
}

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
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/refund-logo.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.divdis {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.direction-rtl {
  direction: rtl;
}

.div-about2 {
  height: auto;
  padding: 2rem 0;
}

.image {
  height: 400px;
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

.imgbox1 { background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/service-feature-3.svg'); }
.imgbox2 .imgbox21 { 
  width: 85%;
  height: 200px;
  margin: auto;
  background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/service-feature-2.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.imgbox3 { background-image: url('https://jibit.ir/wp-content/themes/jibit/images/refund/service-feature-1.svg'); }

.logo2-box1, .logo2-box2, .logo2-box3 {
  width: 88px;
  height: 88px;
  box-shadow: 0px 0px 10px rgba(143, 143, 143, 0.25);
  border-radius: 25px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

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
}

.text-about4 {
  font-size: 1rem;
  font-family: Vazir3;
  color: rgb(129, 129, 129);
}

.table-about4 {
  width: 88%;
  height: 80px;
  background: linear-gradient(270deg, #ff8b70 0, #ff3c4c 19.27%, #226ce9 81.2%, #88ffdc 100%);
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

.row21-about4 {
  display: flex;
  border-bottom: 1px solid #dcdfe4;
  padding: 1rem 0;
}

.col21-about4, .col22-about4 {
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

.p-title-about3 {
  font-size: 1.5rem;
  font-family: Vazir3;
  direction: rtl;
  color: #1a2d4b;
  text-align: right;
  margin-top: 2rem;
}

.p-title-about4 {
  font-size: 1rem;
  font-family: Vazir3;
  color: rgb(0, 89, 255);
  text-align: right;
  direction: rtl;
  margin-top: 1rem;
}

.p-title-about4::before {
  content: url(//jibit.ir/wp-content/themes/jibit/images/common/info.svg);
  float: right;
  margin-left: 11px;
  height: 24px;
  width: 24px;
}

.about-services {
  width: 79%;
  height: 270px;
  margin: auto;
  border-radius: 15px;
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

.title11 { width: 100%; }
.text-dargah { width: 100%; margin-top: 30px; }
.div-btns { width: 100%; }
.li-box { padding: 15px; }
.btn1 { color: rgb(92, 92, 92); }
.btn2 { color: white; }

/* Media Queries */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }

  .divdis.mt-6 {
    padding-right: 0%;
  }

  .image {
    height: 300px !important;
  }

  .imgbox1, .imgbox2 .imgbox21, .imgbox3 {
    height: 150px !important;
  }

  .title2, .title-about4, .title-about-services, .p-title-about3 {
    font-size: 1.25rem;
  }

  .text2, .text-about4, .text-about-services, .text-about-services2 {
    font-size: 0.9rem;
  }

  .p-title-box1 {
    font-size: 1.1rem;
  }

  .text-box1 {
    font-size: 0.85rem;
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

  .about-services {
    flex-direction: column;
    height: 500px !important;
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

@media (max-width: 600px) {
  .title11 {
    font-size: 25px !important;
  }

  .img-1 {
    margin-top: 270px;
  }

  .title2, .title-about4, .title-about-services, .p-title-about3 {
    font-size: 1.1rem;
  }

  .text2, .text-about4, .text-about-services, .text-about-services2 {
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

  input[type="submit"] {
    width: 100%;
  }
}
</style>