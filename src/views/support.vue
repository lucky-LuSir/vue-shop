<template>
    <div class="main">
        <div class="first _cm_layout clearfix">
            <div class="left fl">
                <div class="title">
                    Normal window Measurement tutorial
                </div>
                <div class="content">
                    HEZE JIEMING SHUTTER CO.,LTD is located in Heze City,Shandong Province.We covers an area of 25 thousand square meters.It is an export enterprise for processing and trading,our main products are shutters and louvers,the materials are paulownia wood ,basswood and PVC,and you can choose any colour,any style,any size of the shutters,and we believe one of them will always satisfy you.
                </div>
                <div class="hr">
                    <div></div>
                </div>
            </div>
            <div class="right fr">
                <!-- <img src="../img/bgc0011.png" alt=""> -->
                <el-carousel>
                    <el-carousel-item v-for="item in BASSList" :key="item.imgSrc">
                        <img :src="item.imgSrc" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="second _cm_layout clearfix">
            <div class="left fl">
                <!-- <img src="../img/BASS_DSC_0250.jpg" alt=""> -->
                <el-carousel>
                    <el-carousel-item v-for="item in PAUList" :key="item.imgSrc">
                        <img :src="item.imgSrc" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="right fr">
                <div class="title">
                    Special window Measurement tutorial
                </div>
                <div class="content">
                    We have always been insisting on the enterprise aim of ‘living on quality,developing on quality’,Our products quality has always been the best in the same business, and has been praised by foreign clients.Has an abundant technology strength,advanced processing equipment,and excellent managerment.Our company takes credit for quality as its life and sincerely,welcomes clients to invest cooperation and negotiate trade with us.
                </div>
                <div class="hr">
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                BASSList: [{
                    imgSrc: require("../img/BASS_DSC_0311.jpg"),
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: require("../img/BASS_DSC_0274.jpg"),
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: require("../img/BASS_DSC_0250.jpg"),
                    linkHref: 'javascript:;'
                }],
                 PAUList: [
                    {
                        imgSrc: require("../img/PAU_DSC_0208.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PAU_DSC_0253.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PAU_DSC_0296.jpg"),
                        linkHref: 'javascript:;'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .first {
        margin-top: 100px;

        .left {
            height: 448px;
            width: 600px;
            margin-right: 70px;
            text-align: left;
            position: relative;

            .title {
                font-size: 36px;
                font-family: Microsoft YaHei;
                font-weight: 600;
                color: rgba(0, 0, 0, 1);
                margin-bottom: 100px;
                text-align: left;
            }

            .content {
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(0, 0, 0, 1);
                line-height: 22px;
            }

            .hr {
                position: absolute;
                left: 0;
                bottom: 0;

                div {
                    width: 146px;
                    height: 4px;
                    background: rgba(209, 152, 134, 1);
                }
            }
        }

        .right {
            width: 720px;
            height: 448px;

            /deep/ .el-carousel__container {
                height: 448px !important;
            }

            img {
                width: 719px;
                height: 448px;
            }
        }
    }

    .second {
        margin-top: 100px;
        padding-bottom: 100px;

        .left {
            width: 720px;
            height: 448px;

            /deep/ .el-carousel__container {
                height: 448px !important;
            }

            img {
                width: 719px;
                height: 448px;
            }
        }

        .right {
            width: 600px;
            height: 442px;
            text-align: right;
            position: relative;

            .title {
                font-size: 36px;
                font-family: Microsoft YaHei;
                font-weight: 600;
                color: rgba(0, 0, 0, 1);
                margin-bottom: 70px;
            }

            .content {
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(0, 0, 0, 1);
                line-height: 22px;
            }

            .hr {
                position: absolute;
                right: 0;
                bottom: 0;

                div {
                    width: 146px;
                    height: 4px;
                    background: rgba(209, 152, 134, 1);
                }
            }
        }
    }
</style>