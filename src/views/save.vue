<template>
    <div class="save-header">
        <a v-link="{name:'nav'}">
            <img class="back" :src="backUrl">
        </a>
        救助
    </div>

    <div class="save-map-container">
        <img class="save-map" :src='mapBack'>
        <img class="locateImg locate1" :src='locate'>
        <img class="locateImg locate2" :src='locate'>
        <img class="locateImg locate3" :src='locateSel'>
        <img class="dogUrl" :src='dog'>
    </div>
</template>

<style lang="less">
    .save-header{
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

    .save-map-container{
        position: relative;
        .locateImg{
            position: absolute;
            width: 60px;
            height: 85px;
        }
        .locate1{
            top: 500px;
            left: 100px;
        }
        .locate2{
            top: 300px;
            left: 400px;
        }
        .locate3{
            top: 600px;
            left: 400px;
        }
        .save-map{
            width: 750px;
            height: auto;
            position: relative;
            top: 96px;
        }

        .dogUrl{
            width: 100%;
            height: auto;
            position: fixed;
            bottom: 0;
            z-index: 10;
        }
    }
</style>

<script>
    import backUrl from '../static/imgs/back.png';
    import saveMap from '../static/imgs/save2.png';
    import locate from '../static/imgs/map.png';
    import locateSel from '../static/imgs/map_select.png';
    import dog from '../static/imgs/dog_02.png';

    let locateUrl = `url('$(locate)')`;

    export default {
        data(){
            return {
                backUrl: backUrl,
                mapBack: saveMap,
                locate: locate,
                locateSel: locateSel,
                locateUrl: locateUrl,
                dog: dog,
            }
        }
    }
</script>