<template>
    <div class="footer">
        <div class="row1">
            <div class="row1-col1">
                <div class="logo-footer"></div>
                <p class="text-footer"><b>شرکت ایوان رایان پیام (جیبیت) با توسعه زیرساخت‌های فنی و فراهم آوردن بستری مناسب و قابل اطمینان این امکان را به کسب و کارها می‌دهد تا به سرویس‌های مالی، پرداخت، انتقال وجه و وب‌سرویس‌های احراز هویت مورد نیاز خود دسترسی پیدا کنند.</b></p>
            </div>
            <div class="row1-col2">
                <p class="text-footer" style="width: 80%;margin: auto;margin-top:45px;"><b>{{ this.data_contant.address }}</b></p>
                <p class="text-footer" style="width: 80%;margin: auto;line-height: 40px;"><b>021-26106000</b></p>
                <p class="text-footer" style="width: 80%;margin: auto;"><b>info@jibit.ir</b></p>
            </div>
            <div class="row1-col3">
                <ul class="ul-footer">
                    <div>
                        <li><a href="#">ارتباط با ما</a></li>
                        <li><a href="#">قوانین و مقررات</a></li>
                        <li><a href="#">بلاگ</a></li>   
                    </div>
                </ul>

            </div>
            <div class="row1-col4">
                <div class="logo2-footer"></div>
            </div>
        </div>
        <div class="row2">
            <div class="row2-col1">
                <div class="logo-ins2"><p class="text-footer">© کلیه حقوق متعلق به جیبیت می‌باشد</p></div>
            </div>
            <div class="row2-col2">
                <div class="logo-ins"><div class="row2-col2"><svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.25 8C2.25 4.82436 4.82436 2.25 8 2.25H16C19.1756 2.25 21.75 4.82436 21.75 8V16C21.75 19.1756 19.1756 21.75 16 21.75H8C4.82436 21.75 2.25 19.1756 2.25 16V8ZM8 3.75C5.65279 3.75 3.75 5.65279 3.75 8V16C3.75 18.3472 5.65279 20.25 8 20.25H16C18.3472 20.25 20.25 18.3472 20.25 16V8C20.25 5.65279 18.3472 3.75 16 3.75H8ZM15.75 7.5C15.75 7.91421 16.0858 8.25 16.5 8.25H17.5C17.9142 8.25 18.25 7.91421 18.25 7.5V6.5C18.25 6.08579 17.9142 5.75 17.5 5.75H16.5C16.0858 5.75 15.75 6.08579 15.75 6.5V7.5ZM8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12ZM12 7.25C9.37665 7.25 7.25 9.37665 7.25 12C7.25 14.6234 9.37665 16.75 12 16.75C14.6234 16.75 16.75 14.6234 16.75 12C16.75 9.37665 14.6234 7.25 12 7.25Z' fill='#4D5768'/></svg></div></div>
            </div>
            
        </div>
        
    </div>
</template>

<script>

export default {
  name: 'footer',
  data() {
    return {
      data_contant: {}
    }
  },
  mounted() {
    fetch("../data/footer.json")
    .then(res => res.json())
    .then(data => {
      this.data_contant = data;
      console.log("Fetched data:", this.data_contant);
    });
  }
}
</script>

<style scoped>
@font-face {
    font-family: VazirFD;
    src: url(/public/Vazir.ttf);
}
.footer{
    width: 82%;
    height: 300px;
    /* background-color: aqua; */
    margin: auto;
    background-image: url(https://jibit.ir/wp-content/themes/jibit/images/transferor/footer-background.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left bottom;
}
.row1{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    direction: rtl;
}
.row1{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    direction: rtl;
}
.row1-col1{
    width: 35%;
    height: 100%;
}
.row1-col2{
    width: 30%;
    height: 100%;
    /* background-color: aqua; */
    
}
.row1-col3{
    width: 20%;
    height: 100%;
}
.row1-col4{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: start;
}
.row2{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20%;
}
.row2-col1{
    width: 50%;
    height: 100%;
}
.row2-col2{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
        
}
.logo-footer{
    width: 114px;
    height: 35px;
    background-image: url(/public/brand.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.text-footer{
    font-size: 14px;
    font-family: Vazir2;
    color: #4d5768;
    margin-top: 10px;
}
.ul-footer{
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    direction: rtl;
}
.ul-footer li{
    list-style: none;
    text-decoration: none;
    color: #4d5768;
    font-size: 14px;
    font-family: Vazir2;
}
.ul-footer li a{
    text-decoration: none;
    color: #4d5768;
    font-family: VazirFD;
    line-height: 40px;
}
.logo2-footer{
    width: 90px;
    height: 100px;
    background-image: url(../public/logo/logo_enamad.png);
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
}
.row2-col1{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo-ins{
    width:50px;
    height: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.row2-col2{
    width: 80%
}
</style>