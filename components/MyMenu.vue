```vue
<template>
  <div :class="['div1 container mx-auto flex items-center justify-between fixed top-0 z-50', { 'bg-white shadow-md': isScrolled, 'hidden': isLoginPage }]">
    
    <li class="li_logo" style="list-style:none;">
      <NuxtLink to="/"><div class="logo"></div></NuxtLink>
    </li>

    
    <ul :class="['ul-menu2 absolute top-14 ltr:left-4 rtl:right-4 bg-white rounded-2xl shadow-lg transition-all duration-300', { 'w-72 h-[500px] p-4 visible': shmenu, 'w-72 h-0 invisible': !shmenu }]" id="ul-menu2">
      <li>  
        <button type="button" class="text-sm font-vazir3 text-gray-600">
          سرویس‌ها
        </button>
      </li>
      <div class="services2">
        <ul class="ul_services border-b border-gray-200">
          <li><NuxtLink to="/DargahP/DargahPardakht" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">درگاه پرداخت <div class="logo1"></div></NuxtLink></li>
          <li><NuxtLink to="/DargahP/EsterdadVagh" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">استرداد وجه <div class="logo2"></div></NuxtLink></li>
          <li><NuxtLink to="/DargahP/VarizSH" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">واریز شناسه دار<div class="logo3"></div></NuxtLink></li>
          <li><a href="#" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">تسویه و انتقال وجه <div class="logo4"></div></a></li>
          <li><a href="#" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">سرویس‌های استعلامی <div class="logo5"></div></a></li>
          <li><a href="#" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">احراز هویت بایومتریک <div class="logo6"></div></a></li>
        </ul>
      </div>
      <li><NuxtLink to="/ContantPage" class="contant-btn flex items-center justify-center text-gray-600 font-vazir3 border-b border-gray-200 py-4">ارتباط با ما</NuxtLink></li>
      <li><NuxtLink to="/blogs" class="blog-btn flex items-center justify-center text-gray-600 font-vazir3 py-4">{{ langStore.t('btn_blog') }}</NuxtLink></li>
    </ul>

    
    <ul class="ul_menu flex items-center gap-6 ltr:mr-8 rtl:ml-8">
      <li class="li-sh w-[18%] hidden lg:block">
        <button class="bnt-ser-menu flex items-center gap-2 text-gray-600 font-vazir3 cursor-pointer" type="button" @click="menuopen" @blur="menuclose">
          {{ langStore.t('link_menu_servic') }}<i class="fas fa-chevron-down"></i>
        </button>
      </li>
      <div :class="['services absolute top-14 ltr:right-1/2 rtl:left-1/2 bg-white rounded-2xl shadow-md transition-all duration-300', { 'opacity-100 h-[420px] w-72': menuservices, 'opacity-0 h-0 w-72': !menuservices }]">
        <ul class="ul_services flex flex-col">
          <li><NuxtLink to="/DargahP/DargahPardakht" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">{{ langStore.t('btn1_slider') }} <div class="logo1"></div></NuxtLink></li>
          <li><NuxtLink to="/DargahP/EsterdadVagh" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">{{ langStore.t('btn2_slider') }}<div class="logo2"></div></NuxtLink></li>
          <li><NuxtLink to="/DargahP/VarizSH" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">{{ langStore.t('btn3_slider') }}<div class="logo3"></div></NuxtLink></li>
          <li><a href="#" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">{{ langStore.t('btn4_slider') }}<div class="logo4"></div></a></li>
          <li><a href="#" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">{{ langStore.t('btn5_slider') }}<div class="logo5"></div></a></li>
          <li><a href="#" class="flex items-center justify-end p-4 hover:bg-blue-50 rounded-lg">{{ langStore.t('btn6_slider') }}<div class="logo6"></div></a></li>
        </ul>
      </div>
      <li class="li-sh w-[15%] hidden lg:block"><NuxtLink to="/ContantPage" class="text-gray-600 font-vazir3">{{ langStore.t('btn_contact_menu') }}</NuxtLink></li>
      <li class="li-sh hidden lg:block ltr:ml-8 rtl:mr-8"><NuxtLink to="/blogs" class="text-gray-600 font-vazir3">{{ langStore.t('link_menu_blog') }}</NuxtLink></li>
      <li class="li_login hidden lg:block w-[110px] p-2 text-center bg-white/40 border border-gray-300 rounded-lg" >
        <NuxtLink to="/LoginRegister4" class="a-login text-sm flex items-center justify-center gap-1 w-full text-gray-600 font-vazir3">
          {{ langStore.t('link_menu_login') }}
          <i :class="['fa-solid', `fa-chevron-${langStore.t('dire')}`, 'fa-xs']" style="font-size: 10px;"></i>
        </NuxtLink>
      </li>

      <button class="btn-DL-Mode w-12 h-10 rounded-lg transition-transform duration-300 hover:scale-110" :class="sh_Mode ? 'bg-gray-800' : 'bg-white'" @click="SH_Mode">
        <i :class="['fas', sh_Mode ? 'fa-sun' : 'fa-moon']" :style="{ color: sh_Mode ? 'white' : 'black' }"></i>
      </button>
      <button class="btn-DL-Mode w-12 h-10 rounded-lg bg-white ltr:mr-2 rtl:ml-2 transition-transform duration-300 hover:scale-110" id="btn-DL-Mode5" @click="toggleLang">
        {{ sh_LN ? 'FA' : 'EN' }}
      </button>
      
      <li class="flex items-center w-[180px] gap-2">
        <NuxtLink to="/LoginRegister4" class="login-btn-res lg:hidden border border-gray-300 rounded-lg p-2 bg-white text-gray-600 font-vazir3 flex items-center gap-1">
          ورود به پنل <i class="fa-solid fa-chevron-left fa-xs" style="font-size: 10px;"></i>
        </NuxtLink>
        <i :class="['fas fa-bars lg:hidden text-2xl transition-all duration-300', { 'block': shhamber, 'hidden': shzarb }]" @click="toggleMainMenu" @mouseout="toggleMainMenu" id="hamber"></i>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLangStore } from '@/stores/lang'

const langStore = useLangStore()
langStore.loadLangFromCookie()

const menuservices = ref(false)
const isScrolled = ref(false)
const route = useRoute()
const isLoginPage = ref(false)
const shmenu = ref(false)
const shhamber = ref(true)
const shzarb = ref(false)
const sh_Mode = ref(false)
const sh_LN = ref(true)

function SH_Mode() {
  sh_Mode.value = !sh_Mode.value;
  document.body.classList.toggle('dark', sh_Mode.value);
  localStorage.setItem('darkMode', sh_Mode.value ? 'true' : 'false');
}

function toggleLang() {
  document.body.classList.toggle('ltr-mode', !sh_LN.value);
  langStore.setLang(sh_LN.value ? 'fa' : 'en');
  sh_LN.value = !sh_LN.value;
}

function menuopen() {
  menuservices.value = !menuservices.value;
}

function menuclose() {
  menuservices.value = false;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

function toggleMainMenu() {
  shmenu.value = !shmenu.value;
}

onMounted(() => {
  const darkModeStored = localStorage.getItem('darkMode');
  sh_Mode.value = darkModeStored === 'true';
  document.body.classList.toggle('dark', sh_Mode.value);
  window.addEventListener('scroll', handleScroll);
  isLoginPage.value = ['LoginRegister4', 'ResetPassword', 'PasswordVerify', 'login', 'register'].some(path => route.fullPath.includes(path));
  toggleLang();
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

watch(() => route.fullPath, (newPath) => {
  isLoginPage.value = ['LoginRegister4', 'ResetPassword', 'PasswordVerify', 'login', 'register'].some(path => newPath.includes(path));
})
</script>

<style scoped>
.div1 {
  height: 70px;
  direction: rtl;
  background-color: transparent;
  transition: background-color 0.1s ease;
}

.textlogo {
  font-size: 25px;
  font-family: Vazir3;
  line-height: 35px;
}

.logo {
  width: 160px;
  height: 53px;
  background-image: url(../public/logo-xdgpay2.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.logo1 {
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/projectx/projectx-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.logo2 {
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/icons/refund_logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.logo3 {
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/pip/pip-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.logo4 {
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/transferor/transferor-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.logo5 {
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/identicator/identicator-logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.logo6 {
  width: 25px;
  height: 25px;
  background-image: url(https://jibit.ir/wp-content/themes/jibit/images/alpha/alpha_logo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 1024px) {
  .a-login {
    font-size: 14px !important;
  }
}

@media screen and (max-width: 450px) {
  .logo {
    width: 70px !important;
  }
}

@keyframes pop {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.2) rotate(15deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}
</style>
```