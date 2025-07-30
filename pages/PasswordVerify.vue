<template>
  <LottieBackground animationPath="/gif/back2.json" class="background" />
  <div class="div1a">
    <LottieAnimation animationPath="/gif/4.json" width="500px" height="500px" class="gif" />

    <div class="div1s">
      <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ meta }">
         <div class="dis">
          <NuxtLink to="/LoginRegister4"><div class="logo-login"></div></NuxtLink>
          <p class="title-login" style="text-align: center;">
          بازیابی پسورد
          </p>  
        </div>
        
        <p class="title-input1" style="direction: rtl;">ایمیل خود را وارد کنید :</p>

        <Field
          name="email"
          as="input"
          type="email"
          placeholder="ایمیل را وارد کنید ..."
          :class="['input-email', pass1.touched && pass1.invalid ? 'input-error' : '']"
          tabindex="1"
        />
        <div style="height: 20px;margin-top: 0px;">
          <ErrorMessage name="email" v-slot="{ message }" style="height: 10px;">
            <p class="p-error">{{ message }}</p>
          </ErrorMessage> 
        </div>
        <p class="title-input1" style="direction: rtl;margin-top: 0%;">کد تایید را وارد کنید :</p>
        <Field
          name="codeV"
          as="input"
          type="text"
          inputmode="numeric"
          pattern="[0-9]*"
          maxlength="6"
          placeholder="کد ارسال شده را وارد کنید ..."
          :class="['input-email', pass1.touched && pass1.invalid ? 'input-error' : '']"
          tabindex="1"
          v-model="code"
          @input="filterNumeric"
        />


        <div style="height: 20px;margin-top: 0px;">
          <ErrorMessage name="codeV" v-slot="{ message }" style="height: 10px;">
            <p class="p-error">{{ message }}</p>
          </ErrorMessage> 
        </div>
      
        <div class="password-row" style="display: flex;justify-content: center;align-items: center;">
  <div class="password-row" style="display: flex;height: 75px; direction: rtl;">
  <div class="password-col"  style="height: 50px;">
    <p class="title-input1">رمز عبور جدید :</p>
    <div class="dis-input-pass">
      <Field
        name="NPassword"
        as="input"
        :type="showPassword1 ? 'text' : 'password'"
        placeholder="رمز عبور جدید را وارد کنید ..."
        class="input-pass"
        tabindex="2"
        validate-on-input
        maxlength="6"
      />
      <button type="button" @click="showPassword1 = !showPassword1" class="toggle-btn">
        <i :class="['color2', showPassword1 ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash']"></i>
      </button>
    </div>
    <ErrorMessage name="NPassword" v-slot="{ message }">
      <p class="p-error">{{ message }}</p>
    </ErrorMessage>
  </div>

  <div class="password-col" style="height: auto;">
    <p class="title-input1">تکرار رمز عبور :</p>
    <div class="dis-input-pass">
      <Field
        name="PasswordV2"
        as="input"
        :type="showPassword2 ? 'text' : 'password'"
        placeholder="تکرار رمز عبور را وارد کنید ..."
        class="input-pass"
        tabindex="3"
        validate-on-input
        maxlength="6"
      />
      <button type="button" @click="showPassword2 = !showPassword2" class="toggle-btn">
        <i :class="['color2', showPassword2 ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash']"></i>
      </button>
    </div>
    <ErrorMessage name="PasswordV2" v-slot="{ message }">
      <p class="p-error">{{ message }}</p>
    </ErrorMessage>
  </div>
</div>
</div>

        <div class="password-strength-bar">
          <div
            class="strength"
            :style="{ width: width + '%', backgroundColor: color }"
          ></div>
        </div>

        
        <div class="dis" style="border-color: rgb(7, 74, 77); padding-bottom: 10px;">
          <p v-if="time > 0" class="p-timer">
            زمان باقی‌مانده: <b>{{ formatTime }}</b>
          </p>
          <button v-else @click="restart" class="btn-resend-code">ارسال دوباره کد</button>
        </div>
        <input
          type="submit"
          class="btn-login"
          value="ارسال کد تایید"
          :disabled="!(meta.dirty && meta.valid)"
        />
      </Form>

      <div class="dis-input-pass" style="justify-content: flex-start;">
        <NuxtLink to="LoginRegister4" class="link-reg">ثبت نام</NuxtLink>
        <p class="title-btn-reg">حساب کاربری ندارید؟</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router' 
