<template>
  <div :class="['div1', { scrolled: isScrolled }]">
    <li class="li_logo">
      <NuxtLink to="/"><div class="logo"></div></NuxtLink>
    </li>
    <ul class="ul_menu">
      <li><button type="submit" @click="menuopen()" @focusout="menuclose()" style="cursor: pointer;font-family: Vazir3;color: rgb(88, 88, 88);">سرویس‌ها </button></li>
      <div :class="['services', { open: menuservices }]">
        <ul class="ul_services">
          <li><NuxtLink to="/DargahP/DargahPardakht">درگاه پرداخت <div class="logo1"></div></NuxtLink></li>
          <li><a href="#">استرداد وجه <div class="logo2"></div></a></li>
          <li><a href="#">واریز شناسه دار<div class="logo3"></div></a></li>
          <li><a href="#">تسویه و انتقال وجه <div class="logo4"></div></a></li>
          <li><a href="#">سرویس های استعلامی <div class="logo5"></div></a></li>
          <li><a href="#">احراز هویت بایومتریک <div class="logo6"></div></a></li>
        </ul>
      </div>
      <li><NuxtLink to="ContantPage">ارتباط با ما</NuxtLink></li>
      <li><a href="#">بلاگ</a></li>
      <li><a href="#">ورود به پنل</a></li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuservices = ref(false);
function menuopen(){
  menuservices.value = !menuservices.value
}
function menuclose(){
  menuservices.value = false
}
const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.div1 {
  width: 100%;
  height: 63px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
  z-index: 6;
  background-color: transparent;
  transition: background-color 0.5s ease;
}


.div1.scrolled {
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.ul_menu {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: auto;
}

.ul_menu li {
  list-style: none;
  margin-right: 45px;
}

.ul_menu li a {
  color: rgb(88, 88, 88);
  text-decoration: none;
  font-size: 16px;
  font-family: Vazir3;
}

.li_logo {
  margin: auto;
  width: 50%;
  background-size: cover;
  list-style: none;
  margin-right: 11%;
}

.logo {
  width: 114px;
  height: 35px;
  background-image: url(../public/brand.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.services {
  opacity: 0;
  transition: opacity 0.5s ease, height 0.5s ease;
  overflow: hidden;
  width: 280px;
  height: 0px;
  background-color: #fff;
  position: absolute;
  top: 55px;
  right: 58%;
  border-radius: 15px;
  box-shadow: 0px 2px 2px rgb(231, 231, 231);
  transition: all ease-in-out 0.7s;
  overflow: hidden;
}
.services.open {
  opacity: 1;
  height: 420px;
}
.services ul {
  width: 100%;
  height: 100%;
}
.services ul li {
  width: 100%;  
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0%;
}
.ul_services li a {
  width: 90%;
  color: rgb(88, 88, 88);
  text-decoration: none;
  font-size: 16px;
  font-family: Vazir3;
  padding: 15px;
  transition: all ease-in-out 0.2s;
  border-radius: 10px;
  display: flex;
  direction: ltr;
  justify-content: end;

}
.ul_services li a:hover{
  background-color: #e8f3ff;
}
.logo1{
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/projectx/projectx-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;margin-left: 4%;
}
.logo2{
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/icons/refund_logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;margin-left: 4%;
}
.logo3{
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/pip/pip-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;margin-left: 4%;
}
.logo4{
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/transferor/transferor-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;margin-left: 4%;
}
.logo5{
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/alpha/alpha_logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;margin-left: 4%;
}
.logo5{
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/identicator/identicator-logo.svg);
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;margin-left: 4%;
}
.logo6{
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/alpha/alpha_logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;margin-left: 4%;
}


</style>
