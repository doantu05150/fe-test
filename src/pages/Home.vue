<template>
  <div>
    <div class="container-fluid h-screen">
      <t-navbar />
      <div class="flex content-center justify-center bg-gray-500">
        <div class="mx-auto pt-20">
          <t-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TNavbar, TFormWrapper } from '@/components/common'

export default {
  components: {
    't-navbar': TNavbar,
    't-form': TFormWrapper
  }
}
</script>