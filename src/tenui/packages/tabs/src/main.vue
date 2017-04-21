<template>
  <div class="tab">
    <ul>
      <li v-for="label in labels">{{label}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    props: {
      labels: Array,
      default: []
    }
  }
</script>
