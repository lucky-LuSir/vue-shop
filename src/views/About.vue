<template>
    <div class="main">
        <div class="banner">
            <img src="../img/bgc001.png" alt="">
        </div>
        <div class="first _cm_layout clearfix">
            <div class="left fl">
                <div class="title">
                    ABOUT US
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
        <div class="OUR _cm_layout">
            <div class="title">
                OUR Product
            </div>
            <div class="content">
                <div class="item">
                    <div class="pic">
                        <img src="../img/bgc0002.png" alt="">
                    </div>
                    <div class="con">
                        <div class="top">
                            Basswood shutters
                        </div>
                        <div class="center">
                            Basswood has become one of the most widely used materials for shutters in the global market. This is due to its resistance to warping, easy workability, durability, and its acceptance of a variety of colors and finishes. Basswood (tilia americana) is a member of the hardwood family, with all our Basswood being plantation grown. Basswood shutters are manufactured for indoors only, and are not recommended for wet areas.
                        </div>
                        <div class="footer">
                            <el-button @click="toDetailFn(1)">Get Start</el-button>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pic">
                        <img src="../img/bgc0003.png" alt="">
                    </div>
                    <div class="con">
                        <div class="top">
                            Paulownia shutters
                        </div>
                        <div class="center">
                            Paulownia wood has a straight texture, the material is light and soft, and has a strong grain pattern. Paulownia wood is wear resistant, corrosion resistant and does not conduct electricity.The wood grain texture is bright, prominent and beautiful with stained colours.
                        </div>
                        <div class="footer">
                            <el-button @click="toDetailFn(2)">Get Start</el-button>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pic">
                        <img src="../img/bgc0004.png" alt="">
                    </div>
                    <div class="con">
                        <div class="top">
                            PVC shutters
                        </div>
                        <div class="center">
                            PVC is extruded using a Foamwood material, and has been developed to make shutters suitable for wet areas such as bathrooms and above kitchen sinks. Our Fauxwood is a solid product and uses the same painted finishes as our Basswood Range. Aluminium reinforcement is used in the stiles to reduce weight and increase the strength of the shutters. Fauxwood shutters are termite and fire resistant. Whilst Fauxwood shutters are suitable for wet areas, they are not recommended for outdoor use.
                        </div>
                        <div class="footer">
                            <el-button @click="toDetailFn(1)">Get Start</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Why _cm_layout clearfix">
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
                    Why chose us
                </div>
                <div class="content">
                    We have always been insisting on the enterprise aim of ‘living on quality,developing on quality’,Our products quality has always been the best in the same business, and has been praised by foreign clients.Has an abundant technology strength,advanced processing equipment,and excellent managerment.Our company takes credit for quality as its life and sincerely,welcomes clients to invest cooperation and negotiate trade with us.
                </div>
                <div class="hr">
                    <div></div>
                </div>
            </div>
        </div>
        <div class="contact _cm_layout">
            <div class="top">
                Contact information
            </div>
            <div class="content clearfix">
                <div class="left">
                    <div class="item">
                        <i class="el-icon-diy-zuobiaofill"></i>
                        <div class="line">
                        </div>
                        <div class="desc">
                            <div class="tle">
                                Factory Address：
                            </div>
                            <div class="descs">
                                Chenji Town Industrial Zone, Dingtao County, Heze City, Shandong Province
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="el-icon-diy-gongsi"></i>
                        <div class="line">
                        </div>
                        <div class="desc">
                            <div class="tle">
                                Office Address：
                            </div>
                            <div class="descs">
                                No. 98, Zhonghua Road, Heze City, Shandong Province 274000
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <i style="font-size: 14px;margin-right: 5px; margin-top: 2px;" class="el-icon-diy-youxiang"></i>
                        <div class="line">
                        </div>
                        <div class="desc">
                            <div class="tle">
                                Email：
                            </div>
                            <div class="descs">
                                info@jmshutter.net
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="item">
                        <i class="el-icon-diy-dianhua1"></i>
                        <div class="line">
                        </div>
                        <div class="desc">
                            <div class="tle">
                                Apple phone:
                            </div>
                            <div class="descs">
                                400-820-2058
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <i class="el-icon-diy-chuanzhen"></i>
                        <div class="line">
                        </div>
                        <div class="desc">
                            <div class="tle">
                                Fax:
                            </div>
                            <div class="descs">
                                0530-2205865
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- _cm_layout -->
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
        },
        methods: {
            toDetailFn(type) {
                if (type == 1) {
                    window.sessionStorage.setItem("detailType", 1);
                } else if (type == 2) {
                    window.sessionStorage.setItem("detailType", 2);
                } else if (type == 3) {
                    window.sessionStorage.setItem("detailType", 3);
                }
                this.$router.push("/detail")
            }
        }
    }
</script>

<style scoped lang="less">
    .banner {
        width: 100%;
        height: 700px;

        img {
            width: 100%;
            height: 700px;
        }
    }

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

    .OUR {
        margin-top: 100px;

        .title {
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: rgba(0, 0, 0, 1);
            line-height: 19px;
        }

        .content {
            margin-top: 100px;
            display: flex;

            .item {
                margin-right: 50px;
                width: 448px;
                height: 790px;
                background: rgba(255, 255, 255, 1);
                border: 15px solid rgba(255, 255, 255, 1);
                box-shadow: 0px 0px 31px 1px rgba(0, 0, 0, 0.1);
                box-sizing: border-box;

                .pic {
                    box-sizing: border-box;
                    cursor: pointer;

                    img {
                        width: 418px;
                        height: 426px;
                    }
                }

                .con {
                    text-align: left;

                    .top {
                        font-size: 24px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(0, 0, 0, 1);
                        line-height: 19px;
                        margin-top: 35px;
                        margin-bottom: 25px;
                    }

                    .center {
                        height: 158px;
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: rgba(43, 43, 43, 1);
                        line-height: 26px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 7;
                        overflow: hidden;
                    }

                    .footer {
                        padding-bottom: 15px;
                        margin-top: 20px;

                        .el-button {
                            width: 110px;
                            padding: 0;
                            border: 0;
                            height: 43px;
                            background: rgba(209, 152, 134, 1);
                            font-size: 18px;
                            font-family: Microsoft YaHei;
                            font-weight: 600;
                            color: rgba(255, 255, 255, 1);
                        }
                    }
                }
            }

            .item:last-child {
                margin-right: 0;
            }
        }
    }

    .Why {
        margin-top: 100px;

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

    .contact {
        margin-top: 100px;
        padding-bottom: 100px;

        .top {
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: rgba(0, 0, 0, 1);
            margin-bottom: 100px;
        }

        .content {
            .left {
                float: left;

                .item {
                    margin-bottom: 20px;
                    display: flex;
                }

                .line {
                    width: 2px;
                    height: 14px;
                    background: rgba(0, 0, 0, 1);
                    margin-right: 10px;
                }

                .desc {
                    display: flex;

                    .tle {
                        color: #d19886;
                    }
                }
            }

            .right {
                float: right;

                .item {
                    display: flex;
                    margin-bottom: 20px;
                }

                .line {
                    width: 2px;
                    height: 14px;
                    background: rgba(0, 0, 0, 1);
                    margin-right: 10px;
                }

                .desc {
                    display: flex;

                    .tle {
                        color: #d19886;
                    }
                }
            }
        }
    }
</style>