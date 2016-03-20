<template>
    <div class='header'>
        <img class='more' :src='moreUrl'>
        MI宠
        <div class='login'>登录/注册</div>
    </div>
        <div class='nav-body'>
            <a v-link='{name: "tribe"}'><img class='tribe left' :src='tribeUrl'></a>
            <a v-link='{name: "save"}'><img class='save left' :src='saveUrl'></a>
            <a v-link="{name:'lost'}"><img class='lost left' :src='lostUrl'></a>
            <img class='master left' :src='masterUrl'>
            <a v-link='{name:"scan"}'><img class='xinpian left' :src='xinpianUrl'></a>
            <img class='pet left' :src='petUrl'>
            <img class='gov left' :src='govUrl'>
            <img class='group left' :src='groupUrl'>
            <img class='adopt left' :src='adoptUrl'>
    </div>
</template>

<style lang='less'>

        .header{
            height: 96px;
            line-height: 96px;
            text-align: center;
            position: relative;
            font-size: 13px;/*px*/
            font-weight: bold;
            border-bottom: 1px solid #dddddd;/*no*/

            .more{
                height: 27px;
                width: 40px;
                position: absolute;
                left: 30px;
                top: 35px;
            }

            .login{
                line-height: 96px;
                font-weight: normal;
                position: absolute;
                color: #666666;
                top: 0;
                right: 0;
                padding: 0 30px;
            }
        }

        .nav-body{
            padding: 30px;
            .left{
                float: left;
            }
            .tribe{
                width: 400px;
                height: 400px;
                margin-right: 12px;
                //margin-bottom: 12px;
            }
            .save, .lost{
                width: 278px;
                height: 194px;
                margin-bottom: 12px;
            }
            .master, .xinpian, .pet, .gov, .group, .adopt{
                width: 222px;
                height: 222px;
                margin-right: 12px;
                margin-bottom: 12px;
            }
            .pet, .adopt{
                margin-right: 0;
            }
        }

    </style>

    <script>

    import tribeUrl from '../static/imgs/tribe.png';
    import saveUrl from '../static/imgs/save.png';
    import lostUrl from '../static/imgs/lost.png';
    import masterUrl from '../static/imgs/master.png';
    import xinpianUrl from '../static/imgs/xinpian.png';
    import petUrl from '../static/imgs/pet.png';
    import govUrl from '../static/imgs/govenment.png';
    import groupUrl from '../static/imgs/group.png';
    import adoptUrl from '../static/imgs/adopt.png';
    import moreUrl from '../static/imgs/more.png';

    export default {
        data(){
            return {
                tribeUrl: tribeUrl,
                saveUrl: saveUrl,
                lostUrl: lostUrl,
                masterUrl: masterUrl,
                xinpianUrl: xinpianUrl,
                petUrl: petUrl,
                govUrl: govUrl,
                groupUrl: groupUrl,
                adoptUrl: adoptUrl,
                moreUrl: moreUrl,
            }
        }
    }

</script>