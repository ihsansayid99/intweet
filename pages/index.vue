<template>
  <div class="badge">
    <h1 class="text-2xl px-2 py-1">Hello From Index</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300 cursor-pointer;
  }
}
</style>