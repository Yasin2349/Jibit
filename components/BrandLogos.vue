<template>
  <div class="w-full h-[80px] flex items-center">
    <ul class="w-full flex justify-center items-center rtl">
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo1"
      ></li>
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo2"
      ></li>
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo3"
      ></li>
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo4"
      ></li>
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo5"
      ></li>
      <li
        class="w-[110px] h-[30px] mx-auto bg-cover bg-bottom bg-no-repeat transition duration-700 ease-in-out li-logo6"
      ></li>
    </ul>
  </div>
</template>

<script setup>
defineProps()
</script>

<style scoped>


/* RTL helper */
.rtl {
  direction: rtl;
}

/* Logo backgrounds */

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
