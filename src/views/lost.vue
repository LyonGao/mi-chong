<template>
    <div class="lost-header">
        <a v-link="{name:'nav'}">
            <img class="back" :src="backUrl">
        </a>
        走失
    </div>
    <div class="lost-body">
        <img class="lost-img" :src='lostUrl'>
        <img class="select" :src='select'>
        <img class="unselect" :src='unselect'>
    </div>
</template>

<style lang="less">
    .lost-header{
        width: 100%;
        height: 96px;
        line-height: 96px;
        text-align: center;
        position: fixed;
        top: 0;
        z-index: 5;
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

    .lost-body{
        position: relative;
        top: -30px;
        .lost-img{
            width: 100%;
            height: auto;
        }
        .select{
            position: absolute;
            top: 170px;
            left: 440px;
            width: 44px;
            height: 44px;
        }
        .unselect{
            position: absolute;
            top: 170px;
            left: 75px;
            width: 44px;
            height: 44px;
        }
    }
</style>

<script>
    import back from '../static/imgs/back.png';
    import lost from '../static/imgs/lostPage.png';
    import select from '../static/imgs/select.png';
    import unselect from '../static/imgs/unselect.png';

    export default{
        data(){
            return {
                backUrl: back,
                lostUrl: lost,
                select: select,
                unselect: unselect,
            }
        }
    }
</script>