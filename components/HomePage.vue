<template>
    <MyMenu></MyMenu>
    <DivImg></DivImg>
    <BrandLogos></BrandLogos>
    <Box-About></Box-About>
    <AboutSer></AboutSer>
    <servicesSite></ServicesSite>
    <div class="w-[80%] h-[250px] mx-auto flex items-end mt-[0px] mb-[45px]" style="font-family: Vazir, sans-serif;">
        <div class="w-full">
            <p class="w-full text-[32px] text-[#303c4f] text-right leading-[85px]">تکیه‌گاه کسب و کارها</p>
            <p class="w-full text-right text-[#697281] rtl">
                بیش از ۳۰۰ کسب و کار بزرگ کشور همه روزه از راهکارهای جیبیت استفاده می‌کنند.
            </p>
        </div>
    </div>

    <div class="about3">
        <div class="box1">
            <div class="logo-box1"><div class="logo2-box1"></div></div>
            <div class="title-box1"><p class="title">+۲۵۰  همت</p></div>
            <div class="text-box1"><p class="text"><b>گردش مالی سالیانه در پلتفرم جیبیت</b></p>    </div>
        </div>
        <div class="box2">
            <div class="logo-box2"><div class="logo2-box2"></div></div>
            <div class="title-box2">
                <p class="title">+1 میلیارد</p>
            </div>
            <div class="text-box2">
                <p class="text"><b>درخواست از طریق وب‌سرویس‌ها در سال</b></p>    
            </div>
        </div>
    </div>
    <Footer style="margin-top: 160px;"></Footer>
</template> 

<script>
export default {
    name:'HomePage',
}
</script>

<style scoped>
@font-face {
  font-family: Vazir4;
  src: url(../public/Vazir-Thin.woff);
}
.about3{
    height: 320px;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content:center;
    align-items: center;
}
.box1{
    width: 48%;
    height: 100%;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/bg_big_numbers_left.svg);
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;border-radius: 15px;
    margin: auto;
    box-shadow: 0px 5px 15px rgb(216, 216, 216);
    direction: rtl;
}
.box2{
    width: 48%;
    height: 100%;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/bg_big_numbers_right.svg);
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;border-radius: 15px;
    margin: auto;
    box-shadow: 0px 5px 15px rgb(216, 216, 216);
    direction: rtl;
}
.logo-box1{
    width: 85px;
    height: 85px;
    background-color: white;
    margin-right: 15%;margin-top: 12%;
    border-radius: 15px;
    box-shadow: 0px 5px 15px rgb(216, 216, 216);
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo2-box1{
    width: 50%;
    height: 50%;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/logo-cash.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.logo-box2{
    width: 85px;
    height: 85px;
    background-color: white;
    margin-right: 15%;margin-top: 12%;
    border-radius: 15px;
    box-shadow: 0px 5px 15px rgb(216, 216, 216);
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo2-box2{
    width: 50%;
    height: 50%;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/home2/logo-transfer.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.title{
    width: 100%;
    font-family: Vazir;
    font-size: 30px;
    color: #303c4f;
    direction: rtl;
    padding-right: 15%;
    margin-top: 15px;
}
.text{
    width: 100%;
    padding-right: 15%;
    direction: rtl;
    font-family: Vazir4;
    margin-top: 15px;
    font-size: 15px;
    color: #303c4f;
}
</style>