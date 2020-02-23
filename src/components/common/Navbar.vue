<template>
  <div>
    <div class="border-b border-gray-600 px-6 py-2">
      <div class="flex items-center">
        <div class="flex-1">
          <router-link to="/" class="nav-link hover:font-medium">Home</router-link>
          <router-link to="/sercet" class="nav-link hover:font-medium">Sercet</router-link>
        </div>
        <div>
          <button class="btn-home hover:text-blue-900">Login</button>
          <button class="btn-home hover:bg-blue-500 hover:text-white border border-blue-500 hover:border-transparent rounded">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  @apply text-gray-700 px-2
}

.btn-home {
  @apply bg-transparent text-blue-700 font-semibold py-2 px-4
}
</style>