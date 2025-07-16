<template>
  <div class="w-full h-[700px] bg-cover bg-no-repeat bg-bottom py-20 flex justify-center items-center relative" >
    <div class="w-3/5 h-full flex justify-center items-center">
      <img 
  src="https://jibit.ir/wp-content/uploads/2025/06/امنیت-اطلاعات-مالی-کسب‌وکارها.png" 
  alt="image not found!" 
  :class="['w-[580px] rounded-[15px] h-[383px] mt-10 z-1 object-cover', { skeleton: !loading }]" 
  @load="loading = true" 
/>
    </div>
    <div class="w-2/5 h-full flex flex-col justify-start text-right">
      <b><p class="p-date">۰۸ تیر ۱۴۰۴ . زمان مطالعه: حدود 22 دقیقه</p></b>
      
      <p class="text-[40px] font-bold text-[#1a2d4b]-500 mt-[10px]  w-[72%] font-vazir3">
        مروری بر امنیت اطلاعات مالی کسب‌وکارها
      </p>
      <p class="w-[72%] text-[18px] leading-[29px] text-[#4d5768] mt-4 font-vazir2" dir="rtl">
        در دنیای امروز، امنیت اطلاعات مالی کسب‌وکارها فقط دغدغه تیم IT نیست؛ مسئله همه کسب‌وکار است. با شتاب‌گرفتن تحول دیجیتال و رشد فین‌تک، تهدیدهای سایبری...
      </p>
      <div class="w-[72%] flex justify-end items-center mt-15 gap-2">
        <input dir="rtl" type="submit" value="مطالعه مقاله >"
               class="w-[136px] h-[50px] bg-[#226ce9] text-white text-sm rounded-md border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] transition" />
      </div>
    </div>
  </div>
  <p class="p-title-about3">مجموعه مقالات</p>
  <NuxtLink to="/blog">
  <div class="blog">
    <div class="display">
      <div class="image-blog skeleton"></div>
    </div>
    <div class="display2">
      <div class="about-blog">
        <p class="p-date-blog skeleton" >۱۹ خرداد ۱۴۰۴</p>
        <p class="p-title-blog skeleton">امضای دیجیتال و امضای الکترونیک چیست؟ راهنمای جامع فناوری، امنیت و قوانین</p>
        <p class="p-text-blog skeleton">تحول دیجیتال در دهه گذشته سرعتی خیره‌کننده گرفته است و بانک‌ها، دولت‌ها و استارتاپ‌ها ناگزیر شده‌اند فرایندهای کاغذی خود را حذف کنند. یکی از ارکان...</p>
    </div>
    </div>
  </div>
  </NuxtLink>
  <NuxtLink to="/blog">
  <div class="blog">
    <div class="display">
      <div class="image-blog skeleton" style="background-image: url(https://jibit.ir/wp-content/uploads/2025/06/Frame-1321314624-1.jpg);"></div>
    </div>
    <div class="display2">
      <div class="about-blog">
        <p class="p-date-blog skeleton">۱۹ خرداد ۱۴۰۴</p>
        <p class="p-title-blog skeleton">امضای دیجیتال و امضای الکترونیک چیست؟ راهنمای جامع فناوری، امنیت و قوانین</p>
        <p class="p-text-blog skeleton">تحول دیجیتال در دهه گذشته سرعتی خیره‌کننده گرفته است و بانک‌ها، دولت‌ها و استارتاپ‌ها ناگزیر شده‌اند فرایندهای کاغذی خود را حذف کنند. یکی از ارکان...</p>
    </div>
    </div>
  </div>
  </NuxtLink>
  <NuxtLink to="/blog">
  <div class="blog">
    <div class="display">
      <div class="image-blog skeleton" style="background-image: url(https://jibit.ir/wp-content/uploads/2025/05/کشورهای-پیشرو-در-eKYC-scaled.png);"></div>
    </div>
    <div class="display2">
      <div class="about-blog ">
        <p class="p-date-blog skeleton">۱۹ خرداد ۱۴۰۴</p>
        <p class="p-title-blog skeleton">امضای دیجیتال و امضای الکترونیک چیست؟ راهنمای جامع فناوری، امنیت و قوانین</p>
        <p class="p-text-blog skeleton">تحول دیجیتال در دهه گذشته سرعتی خیره‌کننده گرفته است و بانک‌ها، دولت‌ها و استارتاپ‌ها ناگزیر شده‌اند فرایندهای کاغذی خود را حذف کنند. یکی از ارکان...</p>
    </div>
    </div>
  </div>
  </NuxtLink>
  <NuxtLink to="/blog">
  <div class="blog">
    <div class="display">
      <div class="image-blog skeleton" style="background-image: url(https://jibit.ir/wp-content/uploads/2025/05/تکنولوژی‌های-کلیدی-eKYC-1-scaled.jpg);"></div>
    </div>
    <div class="display2">
      <div class="about-blog">
        <p class="p-date-blog skeleton">۱۹ خرداد ۱۴۰۴</p>
        <p class="p-title-blog skeleton">امضای دیجیتال و امضای الکترونیک چیست؟ راهنمای جامع فناوری، امنیت و قوانین</p>
        <p class="p-text-blog skeleton">تحول دیجیتال در دهه گذشته سرعتی خیره‌کننده گرفته است و بانک‌ها، دولت‌ها و استارتاپ‌ها ناگزیر شده‌اند فرایندهای کاغذی خود را حذف کنند. یکی از ارکان...</p>
    </div>
    </div>
    </div>
    </NuxtLink>
    <NuxtLink to="/blog">
      <div class="blog">
        <div class="display">
          <div class="image-blog skeleton" style="background-image: url(https://jibit.ir/wp-content/uploads/2025/05/مقررات-eIDAS-scaled.jpg);"></div>
        </div>
        <div class="display2" >
          <div class="about-blog">
            <p class="p-date-blog skeleton">۱۹ خرداد ۱۴۰۴</p>
            <p class="p-title-blog skeleton">امضای دیجیتال و امضای الکترونیک چیست؟ راهنمای جامع فناوری، امنیت و قوانین</p>
            <p class="p-text-blog skeleton">تحول دیجیتال در دهه گذشته سرعتی خیره‌کننده گرفته است و بانک‌ها، دولت‌ها و استارتاپ‌ها ناگزیر شده‌اند فرایندهای کاغذی خود را حذف کنند. یکی از ارکان...</p>
          </div>
        </div>
      </div>  
    
      
    </NuxtLink>
    <p class="p-title-about3">به مطالعه ادامه دهید ...</p>
    <div class="display" style="justify-content: right;">
      <input dir="rtl" type="submit" value="مطالعه بیشتر >" class="w-[140px] h-[45px] border border-gray-300 rounded-md text-black-100 text-sm font-vazir3 hover:bg-gray-200 transition mt-[10px] mr-[10%] cursor-pointer" />
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

