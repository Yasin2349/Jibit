import { defineStore } from 'pinia';

export const useRegisterStore = defineStore('register', {
  state: () => ({
    formData: {
      name: '',
      family: '',
      email: '',
      password: '',
    },
    errors: {
      name: '',
      family: '',
      email: '',
      password: '',
    },
    showPassword: false,
  }),
  actions: {
    
    validateName() {
      this.errors.name = this.formData.name === '' ? 'نام را وارد کنید!' : '';
    },
    validateFamily() {
      this.errors.family = this.formData.family === '' ? 'نام خانوادگی را وارد کنید!' : '';
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.formData.email === '') {
        this.errors.email = 'ایمیل را وارد کنید!';
      } else if (!emailPattern.test(this.formData.email)) {
        this.errors.email = 'ایمیل معتبر وارد کنید!';
      } else {
        this.errors.email = '';
      }
    },
    validatePassword() {
      if (this.formData.password === '') {
        this.errors.password = 'پسورد را وارد کنید!';
      } else if (this.formData.password.length < 8) {
        this.errors.password = 'تعداد کاراکترهای پسورد کمتر از 8 رقم است!';
      } else {
        this.errors.password = '';
      }
    },
    submitForm() {
      this.validateName();
      this.validateFamily();
      this.validateEmail();
      this.validatePassword();

      
    },
  },
});