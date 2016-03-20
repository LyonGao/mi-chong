<template>
    <div class="scan-header">
        <a v-link="{name:'nav'}">
            <img class="back" :src="backUrl">
        </a>
        扫描
    </div>
    <div class="scan-body">
        <img class="scan-img" :src='scanUrl'>
        <img class="scan2" :src='scan2'>
    </div>
</template>

<style lang="less">
    .scan-header{
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
    .scan-body{
        position: relative;
        top: 96px;
        //text-align: center;
        .scan-img{
            width: 750px;
            height: auto;
        }
    }

    .scan2{
        position: absolute;
        left: 176px;
        top: 245px;
        width: 402px;
        height: 402px;
    }
</style>

<script>
    import backUrl from '../static/imgs/back.png';
    import scanUrl from '../static/imgs/scan.png';
    import scan2 from '../static/imgs/scan3.gif';

    export default {
        data(){
            return {
                backUrl: backUrl,
                scanUrl: scanUrl,
                scan2: scan2,
            }
        }
    }
</script>