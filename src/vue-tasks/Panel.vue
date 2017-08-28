<template>
  <div class="task-panel">
    <div class="task-panel-title"></div>
    <div class="task-panel-body">
      <div class="task-item"></div>
    </div>
  </div>
</template>

<style lang="scss">
  .task-panel {
    position: fixed;
    width: 600px;
    height: 400px;
    right: 16px;
    bottom: 0;
    &.mini {
      bottom: -350px;
    }
  }
  .task-panel-body {

  }
</style>
