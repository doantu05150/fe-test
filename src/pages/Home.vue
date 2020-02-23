<template>
  <div>
    <div class="container-fluid h-screen">
      <t-navbar />
    </div>
  </div>
</template>

<script>
import { TNavbar } from '@/components/common'

export default {
  components: {
    't-navbar': TNavbar
  }
}
</script>