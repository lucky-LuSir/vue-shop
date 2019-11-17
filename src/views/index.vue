<template>
    <div class="main">
        <!-- index -->
        <div class="banner">
            <img src="../assets/bgc002.png" alt="">
        </div>
        <div class="TIER _cm_layout">
            <div class="left">
                <!-- <img src="../img/BASS_DSC_0250.jpg" alt=""> -->
                <el-carousel>
                    <el-carousel-item v-for="item in BASSList" :key="item.imgSrc">
                        <img :src="item.imgSrc" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="right">
                <div class="title">
                    Tier on Tier
                </div>
                <div class="content">
                    <div class="item">
                        <span class="hrs"></span>
                        <p>Multiple discount</p>
                    </div>
                    <div class="item">
                        <span class="hrs"></span>
                        <p>Quality assurance</p>
                    </div>
                    <div class="item">
                        <span class="hrs"></span>
                        <p>Factory direct sales</p>
                    </div>
                    <div class="item">
                        <span class="hrs"></span>
                        <p>Support various shapes</p>
                    </div>
                    <div class="item">
                        <span class="hrs"></span>
                        <p>Detailed measurement and installation instructions</p>
                    </div>
                </div>
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
                            <el-button @click="toDetailFn(3)">Get Start</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="BGCS1"></div>
        <div class="Support">
            <div class="title">
                Support various shapes of shutters
            </div>
            <div class="content">
                <el-carousel :interval="4000" type="card">
                    <el-carousel-item v-for="item in SupportList" :key="item.src">
                        <img :src="item.src" alt="">
                    </el-carousel-item>
                </el-carousel>
                <!-- <div class="left item">
                    <img src="../img/bgc0008.png" alt="">
                </div>
                <div class="center item">
                    <img src="../img/bgc0006.png" alt="">
                </div>
                <div class="right item">
                    <img src="../img/bgc0007.png" alt="">
                </div> -->
            </div>
        </div>
        <div class="BGCS2"></div>
        <div class="Supp _cm_layout">
            <div class="title">
                Support
            </div>
            <div class="content clearfix">
                <div class="left fl clearfix">
                    <div class="item">
                        <div class="top">
                            <img src="../assets/index001.png" alt="">
                        </div>
                        <div class="bottom">
                            Online appointment
                        </div>
                    </div>
                    <div class="item">
                        <div class="top">
                            <img src="../assets/index002.png" alt="">
                        </div>
                        <div class="bottom">
                            Measurement tutorial
                        </div>
                    </div>
                    <div class="item">
                        <div class="top">
                            <img src="../assets/index003.png" alt="">
                        </div>
                        <div class="bottom">
                            Scheme design
                        </div>
                    </div>
                    <div class="item">
                        <div class="top">
                            <img src="../assets/index004.png" alt="">
                        </div>
                        <div class="bottom">
                            Installation tutorial
                        </div>
                    </div>
                </div>
                <div class="right fr">
                    <img src="../img/bgc0009.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            SupportList: [
                {
                    src: require("../img/slide_001.jpg"),
                },
                {
                    src: require("../img/slide_002.jpg"),
                },
                {
                    src: require("../img/slide_003.jpg"),
                },
                {
                    src: require("../img/slide_004.jpg"),
                },
                {
                    src: require("../img/slide_005.jpg"),
                },
            ],
            BASSList: [
                {
                    imgSrc: require("../img/BASS_DSC_0311.jpg"),
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: require("../img/BASS_DSC_0274.jpg"),
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: require("../img/BASS_DSC_0250.jpg"),
                    linkHref: 'javascript:;'
                }
            ],
        }
    },
    methods: {
        toDetailFn (type) {
            if (type == 1) {
                window.sessionStorage.setItem("detailType", 1);
            } else if (type == 2) {
                window.sessionStorage.setItem("detailType", 2);
            } else if (type == 3) {
                window.sessionStorage.setItem("detailType", 3);
            }
            this.$router.push("/detail")
        }
    },
}
</script>

