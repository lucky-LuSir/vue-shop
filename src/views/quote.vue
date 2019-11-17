<template>
    <div class="main _cm_layout">
        <div class="title">
            <h1>INSTANT QUOTE</h1>
        </div>
        <div class="desc">
            Grab a tape measure and roughly estimate your window measurements to get a quote.
        </div>
        <div class="banner">
            <div class="imgs">
                <img src="../assets/duobianxing.png" alt="">
            </div>
        </div>
        <div class="quote_view">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
                <div class="floor">
                    <div class="ipt_item">
                        <el-form-item label="WIDTH">
                            <el-input placeholder="eg: min 350"></el-input>
                        </el-form-item>
                    </div>
                    <div class="ipt_item">
                        <el-form-item label="HEIGHT">
                            <el-input placeholder="eg: min 350"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="floor">
                    <div class="ipt_item">
                        <el-form-item label="Color">
                            <el-select v-model="value" placeholder="Please select the window material">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="ipt_item">
                        <el-form-item label="Color">
                            <el-select placeholder="Please select the Color" v-model="value">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </div>
                <div class="notHave clearfix">
                    <div class="imgs fl">
                        <img src="../assets/geren.png" alt="">
                    </div>
                    <span class="fl">
                        If you don't have what you want, please contact us.
                    </span>
                </div>
                <div class="carts clearfix">
                    <div class="imgs fl">
                        <img src="../assets/cart.png" alt="">
                    </div>
                    <div class="descs fl">
                        <div class="old_price">
                            <del>$0</del>
                        </div>
                        <div class="new_price">
                            $0
                        </div>
                    </div>
                </div>
                <div class="btns">
                    <el-form-item>
                        <el-button>START DESINING</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rules: {},
                ruleForm: {},
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        methods: {

        },
    }
</script>

<style scoped lang="less">
    .main {
        .title {
            height: 31px;
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: rgba(0, 0, 0, 1);
            text-align: left;
            margin-top: 80px;
            margin-bottom: 40px;
        }

        .desc {
            height: 17px;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: rgba(37, 37, 37, 1);
            text-align: left;
            margin-bottom: 90px;
        }

        .banner {
            background-image: url(../img/bgc001.png);
            width: 1440px;
            height: 648px;
            // position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            .imgs {
                width: 160px;
                height: 120px;
                background: rgba(0, 0, 0);
                opacity: 0.6;
                border-radius: 23px;

                img {
                    width: 160px;
                    height: 120px;
                    background: rgba(0, 0, 0);
                    opacity: 0.6;
                    border-radius: 23px;
                }
            }
        }

        .quote_view {
            width: 1440px;
            padding-top: 110px;
            padding-bottom: 50px;

            .floor {
                display: flex;
                // justify-content: space-between;
            }

            .floor .ipt_item {
                position: relative;
                width: 493px;
                height: 170px;
                margin-right: 170px;
            }

            .floor /deep/ .el-input__inner {
                width: 493px;
                height: 64px;
                border: 4px solid #cdcdcd;
            }

            .floor /deep/ .el-form-item__label {
                width: 56px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: rgba(60, 60, 60, 1);
                line-height: 19px;
                position: absolute;
                left: 0;
                top: 0;
                text-align: left;
            }

            .floor /deep/ .el-form-item__content {
                position: absolute;
                left: 0;
                top: 50px;
                margin-left: 0 !important;
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

                .el-button {
                    width: 317px;
                    height: 64px;
                    background: rgba(209, 152, 134, 1);
                    margin-top: 50px;
                    font-size: 20px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: rgba(255, 255, 255, 1);
                }

                /deep/ .el-form-item__content {
                    margin-left: 0 !important;
                }
            }
        }
    }
</style>