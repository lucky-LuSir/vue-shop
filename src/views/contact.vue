<template>
    <div class="main">
        <div id="allmap"></div>
        <el-form :model="formObj" :rules="rules" ref="" label-width="100px" class="ruleForm _cm_layout">
            <div class="quote_view">
                <h2>CONTACT</h2>
                <div class="floor">
                    <div class="ipt_item">
                        <el-form-item label="Your Name">
                            <el-input placeholder="Please enter your name"></el-input>
                        </el-form-item>
                    </div>
                    <div class="ipt_item">
                        <el-form-item label="Your Phone">
                            <el-input placeholder="Please enter your mobile number"></el-input>
                        </el-form-item>
                    </div>
                    <div class="ipt_item">
                        <el-form-item label="Your Mailbox">
                            <el-input placeholder="Please enter your email address"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="floor">
                    <div class="textarea">
                        <el-form-item label="Your Name">
                            <el-input placeholder="Please enter your requirements" type="textarea" :rows="4"></el-input>
                        </el-form-item>
                    </div>
                </div>

                <div class="btns">
                    <el-form-item>
                        <el-button>Confirm the changes</el-button>
                    </el-form-item>
                </div>
            </div>
        </el-form>
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
    </div>
</template>

<script>
    // import BMap from 'BMap'
    export default {

        name: 'Map',
        data() {
            return {
                formObj: {},
                rules: {},
            }
        },
        mounted() {
            this.getMap();
        },
        methods: {
            getMap() {
                // 百度地图API功能
                var map = new BMap.Map("allmap"); // 创建Map实例
                map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
                //添加地图类型控件
                map.addControl(new BMap.MapTypeControl({
                    mapTypes: [
                        BMAP_NORMAL_MAP,
                        BMAP_HYBRID_MAP
                    ]
                }));
                map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
            }
        }
    }
</script>

<style scoped lang="less">
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

    .quote_view {
        width: 1440px;
        padding-top: 80px;
        padding-bottom: 50px;

        h2 {
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: rgba(0, 0, 0, 1);
            text-align: left;
            margin-bottom: 50px;
        }

        .floor {
            display: flex;

            .textarea {
                width: 100%;
                position: relative;
                height: 170px;
                margin-right: 120px;

                /deep/ .el-form-item__content {
                    position: absolute;
                    left: 0;
                    top: 50px;
                    margin-left: 0 !important;
                }

                /deep/ .el-textarea__inner {
                    // width: 100%;
                    width: 1440px;
                    // height: 64px;
                    border: 4px solid #cdcdcd;
                    border-radius: 10px;
                }

                /deep/ .el-form-item__label {
                    // width: 56px;
                    font-size: 16px;
                    width: auto !important;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: rgba(60, 60, 60, 1);
                    line-height: 19px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    text-align: left;
                }
            }

            .ipt_item {
                position: relative;
                width: 400px;
                height: 170px;
                margin-right: 120px;

                /deep/ .el-form-item__content {
                    position: absolute;
                    left: 0;
                    top: 50px;
                    margin-left: 0 !important;
                }

                /deep/ .el-input__inner {
                    width: 400px;
                    height: 64px;
                    border: 4px solid #cdcdcd;
                    border-radius: 10px;
                }

                /deep/ .el-form-item__label {
                    // width: 56px;
                    font-size: 16px;
                    width: auto !important;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: rgba(60, 60, 60, 1);
                    line-height: 19px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    text-align: left;
                }
            }

            .half_item {
                position: relative;
                height: 170px;
                width: 188px;
                border-radius: 10px;
                margin-right: 24px;

                /deep/ .el-form-item__content {
                    position: absolute;
                    left: 0;
                    top: 50px;
                    margin-left: 0 !important;
                }

                /deep/ .el-input__inner {
                    width: 188px;
                    height: 64px;
                    border: 4px solid #cdcdcd;
                    border-radius: 10px;
                }

                /deep/ .el-form-item__label {
                    font-size: 16px;
                    width: auto !important;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: rgba(60, 60, 60, 1);
                    line-height: 19px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    text-align: left;
                }
            }
        }

        .notHave {
            .imgs {
                width: 80px;
                height: 64px;
                border: 4px solid rgba(205, 205, 205, 1);
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 46px;
                    height: 46px;
                }
            }

            span {
                width: 319px;
                height: 42px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: rgba(37, 37, 37, 1);
                line-height: 29px;
                text-align: left;
                margin-left: 30px;
            }
        }

        .carts {
            margin-top: 50px;

            .imgs {
                border: 1px dashed #ccc;
                width: 54px;
                height: 54px;
                margin-right: 30px;
            }

            .descs {
                height: 54px;

                >div {
                    // width: 60px;
                    // height: 22px;
                    font-size: 24px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    text-decoration: line-through;
                    color: rgba(103, 103, 103, 1);
                    // line-height: 178px;
                }
            }
        }

        .btns {
            text-align: left;
            margin-top: 70px;

            .el-button {
                width: 317px;
                height: 64px;
                background: rgba(209, 152, 134, 1);
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
            }

            /deep/ .el-form-item__content {
                margin-left: 0 !important;
            }
        }

        .desc {
            text-align: left;
            margin-bottom: 50px;

            span {
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: rgba(209, 152, 134, 1);
                line-height: 19px;
            }
        }

        .checks {
            text-align: left;
            margin-bottom: 60px;
        }
    }

    #allmap {
        width: 1920px;
        height: 606px;
        overflow: hidden;
        margin: 0;
        font-family: "微软雅黑";
    }
</style>