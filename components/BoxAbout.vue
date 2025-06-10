<template>
<div class="div1">
    <ul class="ul_boxs">
        <li>
            <div class="logo1"></div>
            <p class="titleBox">مقیاس پذیر</p>
            <p class="textBox">امکان رشد تصاعدی کسب و کار‌ها<br> مزیتی مهم در پلتفرم جیبیت است.</p>
        </li>
        <li>
            <div class="logo2"></div>
            <p class="titleBox">امنیت و حریم خصوصی</p>
            <p class="textBox">ارسال و پردازش درخواست‌ها با حفظ<br> حریم خصوصی کاربران و امنیت کامل<br> انجام می‌گیرد.</p>
        </li>
        <li>
            <div class="logo3"></div>
            <p class="titleBox">سریع و راحت</p>
            <p class="textBox">سرعت در پیاده سازی سرویس‌ها<br> و راحتی در استفاده از آن‌ها از مزیت‌های<br> وب‌سرویس‌هاست.</p>
        </li>
        <li>
            <div class="logo4"></div>
            <p class="titleBox">قابل اطمینان</p>
            <p class="textBox">سرویس‌ها بی‌وقفه و با زمان کارکرد<br> بیش از ۹۹٪ در کنار کسب و کار‌ها قرار<br> دارند.</p>
        </li>
    </ul>
</div>    

</template>
<script>
export default {
    name:'BoxAbout'
}
</script>
<style scoped>
@font-face {
    font-family: Vazir;
    src: url(../public/Vazir-Bold.ttf);
}
@font-face {
    font-family: Vazir2;
    src: url(../public/Vazir-Thin.ttf);
}
@font-face {
    font-family: Vazir3;
    src: url(../public/Vazir-Medium.ttf);
}
.div1{
    width: 100%;
    height: 260px;
    margin-top: 110px;
}
.ul_boxs{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.ul_boxs li{
    width: 280px;
    border-radius: 15px;
    height: 96%;
    background-color: #f2f5fb;
    list-style: none;
    margin-right: 8px;margin-left: 8px;
    direction: rtl;
}
.logo1{
    width: 55px;
    height: 55px;
    margin-right: 30px;
    margin-top: 30px;
    background-image: url(../public/logo/usp4.png);
    background-position: center;
    background-size: cover;
}
.logo2{
    width: 55px;
    height: 55px;
    margin-right: 30px;
    margin-top: 30px;
    background-image: url(../public/logo/usp3.png);
    background-position: center;
    background-size: cover;
}
.logo3{
    width: 55px;
    height: 55px;
    margin-right: 30px;
    margin-top: 30px;
    background-image: url(../public/logo/usp2.png);
    background-position: center;
    background-size: cover;
}
.logo4{
    width: 55px;
    height: 55px;
    margin-right: 30px;
    margin-top: 30px;
    background-image: url(../public/logo/usp1.png);
    background-position: center;
    background-size: cover;
}
.titleBox{
    width: 90%;
    padding-right: 10%;
    text-align: right;
    font-size: 20px;
    color: #303c4f;
    font-family: Vazir;
    line-height: 18px;
}
.textBox{
    width: 90%;
    text-align: right;
    margin-right: 10%;
    font-family: Vazir2;
    font-size: 15px;
    font-weight: bolder;
    color: #697281;
}
</style>