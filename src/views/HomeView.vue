<template>
  <div class="home">
    <category-list />
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'

export default {
  name: 'HomeView',
  components: {
    CategoryList
  }
}
</script>
