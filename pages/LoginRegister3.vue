<template>
    <div class="div1a">
        <iframe src="https://lottie.host/embed/d50f8bbe-88f8-4a1f-affc-5fa8a74e4c5d/nDqWhL5oBc.lottie" class="gif"></iframe>
        <div class="div1s">
            <p class="title-login">ورود به BitPay</p>
            <p class="title-input1">آدرس ایمیل</p>
            <input type="text" placeholder="ایمیل را وارد کنید ..." class="input-email">
            <p class="title-input1">پسورد </p>
            <div class="dis-input-pass">
                <input :type="showPassword ? 'text' : 'password'" placeholder="پسورد را وارد کنید ..." class="input-pass">
                <button type="button" @click="togglePassword" class="toggle-btn"><i :class="['color', showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash']"></i></button>
            </div>
            <input type="submit" class="btn-login" value="ورود">
            <div class="dis-input-pass">
                <a href="#" class="title-forg">رمز عبور خود را فراموش کرده اید ؟</a>
            </div>
            <div class="dis-input-pass">
                <NuxtLink class="link-reg" to="LoginRegister4">ثبت نام  </NuxtLink>
                <p class="title-btn-reg">  حساب کاربری ندارید ؟</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
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
.div1a{
    width: 100%;
    height: 100vh;
    background-color: #fbfbff;
    position: relative;
    margin-top: 0%;
    padding-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 3;
}
.div1a::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url(../public/backgrounds/3.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(8px);
  z-index: 0;
}
.div1s{
    width: 30.5%;
    height: 600px;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 14px;
    margin: auto;
    z-index: 3;
}
.gif{
    width: 500px;
    height: 500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
    margin: auto;
}
.title-login{
    font-size: 25px;
    height: 86px;
    border-bottom: 1px solid rgb(240, 240, 240);
    display: flex;
    align-items: center;
    padding-right: 8%;
    font-weight: 600;
    color: rgb(61, 61, 61);
    direction: rtl;
    text-align: right;
    font-family: Vazir;
}
.input-email{
    width: 86%;
    height: 55px;
    background-color: white;
    border: 1px solid rgb(141, 141, 141);
    border-radius: 4px;
    direction: rtl;
    padding-right: 5%;
    margin: auto;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    outline: none;
}

.input-pass{
    width: 78%;
    height: 55px;
    background-color: white;
    border-left: 1px solid rgb(141, 141, 141);
    border-bottom: 1px solid rgb(141, 141, 141);
    border-top: 1px solid rgb(141, 141, 141);
    border-radius: 4px 0px 0px 4px;
    direction: rtl;
    padding-right: 5%;
    margin: auto;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    margin-right: 0%;
    outline: none;
}

.title-input1{
    width: 100%;
    font-size: 14px;
    text-align: right;
    padding-right: 7%;
    color:rgb(71, 71, 71);
    margin-top: 30px;
    margin-bottom: 5px;
    font-family: Vazir3;
}
.dis-input-pass{
    width: 100%;
    border-radius: 4px;
    direction: ltr;
    display: flex;
    align-items: center;
}
.toggle-btn{
    background-color: transparent;
    width: 8%;
    height: 55px;   
    border-right: 1px solid rgb(141, 141, 141);
    border-bottom: 1px solid rgb(141, 141, 141);
    border-top: 1px solid rgb(141, 141, 141);
    margin: auto;
    margin-left: 0%;
    border-radius: 0px 4px 4px 0px;
}
.color{
    transition: all ease 1s;
}
.fa-eye-slash{
    color: rgb(64, 165, 135);
}
.fa-eye{
    color: rgb(165, 64, 64);
}
.btn-login{
    width: 86%;
    height: 60px;
    border-radius: 5px;
    background-color: rgb(26, 26, 226);
    margin: auto;
    display: block;
    margin-top: 20px;
    cursor: pointer;
    color: white;
    font-family: Vazir;
}
.title-forg{
    width: 100%;
    font-family: Vazir;
    font-size: 14px;
    color: rgb(0, 60, 255);
    text-align: center;
    margin-top: 10px;
    font-size: 13px;
}
.title-btn-reg{
    margin: auto;
    margin-left: 0%;
    margin-top: 30px;
    font-family: Vazir3;
    color: rgb(80, 80, 80);
}
.link-reg{
    margin: auto;
    margin-right: 0%;
    list-style: none;
    color: rgb(0, 60, 255);
    font-family: Vazir;
    margin-top: 30px;
}
</style>