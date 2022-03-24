<template>
  <div class="main-container">
    <header class="top-area">
      顶部区域
    </header>

    <slot></slot>

    <footer class="foot-area">
      底部区域
    </footer>
  </div>

</template>

<script setup lang="ts">
</script>

<style scoped>
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.top-area {
  width: 100%;
  height: 40px;
  background-color: rgb(160, 31, 31);
}
.foot-area {
  width: 100%;
  height: 40px;
  background-color: rgb(31, 76, 160);
}
</style>