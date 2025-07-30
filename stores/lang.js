// stores/lang.js
import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => ({
    currentLang: 'fa', // یا 'en'
    translations: {
      fa: {
        title_home_page:"خرید و فروش امن و سریع ارزهای دیجیتال",
        text_home_page:"با XDGPay، رمزارزها را آسان، سریع و مطمئن معامله کن. درگاه ریالی، پشتیبانی شبانه‌روزی، امنیت حرفه‌ای و بیش از 150 ارز دیجیتال..",
        value_btn_home_page1:"ساخت حساب کاربری >",
        value_btn_home_page2:"تماس با تیم فروش >",  
        title_box_about1:"قابل اطمینان",
        title_box_about2:"پشتیبانی شبانه‌روزی",
        title_box_about3:"سرعت بالا در پردازش",
        title_box_about4:"امنیت چندلایه",
        text_box_about1:"بیش از ۹۹٪ زمان، بدون وقفه در کنار تو و کسب‌وکارت هستیم.",
        text_box_about2:"پشتیبانی ۲۴/۷ از یه تیم حرفه‌ای و همیشه پاسخ‌گو.",
        text_box_about3:"موتور XdgPay تا ۱۰۰,۰۰۰ سفارش در دقیقه رو پردازش می‌کنه.",
        text_box_about4:"با بیش از ۱۰ سال تجربه و فناوری SAFU، دارایی‌ت در امانه.",
        title_slider:"سرویس های XDGPay",
        text_slider:"ارائه دهنده خدمات متنوع پرداخت، انتقال وجه و عملیات مالی و بانکی به صورت یکپارچه و پایدار است.",
        btn1_slider:"درگاه پرداخت",
        btn2_slider:"سرویس های استعلامی",
        btn3_slider:"واریز شناسه دار",
        btn4_slider:"تسویه و انتفال وجه",
        btn5_slider:"اهراز حویت بایومتریک",
        btn_blog:"بلاگ",
        btn_contant:"ارتباط با ما",
        btn_services:"سرویس ها",

        title_page1_silder:"درگاه پرداخت",
        title_page2_silder:"سرویس های استعلامی",
        title_page3_silder:"واریز شناسه دار",
        title_page4_silder:"تسویه و انتقال وجه",
        title_page5_silder:"احراز هویت بایومتریک",

        btn_slider:"اطلاعات بیشتر <",

        text_page1_silder:"درگاه پرداخت XdgPay با اتصال به شبکه‌های پرداخت مختلف و سیستم مسیردهی هوشمند، امکان تراکنش‌های سریع، مطمئن و پایدار را برای کسب‌وکارها فراهم می‌کند. با پشتیبانی کامل از شاپرک و فناوری‌های نوین، تجربه‌ای بدون دغدغه و افزایش درآمد را برای شما تضمین می‌کند.",
        text_page2_silder:"سرویس استعلامی XdgPay به کسب‌وکارها امکان می‌دهد با صحت‌سنجی اطلاعات بانکی و هویتی، خدماتی نوآورانه و قابل اعتماد برای مشتریان خود ایجاد کنند.",
        text_page3_silder:"با سرویس واریز شناسه‌دار XdgPay امکان پرداخت‌های آسان و بدون محدودیت مبلغ برای مشتریان فراهم است که انتخاب روش‌های متنوع پرداخت، انعطاف‌پذیری بیشتری به همراه دارد.",
        text_page4_silder:"پلتفرم XdgPay انتقال سریع و امن وجه را بین حساب‌های مختلف با روش‌های متنوع ممکن کرده است تا کسب‌وکارها بدون دغدغه، مدیریت مالی خود را بهینه کنند.",
        text_page5_silder:"سرویس احراز هویت بایومتریک XdgPay با بهره‌گیری از فناوری‌های پیشرفته تصویر و یادگیری عمیق، امکان تایید هویت کاربران را با دقت بالا فراهم می‌کند. امنیت داده‌های شما در این فرایند تضمین شده است.",
        
        title_polM:"پل مطمئن پرداخت رمزارزی",
        text_polM:"صدها کسب‌وکار نوین ایرانی با تکیه بر درگاه پرداخت رمزارزی XdgPay، مسیر دریافت پرداخت‌های دیجیتال را ساده و ایمن کرده‌اند.",

        box1_title_polM:"+1 میلیارد",
        box1_text_polM:"درخواست سالانه از طریق APIهای پرداخت رمزارز",
        box2_title_polM:"+۲۵۰ همت",
        box2_text_polM:"گردش مالی سالیانه روی پلتفرم XdgPay",
      
        title_box_startinxdgpay : "شروع استفاده از XdgPay",
        text_box_startinxdgpay : "با ایجاد حساب کاربری، از سرویس‌های پرداخت رمزارزی XdgPay برای توسعه پرداخت‌های دیجیتال و مدیریت مالی هوشمند کسب‌وکارتان بهره‌مند شوید.",
        text2_box_startinxdgpay : "برای طراحی پلن اختصاصی و دسترسی به امکانات پیشرفته با ما در ارتباط باشید.",
        btn_box_createacc:"< ساخت حساب کاربری ",
        btn2_box_createacc:"< تماس با تیم فروش ",

        text_footer:"شرکت ایکس‌دی‌جی‌بیت (XdgPay) با توسعه زیرساخت‌های رمزارزی و ارائه راهکارهای نوین پرداخت دیجیتال، به کسب‌وکارها این امکان را می‌دهد تا به درگاه پرداخت رمزارزی، ابزارهای تبدیل ارز دیجیتال، کیف‌پول اختصاصی و API‌های هوشمند دسترسی داشته باشند؛ سریع، ایمن و قابل اعتماد.",
        address_footer:"امام خمینی 24 , مجتمع مرمر",
        phone: "۰۲۱-۲۲۸۶۶۶۶۶۶",
        email:"support@xdgpay.com",
        btn_contact:"ارتباط با ما",
        btn_GH:"قوانین و مقررات",
        btn_blog:"بلاگ",
        text_footer2:"© کلیه حقوق متعلق به XDGPay می‌باشد",

      },
      en: {
        title_home_page:"Safe and fast buying and selling of digital currencies",
        text_home_page:"Trade cryptocurrencies easily, quickly and securely with XDGPay. Rial gateway, 24/7 support, professional security and over 150 cryptocurrencies..",
        value_btn_home_page1:"< Create a user account",
        value_btn_home_page2:"< Contact the sales team",
        title_box_about1:"reliable",
        title_box_about2:"24/7 support",
        title_box_about3:"High processing speed",
        title_box_about4:"Multi-layer security",
        text_box_about1:"We are with you and your business more than 99% of the time, without interruption.",
        text_box_about2:"24/7 support from a professional and always responsive team.",
        text_box_about3:"The XdgPay engine processes up to 100,000 orders per minute.",
        text_box_about4:"With over 10 years of experience and SAFU technology, your assets are safe.",
        title_slider:"XDGPay Services",
        text_slider:"It provides a variety of payment services, money transfers, and financial and banking operations in an integrated and sustainable manner.",
        btn1_slider:"Payment gateway",
        btn2_slider:"Inquiry services",
        btn3_slider:"ID-bearing deposit",
        btn4_slider:"Settlement and transfer of funds",
        btn5_slider:"Biometric authentication",
        btn_blog:"blog",
        btn_Contact:"Contact us",
        btn_services:"services",

        title_page1_silder:"Payment gateway",
        title_page2_silder:"Inquiry services",
        title_page3_silder:"ID-bearing deposit",
        title_page4_silder:"Settlement and transfer of funds",
        title_page5_silder:"Biometric authentication",

        btn_slider:"< More information",

        text_page1_silder:"XdgPay payment gateway enables fast, secure, and stable transactions for businesses by connecting to various payment networks and a smart routing system. With full support for Shaparak and modern technologies, it guarantees a worry-free experience and increased revenue for you.",
        text_page2_silder:"XdgPay's inquiry service allows businesses to create innovative and reliable services for their customers by validating banking and identity information.",
        text_page3_silder:"The XdgPay ID-based deposit service provides customers with the ability to make easy payments without any amount limits, and choosing a variety of payment methods provides greater flexibility.",
        text_page4_silder:"The XdgPay platform enables fast and secure transfer of funds between different accounts using a variety of methods, allowing businesses to optimize their financial management without worry.",
        text_page5_silder:"XdgPay's biometric authentication service uses advanced image and deep learning technologies to verify user identities with high accuracy. The security of your data is guaranteed in this process.",
        
        title_polM:"Secure cryptocurrency payment bridge",
        text_polM:"Hundreds of innovative Iranian businesses have simplified and secured the path to receiving digital payments by relying on the XdgPay cryptocurrency payment gateway.",

        box1_title_polM:"+1 billion",
        box1_text_polM:"Annual request via cryptocurrency payment APIs",
        box2_title_polM:"+250 effort",
        box2_text_polM:"Annual turnover on the XdgPay platform",

        title_box_startinxdgpay : "Start using XdgPay",
        text_box_startinxdgpay : "By creating an account, take advantage of XdgPay's cryptocurrency payment services to develop digital payments and smart financial management for your business.",
        text2_box_startinxdgpay : "Contact us to design a custom plan and access advanced features.",
        btn_box_createacc:"Creating a user account >",
        btn2_box_createacc:"Contact the sales team >",
        
        text_footer:"XdgPay, by developing cryptocurrency infrastructure and providing innovative digital payment solutions, enables businesses to exist with cryptocurrency payments, digital currency conversion tools, dedicated wallets, and intelligent access APIs. Fast, reliable, and trustworthy.",
        address_footer:"24 Imam Khomeini St., Marmara Complex",
        phone: "021-228666666",
        email:"support@xdgpay.com",
        btn_contact:"Contact us",
        btn_GH:"Rules and regulations",
        btn_blog:"blog",
        text_footer2:"© All rights reserved by XDGPay",
      },
    },
  }),
  getters: {
    t: (state) => {
      return (key) => state.translations[state.currentLang][key] || key
    },
  },
  actions: {
    setLang(lang) {
      if (['fa', 'en'].includes(lang)) {
        this.currentLang = lang
      }
    },
  },
})
