<template>
  <div>
    <div class="div1">
        <div class="div-map">
            <div class="map">
                <iframe class="iframe-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1924.9517731383148!2d51.420429002249314!3d35.76628432655129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e05cf76a94675%3A0x8ad3dac843b98e4b!2sJIBIT!5e0!3m2!1sen!2s!4v1622447620753!5m2!1sen!2s"></iframe>
            </div>
        </div> 
        <div class="div-contant">
            <div class="tab1">
                <p class="title-tab1"><b>راه های ارتباط با جیبیت</b></p>
                <div class="div-table1">
                    <div class="tabl1-row1">
                        <div class="tabl1-col1">
                            <p class="p-table" style="font-family: Vazir; color: #a3a9b2;"><b>آدرس:</b></p>
                        </div>
                        <div class="tabl1-col2"><p class="p-table" style="text-align: start;margin-right: 15px;"><b>
تهران، تیموری، خیابان شهید احمد قاسمی، خیابان آزاده، پلاک۰، برج فناوری طرشت، طبقه ۱۰، واحد ۱۰۰۴</b></p></div>
                    </div>
                    <div class="tabl1-row2">
                        <div class="tabl2-col1"><p class="p-table" style="font-family: Vazir; color: #a3a9b2;"><b>کد پستی :</b></p></div>
                        <div class="tabl2-col2">
                            <p class="p-table" style="text-align: start;margin-right: 15px;"><b>۱۴۵۹۹۶۵۲۲۳</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab2"><p class="title-tab2">امور مشتریان</p>
                <div class="div-table2">
                    <div class="tabl2-row1">
                        <div class="row1-col1"><p class="p-table" style="font-family: Vazir; color: #a3a9b2;text-align: start;"><b>ایمیل:</b></p></div>
                        <div class="row1-col2"><p class="p-table-cover" style="font-family: Vazir; color: #4d5768; text-align: start;"><b class="cover">support@jibit.ir</b></p></div>
                    </div>
                    <div class="tabl2-row2">
                        <div class="row2-col1"><p class="p-table" style="font-family: Vazir; color: #a3a9b2;text-align: start;"><b>تلفن :</b></p></div>
                        <div class="row2-col2"><p class="p-table-cover" style="font-family: Vazir; color: #4d5768; text-align: start;"><b class="cover">021-296</b></p></div>
                    </div>
                    <p class="p-table-labl" style="font-family: Vazir; color: #4d5768; text-align: start;"><b>روزهای شنبه تا چهارشنبه: از ساعت ۸:۰۰ تا ۱۸:۰۰</b></p>
                    <div class="tabl2-row3">
                        <div class="row3-col1"><p class="p-table" style="font-family: Vazir; color: #a3a9b2;text-align: start;"><b>تلگرام :</b></p></div>
                        <div class="row3-col2"><p class="p-table-cover" style="font-family: Vazir; color: #4d5768; text-align: start;"><b class="cover">Jibit_Support</b></p></div>
                    </div>
                    <p class="p-table-labl" style="font-family: Vazir; color: #4d5768; text-align: start; font-size: 15px; font-family: Vazir2;"><b>روزهای شنبه تا چهارشنبه: از ساعت ۸:۰۰ صبح تا ۰۰:۰۰
روزهای پنج‌شنبه، جمعه و تعطیلات رسمی: از ساعت ۹:۰۰ تا ۲۰:۰۰</b></p>
                </div>
            </div>
        </div> 
    </div>
    <br>
    <br>
    <br>
    <br>
    <Footer></Footer>
  </div>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>

<script>
import Footer from '~/components/Footer.vue';
export default {
    name :'ContantPage',
    components:{Footer}
}
</script>

<style scoped>
.div1{
    width: 100%;
    height: 820px;
    display: flex;
    align-items: end;
    flex-wrap: wrap;
}
.div-map{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
}
.div-contant{
    width: 50%;
    height: 100%;
    justify-content: end;
    align-items: end;
}
.map{
    width: 555px;
    height: 660px;
    margin-right: 10px;
    border-radius: 15px;
}
.iframe-map{
    width: 100%;
    height: 100%;
    border: 1px solid rgb(212, 212, 212);
    border-radius: 15px;
}
.tab1{
    width: 100%;
    height: 30%;
}
.tab2{
    width: 100%;
    height: 45%;
}
.title-tab1{
    width: 78%;
    text-align: end;
    margin-right: 22%;
    color: black;
    font-family: Vazir;
    font-size: 38px;
    font-weight: bolder;
    margin-top: 180px;
    line-height: 15px;
}
.div-table1{
    width: 60%;
    height: 60%;
    margin: auto;
    direction: rtl;
}
.div-table2{
    width: 60%;
    height: 85%;
    margin: auto;
    direction: rtl;
}
.tabl1-row1{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
}
.tabl1-row2{
    width: 100%;
    height: 50%;
    display: flex;
}

.tabl1-col1{
    width: 20%;
    height: 100%;
}

.p-table{
    width: 100%;
    text-align: center;
    font-family: Vazir2;
    font-size: 14px;
    margin-top: 20px;
    line-height: 25px;
    color: #4d5768;
}
.p-table-labl{
    text-align: center;
    font-family: Vazir2;
    font-size: 14px;
    
    line-height: 25px;
    color: #4d5768;
    padding: 2px;
    border-radius: 15px;
    margin-top: 0%;
    margin-right: 20%;
}
.cover{
    padding: 8px;
    border: solid 1px rgb(211, 211, 211);
    border-radius: 10px;
}
.title-tab2{
    width: 78%;
    text-align: end;
    margin-right: 22%;
    color: black;
    font-family: Vazir;
    font-size: 28px;
    font-weight: bolder;
    line-height: 15px;
}
.tabl1-row1{
    width: 100%;
    display: flex;
}
.row1-col1{
    width: 20%;
    height: 40%;
}
.row1-col2{
    width: 80%;
    height: 40%;
}
.row2-col1{
    width: 20%;
    height: 40%;
}
.row2-col2{
    width: 80%;
    height: 40%;
}
.row3-col1{
    width: 20%;
    height: 40%;
}
.row3-col2{
    width: 20%;
    height: 40%;
}
.row3-col2{
    width: 80%;
    height: 40%;
}
.tabl1-row2{
    width: 100%;
    display: flex;
}
.tabl1-row3{
    width: 100%;
    display: flex;
}

.tabl2-row1{
    width: 100%;
    display: flex;
    text-align: start;
}

.tabl2-row2{
    width: 100%;
    display: flex;
}

.tabl2-row3{
    width: 100%;
    display: flex;
}

</style>