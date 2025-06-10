<template>
    <div class="div1">
        <li class="li_logo">
            <NuxtLink to="/"><div class="logo"></div></NuxtLink>
        </li>
        <ul class="ul_menu">
            <li><a href="#">سرویس‌ها</a></li>
            <li><NuxtLink to="ContantPage">ارتباط با ما</NuxtLink></li>
            <li><a href="#">بلاگ</a></li>
            <li><a href="#">ورود به پنل</a></li>
        </ul>
    </div>
</template>
<script>
import { NuxtLink } from '#components';

export default {
    name:'MyMenu'    
}
</script>
<style scoped>
@font-face {
    font-family: Vazir;
    src: url(../public/Vazir-Bold.ttf);
}
.div1{
    width: 100%;
    height: 63px;
    /* background-color: white; */
    position: fixed;
    top: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    direction: rtl;
    z-index: 6;
}
.ul_menu{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: auto;
}
.ul_menu li{
    list-style: none;
    margin-right: 45px;
}
.ul_menu li a{
    color: rgb(88, 88, 88);
    text-decoration: none;
    font-size: 16px;
    font-family: Vazir;
}
.li_logo{
    margin: auto;
    width: 50%;
    background-size: cover;
    list-style: none;
    margin-right: 11%;
}
.logo{
    width: 114px;
    height: 35px;
    background-image: url(../public/brand.png);
    background-size: cover;
    background-repeat: no-repeat;
}
</style>