<template>
  <div class="px-4 lg:px-20 xl:px-24 py-20 w-full">
    <div class="text-center">
      <div class="mb-8">
        <img src="~assets/images/404.jpg" alt="" v-if="error.statusCode === 404" class="mx-auto w-4/5 lg:w-4/12">
        <h1 v-else>An error occurred</h1>
      </div>
      <NuxtLink to="/" class="px-6 py-2 font-bold bg-indigo border-2 rounded-md border-indigo text-white">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>