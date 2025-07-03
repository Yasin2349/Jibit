<template>
  <div class="w-full mt-[110px] div-about">
    <ul class="flex flex-wrap justify-center items-start mx-auto ul-btns mb-[50px]">
      <li
  v-for="(item, idx) in items"
  :key="idx"
  class="w-[280px] min-h-[235px] mx-2.5 bg-white rounded-[15px]
         shadow-[0_3px_2px_rgb(161,161,161)] list-none rtl li-btns mt-[25px] flex flex-col justify-start"
>
        <div
          class="w-[55px] h-[55px] mt-[30px] mr-[30px]
                 bg-center bg-cover div-icon"
          :style="{ backgroundImage: `url(${item.icon})` }"
        ></div>
        <p class="w-[90%] pr-[10%] text-right text-[20px]
                  text-[#303c4f] font-vazir leading-[55px] p-title">
          {{ item.title }}
        </p>
        <p class="w-[90%] text-right mr-[10%] text-[15px]
                  font-vazir2 font-bold text-[#697281] p-text">
          <span v-html="item.text"></span>
        </p>
      </li>
    </ul>
  </div>
</template>


<script setup>
const items = [
  {
    icon: 'https://jibit.ir/wp-content/themes/jibit/images/home2/usp4.svg',
    title: 'مقیاس پذیر',
    text: 'امکان رشد تصاعدی کسب و کار‌ها<br/> مزیتی مهم در پلتفرم جیبیت است.'
  },
  {
    icon: 'https://jibit.ir/wp-content/themes/jibit/images/home2/usp3.svg',
    title: 'امنیت و حریم خصوصی',
    text: 'ارسال و پردازش درخواست‌ها با حفظ<br/> حریم خصوصی کاربران و امنیت کامل<br/> انجام می‌گیرد.'
  },
  {
    icon: 'https://jibit.ir/wp-content/themes/jibit/images/home2/usp2.svg',
    title: 'سریع و راحت',
    text: 'سرعت در پیاده سازی سرویس‌ها<br/> و راحتی در استفاده از آن‌ها از مزیت‌های<br/> وب‌سرویس‌هاست.'
  },
  {
    icon: 'https://jibit.ir/wp-content/themes/jibit/images/home2/usp1.svg',
    title: 'قابل اطمینان',
    text: 'سرویس‌ها بی‌وقفه و با زمان کارکرد<br/> بیش از ۹۹٪ در کنار کسب و کار‌ها قرار<br/> دارند.'
  }
]
</script>

<style scoped>
/* @font-face {
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
} */
.font-vazir {
  font-family: Vazir, sans-serif;
}
.font-vazir2 {
  font-family: Vazir2, sans-serif;
}
.font-vazir3 {
  font-family: Vazir3, sans-serif;
}
.rtl {
  direction: rtl;
}
@media (max-width: 1024px) {
  .li-btns {
    width: 45%;
  }
}

/* ======================= */
/* Media Query برای موبایل */
/* ======================= */
@media (max-width: 640px) {
  .li-btns {
    width: 100%;
  }

  .p-title {
    font-size: 18px;
  }

  .p-text {
    font-size: 14px;
  }

  .div-icon {
    width: 45px;
    height: 45px;
  }
}
</style>

