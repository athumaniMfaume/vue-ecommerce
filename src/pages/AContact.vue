<template>
  <div class="container mt-4" style="max-width: 600px">
    <h2>Contact Us</h2>
    <form @submit.prevent="handleSubmit" novalidate>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && !form.name }"
          required
        />
        <div class="invalid-feedback">Please enter your name.</div>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && !validEmail(form.email) }"
          required
        />
        <div class="invalid-feedback">Please enter a valid email address.</div>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          class="form-control"
          rows="4"
          :class="{ 'is-invalid': submitted && !form.message }"
          required
        ></textarea>
        <div class="invalid-feedback">Please enter your message.</div>
      </div>

      <button class="btn btn-primary" type="submit">Send</button>
    </form>

    <div v-if="success" class="alert alert-success mt-3">
      Thank you! Your message has been sent.
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)
const success = ref(false)

function validEmail(email) {
  // simple regex for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function handleSubmit() {
  submitted.value = true
  success.value = false

  if (form.name && validEmail(form.email) && form.message) {
    // Here you can send the form data to backend API
    // For now, just show success message
    success.value = true

    // Reset form
    form.name = ''
    form.email = ''
    form.message = ''
    submitted.value = false
  }
}
</script>
