<template>
  <div>
    <div>
      <div class="flex content-between mb-6">
        <input v-model="firstName" type="text" class="input" :class="errors.firstName ? 'border-red-400' : 'border-gray-600'" placeholder="First Name" />
        <div class="w-3"></div>
        <input v-model="lastName" type="text" class="input" :class="errors.lastName ? 'border-red-400' : 'border-gray-600'" placeholder="Last Name" />
      </div>
      <div class="mb-6">
        <input v-model="email" type="text" class="input ml-1" :class="errors.email ? 'border-red-400' : 'border-gray-600'" placeholder="Email Address" />
      </div>
      <div class="mb-6">
        <input v-model="pwd" type="text" class="input ml-1" :class="errors.pwd ? 'border-red-400' : 'border-gray-600'" placeholder="Set A Password" />
      </div>
    </div>
    <btn-form title="Sign Up" @validations="validations" />
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
      firstName: '',
      lastName: '',
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
      if (!this.firstName) {
        this.errors = Object.assign(this.errors, {'firstName': length})
      }
      if (!this.lastName) {
        this.errors = Object.assign(this.errors, {'lastName': length})
      }
      if (!this.email) {
        this.errors = Object.assign(this.errors, {'email': length})
      }
      if (!this.pwd) {
        this.errors = Object.assign(this.errors, {'pwd': length})
      }
      console.log(this.errors)
    }
  }
}
</script>

<style scoped>
.input {
  @apply py-1 px-3 bg-transparent border text-white w-full ml-0 mr-0
}
</style>