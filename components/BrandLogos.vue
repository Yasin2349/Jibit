<template>
    <div class="div-logos">
        <ul class="ul-Logo">
            <li class="li_logo1"></li>
            <li class="li_logo2"></li>
            <li class="li_logo3"></li>
            <li class="li_logo4"></li>
            <li class="li_logo5"></li>
            <li class="li_logo6"></li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name:'BrandLogos'    
}
</script>
<style scoped>
.div-logos{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
}
.ul-Logo{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    direction: rtl;
}
.li_logo1{
    width: 110px;
    height: 30px;
    list-style: none;
    margin: auto;
    /* background-color: antiquewhite; */
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url(../public/logo/snapp.png);
    transition: filter 0.7s ease;
}.li_logo1:hover{
    background-image: url(../public/logo/snapp2.png);
    filter: brightness(1.2);
}
.li_logo2{
    width: 110px;
    height: 30px;
    list-style: none;
    margin: auto;
    /* background-color: antiquewhite; */
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url(../public/logo/bitpin.png);
    transition: filter 0.7s ease;
}.li_logo2:hover{
    background-image: url(../public/logo/bitpin2.png);
    filter: brightness(1.2);
}
.li_logo3{
    width: 110px;
    height: 30px;
    list-style: none;
    margin: auto;
    /* background-color: antiquewhite; */
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url(../public/logo/blu.png);
    transition: filter 0.7s ease;
}.li_logo3:hover{
    background-image: url(../public/logo/blu2.png);
    filter: brightness(1.2);
}
.li_logo4{
    width: 110px;
    height: 30px;
    list-style: none;
    margin: auto;
    /* background-color: antiquewhite; */
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url(../public/logo/digipay.png);
    transition: filter 0.7s ease;
}.li_logo4:hover{
    background-image: url(../public/logo/digipay2.png);
    filter: brightness(1.2);
}
.li_logo5{
    width: 110px;
    height: 30px;
    list-style: none;
    margin: auto;
    /* background-color: antiquewhite; */
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url(../public/logo/nobitex.png);
    transition: filter 0.7s ease;
}.li_logo5:hover{
    background-image: url(../public/logo/nobitex2.png);
    filter: brightness(1.2);
}
.li_logo6{
    width: 110px;
    height: 30px;
    list-style: none;
    margin: auto;
    /* background-color: antiquewhite; */
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-image: url(../public/logo/finnotech.png);
    transition: filter 0.7s ease;
}.li_logo6:hover{
    background-image: url(../public/logo/finnotech2.png);
    filter: brightness(1.2);
}
</style>