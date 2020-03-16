<template>
  <div>
    <div>
      <div class="mb-6">
        <input v-model="email" type="text" class="input ml-1" :class="errors.email ? 'border-red-400' : 'border-gray-600'" placeholder="Email Address" />
      </div>
      <div class="mb-6">
        <input v-model="pwd" type="text" class="input ml-1" :class="errors.pwd ? 'border-red-400' : 'border-gray-600'" placeholder="Set A Password" />
      </div>
    </div>
    <div href="#" class="text-right text-green-700 mb-6 cursor-pointer text-sm">Forgot Password?</div>
    <btn-form title="Login" @validations="validations" />
  </div>
</template>

<script>
import FormButton from './FormButton'

export default {
  components: {
    'btn-form': FormButton
  },
  data() {
    return {
      email: '',
      pwd: '',
      errors: {}
    }
  },
  methods: {
    validations() {
      this.errors = {}
      const length = {
        length: 'You must fill this field!'
      }
      if (!this.email) {
        this.errors = Object.assign(this.errors, {'email': length})
      }
      if (!this.pwd) {
        this.errors = Object.assign(this.errors, {'pwd': length})
      }
    }
  }
}
</script>

<style scoped>
.input {
  @apply py-1 px-3 bg-transparent border text-white flex-1 w-full
}
</style>