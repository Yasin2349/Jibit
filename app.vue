
<template>
  <head>
    <title>درگاه پرداخت اینترنتی | سرویس های تحراز هویت و استعلام | XDGPay</title>
  </head>
  <div>
    <MyMenu></MyMenu>
    <router-view ></router-view>
  </div>
</template>
<script setup>
import { useHead } from '#imports'

useHead({
  title: 'XdgPay | درگاه پرداخت رمزارزی سریع، امن و حرفه‌ای',
  htmlAttrs: {
    lang: 'fa',
    dir: 'ltr'
  },
  script: [
    {
      type: 'application/ld+json',
      children: `
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://xdgpay.com",
        "name": "XdgPay",
        "author": {
          "@type": "Organization",
          "name": "XdgPay Team"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://xdgpay.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
      `
    }
  ],
  meta: [
    
    { name: 'description', content: 'XdgPay درگاه پرداخت رمزارزی امن، سریع و ساده برای کسب‌وکارها. پشتیبانی از بیت‌کوین، تتر، اتریوم و سایر ارزهای دیجیتال.' },
    { name: 'keywords', content: 'درگاه پرداخت، پرداخت ارز دیجیتال، XdgPay، کریپتو، بیت‌کوین، اتریوم، تتر، درگاه امن' },
    { name: 'author', content: 'XdgPay Team' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
    { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
    { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'format-detection', content: 'telephone=no' }, // جلوگیری از لینک خوردن شماره تلفن‌ها در موبایل
    { name: 'theme-color', content: '#3737B1' },

    
    { property: 'og:title', content: 'XdgPay | درگاه پرداخت رمزارزی سریع، امن و حرفه‌ای' },
    { property: 'og:description', content: 'با XdgPay به‌سادگی پرداخت‌های رمزارزی را از مشتریان خود دریافت کنید. امن، سریع و قابل اعتماد.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://xdgpay.com/xdgpay' },
    { property: 'og:image', content: 'https://xdgpay.com/images/xdgpay-preview.jpg' },
    { property: 'og:locale', content: 'fa_IR' },
    { property: 'og:site_name', content: 'Xdgpay' },

    
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'XdgPay | درگاه پرداخت رمزارزی سریع، امن و حرفه‌ای' },
    { name: 'twitter:description', content: 'درگاهی امن و سریع برای پرداخت‌های رمزارزی با پشتیبانی از بیت‌کوین، تتر و اتریوم.' },
    { name: 'twitter:image', content: 'https://xdgpay.com/images/xdgpay-preview.jpg' },
    { name: 'twitter:site', content: '@Xdgpay' },
    { name: 'twitter:creator', content: '@Xdgpay' },

    
    { rel: 'canonical', href: 'https://xdgpay.com/xdgpay' },
    { rel: 'alternate', hrefLang: 'fa', href: 'https://xdgpay.com/xdgpay' },

    
    { name: 'application-name', content: 'XdgPay' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'XdgPay' },
    { name: 'msapplication-TileColor', content: '#3737B1' },
    { name: 'msapplication-config', content: '/browserconfig.xml' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})
</script>
<style>
html{
  scroll-behavior: smooth;
}
body{
  margin: 0%;
  padding: 0%;
  background-image: linear-gradient(186.9deg,#fff 1.88%,#f9fafd 10.48%);
  overflow-x:hidden ;
}
body::-webkit-scrollbar{
  width: 10px;
}
body::-webkit-scrollbar-thumb{
  background-color: rgb(219, 219, 219);
  border-radius: 50px;
}
body::-webkit-scrollbar-thumb:hover{
  background-color: rgb(172, 172, 172);
}
</style>