<script setup>
import { onMounted } from 'vue'
import { ref } from 'vue';

// setTimeout(() => {
//   onMounted(() => {
//   document.querySelectorAll('.skeleton').forEach(el => {
//     el.classList.remove('skeleton')
//   })
// })  
// }, 2000);
const loading  = ref(false)
onMounted(() => {
  setTimeout(() => {
    document.querySelectorAll('.skeleton').forEach(el => {
      if (!el.tagName.toLowerCase().includes('img')) {
        el.classList.remove('skeleton')
      }
    })    
  }, 1000);
})  

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
.font-vazir { 
  font-family: Vazir;
}
.font-vazir2 {
  font-family: Vazir2;
}
.font-vazir3 {
  font-family: Vazir3;
}
.p-date{
  width: 100%;
  text-align: right;
  padding-right: 28%;
  font-size: 16px;
  font-family: Vazir;
  color: #979797;
  margin-top: 100px;
  direction: rtl;
}
.p-title-about3{
  width: 100%;
  font-size: 28px;
  font-family: Vazir;
  padding-right: 10%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 100px;
  color: #1a2d4b;
  direction: rtl;
}
.blog{
  width: 80%;
  height: 270px;
  transition: all ease 0.5s;
  border-radius: 15px;
  margin: auto;
  margin-top: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
}.blog:hover{
  background-color: white;
  box-shadow: 0px 10px 19px #0000001a;
}
.image-blog{
  width: 280px;
  height: 82%;
  background-image: url(https://jibit.ir/wp-content/uploads/2025/06/امضای-دیجیتال.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  margin-left: 8%;
  cursor: pointer;
}
.display{
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.about-blog{
  width: 80%;
  height: 100%;
  margin-right: 0%;
}
.p-date-blog{
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  color: #727272;
  font-family: Vazir;
  direction: rtl;
  margin-top: 28px;
}
.p-title-blog{
  cursor: pointer;
  width: 100%;
  font-size: 15px;
  font-family: Vazir;
  font-size: 24px;  
  text-align: right;
  margin-right: 0%;
  margin-top: 15px;
}
.p-text-blog{
  cursor: pointer;
  width: 100%;
  font-size: 15px;
  color: #555555;
  font-family: Vazir;
  text-align: right;
  direction: rtl;
  margin-right: 0%;
  margin-top: 15px;
}
.display2{
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
}

.skeleton {
  position: relative;
  background-color: #ccc;
  border-radius: 6px;
  overflow: hidden;
  color: transparent;
  user-select: none;
}

.skeleton::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 150%; 
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6), 
    transparent
  );
  animation: shimmer 1s infinite;
  z-index: 1;
}

