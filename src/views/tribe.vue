<template>
    <div class="tribe-header">
        <a v-link="{name:'nav'}">
            <img class="back" :src="backUrl">
        </a>
        部落
    </div>
    <div class="tribe-body">
        <div class="banner">
            <img class="banner-pic" :src="tribeBanner">
        </div>
        <div class="tribe-list">
            <div class="list-item">
                <img :src='cat'>
            </div>
            <div class="list-item">
                <img :src='dog'>
            </div>
            <div class="list-item">
                <img :src='cat'>
            </div>
            <div class="list-item">
                <img :src='dog'>
            </div>
            <div class="list-item">
                <img :src='cat'>
            </div>
            <div class="list-item">
                <img :src='dog'>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .tribe-header{
        width: 100%;
        height: 96px;
        line-height: 96px;
        text-align: center;
        position: fixed;
        top: 0;
        background: white;
        font-size: 13px;/*px*/
        font-weight: bold;
        border-bottom: 1px solid #dddddd;/*no*/

        .back{
            height: 40px;
            width: 40px;
            position: absolute;
            left: 30px;
            top: 30px;
        }
    }

    .tribe-body{
        margin-top: 96px;
        .banner{
            .banner-pic{
                width: 750px;
                height: 422px;
            }
        }

        .tribe-list{
            background: #f1f1f1;
            padding-top: 30px;

            .list-item{
                margin-bottom: 10px;
                img{
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
</style>

<script>
    import backUrl from '../static/imgs/back.png';
    import tribeBanner from '../static/imgs/buluo_body.png';
    import cat from '../static/imgs/cat_01.png';
    import dog from '../static/imgs/dog_02.png';

    export default {
        data(){
            return {
                backUrl: backUrl,
                tribeBanner: tribeBanner,
                cat: cat,
                dog: dog,
            }
        },
        ready(){

        },
        methods: {

        }
    }
</script>