<style scoped lang="less">
.banner {
    width: 100%;
    height: 700px;
    img {
        width: 100%;
    }
}
.TIER {
    display: flex;
    padding-top: 120px;
    padding-bottom: 130px;
    .left {
        margin-right: 50px;
        width: 720px;
        height: 371px;
        /deep/ .el-carousel__container {
            height: 371px !important;
        }
        img {
            width: 720px;
            height: 371px;
        }
    }
    .right {
        text-align: left;
        .title {
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: rgba(0, 0, 0, 1);
            margin-top: 4px;
        }
        .content {
            margin-top: 145px;
            .item {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }
            span {
                width: 100px;
                height: 2px;
                display: inline-block;
                background: rgba(209, 152, 134, 1);
                margin-right: 20px;
            }
            p {
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(43, 43, 43, 1);
                line-height: 26px;
                white-space: nowrap;
            }
            p:last-child {
                margin-bottom: 0;
            }
        }
    }
}

.OUR {
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
                cursor: pointer;
                box-sizing: border-box;
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
.BGCS1 {
    width: 100%;
    height: 647px;
    margin-top: -550px;
    background: rgba(248, 244, 239, 1);
}
.Support {
    padding-top: 100px;
    padding-bottom: 100px;
    width: 1820px;
    margin: 0 auto;
    /deep/ .el-carousel {
        // width: 100%;
        width: 1920px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    /deep/ .el-carousel__container {
        height: 450px;
    }
    // /deep/ .el-carousel__item.el-carousel__item--card.is-in-stage {
    //     width: 505px;
    //     height: 320px;
    //     /deep/ .el-carousel__mask {
    //         width: 505px;
    //         height: 320px;
    //         height: 320px !important; 
    //     }
    //     img {
    //         width: 505px;
    //         height: 320px;
    //         height: 320px !important; 
    //     }
    // }
    // /deep/ .el-carousel__item.is-active.el-carousel__item--card.is-in-stage {
    //     width: 710px;
    //     height: 450px;
    //     img {
    //         width: 710px;
    //         height: 450px;  
    //     }
    //     /deep/ .el-carousel__mask {
    //         width: 710px;
    //         height: 450px;  
    //     }
    // }
    .title {
        margin-bottom: 100px;
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 19px;
    }
    .content {
        display: flex;
        .item {
            margin-right: 50px;
        }
        .item:last-child {
            margin-right: 0;
        }
        .left {
            height: 450px;
            display: flex;
            align-items: center;
            img {
                width: 505px;
                height: 320px;
            }
        }
        .center {
            img {
                width: 710px;
                height: 450px;
            }
        }
        .right {
            height: 450px;
            display: flex;
            align-items: center;
            img {
                width: 503px;
                height: 320px;
            }
        }
    }
}
.BGCS2 {
    width: 100%;
    height: 336px;
    margin-top: -320px;
    background: rgba(248, 244, 239, 1);
}
.Supp {
    padding-top: 100px;
    padding-bottom: 100px;
    .title {
        margin-bottom: 100px;
        font-size: 36px;
        font-family: Microsoft YaHei;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 19px;
    }
    .content {
        .right {
            img {
                width: 710px;
                height: 431px;
            }
        }
        .left {
            width: 730px;
            .item {
                text-align: center;
                float: left;
                width: 50%;
                .top {
                    display: inline-block;
                    border: 1px dashed #ccc;
                    width: 94px;
                    height: 94px;
                    margin-bottom: 30px;
                    img {
                        width: 94px;
                        height: 94px;
                    }
                }
                .bottom {
                    margin: 0 auto;
                    width: 181px;
                    font-size: 24px;
                    font-family: Microsoft YaHei;
                    font-weight: 600;
                    color: rgba(26, 26, 26, 1);
                }
            }
            .item:nth-child(-n + 2) {
                margin-bottom: 40px;
                margin-top: 20px;
            }
        }
    }
}
</style>
