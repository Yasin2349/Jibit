<template>
  <div
    class="section-wrapper w-full h-[700px] flex justify-center items-center
           bg-cover bg-bottom
           pt-20 pb-20 relative text-[#1a2d4b] back section-wrapper-responsive"
  >
    <div class="w-3/5 h-full flex justify-center items-center image-container-responsive">
      <img
        src="https://jibit.ir/wp-content/themes/jibit/images/home2/main-photo.svg"
        alt="main graphic"
        class="w-[660px] h-[600px] mt-10 object-cover z-1 image-responsive"
      />
    </div>
    <div class="w-2/5 h-full flex flex-col justify-start text-right text-container-responsive">
      <p
        v-if="data_contant.title"
        class="text-[48px] font-vazir3 font-bold text-[#1a2d4b] mt-[100px] w-[72%] title-responsive"
      >
        <b>
          <span class="font-bold">{{ data_contant.title }}</span>
        </b>
      </p>
      <p
        v-if="data_contant.text"
        class="w-[72%] text-[18px] leading-[29px] text-[#4d5768] mt-4 font-vazir2 text-responsive"
      >
        {{ data_contant.text }}
      </p>
      <div class="w-[72%] flex justify-end items-center mt-20 gap-2 buttons-container-responsive">
        <input
          dir="rtl"
          type="submit"
          value="تماس با تیم فروش >"
          class="w-[170px] h-[50px] border border-gray-400 rounded-md
                 text-black text-sm font-vazir3 hover:bg-gray-200 transition button-responsive"
        />
        <input
          dir="rtl"
          type="submit"
          value="ساخت حساب کاربری >"
          class="w-[170px] h-[50px] bg-[#226ce9] text-white text-sm rounded-md
                 border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] transition button-responsive"
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
.back{
  background-image: url('/bg_desktop.png') , linear-gradient(to bottom right , #bcd4fd , #f9fafd , #f9fafd);
}

@media (max-width: 1024px) {
  .section-wrapper-responsive {
    flex-direction: column;
    height: auto;
    padding: 60px 20px;
    text-align: center;
  }

  .image-container-responsive {
    width: 100%;
    height: auto;
    justify-content: center;
    margin-bottom: 30px;
  }

  .text-container-responsive {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .image-responsive {
    width: 90%;
    height: auto;
  }

  .title-responsive,
  .text-responsive,
  .button-responsive {
    width: 90% !important;
  }

  .buttons-container-responsive {
    margin-top: 30px !important;
    flex-direction: column;
    gap: 15px;
  }

  .title-responsive {
    margin-top: 0 !important;
  }
}
</style>
