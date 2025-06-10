<template>
<div class="div1">
    <div class="div1_box1">
        <img src="https://jibit.ir/wp-content/themes/jibit/images/home2/main-photo.svg" alt="image not found!" class="image_div1">
    </div>
    <div class="div1_box2">
        <p class="title-site">راهکار‌های پیشرفته<br> مالی و پرداخت آنلاین</p>
        <p class="text-site">پلتفرم جیبیت امکانی آنلاین است تا نیاز کسب و کار‌ها در استفاده از خدمات انتقال پول، پرداخت و عملیات‌های مالی و بانکی را از پیچیدگی به سادگی به صورت یکپارچه و پایدار ارائه کند.</p>
        <div class="dis-btns">
            <input type="submit" class="btn-call-team" value="تماس با تیم  فروش">
            <input type="submit" class="btn-create-acc" value="ساخت حساب کاربری >">
        </div>
    </div>
</div>        
</template>


<script>
export default {
    name:'DivImg'       
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
    width:100% ;
    height: 700px;
    /* background-color: rgb(30, 168, 122); */
    background-image: url(../public/bg_desktop.png);
    flex-grow: 1;
    /* filter: hue-rotate(10deg) saturate(120%);
    filter: brightness(1.1) contrast(1); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.div1_box1{
    width:60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.div1_box2{
    width:40%;
    height: 100%;
}
.image_div1{
    width: 620px;
    height: 600px;
    background-size: cover;
    margin-top: 38px;
    z-index: 2;
}
.title-site{
    font-size: 48px;
    color: black;
    font-family: Vazir;
    text-align: right;
    margin-top: 150px;
    width: 72%;
    font-weight: bold;
    
}
.text-site{
    width:72%;
    font-size: 18px;
    line-height: 29px;
    font-family: Vazir2;
    color: #4d5768;
    text-align: right;
    direction: rtl;
}
.dis-btns{
    width: 72%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 80px;
}
.btn-create-acc{
    width: 170px;
    height: 50px;
    background-color: #226ce9;
    margin-left: 10px;
    border: 1px solid #226ce9;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    font-family: Vazir3;
    direction: rtl;
}.btn-create-acc:hover{
    background-color: #2247e9;    
}
.btn-call-team{
    width: 170px;
    height: 50px;
    margin-right: 10px;
    border-radius: 8px;
    border:1px solid rgb(187, 187, 187);
    color:black;
    font-size: 14px;
    font-family: Vazir3;
}.btn-call-team:hover{
    background-color: rgb(231, 231, 231);
}
</style>
