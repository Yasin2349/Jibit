<template>
  <div
    class="w-[82%] h-[350px] mx-auto
           bg-[url('https://jibit.ir/wp-content/themes/jibit/images/transferor/footer-background.png')]
           bg-contain bg-no-repeat bg-left-bottom footer-wrapper"
  >
 
    <div class="flex justify-between w-full h-1/2 rtl footer-row1">
    
      <div class="w-[35%] h-full flex flex-col footer-col1">
        <div
          class="w-[114px] h-[40px]
                 bg-[url('/public/logo-xdgpay2.png')] bg-contain bg-center bg-no-repeat logo-footer"
        ></div>
        <p class="mt-[10px] text-[14px] font-vazir2 text-[#4d5768] text-footer">
          <strong>
            شرکت ایکس‌دی‌جی‌بیت (XdgPay) با توسعه زیرساخت‌های رمزارزی و ارائه راهکارهای نوین پرداخت دیجیتال، به کسب‌وکارها این امکان را می‌دهد تا به درگاه پرداخت رمزارزی، ابزارهای تبدیل ارز دیجیتال، کیف‌پول اختصاصی و API‌های هوشمند دسترسی داشته باشند؛ سریع، ایمن و قابل اعتماد.
          </strong>
        </p>
      </div>
     
      <div class="w-[30%] h-full flex flex-col items-start justify-center space-y-2 footer-col2">
        <p class="w-[80%] mt-[45px] text-[14px] font-vazir2 text-[#4d5768] text-footer">
          <strong>{{ data_contant.address }}</strong>
        </p>
        <p class="w-[80%] leading-[40px] text-[14px] font-vazir2 text-[#4d5768] text-footer">
          <strong>{{ data_contant.phone }}</strong>
        </p>
        <p class="w-[80%] text-[14px] font-vazir2 text-[#4d5768] text-footer">
          <strong>{{ data_contant.email }}</strong>
        </p>
      </div>
      
      <div class="w-[20%] h-full flex items-center footer-col3">
        <ul class="w-full h-full flex flex-col justify-center space-y-2 rtl list-none links-footer">
          <li><a href="#" class="text-[14px] font-vazir2 text-[#4d5768] hover:underline link-footer">ارتباط با ما</a></li>
          <li><a href="#" class="text-[14px] font-vazir2 text-[#4d5768] hover:underline link-footer">قوانین و مقررات</a></li>
          <li><a href="#" class="text-[14px] font-vazir2 text-[#4d5768] hover:underline link-footer">بلاگ</a></li>
        </ul>
      </div>
      
      <div class="w-[20%] h-full flex justify-end items-start footer-col4">
        <div
          class="w-[90px] h-[100px]
                 bg-[url('/public/logo/logo_enamad.png')]
                 bg-cover bg-top bg-no-repeat logo-enamad"
        ></div>
      </div>
    </div>

    
    <div class="flex justify-between w-full h-[20%] items-center footer-row2">
      <div class="w-[50%] flex justify-center items-center footer-copy">
        <p class="text-[14px] font-vazir2 text-[#4d5768]">© کلیه حقوق متعلق به جیبیت می‌باشد</p>
      </div>
      <div class="w-[50%] flex justify-end items-center footer-icon">
        <svg class="w-6 h-6 text-[#4d5768]" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M2.25 8C2.25 4.82436 4.82436 2.25 8 2.25H16C19.1756 2.25 21.75 4.82436 21.75 8V16C21.75 19.1756 19.1756 21.75 16 21.75H8C4.82436 21.75 2.25 19.1756 2.25 16V8ZM8 3.75C5.65279 3.75 3.75 5.65279 3.75 8V16C3.75 18.3472 5.65279 20.25 8 20.25H16C18.3472 20.25 20.25 18.3472 20.25 16V8C20.25 5.65279 18.3472 3.75 16 3.75H8ZM15.75 7.5C15.75 7.91421 16.0858 8.25 16.5 8.25H17.5C17.9142 8.25 18.25 7.91421 18.25 7.5V6.5C18.25 6.08579 17.9142 5.75 17.5 5.75H16.5C16.0858 5.75 15.75 6.08579 15.75 6.5V7.5ZM8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12ZM12 7.25C9.37665 7.25 7.25 9.37665 7.25 12C7.25 14.6234 9.37665 16.75 12 16.75C14.6234 16.75 16.75 14.6234 16.75 12C16.75 9.37665 14.6234 7.25 12 7.25Z"
            fill="#4D5768"/>
        </svg>
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
      });
  }
}
</script>

<style scoped>
@font-face {
  font-family: Vazir2;
  src: url('/Vazir-Thin.woff');
}
@font-face {
  font-family: Vazir;
  src: url('/Vazir-Bold.woff');
}

.font-vazir {
  font-family: Vazir, sans-serif;
}
.font-vazir2 {
  font-family: Vazir2, sans-serif;
}
.rtl {
  direction: rtl;
}


@media (max-width: 1024px) {
  .footer-wrapper {
    width: 95% !important;
    height: auto !important;
    padding: 30px 10px;
    background-position: center bottom !important;
  }

  .footer-row1 {
    flex-direction: column !important;
    height: auto !important;
    gap: 30px;
  }

  .footer-col1,
  .footer-col2,
  .footer-col3,
  .footer-col4 {
    width: 100% !important;
    height: auto !important;
    align-items: center !important;
    text-align: center;
  }

  .logo-footer {
    margin: 0 auto 10px auto;
  }

  .text-footer {
    width: 90% !important;
    margin: 0 auto !important;
  }

  .links-footer {
    flex-direction: row !important;
    justify-content: center !important;
    gap: 20px;
  }

  .link-footer {
    font-size: 13px !important;
  }

  .logo-enamad {
    margin: 0 auto !important;
  }

  .footer-row2 {
    flex-direction: column !important;
    gap: 10px;
    height: auto !important;
  }

  .footer-copy,
  .footer-icon {
    width: 100% !important;
    justify-content: center !important;
  }
}
</style>
