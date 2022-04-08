<template>
    <div>
        测试路由首页
        <button @click="goHomePage">去首页</button>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'
    const router  = useRouter()
    const goHomePage = () => {
        router.push('/home')
    }
</script>

<style scoped lang="scss">

</style>