@keyframes shimmer {
  0% { transform: translateX(-150%); } 
  100% { transform: translateX(150%); } 
}
/* برای تبلت و پایین‌تر */
@media (max-width: 1024px) {
  .main-section {
    flex-wrap: wrap;
    justify-content: center;
  }
  .image-wrapper {
    flex: 1 1 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .main-image {
    max-width: 100%;
    height: auto;
  }
  .text-wrapper {
    flex: 1 1 100%;
    max-width: 100%;
    padding: 0 15px;
    text-align: right;
  }
  .title {
    font-size: 28px !important;
  }
  .desc {
    font-size: 16px !important;
  }
  .btn-wrapper {
    justify-content: center !important;
    margin-top: 15px;
  }
  .btn-primary {
    width: 120px !important;
    height: 45px !important;
  }
  .p-date {
    font-size: 14px !important;
  }
  .p-title-about3 {
    font-size: 24px !important;
    margin: 60px 0 30px 0 !important;
  }
  .btn-readmore-wrapper {
    justify-content: center !important;
    margin: 20px 0 !important;
  }
  .btn-secondary {
    width: 130px !important;
    height: 40px !important;
  }
}

/* موبایل کوچک‌تر و موبایل */
@media (max-width: 640px) {
  .main-section {
    flex-direction: column !important;
    align-items: center !important;
    margin-top: 50px !important;
  }
  .image-wrapper {
    margin-bottom: 15px !important;
  }
  .main-image {
    border-radius: 10px !important;
    max-width: 100% !important;
  }
  .text-wrapper {
    padding: 0 10px !important;
    max-width: 100% !important;
  }
  .title {
    font-size: 22px !important;
    line-height: 1.3 !important;
  }
  .desc {
    font-size: 14px !important;
    line-height: 1.5 !important;
  }
  .p-date {
    font-size: 12px !important;
  }
  .btn-wrapper {
    justify-content: center !important;
  }
  .btn-primary {
    width: 110px !important;
    height: 40px !important;
    font-size: 13px !important;
  }
  .p-title-about3 {
    font-size: 20px !important;
    margin: 40px 0 20px 0 !important;
  }
  .btn-readmore-wrapper {
    justify-content: center !important;
    margin: 15px 0 !important;
  }
  .btn-secondary {
    width: 120px !important;
    height: 38px !important;
    font-size: 13px !important;
  }
}

/* موبایل خیلی کوچک (مثلاً گوشی‌های زیر 400px) */
@media (max-width: 400px) {
  .title {
    font-size: 18px !important;
  }
  .desc {
    font-size: 12px !important;
  }
  .btn-primary {
    width: 100px !important;
    height: 35px !important;
    font-size: 12px !important;
  }
  .btn-secondary {
    width: 100px !important;
    height: 35px !important;
    font-size: 12px !important;
  }
  .p-date {
    font-size: 10px !important;
  }
  .p-title-about3 {
    font-size: 18px !important;
  }
}


</style>