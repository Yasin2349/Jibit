<template>
  <div class="w-full h-[80px] flex items-center">
    <ul class="w-full flex justify-center items-center rtl flex-wrap">
      <div style="display: flex; width: 330px;" class="div-row1">
        <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo1"
      ></li>
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo2"
      ></li>
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo3"
      ></li>
      </div>
      <div style="display: flex; justify-content: center;width: 330px;align-items: center;" class="div-row2">
        <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo4"
      ></li>
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo5"
      ></li>
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo6"
      ></li>
      </div>
      
    </ul>
  </div>
</template>

<script setup>
defineProps()
</script>

<style scoped>
@media (max-width: 600px) {
    .div-row1 {
      width: 500px !important;
      margin-top: 40px;
    }
    .div-row2 {
      width: 500px !important;
      margin-top: 25px;
    }
}
.rtl {
  direction: rtl;
}
.li-logo1 {
  background-image: url('/logo/snapp.png');
}
.li-logo1:hover {
  background-image: url('/logo/snapp2.png');
  filter: brightness(3);
}

.li-logo2 {
  background-image: url('/logo/bitpin.png');
}
.li-logo2:hover {
  background-image: url('/logo/bitpin2.png');
  filter: brightness(1.5);
}

.li-logo3 {
  background-image: url('/logo/blu.png');
}
.li-logo3:hover {
  background-image: url('/logo/blu2.png');
  filter: brightness(1.5);
}

.li-logo4 {
  background-image: url('/logo/digipay.png');
}
.li-logo4:hover {
  background-image: url('/logo/digipay2.png');
  filter: brightness(1.5);
}

.li-logo5 {
  background-image: url('/logo/nobitex.png');
}
.li-logo5:hover {
  background-image: url('/logo/nobitex2.png');
  filter: brightness(1.5);
}

.li-logo6 {
  background-image: url('/logo/finnotech.png');
}
.li-logo6:hover {
  background-image: url('/logo/finnotech2.png');
  filter: brightness(1.5);
}



</style>
