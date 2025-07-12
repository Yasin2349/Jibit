<template>
  <LottieBackground animationPath="/gif/back2.json" class="background" />
  <div class="div1a">
    <LottieAnimation animationPath="/gif/4.json" width="500px" height="500px" class="gif" />

    <div class="div1s">
      <Form :validation-schema="schema" @submit="onSubmit" v-slot="{ meta }">
        <p class="title-login">
          به <b style="color:rgb(10, 74, 77); padding: 0 8px;">XDGPay</b> خوش آمدید
        </p>

        <div class="dis-input-pass">
          <div style="width: 50%;">
            <p class="title-input11">نام خانوادگی</p>
            <Field name="family"
              as="input"
              type="text"
              placeholder="نام خانوادگی را وارد کنید ..."
              :class="['input-name1', familyMeta.touched && familyMeta.invalid ? 'input-error' : '']"
              tabindex="2"
            />
            <ErrorMessage name="family" v-slot="{ message }">
              <p class="p-error">{{ message }}</p>
            </ErrorMessage>
          </div>

          <div style="width: 50%;">
            <p class="title-input2">نام</p>
            <Field
              name="name"
              as="input"
              type="text"
              placeholder="نام را وارد کنید ..."
              :class="['input-name2', nameMeta.touched && nameMeta.invalid ? 'input-error' : '']"
              tabindex="1"
            />
            <ErrorMessage name="name" v-slot="{ message }">
              <p class="p-error">{{ message }}</p>
            </ErrorMessage>
          </div>
        </div>

        <p class="title-input1">آدرس ایمیل</p>
        <Field
          name="email"
          as="input"
          type="email"
          placeholder="ایمیل را وارد کنید ..."
          :class="['input-email', emailMeta.touched && emailMeta.invalid ? 'input-error' : '']"
          tabindex="3"
        />
        <ErrorMessage name="email" v-slot="{ message }">
          <p class="p-error">{{ message }}</p>
        </ErrorMessage>

        <p class="title-input1">پسورد</p>
        <div class="dis-input-pass">
          <Field
            name="password"
            as="input"
            :type="showPassword ? 'text' : 'password'"
            placeholder="پسورد را وارد کنید ..."
            :class="['input-pass', passwordMeta.touched && passwordMeta.invalid ? 'input-error' : '']"
            v-model="password"
            tabindex="4"
          />
          <button type="button" @click="togglePassword" class="toggle-btn">
            <i :class="['color2', showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash']"></i>
          </button>
        </div>
        <div class="password-strength-bar">
          <div
            class="strength"
            :style="{ width: width + '%', backgroundColor: color }"
          ></div>
        </div>
        <ErrorMessage name="password" v-slot="{ message }">
          <p class="p-error">{{ message }}</p>
        </ErrorMessage>

        

        <input type="submit" class="btn-login" value="ثبت نام" :disabled="!meta.valid"/>
      </Form>

      <div class="dis-input-pass" style="justify-content: flex-start;">
        <NuxtLink to="LoginRegister3" class="link-reg">ورود</NuxtLink>
        <p class="title-btn-reg">حساب کاربری دارید؟</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Form, Field, ErrorMessage, useField } from 'vee-validate'
import * as yup from 'yup'
import LottieAnimation from '~/pages/LottieAnimation.vue'
import LottieBackground from '~/pages/LottieBackground.vue'


const schema = yup.object({
  family: yup.string().required('نام خانوادگی الزامی است'),
  name: yup.string().required('نام الزامی است'),
  email: yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
  password: yup
    .string()
    .required('پسورد الزامی است')
    .min(8, 'پسورد باید حداقل ۸ کاراکتر باشد')
    .matches(/[A-Z]/, 'پسورد باید حداقل یک حرف بزرگ داشته باشد')
    .matches(/\d/, 'پسورد باید حداقل یک عدد داشته باشد')
    // .matches(/[!@#$%^&*(),.?":{}|<>]/, 'پسورد باید حداقل یک کاراکتر خاص داشته باشد'),
})


const { meta: familyMeta } = useField('family')
const { meta: nameMeta } = useField('name')
const { meta: emailMeta } = useField('email')
const { meta: passwordMeta } = useField('password')

const password = ref('')

const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const conditions = [
  (p) => /[A-Z]/.test(p), // حرف بزرگ
  (p) => /\d/.test(p), // عدد
  (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p), // کاراکتر خاص
  (p) => p.length >= 8, // طول >= 8
]

const passedCount = computed(() =>
  conditions.reduce((acc, fn) => acc + (fn(password.value) ? 1 : 0), 0)
)

const width = computed(() => passedCount.value * 25)

const color = computed(() => {
  switch (passedCount.value) {
    case 0:
      return 'white'
    case 1:
      return 'red'
    case 2:
      return 'orange'
    case 3:
      return 'yellow'
    case 4:
      return 'green'
    default:
      return 'white'
  }
})

// تابع ارسال فرم
const onSubmit = (values) => {
  alert('ثبت نام با موفقیت انجام شد!\n' + JSON.stringify(values, null, 2))
}
</script>


<style scoped>
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
  height: 600px;
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
    border-bottom: 1px solid rgb(226, 226, 226);
    display: flex;
    align-items: center;
    padding-right: 8%;
    font-weight: 600;
    color:  rgb(220, 228, 233);
    direction: rtl;
    text-align: right;
    font-family: Vazir;
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
    margin-top: 30px;
    padding-right: 7%;
    margin-bottom: 5px;
    font-family: Vazir3;
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
    width: 8%;
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
</style>