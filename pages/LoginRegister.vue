<template>
    <div class="boxlog">
        
        <div class="box">
            <div style="width: 100%;display: flex;justify-content: END;"><li class="logo"></li></div>
            <P class="p-title">ورود</P>
            <form action="" method="post">    
            <p class="label-phone-email">شماره موبایل یا ایمیل</p>
            <input type="text" value="" id="input-phone-email2" class="input-phone-email2" required>
            
            <p class="label-phone-email">رمز عبور</p>
            <div class="dis-pass">
                <input :type="showPassword ? 'text' : 'password'" placeholder="۱۲۳–۴۵۶" id="input-phone-email" class="input-phone-email" required/>
                <button type="button" @click="togglePassword" class="toggle-btn"><i :class="['color', showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash']"></i></button>
            </div>
            
            <button class="forgetbtn">فراموشی رمز عبور</button>
            <button class="loginbtn">ورود به حساب کاربری</button>
            </form>
            <div class="dis-pass" style="direction: rtl;">
                <p class="p-btn-reg">حساب کاربری ندارید ؟</p>
                <button class="btn-reg"><NuxtLink to="/LoginRegister2">ثبت نام</NuxtLink></button>
            </div>
            
        </div>
    </div>    
    
    
    
    
    
    
    <div class="divimage">
        <p class="p-footer1">راهکارهای یکپارچه بانکی و پرداخت</p>
        <p class="p-footer2">نسخه 4.17.12-prod</p>
    </div>
</template>

<script setup>

import { ref } from 'vue'

const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style>
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
.boxlog{
    width: 34%;
    height: 100vh;
    background-color: rgba(0, 255, 255, 0);
    position: absolute;
    top: 0px;
    right: 0px;
}
.div1{
    display: none;
}
.divimage{
    width: 67%;
    height: 100vh;
    background-image: url(https://dashboard.jibit.ir/assets/images/auth/jibit-auth-bg.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
}
.box{
    width: 70%;
    height: 550px;
    margin: auto;
    margin-top: 22px;
}
.logo{
    width: 85px;
    height: 26px;
    background-image: url(../public/brand.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    list-style: none;
}
.p-title{
    width:100%;
    font-size: 25px;
    font-family: Vazir;
    text-align: end;
    margin-top: 80px;
}
.input-phone-email2{
    width: 99%;
    height: 34px;
    background-color: white;
    border-radius: 10px;
    padding-left: 8%;
    outline: invert;
    border: solid 1px rgb(145, 145, 145);
    outline: none;
    outline: none;
    font-family: Vazir3;
    font-size: 13px;
}
.input-phone-email{
    width: 99%;
    height: 34px;
    background-color: white;
    border-radius: 10px 0px 0px 10px;
    padding-left: 8%;
    outline: invert;
    border-top: solid 1px rgb(145, 145, 145);
    border-bottom: solid 1px rgb(145, 145, 145);
    border-left: solid 1px rgb(145, 145, 145);
    outline: none;
    font-family: Vazir3;
    font-size: 13px;
}
.input-phone-email::placeholder{
    color: rgb(121, 121, 121);
    font-size: 12px;
    line-height: 1px;
    font-family: Vazir3;
}
.label-phone-email{
    width: 99%;
    height: 35px;
    font-size: 12px;
    font-family: Vazir3;
    direction: rtl;
    text-align: start;
    top: 0%;
    right: 0%;
    margin-top: 38px;
    line-height: 39px;
}
.color{
    color: rgb(70, 57, 185);
    border-top: solid 1px rgb(145, 145, 145);
    border-bottom: solid 1px rgb(145, 145, 145);
    border-right: solid 1px rgb(145, 145, 145);
    padding: 8px;
    border-radius: 0px 10px 10px 0px;
    transition: all ease 1s;
}
.dis-pass{
    width: 100%;
    display: flex;
}
.fa-eye-slash{
    color: rgb(64, 165, 135);
}
.fa-eye{
    color: rgb(165, 64, 64);
}
.forgetbtn{
    width: 100%;
    font-size: 14px;
    color: rgb(15, 135, 190);
    font-family: Vazir3;
    text-align: right;
    margin-top: 25px;
    cursor: pointer;
}
.loginbtn{
    width: 100%;
    height: 35px;
    background-color: rgb(15, 97, 190);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 13px;
    font-family: Vazir;
    margin-top: 30px;
    cursor: pointer;
}
.p-btn-reg{
    font-size: 12px;
    font-family: Vazir3;
    text-align: right;
    margin-top: 25px;
}
.btn-reg{   
    color: rgb(15, 97, 190);
    font-size: 12px;
    font-family: Vazir3;
    margin-top: 25px;
    margin-right: 10px;
    cursor: pointer;
}
.p-footer1{
    font-size: 14px;
    color: white;
    font-family: Vazir3;
    text-align: right;
    direction: rtl;
    margin-right: 7%;
    margin-top: 650px;
}
.p-footer2{
    font-size: 10px;
    color: white;
    font-family: Vazir3;
    text-align: right;
    direction: rtl;
    margin-right: 7%;
    margin-top: 15px;
}
</style>