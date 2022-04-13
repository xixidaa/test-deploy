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
           <div>{{ store.helloWorld }}</div>
           <div class="go-home" @click="goHomePage">
                点击进入
           </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { mainStore } from '../store/index'
    import request from '../utils/http'
    request.get('/api/json').then(res => {
        console.log(res)
    })
    const router  = useRouter()
    const goHomePage = () => {
        router.push('/home')
    }

    const store = mainStore()
</script>

<style scoped lang="scss">
.welcome-page {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: url('../assets/imgs/home_bg.jpeg') no-repeat center / cover;
    .welcome-container {
        flex: 3;
        height: 100%;
        // background: url('../assets/imgs/home_bg.jpeg') no-repeat center / cover;
    }
    .welcome-right {
        flex: 1;
        text-align: center;
        height: 100%;
        box-shadow: 10px 10px 20px rgba(0,0,0,0.2);
        border-radius: 20px;
        background: linear-gradient(to right bottom,rgba(0,0,0,.6),rgba(0,0,0,.2));
        backdrop-filter: blur(8px);
        border-top: 1px solid rbga(255,255,255,0.8);
        border-left: 1px solid rbga(255,255,255,0.8);
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