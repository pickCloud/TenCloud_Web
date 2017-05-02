<template>
  <div class="v-main">
    <i class="ten-icon">&#xe606;</i>
    <i class="ten-icon">&#xe734;</i>
    <i class="ten-icon">&#xe669;</i>
    <i class="ten-icon">&#xe685;</i>
    <pages :allpage="10" :nowpage="1" @change="pageChange"></pages>
    <pages :allpage="10" :nowpage="2"></pages>
    <pages :allpage="10" :nowpage="3"></pages>
    <pages :allpage="10" :nowpage="4"></pages>
    <pages :allpage="10" :nowpage="5"></pages>
    <pages :allpage="10" :nowpage="6"></pages>
    <pages :allpage="10" :nowpage="7"></pages>
    <pages :allpage="10" :nowpage="8"></pages>
    <pages :allpage="10" :nowpage="9"></pages>
    <pages :allpage="10" :nowpage="10"></pages>
  </div>
</template>

<script>
  export default {
    methods: {
      pageChange (i) {
        console.log(i)
      }
    }
  }
</script>

<style scoped lang="scss">
  .ten-icon {
    font-size: 70px;
  }
</style>
