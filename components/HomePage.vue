<template>
    <MyMenu></MyMenu>
    <DivImg></DivImg>
    <BrandLogos></BrandLogos>
    <Box-About></Box-About>
    <AboutSer></AboutSer>
    <Services></Services>
</template>

<script>
import MyMenu from '/components/MyMenu.vue'
import DivImg from '/components/DivImg.vue'
import BrandLogos from '/components/BrandLogos.vue'
import BoxAbout from '/components/BoxAbout.vue'
import AboutSer from '/components/AboutSer.vue'
import Services from '/components/ServicesSite.vue'
export default {
    name:'HomePage',
    components: { BoxAbout,MyMenu , DivImg , BrandLogos , AboutSer, Services},
}
</script>

<style scoped>

</style>