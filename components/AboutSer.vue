<template>
  <div class="w-[80%] h-[250px] mx-auto flex items-end">
    <div class="w-full">
      <p class="w-full text-[32px] text-[#303c4f] text-right leading-[85px] font-vazir">سرویس های جیبیت</p>
      <p class="w-full text-right text-[#697281] font-vazir3 rtl">ارائه دهنده خدمات متنوع پرداخت، انتقال وجه و عملیات مالی و بانکی به صورت یکپارچه و پایدار است.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSer'
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


.rtl {
  direction: rtl;
}
</style>