import { Form, Field, ErrorMessage, useField } from 'vee-validate'
import * as yup from 'yup'
import LottieAnimation from '~/pages/LottieAnimation.vue'
import LottieBackground from '~/pages/LottieBackground.vue'
import { ref, computed, onMounted } from 'vue'

const router = useRouter()
const { meta: passwordMeta } = useField('password')

const password = ref('')

const showPassword1 = ref(false)
const showPassword2 = ref(false)
const togglePassword = () => {
  showPassword1.value = !showPassword1.value
}
const togglePassword2 = () => {
  showPassword2.value = !showPassword2.value
}

const conditions = [
  (p) => /[A-Z]/.test(p),
  (p) => /\d/.test(p),
  (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p), 
  (p) => p.length >= 8, 
]

const passedCount = computed(() =>
  conditions.reduce((acc, fn) => acc + (fn(password.value) ? 1 : 0), 0)
)

const time = ref(240) 
let timer



const formatTime = computed(() => {
  const m = String(Math.floor(time.value / 60)).padStart(2, '0')
  const s = String(time.value % 60).padStart(2, '0')
  return `${m}:${s}`
})

const countdown = () => {
  timer = setInterval(() => {
    if (time.value > 0) time.value--
    else clearInterval(timer)
  }, 1000)
}
const restart = () => {
  
  time.value = 240
  countdown()
}

onMounted(() => {
  countdown() 
})

const schema = yup.object({
  PasswordV1: yup
    .string()
    .required('کد تایید را وارد کنید!')
    .min(6, 'کد باید حداقل 6 کاراکتر باشد'),
  // PasswordV2: yup
  //   .string()
  //   .required('کد تایید تکراری را وارد کنید!')
  //   .oneOf([yup.ref('PasswordV1')], 'کدهای وارد شده یکسان نیستند'),
  email: yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
  codeV: yup.string().required('کد الزامی است').min(6, 'کد باید 6 رقم باشد'),
  NPassword: yup
    .string()
    .required('رمز عبور الزامی است')
    .min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),

  PasswordV2: yup
    .string()
    .required('تکرار رمز عبور الزامی است')
    .oneOf([yup.ref('NPassword')], 'رمز عبور با تکرار آن یکسان نیست'),
})


const { meta: pass1 } = useField('PasswordV1')
const { meta: pass2 } = useField('PasswordV2')

