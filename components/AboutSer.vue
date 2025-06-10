<template>
    <div class="div1">
        <div class="div2">
            <p class="title">سرویس های جیبیت</p>
            <p class="text">ارائه دهنده خدمات متنوع پرداخت، انتقال وجه و عملیات مالی و بانکی به صورت یکپارچه و پایدار است.</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'AboutSer'
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
    width: 80%;
    height: 250px;
    margin: auto;
    display: flex;
    align-items: end;
}
.div2{
    width: 100%;
}
.title{
    width: 100%;
    font-size: 32px;
    color: #303c4f;
    text-align: end;
    font-family: Vazir;
    line-height: 15px;
}
.text{
    width: 100%;
    text-align: right;
    font-family: Vazir3;
    color: #697281;
    direction: rtl;
}
</style>