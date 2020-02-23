<template>
  <div>
    <button @click="submit()" class="bg-primary py-3 w-full text-white text-3xl font-semibold">{{ title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    }
  },
  methods: {
    submit() {
      this.$emit('validations')
    }
  }
}
</script>