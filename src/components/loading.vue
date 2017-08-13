<template>
    <div class="loading-box" v-show="show">
        <div class="loading-mask"></div>
        <div class="loading-content">
            <div class="animate">loading</div>
            <div class="text">{{text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
    },
    data() {
        return {
            text: '正在加载中...'
        }
    }
}
</script>

<style>
    .loading-box {
        position: relative;
        text-align: center;
    }

    .loading-mask {
        position: fixed;
        background: #000;
        opacity: .8;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .loading-content {
        position: fixed;
        left: 50%;
        top: 180px;
        width: 150px;
        margin-left: -75px;
        padding: 10px 0;
        background: #fff;
    }

    .loading-content .text {
        font-size: 14px;
    }
</style>
