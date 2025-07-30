<template>
  <div class="register-container">
    <div class="register-box">
      <h1 class="title">Register for XDGPay</h1>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          v-model="firstName"
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          class="input-field"
          @input="clearError"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          v-model="lastName"
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          class="input-field"
          @input="clearError"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="Enter your email"
          class="input-field"
          @input="clearError"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Enter your password"
          class="input-field"
          @input="clearError"
        />
      </div>
      <p v-if="error" class="error-message">{{ error }}</p>
      <button class="submit-button" @click="handleRegister">Register</button>
      <p class="login-link">
        Already have an account? <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const clearError = () => {
  error.value = ''
}

const handleRegister = () => {
  if (!firstName.value) {
    error.value = 'First name is required'
    return
  }
  if (!lastName.value) {
    error.value = 'Last name is required'
    return
  }
  if (!email.value) {
    error.value = 'Email is required'
    return
  }
  if (!validateEmail(email.value)) {
    error.value = 'Please enter a valid email'
    return
  }
  if (!password.value) {
    error.value = 'Password is required'
    return
  }
  // Simulate registration by storing user data in localStorage
  localStorage.setItem('user', JSON.stringify({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value
  }))
  router.push('/test')
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background-color: #1a1a1a; /* Match dark gray theme */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.register-box {
  background: #252525;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #00c4b4; /* Turquoise accent */
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 16px;
  text-align: left;
}

.form-group label {
  font-size: 16px;
  color: #e0e0e0;
  margin-bottom: 8px;
  display: block;
}

.input-field {
  width: 100%;
  padding: 12px;
  background-color: #333333;
  border: 1px solid #444444;
  border-radius: 8px;
  color: #e0e0e0;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #00c4b4;
  box-shadow: 0 0 8px rgba(0, 196, 180, 0.3);
}

.error-message {
  color: #ff3b30;
  font-size: 14px;
  margin-bottom: 16px;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #00c4b4;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
}

.submit-button:hover {
  background-color: #00a89a;
  transform: translateY(-2px);
}

.login-link {
  margin-top: 16px;
  font-size: 14px;
  color: #b0b0b0;
}

.login-link a {
  color: #00c4b4;
  text-decoration: none;
  transition: color 0.3s ease;
}

.login-link a:hover {
  color: #00a89a;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #333333;
}

::-webkit-scrollbar-thumb {
  background: #00c4b4;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #00a89a;
}
</style>