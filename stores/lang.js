// stores/lang.js
import { defineStore } from 'pinia'
import { useCookie } from '#app' // فقط برای Nuxt

export const useLangStore = defineStore('lang', {
  state: () => ({
    currentLang: 'fa',
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
        btn5_slider:"سرویس های استعلامی",
        btn6_slider:"اهراز حویت بایومتریک",
        btn_blog:"بلاگ",
        btn_contact_menu:"ارتباط با ما",
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
        btn_contact2:"ارتباط با ما",
        btn_GH:"قوانین و مقررات",
        btn_blog:"بلاگ",
        text_footer2:"© کلیه حقوق متعلق به XDGPay می‌باشد",
        link_menu_servic:"سرویس ها",
        link_menu_contactus:"ارتباط با ما",
        link_menu_blog:"بلاگ",
        link_menu_login:"ورود به پنل",
        dire:"left",

        title_dargah:"درگاه پرداخت رمزارزی برای رشد واقعی کسب‌وکار شما",
        text_dargah:"با درگاه پرداخت XdgPay پرداخت‌های رمزارزی را ساده، سریع و امن دریافت کنید. با پشتیبانی از رمزارزهای متنوع، تسویه هوشمند، و API قدرتمند، راهکاری نوین برای پذیرش پرداخت از سراسر دنیا در اختیار شماست. دیگر نگران تحریم‌ها، محدودیت‌های بانکی یا تاخیرهای تسویه نباشید — XdgPay در کنار رشد شماست.",
        btn_dakhast:"درخواست سرویس >",
        btn_dakhast2:"تماس با تیم فروش >",
        title_box_about1:"موفقیت ۹۹٪ در تراکنش‌ها",
        text_box_about1:"ترکیب چند بلاک‌چین و الگوریتم‌های هوشمند، موفقیت تراکنش‌ها را به ۹۹٪ می‌رساند.",

        title_box_about2:"پایداری در ترافیک بالا",
        text_box_about2:"معماری توزیع‌شده XdgPay، در اوج ترافیک هم پرداخت‌ها را بدون اختلال مدیریت می‌کند.",

        title_box_about3:"پردازش سریع تراکنش‌ها",
        text_box_about3:"با زیرساخت بهینه XdgPay، تراکنش‌های رمزارزی در کمتر از یک ثانیه ثبت می‌شوند.",

        title_box_about4:"کاهش ریسک پرداخت‌های رمزارزی",
        text_box_about4:"با تأیید چندمرحله‌ای XdgPay، تراکنش‌های مشکوک شناسایی و امنیت پرداخت‌ها تضمین می‌شود.",

        title2_dargah:"مسیردهی هوشمند بین درگاه‌ها",
        text2_dargah:"XdgPay با اتصال هم‌زمان به چند درگاه و سوئیچینگ هوشمند بین آن‌ها، پایداری سرویس را تضمین و نرخ خطا در پرداخت‌ها را به حداقل می‌رساند.PSPهای فعال: سامان کیش(سپ)، سپهر",

        title3_dargah:"تسویه خودکار روزانه",
        text3_dargah:"با فعال‌سازی تسویه خودکار در XdgPay، موجودی حاصل از فروش به صورت روزانه و منظم به حساب بانکی تعریف‌شده شما واریز می‌شود.",

        title4_dargah:"دریافت کارمزد از پرداخت‌کننده",
        text5_dargah:"XdgPay امکان کسر کارمزد مستقیم از پرداخت‌کننده را فراهم کرده است؛ ابزاری کاربردی برای سرویس‌هایی که هزینه مالیات یا خدمات را به مشتری منتقل می‌کنند.",

        title4_dargah:"تعیین اولویت PSP‌ها",
        text5_dargah:"در XdgPay این امکان وجود دارد که کسب‌وکارها مشخص کنند کدام درگاه پرداخت در اولویت باشد، تا در صورت نیاز، مسیردهی پرداخت‌ها طبق سیاست آن‌ها انجام شود.",

        title_tarefe_dargah111:"تعرفه درگاه پرداخت",
        text_tarefe_dargah111:"کارمزد درگاه پرداخت XdgPay با هدف شفافیت و پشتیبانی از کسب‌وکارهای نوپا تا حرفه‌ای، به‌صورت پلکانی تنظیم شده است. مبالغ اعلام‌شده بدون احتساب مالیات بر ارزش افزوده هستند و هنگام تسویه، ۱۰٪ مالیات به آن افزوده خواهد شد.",

        number_tarefe_dargah:"تعداد تراکنش روزانه",
        text_number_tarefe_dargah:"۱ تا ۲۰۰ تراکنش",
        text_number_tarefe_dargah:" بیش از ۲۰۰ تراکنش",
        
        amount_tarefe_dargah:"مبلغ",
        text_number_tarefe_dargah:" تا ۲۰۰ تراکنش",
        text3_number_tarefe_dargah:"1 درصد",
        text32_number_tarefe_dargah:"تا سقف 50000 ریال",
        text2_number_tarefe_dargah:"تماس با تیم فروش >",


        title_about_dargah3:"مسیردهی هوشمند بین درگاه‌ها",
        text_about_dargah3:"XdgPay با اتصال هم‌زمان به چند درگاه و سوئیچینگ هوشمند بین آن‌ها، پایداری سرویس را تضمین و نرخ خطا در پرداخت‌ها را به حداقل می‌رساند.PSPهای فعال:سامان کیش(سپ)، سپهر",

        title_about_dargah4:"تسویه خودکار روزانه",
        text_about_dargah4:"با فعال‌سازی تسویه خودکار در XdgPay، موجودی حاصل از فروش به صورت روزانه و منظم به حساب بانکی تعریف‌شده شما واریز می‌شود.",

        title_about_dargah5:"دریافت کارمزد از پرداخت‌کننده",
        text_about_dargah5:"XdgPay امکان کسر کارمزد مستقیم از پرداخت‌کننده را فراهم کرده است؛ ابزاری کاربردی برای سرویس‌هایی که هزینه مالیات یا خدمات را به مشتری منتقل می‌کنند.",

        title_about_dargah5:"تعیین اولویت PSP‌ها",
        text_about_dargah5:"در XdgPay این امکان وجود دارد که کسب‌وکارها مشخص کنند کدام درگاه پرداخت در اولویت باشد، تا در صورت نیاز، مسیردهی پرداخت‌ها طبق سیاست آن‌ها انجام شود.0",


        
        


        




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
        btn5_slider:"Inquiry services",
        btn6_slider:"Biometric authentication",
        btn_blog:"blog",
        btn_contact_menu:"Contact us",
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
        btn_contact2:"Contact us",
        btn_GH:"Rules and regulations",
        btn_blog:"blog",
        text_footer2:"© All rights reserved by XDGPay",

        link_menu_servic:"services",
        link_menu_contactus:"Contact Us",
        link_menu_blog:"Blog",
        link_menu_login:"Login",
        dire:"rigth",


        title_dargah:"Cryptocurrency payment gateway for real business growth",
        text_dargah:"Accept cryptocurrency payments simply, quickly, and securely with the XdgPay payment gateway. With support for multiple cryptocurrencies, smart settlement, and a powerful API, you have a new way to accept payments from around the world. No more worrying about sanctions, banking restrictions, or settlement delays — XdgPay is here to help you grow.",
        btn_dakhast:"Service request <",
        btn_dakhast:"Contact the sales team <",
        title_box_about1:"99% success rate in transactions",
        text_box_about1:"The combination of multiple blockchains and smart algorithms increases transaction success to 99%.",

        title_box_about2:"Stability in high traffic",
        text_box_about2:"XdgPay's distributed architecture manages payments without disruption, even during peak traffic.",

        title_box_about3:"Fast transaction processing",
        text_box_about3:"With XdgPay's optimized infrastructure, cryptocurrency transactions are recorded in less than a second.",

        title_box_about4:"Reducing the risk of cryptocurrency payments",
        text_box_about4:"With XdgPay's multi-step verification, suspicious transactions are identified and payment security is guaranteed.",

        title_about_dargah3:"Intelligent routing between ports",
        text_about_dargah3:"By connecting to multiple gateways simultaneously and intelligently switching between them, XdgPay ensures service stability and minimizes payment error rates. Active PSPs: Saman Kish (Sep), Sepehr",

        title_about_dargah4:"Automatic daily settlement",
        text_about_dargah4:"By activating automatic settlement in XdgPay, the balance from sales will be deposited into your defined bank account on a daily and regular basis.",

        title_about_dargah5:"Receiving a fee from the payer",
        text_about_dargah5:"XdgPay enables direct fee deductions from the payer; a useful tool for services that pass on taxes or service charges to the customer.",

        title_about_dargah5:"Prioritizing PSPs",
        text_about_dargah5:"In XdgPay, it is possible for businesses to specify which payment gateway is prioritized, so that payments can be routed according to their policy if needed.0",

        
        title_tarefe_dargah111:"Payment gateway tariff",
        text_tarefe_dargah111:"XdgPay payment gateway fees are set on a tiered basis with the aim of transparency and supporting businesses from start-ups to professionals. The amounts stated are exclusive of VAT and a 10% tax will be added upon checkout.",

        number_tarefe_dargah:"Number of daily transactions",
        text_number_tarefe_dargah:"1 to 200 transactions",
        text_number_tarefe_dargah:"More than 200 transactions",
        
        amount_tarefe_dargah:"amount",
        text_number_tarefe_dargah:"1% up to 50,000 Rials 1 to 200 transactions",
        text2_number_tarefe_dargah:"Contact Sales Team >",
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
        const langCookie = useCookie('lang') // نام کوکی
        langCookie.value = lang
      }
    },

    loadLangFromCookie() {
      const langCookie = useCookie('lang')
      if (langCookie.value && ['fa', 'en'].includes(langCookie.value)) {
        this.currentLang = langCookie.value
      }
    },
  },
})
