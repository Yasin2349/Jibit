  <template>
    <div :class="['div1', { scrolled: isScrolled } ,{hidenmenu : isLoginPage}]">
      <li class="li_logo">
        <NuxtLink to="/"><div class="logo"></div></NuxtLink>
      </li>
      <ul :class="['ul-menu2', {'ul-menu2.opne' : shmenu}]" id="ul-menu2">
        <li><button type="submit" style=" font-size: 14px;font-family: Vazir3;color: rgb(88, 88, 88);">سرویس‌ها</button></li>
        <div class='services2'>
          <ul class="ul_services" style="border-bottom: 1px solid rgb(229 212 212);">
            <li><NuxtLink to="/DargahP/DargahPardakht">درگاه پرداخت <div class="logo1"></div></NuxtLink></li>
            <li><NuxtLink to="/DargahP/EsterdadVagh">استرداد وجه <div class="logo2"></div></NuxtLink></li>
            <li><NuxtLink to="/DargahP/VarizSH">واریز شناسه دار<div class="logo3"></div></NuxtLink></li>
            <li><a href="#">تسویه و انتقال وجه <div class="logo4"></div></a></li>
            <li><a href="#">سرویس های استعلامی <div class="logo5"></div></a></li>
            <li><a href="#">احراز هویت بایومتریک <div class="logo6"></div></a></li>
          </ul>
        </div>
        <li><NuxtLink to="/ContantPage" class="contant-btn">ارتباط با ما</NuxtLink></li>
        <li><NuxtLink to="/blogs" class="blog-btn">بلاگ</NuxtLink></li>
      </ul>
      <ul class="ul_menu">
        <li><button type="submit" @click="menuopen()" @focusout="menuclose()" style="cursor: pointer;font-family: Vazir3;color: rgb(88, 88, 88);">سرویس‌ها         <i class="fas fa-chevron-down"></i></button></li>
        <div :class="['services', { open: menuservices }]">
          <ul class="ul_services">
            <li><NuxtLink to="/DargahP/DargahPardakht">درگاه پرداخت <div class="logo1"></div></NuxtLink></li>
            <li><NuxtLink to="/DargahP/EsterdadVagh">استرداد وجه <div class="logo2"></div></NuxtLink></li>
            <li><NuxtLink to="/DargahP/VarizSH">واریز شناسه دار<div class="logo3"></div></NuxtLink></li>
            <li><a href="#">تسویه و انتقال وجه <div class="logo4"></div></a></li>
            <li><a href="#">سرویس های استعلامی <div class="logo5"></div></a></li>
            <li><a href="#">احراز هویت بایومتریک <div class="logo6"></div></a></li>
          </ul>
        </div>
        <li><NuxtLink to="/ContantPage">ارتباط با ما</NuxtLink></li>
        <li><NuxtLink to="/blogs">بلاگ</NuxtLink></li>
        <li class="li_login"><NuxtLink to="/LoginRegister4">ورود به پنل <i class="fa-solid fa-chevron-left fa-xs" style="font-size: 10px;"></i></NuxtLink></li>
        <li><div><i class="fas fa-bars" style="font-size: 30px;" @click="toggleMainMenu()" id="hamber" ></i><i class="fas fa-xmark" style="font-size: 30px;" @click="closeMainMenu()" id="zarb"></i></div></li>
        
      </ul>
    </div>
  </template>
  <script setup>
  import { ref, onMounted, onUnmounted, watch } from 'vue'
  import { useRoute } from 'vue-router'

  const menuservices = ref(false)
  const isScrolled = ref(false)

  function menuopen() {
    menuservices.value = !menuservices.value
  }

  function menuclose() {
    menuservices.value = false
  }

  function handleScroll() {
    isScrolled.value = window.scrollY > 50
  }

  const route = useRoute()
  const isLoginPage = ref(false)


  isLoginPage.value = route.path.includes('LoginRegister4')


  watch(() => route.path, (newPath) => {
    isLoginPage.value = newPath.includes('LoginRegister4')
  })

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  var shmenu = ref(false)
  function toggleMainMenu() {
    shmenu = true

    document.getElementById("hamber").style.display = "none"
    document.getElementById("zarb").style.display = "block"
  }
  function closeMainMenu() {
    shmenu.value = false
    shhamber.valuec = false
    document.getElementById("hamber").style.display = "block"
    document.getElementById("zarb").style.display = "none"
    shmenu.value = false;
  }
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
  .hidenmenu{
    display: none;
  }
  .li_login{
    padding: 10px;padding-left: 18px;padding-right: 18px;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 10px;
  }
  .ul-menu2{
    width: 300px;
    height: 0px;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    top: 55px;
    left: 10%;
    padding: 18px;
    transition: all ease 0.5s;
    display: none;
    overflow: hidden;
  }
  .ul-menu2.open{
    width: 300px;
    height: 500px;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    top: 55px;
    left: 10%;
    padding: 18px;
    transition: all ease 0.5s;
    display: block;
    overflow: hidden;
  }
  .contant-btn{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Vazir3;
    color: rgb(99, 99, 99);
    border-bottom: 1px solid rgb(229 212 212);  
    padding: 15px;
  }
  .blog-btn{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Vazir3;
    color: rgb(99, 99, 99);
    padding: 15px;
  }
  #zarb{
    display: none;
  }
  #hamber{
    display: block;
  }

  </style>
