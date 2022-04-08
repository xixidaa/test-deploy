<template>
    <router-view>
        <BaseVue>
            <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
        </BaseVue>
    </router-view>
</template>

<script setup lang="ts">
import HelloWorld from 'comps/HelloWorld.vue'
import BaseVue from '../layouts/Base.vue'
</script>

<style scoped lang="scss">

</style>