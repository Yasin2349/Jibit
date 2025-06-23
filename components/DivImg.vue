<template>
  <div class="w-full h-[700px] bg-cover bg-no-repeat bg-bottom py-20 flex justify-center items-center relative" 
       style="">
    <div class="w-3/5 h-full flex justify-center items-center">
      <img src="https://jibit.ir/wp-content/themes/jibit/images/home2/main-photo.svg" alt="image not found!" class="w-[660px] h-[600px] mt-10 z-1 object-cover" />
    </div>
    <div class="w-2/5 h-full flex flex-col justify-start text-right">
      <p class="text-[48px] font-bold text-[#1a2d4b]-500 mt-[150px] w-[72%] font-vazir3">{{ this.data_contant.title }}</p>
      <p class="w-[72%] text-[18px] leading-[29px] text-[#4d5768] mt-4 font-vazir2">{{ this.data_contant.text }}</p>
      <div class="w-[72%] flex justify-end items-center mt-20 gap-2">
        <input dir="rtl" type="submit" value="تماس با تیم  فروش >"
               class="w-[170px] h-[50px] border border-gray-400 rounded-md text-black text-sm font-vazir3 hover:bg-gray-200 transition" />
        <input dir="rtl" type="submit" value="ساخت حساب کاربری >"
               class="w-[170px] h-[50px] bg-[#226ce9] text-white text-sm rounded-md border border-[#226ce9] font-vazir3 hover:bg-[#2247e9] transition" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DivImg',
  data() {
    return {
      data_contant: {}
    }
  },
  mounted() {
    fetch("../data/homepage.json")
    .then(res => res.json())
    .then(data => {
      this.data_contant = data;
      console.log("Fetched data:", this.data_contant);
    });
  }
}
</script>

<style scoped>
.w-full{
    background-image: url('../public/bg_desktop.png'), linear-gradient(to bottom right, #d8dce2 , #f9fafd ,#f9fafd , #f9fafd);
    color: #1a2d4b;
}
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
</style>
