<template>
  <div>
    <div class="div1">
        
        <div class="div-contant">
            <div class="tab1">
                <p class="title-tab1"><b>XdgPay راه های ارتباط با </b></p>
                <div class="div-table1">
                    <div class="tabl1-row1">
                        <div class="tabl1-col1">
                            <p class="p-table" style="font-family: Vazir; color: #a3a9b2;"><b><i class="fas fa-map-marker-alt"></i>  آدرس:</b></p>
                        </div>
                        <div class="tabl1-col2" style="width: 78%;"><p class="p-table" style="text-align: start;"><b>{{ this.data_contant.address }}</b></p></div>
                    </div>
                    <div class="tabl1-row2">
                        <div class="tabl2-col1"><p class="p-table" style="font-family: Vazir; color: #a3a9b2;"><b><i class="fas fa-envelope-open"></i> کد پستی :</b></p></div>
                        <div class="tabl2-col2">
                            <p class="p-table" style="text-align: start;margin-right: 15px;"><b>۱۴۵۹۹۶۵۲۲۳</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab2"><p class="title-tab2">امور مشتریان</p>
                <div class="div-table2">
                    <div class="tabl2-row1">
                        <div class="row1-col1"><p class="p-table" style="font-family: Vazir; color: #a3a9b2;text-align: start;"> <i class="fas fa-envelope"></i> <b>ایمیل: </b></p></div>
                        <div class="row1-col2"><p class="p-table-cover" style="font-family: Vazir; color: #4d5768; text-align: start;"><b class="cover">{{ this.data_contant.email }}</b></p></div>
                    </div>
                    <div class="tabl2-row2">
                        <div class="row2-col1"><p class="p-table" style="font-family: Vazir; color: #a3a9b2;text-align: start;"><i class="fas fa-phone"></i>  <b>تلفن :</b></p></div>
                        <div class="row2-col2"><p class="p-table-cover" style="font-family: Vazir; color: #4d5768; text-align: start;"><b class="cover">{{ this.data_contant.phone }}</b></p></div>
                    </div>
                    <p class="p-table-labl" style="font-family: Vazir; color: #4d5768; text-align: start;height: 50px;display: flex;align-items: center;margin-right: 20%;"><b>{{ this.data_contant.phonetime }}</b></p>
                    <div class="tabl2-row3">
                        <div class="row3-col1"><p class="p-table" style="font-family: Vazir; color: #a3a9b2;text-align: start;"><i class="fab fa-telegram-plane"></i> <b>تلگرام :</b></p></div>
                        <div class="row3-col2"><p class="p-table-cover" style="font-family: Vazir; color: #4d5768; text-align: start;"><b class="cover">{{ this.data_contant.idtelegram }}</b></p></div>
                    </div>
                    <p class="p-table-labl" style="font-family: Vazir; color: #4d5768; text-align: start; font-size: 15px; font-family: Vazir;margin-right: 20%;"><b>{{ this.data_contant.teltime }}
روزهای پنج‌شنبه، جمعه و تعطیلات رسمی: از ساعت ۹:۰۰ تا ۲۰:۰۰</b></p>
                </div>
            </div>
        </div> 
        <div class="div-map">
            <div class="map">
                <iframe class="iframe-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d402.0056967673759!2d59.60007550662386!3d36.28694406931608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1752061861159!5m2!1sen!2s"></iframe>
            </div>
        </div> 
    </div>
    <br>
    <br>
    <br>
    <br>
    <Footer></Footer>
  </div>
  
</template>

<script>
export default {
  name: 'ContantPage',
  data() {
    return {
      data_contant: {}
    }
  },
  mounted() {
    fetch("./data/contant.json")
    .then(res => res.json())
    .then(data => {
      this.data_contant = data;
      console.log("Fetched data:", this.data_contant);
    });
  }
}
</script>


<style scoped>
.div1{
    width: 100%;
    height: auto;
    max-height: 1400px;
    display: flex;
    align-items: end;
    flex-wrap: wrap;
    direction: rtl;
}
.div-map{
    margin: auto;
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
}
.div-contant{
    width: 500px;
    height: 100%;
    justify-content: end;
    align-items: end;
    margin: auto;
    direction: ltr;
}
@media screen and (max-width: 768px) {
    .div-contant{
        width: 89%;
    }
    .title-tab2{
        margin-top: 50px;
    }
    .div-map{
        width: 89%;
        justify-content: center;
    }
    .iframe-map{
        margin-top: 80px;
        height: 300px !important;
    }
}
@media screen and (max-width: 562px) {
    .title-tab1{
        height: 50px;
        text-align: right;
        line-height: 45px !important;
        /* margin: auto !important; */
        margin-right: 10% !important;
        margin: auto;
        width: 80%  !important;
    }
    .title-tab1 b{
        font-size: 30px !important;
    }
}
@media screen and (max-width: 430px) {
    .title-tab1 b{
        font-size: 24px !important;
    }
    .div-table2{
        width: 88% !important;
    }
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
    margin-top: 30px;
}
.tabl1-row1{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    margin-top: 45px;
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
    text-align: right;
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
    margin-right: 0%;
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
    height: 50px;
    display: flex;
    justify-content: end;
    align-items: center;
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
    display: flex;
    align-items: center;
}

.tabl2-row2{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.tabl2-row3{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (max-width: 1200px) {
    
}
</style>