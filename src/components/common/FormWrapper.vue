<template>
  <div>
    <div class="w-form bg-form p-8 rounded-md shadow-lg">
      <div class="flex">
        <div @click="changeForm(true)" class="btn-header" :class="signUp ? 'active' : 'inactive'">
          Sign Up
        </div>
        <div @click="changeForm(false)" class="btn-header" :class="signUp ? 'inactive' : 'active'">
          Log In
        </div>
      </div>
      <div class="text-2xl text-white text-center py-6">{{ signUp ? 'Sign Up For Free' : 'Welcome back'}}</div>
      <div>
        <login-form v-if="!signUp" />
        <sign-up-form v-else />
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login'
import SignUp from './SignUp'

export default {
  components: {
    'login-form': Login,
    'sign-up-form': SignUp
  },
  data() {
    return {
      signUp: true
    }
  },
  methods: {
    changeForm(value) {
      if (this.signUp === value) {
        return
      }
      this.signUp = value
    }
  }
}
</script>

<style scoped>
.btn-header {
  @apply text-center flex-1 p-3 cursor-pointer
}

.active {
  @apply text-white bg-primary
}

.inactive {
  @apply text-gray-500 bg-gray-700
}
</style>