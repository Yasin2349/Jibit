<template>
  <div class="w-4/5 h-[250px] mx-auto flex items-end">
    <div class="w-full">
      <p class="w-full text-[32px] text-[#303c4f] text-right leading-[85px] font-vazir">
        سرویس های جیبیت
      </p>
      <p class="w-full text-right text-[#697281] font-vazir3 rtl">
        ارائه دهنده خدمات متنوع پرداخت، انتقال وجه و عملیات مالی و بانکی به صورت یکپارچه و پایدار است.
      </p>
    </div>
  </div>
  <div style="width: 100%;display: block;">
  </div>
</template>

<script setup>
</script>
<style scoped>
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
</style>

<style>
@media (max-width: 600px) {
  .w-4\/5 {
  width: 80%;
}
.text-\[32px\] {
  font-size: 32px;
  line-height: 85px;
}
.leading-\[85px\] {
  line-height: 85px;
}
.font-vazir3 {
  font-size: 16px;
}

@media (max-width: 600px) {
  .w-4\/5 {
    width: 95% !important;
  }
  .text-\[32px\] {
    font-size: 20px !important;
    line-height: 1.2 !important;
  }
  .leading-\[85px\] {
    line-height: 1.2 !important;
  }
  .font-vazir3 {
    font-size: 12px !important;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .w-4\/5 {
    width: 90% !important;
  }
  .text-\[32px\] {
    font-size: 24px !important;
    line-height: 1.4 !important;
  }
  .leading-\[85px\] {
    line-height: 1.4 !important;
  }
  .font-vazir3 {
    font-size: 14px !important;
  }
}

}
</style>
