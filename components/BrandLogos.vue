<template>
  <div class="w-full h-[80px] flex items-center">
    <ul class="w-full flex justify-center items-center direction-rtl">
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo1"></li>
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo2"></li>
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo3"></li>
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo4"></li>
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo5"></li>
      <li class="w-[110px] h-[30px] list-none mx-auto bg-cover bg-bottom bg-no-repeat transition-filter duration-700 ease-in-out li_logo6"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BrandLogos'
}
</script>

<style scoped>
.direction-rtl {
  direction: rtl;
}
.li_logo1 {
  background-image: url(../public/logo/snapp.png);
}
.li_logo1:hover {
  background-image: url(../public/logo/snapp2.png);
  filter: brightness(1.2);
}
.li_logo2 {
  background-image: url(../public/logo/bitpin.png);
}
.li_logo2:hover {
  background-image: url(../public/logo/bitpin2.png);
  filter: brightness(1.2);
}
.li_logo3 {
  background-image: url(../public/logo/blu.png);
}
.li_logo3:hover {
  background-image: url(../public/logo/blu2.png);
  filter: brightness(1.2);
}
.li_logo4 {
  background-image: url(../public/logo/digipay.png);
}
.li_logo4:hover {
  background-image: url(../public/logo/digipay2.png);
  filter: brightness(1.2);
}
.li_logo5 {
  background-image: url(../public/logo/nobitex.png);
}
.li_logo5:hover {
  background-image: url(../public/logo/nobitex2.png);
  filter: brightness(1.2);
}
.li_logo6 {
  background-image: url(../public/logo/finnotech.png);
}
.li_logo6:hover {
  background-image: url(../public/logo/finnotech2.png);
  filter: brightness(1.2);
}
</style>
