<template>
    <img class='firstImg' v-show='show' :src='url' :width='width' :height='height'>
</template>

<style lang='less'>
    .firstImg{
    transition: all 1s;
}
    </style>

<script>
    import startPage from '../static/imgs/start.png';

    export default {
        data(){
            return {
                url: startPage,
                show: false,
                width: 0,
                height: 0,
            };
        },
        ready(){
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.show = true;
            // 启动画面,1.5秒后跳到导航页
            window.setTimeout(() => {
                this.show = false;
                this.$route.router.go({name:'nav'});
            }, 1500);
        }
    }
</script>