const onSubmit = async (values) => {
  try {
    const res = await $fetch('', {
      method: 'POST',
      body: {
        password: values.PasswordV2,
      }
    })

    console.log('نتیجه ثبت‌نام:', res)

  } catch (err) {
    console.error('خطا در ثبت‌نام:', err)
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .div1s{
    height: 625px !important;
  }
}
@font-face {
  font-family: Vazir;
  src: url(../public/Vazir-Bold.woff);
}
@font-face {
  font-family: Vazir2;
  src: url(../public/Vazir-Thin.woff);
  font-weight: bold;
}
@font-face {
  font-family: Vazir3;
  src: url(../public/Vazir-Medium.ttf);
}
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.div1a{
    
    width: 100%;
    height: 100vh;
    /* background-image: url(../public/backgrounds/3.jpg); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    margin-top: 0%;
    padding-top: 70px;
    display: flex;
    justify-content: center;
    align-content: center;
}
.div1s {
  position: relative; /* مهم برای اینکه ::before نسبی به این باشه */
  width: 400px;
  height: 645px;
  background-color: rgba(172, 172, 172, 0.219); /* می‌تونی این رو شفاف کنی */
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 14px;
  margin: auto;
  z-index: 3;
  margin-right: 10.5%;
  overflow: hidden; /* برای اینکه ::before بیرون نزنه */
}

.div1s::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(15px);
  background-color: rgba(162, 219, 221, 0.3); /* کمی رنگ برای بهتر دیده شدن */
  border-radius: 10px;
  z-index: -1; /* زیر محتوای اصلی باشه */
}
.div1a::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  /* background-image: url(../public/backgrounds/3.jpg); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(8px);
  z-index: 0;
}
.gif{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
    margin: auto;
    margin-right: 0%;
}
.title-login{
    font-size: 25px;
    height: 86px;
    width: 70%;
    display: flex;
    align-items: center;
    padding-right: 8%;
    font-weight: 600;
    color:  rgb(220, 228, 233);
    direction: rtl;
    text-align: right;
    font-family: Vazir;
}
.logo-login{
  width: 80px;
  height: 50px ;
  background-image: url(../public/logo-xdgpay2.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size:contain;

}
.dis{
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(226, 226, 226);
}
.input-email{
    width: 86%;
    height: 55px;
    background-color: rgb(174, 216, 255);
    border: 1px solid rgb(141, 141, 141);
    border-radius: 8px;
    direction: rtl;
    padding-right: 5%;
    margin: auto;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    outline: none;
    margin-bottom: 10px;
    text-align: center;
}
.input-email2{
    width: 86%;
    height: 55px;
    background-color: rgb(174, 216, 255);
    border: 1.2px solid rgb(119, 45, 45);
    border-radius: 8px;
    direction: rtl;
    padding-right: 5%;
    margin: auto;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    outline: none;
}

.input-pass{
    width: 78%;
    height: 55px;
    background-color: rgb(174, 216, 255);
    border-left: 1px solid rgb(141, 141, 141);
    border-bottom: 1px solid rgb(141, 141, 141);
    border-top: 1px solid rgb(141, 141, 141);
    border-radius: 8px 0px 0px 8px;
    direction: rtl;
    padding-right: 5%;
    margin: auto;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    margin-right: 0%;
    outline: none;
}
.input-pass2{
    width: 78%;
    height: 55px;
    background-color: rgb(174, 216, 255);
    border-left: 1px solid rgb(119, 45, 45);
    border-bottom: 1px solid rgb(119, 45, 45);
    border-top: 1px solid rgb(119, 45, 45);
    border-radius: 8px 0px 0px 8px;
    direction: rtl;
    padding-right: 5%;
    margin: auto;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    margin-right: 0%;
    outline: none;
}
.input-name1{
    width: 84%;
    height: 55px;
    background-color: rgb(174, 216, 255);
    border: 1px solid rgb(141, 141, 141);
    border-radius: 8px;
    direction: rtl;
    padding-right: 5%;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    margin: auto;
    margin-right: 2%;
    outline: none;
}
.input-name11{
    width: 84%;
    height: 55px;
    background-color: rgb(174, 216, 255);
    border: 1px solid rgb(119, 45, 45);
    border-radius: 8px;
    direction: rtl;
    padding-right: 5%;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    margin: auto;
    margin-right: 2%;
    outline: none;
}
.input-name2{
    width: 84%;
    height: 55px;
    background-color: rgb(174, 216, 255);
    border: 1px solid rgb(141, 141, 141);
    color: black;
    border-radius: 8px;
    direction: rtl;
    padding-right: 5%;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    margin: auto;
    margin-left: 2%;
    outline: none;
}
.input-name22{
    width: 84%;
    height: 55px;
    background-color: rgb(174, 216, 255);
    border: 1px solid rgb(119, 45, 45);
    color: black;
    border-radius: 8px;
    direction: rtl;
    padding-right: 5%;
    display: block;
    font-family: Vazir3;
    font-size: 13px;
    margin: auto;
    margin-left: 2%;
    outline: none;
}
.title-input1{
    width: 100%;
    font-size: 14px;
    text-align: right;
    color:white;
    margin-top: 0px;
    padding-right: 7%;
    margin-bottom: 5px;
    font-family: Vazir3;
    direction: rtl;
}
.title-input11{
    width: 100%;
    font-size: 14px;
    text-align: right;
    color:white;
    margin-top: 30px;
    margin-bottom: 5px;
    font-family: Vazir3;
    padding-right: 2%;
}
.title-input2{
    width: 100%;
    font-size: 14px;
    text-align: right;
    padding-right: 13%;
    color:white;
    margin-top: 30px;
    margin-bottom: 5px;
    font-family: Vazir3;
}
.dis-input-pass{
    width: 100%;
    border-radius: 4px;
    direction: ltr;
    display: flex;
    align-items: center;
}
.toggle-btn{
    background-color: transparent;
    width: 15%;
    height: 55px;   
    border-right: 1px solid rgb(141, 141, 141);
    border-bottom: 1px solid rgb(141, 141, 141);
    border-top: 1px solid rgb(141, 141, 141);
    margin: auto;
    margin-left: 0%;
    border-radius: 0px 8px 8px 0px;
    background-color: rgb(174, 216, 255);
}
.color2{
    transition: all ease 1s;
}
.fa-eye-slash{
    color: rgb(64, 165, 135);
}
.fa-eye{
    color: rgb(165, 64, 64);
}
.btn-login{
    width: 86%;
    height: 60px;
    border-radius: 5px;
    background-color: rgb(28, 104, 114);
    margin: auto;
    display: block;
    margin-top: 20px;
    cursor: pointer;
    color: white;
    font-family: Vazir;
}
.title-forg{
    width: 100%;
    font-family: Vazir;
    font-size: 14px;
    color: rgb(0, 225, 255);
    text-align: center;
    margin-top: 10px;
    font-size: 13px;
    
}
.title-btn-reg{
    margin: auto;
    margin-left: 0%;
    margin-top: 30px;
    font-family: Vazir3;
    color: rgb(80, 80, 80);
}
.title-btn-reg2{
    margin: auto;
    margin-left: 0%;
    margin-top: 30px;
    font-family: Vazir3;
    font-size: 14px;
    color: rgb(80, 80, 80);
}

.link-reg{
    margin: auto;
    margin-right: 0%;
    list-style: none;
    color: rgb(21, 110, 124);
    font-family: Vazir;
    margin-top: 30px;
}
.background {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100vh;  /* یا اگر بخوای درصد: 100% باشه حتما والدها هم 100% باشن */
  z-index: 0;
  rotate: 180deg;
}
.p-error{
    width: 100%;
    height: 3px;
    text-align: center;
    direction: rtl;
    color: red;
    font-family: Vazir3;
    font-size: 14px;
    margin-top: 0px;
}
.password-row{
  margin-bottom: 13px;
}
.input-error {
  border: 2px solid #ff0800 !important;
  box-shadow: 0 0 4px #d9534f;
}
.password-strength-bar {
  height: 6px;
  background-color: #ccc;
  margin: 10px 7%;
  border-radius: 4px;
  overflow: hidden;
  margin: auto;
  margin-top: 10px;
}

.password-strength-bar {
  width: 80%;
  height: 10px;
  background-color: #eeeeee00;
  border-radius: 5px;
  margin-top: 10px;
  overflow: hidden;
}

.strength {
  height: 100%;
  transition: width 0.4s ease, background-color 0.4s ease;
  width: 0%;
  background-color: white;
  border-radius: 5px;
}
.p-timer{
  color: rgb(6, 69, 73);
  font-family: Vazir;
}
.p-timer b{
  padding: 3px;
  background-color: rgb(6, 69, 73);
  color: white;
  font-family: Vazir2;
  border-radius: 5px;
}
.btn-resend-code{
  padding: 10px;
  background-color: rgb(6, 69, 73);
  border-radius: 5px;
  color: white;
  font-family: Vazir;
  cursor: pointer;
}

</style>