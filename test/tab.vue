<template>
  <div class="tab">
    <div class="buttons">
      <ul>
        <li><a class="waves-effect waves-light btn">1</a></li>
        <li><a class="waves-effect waves-light btn">2</a></li>
        <li><a class="waves-effect waves-light btn">3</a></li>
        </ul>
    </div>
    <div class="content">
      <div>1 div</div>
      <div>2 div</div>
      <div>3 div</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab'
}
</script>

<styles lang="scss" scoped>
  .tab {
    display: inline-block;
    width: 100%;
  }
  .buttons {
    float: left;
    li {
      list-style: none;
      padding: 10px 10px 0 0;
    }
  }
</style>
