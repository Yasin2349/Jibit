<template>
  <div class="w-full h-[260px] mt-[110px]">
    <ul class="h-full flex justify-center items-center mx-auto">
      <li class="w-[280px] rounded-[15px] h-[96%] bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)]">
        <div
          class="w-[55px] h-[55px] mt-[30px] mr-[30px] bg-center bg-cover"
          style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/home2/usp4.svg')"
        ></div>
        <p class="w-[90%] pr-[10%] text-right text-[20px] text-[#303c4f] font-vazir leading-[55px]">مقیاس پذیر</p>
        <p class="w-[90%] text-right mr-[10%] font-vazir2 text-[15px] font-bold text-[#697281]">
          امکان رشد تصاعدی کسب و کار‌ها<br /> مزیتی مهم در پلتفرم جیبیت است.
        </p>
      </li>

      <li class="w-[280px] rounded-[15px] h-[96%] bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)]">
        <div
          class="w-[55px] h-[55px] mt-[30px] mr-[30px] bg-center bg-cover"
          style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/home2/usp3.svg')"
        ></div>
        <p class="w-[90%] pr-[10%] text-right text-[20px] text-[#303c4f] font-vazir leading-[55px]">امنیت و حریم خصوصی</p>
        <p class="w-[90%] text-right mr-[10%] font-vazir2 text-[15px] font-bold text-[#697281]">
          ارسال و پردازش درخواست‌ها با حفظ<br /> حریم خصوصی کاربران و امنیت کامل<br /> انجام می‌گیرد.
        </p>
      </li>

      <li class="w-[280px] rounded-[15px] h-[96%] bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)]">
        <div
          class="w-[55px] h-[55px] mt-[30px] mr-[30px] bg-center bg-cover"
          style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/home2/usp2.svg')"
        ></div>
        <p class="w-[90%] pr-[10%] text-right text-[20px] text-[#303c4f] font-vazir leading-[55px]">سریع و راحت</p>
        <p class="w-[90%] text-right mr-[10%] font-vazir2 text-[15px] font-bold text-[#697281]">
          سرعت در پیاده سازی سرویس‌ها<br /> و راحتی در استفاده از آن‌ها از مزیت‌های<br /> وب‌سرویس‌هاست.
        </p>
      </li>

      <li class="w-[280px] rounded-[15px] h-[96%] bg-white list-none mx-2.5 direction-rtl shadow-[0_3px_2px_rgb(161,161,161)]">
        <div
          class="w-[55px] h-[55px] mt-[30px] mr-[30px] bg-center bg-cover"
          style="background-image: url('https://jibit.ir/wp-content/themes/jibit/images/home2/usp1.svg')"
        ></div>
        <p class="w-[90%] pr-[10%] text-right text-[20px] text-[#303c4f] font-vazir leading-[55px]">قابل اطمینان</p>
        <p class="w-[90%] text-right mr-[10%] font-vazir2 text-[15px] font-bold text-[#697281]">
          سرویس‌ها بی‌وقفه و با زمان کارکرد<br /> بیش از ۹۹٪ در کنار کسب و کار‌ها قرار<br /> دارند.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BoxAbout'
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

.font-vazir {
  font-family: Vazir;
}
.font-vazir2 {
  font-family: Vazir2;
}
.font-vazir3 {
  font-family: Vazir3;
}

/* برای راست‌چین */
.direction-rtl {
  direction: rtl;
}
</style>
