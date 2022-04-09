<template>
    <div class="welcome-page">
        <div class="welcome-container"></div>
        <div class="welcome-right">
           <div class="welcome-title">
                欢迎来到
                <br>
                <br>
                地图可视化平台
           </div>
           <div class="go-home" @click="goHomePage">
                点击进入
           </div>
        </div>
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
.welcome-page {
    width: 100%;
    height: 100%;
    display: flex;

    .welcome-container {
        flex: 3;
        height: 100%;
        background: url('../assets/imgs/home_bg.jpeg') no-repeat center / cover;
    }
    .welcome-right {
        flex: 1;
        text-align: center;
        height: 100%;
        background-color: rgba(14, 20, 36, 0.831);
        .welcome-title {
            font-family: 'DouyuFont';
            color: rgb(120, 91, 52);
            font-size: 30px;
            margin: 100px auto;
        }
        .go-home {
            margin: 0 auto;
            cursor: pointer;
            width: 200px;
            height: 40px;
            line-height: 40px;
            background-color: rgb(91, 91, 151);
        }
    }
}
</style>