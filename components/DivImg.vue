<template>
  <div
    class="section-wrapper w-full h-[700px] flex justify-center items-center
           bg-[url('/bg_desktop.png')] bg-cover bg-bottom
           bg-gradient-to-br from-[#d8dce2] via-[#f9fafd] to-[#f9fafd]
           pt-20 pb-20 relative text-[#1a2d4b]"
  >
    <div class="w-3/5 h-full flex justify-center items-center">
      <img
        src="https://jibit.ir/wp-content/themes/jibit/images/home2/main-photo.svg"
        alt="main graphic"
        class="w-[660px] h-[600px] mt-10 object-cover z-1"
      />
    </div>
    <div class="w-2/5 h-full flex flex-col justify-start text-right">
      <p
        v-if="data_contant.title"
        class="text-[48px] font-vazir3 font-bold text-[#1a2d4b] mt-[100px] w-[72%]"
      ><b>
        <span class="font-bold">{{ data_contant.title }}</span>
      </b></p>
      <p
        v-if="data_contant.text"
        class="w-[72%] text-[18px] leading-[29px] text-[#4d5768] mt-4 font-vazir2"
      >
        {{ data_contant.text }}
      </p>
      <div class="w-[72%] flex justify-end items-center mt-20 gap-2">
        <input
          dir="rtl"
          type="submit"
          value="تماس با تیم فروش >"
          class="w-[170px] h-[50px] border border-gray-400 rounded-md
                 text-black text-sm font-vazir3 hover:bg-gray-200 transition"
        />
        <input
          dir="rtl"
          type="submit"
          value="ساخت حساب کاربری >"
          class="w-[170px] h-[50px] bg-[#226ce9] text-white text-sm rounded-md
                 border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] transition"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const data_contant = ref({})

onMounted(async () => {
  try {
    const res = await fetch('/data/homepage.json')
    data_contant.value = await res.json()
    console.log('Fetched data:', data_contant.value)
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
@font-face {
  font-family: Vazir;
  src: url('~/public/vazir-Bold.woff') format('woff'),
       url('/Vazir.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: Vazir2;
  src: url('/Vazir-Thin.woff');
}
@font-face {
  font-family: Vazir3;
  src: url('/Vazir-Medium.ttf');
}

.font-vazir {
  font-family: Vazir, sans-serif;
}
.font-vazir2 {
  font-family: Vazir2, sans-serif;
}
.font-vazir3 {
  font-family: Vazir3, sans-serif;
}
</style>
