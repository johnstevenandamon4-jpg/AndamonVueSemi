<script setup>
import { ref, watch } from 'vue'

const fullName = ref('')
const email = ref('')
const phone = ref('')

fullName.value = localStorage.getItem('fullName') || ''
email.value = localStorage.getItem('email') || ''
phone.value = localStorage.getItem('phone') || ''

watch(fullName, (newValue) => {
    localStorage.setItem('fullName', newValue)
})
watch(email, (newValue) => {
    localStorage.setItem('email', newValue)
})
watch(phone, (newValue) => {
    localStorage.setItem('phone', newValue)
})

function register(){
    alert(`Registration successful\nWelcome, ${fullName.value}!`)
}

function clearForm(){
    fullName.value = ''
    email.value = ''
    phone.value = ''

    localStorage.removeItem('fullName')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
}
</script>

<template>
    <div class="container py-5">
        <div class="col-lg-7">
            <div class="card shadow-sm border-0">
                <div class="fw-bold mb-4">
                    <h3>Create An Account</h3>
                </div>
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Full Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="fullName"
                            placeholder="Enter your full name"
                        >
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Email</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="email"
                            placeholder="Enter your full email"
                        >
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Phone</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="phone"
                            placeholder="Enter your full number"
                        >
                    </div>
                </form>
                <div class="d-flex gap-2">
                    <button
                        type="submit"
                        class="btn btn-primary"
                        @click="register"
                    >Register</button>
                    <button
                        type="submit"
                        class="btn btn-outline-danger"
                        @click="clearForm"
                    >Clear form data</button>
                </div>
            </div>
        </div>
    </div>
</template>