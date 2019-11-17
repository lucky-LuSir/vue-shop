<template>
    <div class="main">
        <div class="first _cm_layout">
            <div class="left">
                <img src="../assets/cart001.png" alt="">
                <span>
                    CART
                    <i>({{cartNum}})</i>
                </span>
            </div>
            <div class="right">
                <div class="yuan active">
                    1
                </div>
                <span class="text active">my cart</span>
                <div class="line"></div>
                <div class="yuan">
                    2
                </div>
                <span class="text">Check order information</span>
                <div class="line"></div>
                <div class="yuan">
                    3
                </div>
                <span class="text">Successfully submit an order</span>
            </div>
        </div>
        <div class="cart_view _cm_layout">
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column @click="selectSingle(scope.row)" type="selection" width="55">
                </el-table-column>
                <el-table-column label="select all" width="240">
                    <!-- <img src="../img/BASS_DSC_0125.jpg" alt=""> -->
                    <template slot-scope="scope">
                        <div class="imgbox">
                            <img class="pics" src="../img/BASS_DSC_0125.jpg" alt="">
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Attributes" width="380">
                    <template slot-scope="scope">
                        <div class="floor">
                            <span class="all">
                                Material:
                            </span>
                            <i>{{scope.row.material}}</i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Width :
                            </span>
                            <i>{{scope.row.width}}</i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Height :
                            </span>
                            <i>{{scope.row.length}}</i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Size：
                            </span>
                            <i></i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Window photo：
                            </span>
                            <i></i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Window sash type：
                            </span>
                            <i></i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Number of sashes：
                            </span>
                            <i> </i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Opening and closing method：
                            </span>
                            <i> </i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Number of plate：
                            </span>
                            <i> </i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Number of bars：
                            </span>
                            <i> </i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Box bar type：
                            </span>
                            <i> </i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Window color：
                            </span>
                            <i> </i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Leaf type：
                            </span>
                            <i> </i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Pull rod type：
                            </span>
                            <i> </i>
                        </div>
                        <div class="floor">
                            <span class="all">
                                Louver type：
                            </span>
                            <i> </i>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Noun" width="180">
                    <template slot-scope="scope">
                        <div class="imgbox">
                            <span>${{scope.row.price}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Quantity" width="180">
                    <template slot-scope="scope">
                        <div class="imgbox">
                            <span>{{scope.row.number_of_shutters}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Total" width="180">
                    <template slot-scope="scope">
                        <div class="imgbox">
                            <span style="color: #d7a697;">${{scope.row.price * scope.row.number_of_shutters}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Operating" width="225">
                    <template slot-scope="scope">
                        <div class="imgbox">
                            <el-button @click="delCartListFn(scope.row)" type="warning" plain size="small">Delete</el-button>
                            <el-button type="primary" size="small">Collection</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="third clearfix">
            <div class="center _cm_layout">
                <div class="left">

                </div>
                <div class="right">
                    <div class="one">
                        <span>
                            Selected item
                        </span>
                        <i style="color: #6365c4; font-size: 24px;">{{totalNum}}</i>
                    </div>
                    <div class="two">
                        <span>Total price(Free shipping):</span>
                        <i>${{totalprice}}</i>
                    </div>
                    <div @click="submitFn()" class="three">
                        Settlement
                    </div>
                </div>
            </div>
        </div>
        <el-dialog width="390px" title="Sign in" :visible.sync="dialogFormVisible">
            <el-form :model="loginObj" :rules="rules1" ref="loginObj">
                <el-form-item class="item-keyword" prop="keyword">
                    <el-input placeholder="请输入手机号" v-model="loginObj.keyword" class="input-text" clearable prefix-icon="el-icon-diy-yonghuming">
                    </el-input>
                </el-form-item>
                <el-form-item class="item-password" prop="password">
                    <el-input v-model="loginObj.password" type="password" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="请输入密码" clearable prefix-icon="el-icon-diy-mima">
                    </el-input>
                </el-form-item>
                <el-button style="width: 100%;" type="primary" @click="loginSys('loginObj')">
                    <span style="font-family: Arvo">登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
                </el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                dialogFormVisible: false,
                rules1: {
                    keyword: [{
                        required: true,
                        message: "请输入手机号",
                        trigger: "blur"
                    }],
                    password: [{
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    }]
                },
                loginObj: {
                    keywork: '',
                    password: ''
                },
                cartNum: 0,
                allSelectedGoods: [],
                user_id: '',
            }
        },
        computed: {
            totalNum() {
                var totalNum = 0;
                this.allSelectedGoods.forEach((item, index) => {
                    totalNum += item.number_of_shutters;
                })
                return totalNum;
            },
            totalprice() {
                var totalprice = 0;
                this.allSelectedGoods.forEach((item, index) => {
                    totalprice += item.price * item.number_of_shutters;
                })
                return totalprice;
            },
        },
        created() {
            let token = window.sessionStorage.getItem("authentication");
            this.user_id = window.sessionStorage.getItem("user_id");
            if (!token) {
                this.dialogFormVisible = true;
                return;
            }
            this.getCartListFn();
        },
        methods: {
            submitFn() {
                console.log(this.allSelectedGoods)
                if (this.allSelectedGoods.length <= 0) {
                    this.$message({
                        type: "warning",
                        message: "Please select a product"
                    })
                    return;
                }
                let cartOrderObj = {
                    goods: this.allSelectedGoods
                }
                window.sessionStorage.setItem("cartOrderObj", JSON.stringify(cartOrderObj));
                this.$router.push("/order");
            },
            delCartListFn(item) {
                this.$confirm('This operation will permanently delete the file. Do you want to continue?', 'Tips', {
                    confirmButtonText: 'Determine',
                    cancelButtonText: 'cancel',
                    type: 'warning'
                }).then(async () => {
                    let paramObj = {
                        user_id: +(this.user_id),
                        cart_id: item.id
                    }
                    console.log(paramObj)
                    const res = await this.$ajax.delete(`/retail_cart/`, {
                        data: paramObj
                    })
                    console.log(res)
                    if (res.status == 200) {
                        this.$message({
                            type: "success",
                            message: res.data.message
                        })
                        this.getCartListFn();
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Delete cancelled'
                    });
                });
            },
            async getCartListFn() {
                let user_id = window.sessionStorage.getItem("user_id");

                const res = await this.$ajax.get(`retail_cart/${user_id}/`);
                let result = JSON.parse(res.data);
                console.log(result);
                this.tableData = result;
                this.cartNum = result.length;
            },
            handleSelectionChange(val) {
                this.allSelectedGoods = val;
            },
        }
    }
</script>

<style scoped lang="less">
    .first {
        height: 80px;
        line-height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            display: flex;
            align-items: center;

            img {
                border: 1px dashed #ccc;
            }

            span {
                font-size: 24px;
                font-family: Adobe Heiti Std;
                font-weight: normal;
                color: rgba(51, 51, 51, 1);
            }

            i {
                color: #d29b89;
            }
        }

        .right {
            align-items: center;
            display: flex;

            .yuan {
                width: 29px;
                height: 29px;
                background: rgba(204, 204, 204, 1);
                border-radius: 50%;
                line-height: 29px;
                text-align: center;
                margin-right: 15px;
            }

            .text {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                margin-right: 15px;
            }

            .line {
                width: 45px;
                height: 1px;
                background-color: rgba(209, 152, 134, 1);
                // border: 1px solid rgba(209, 152, 134, 1);
                margin-right: 15px;
            }

            .text.active {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(209, 152, 134, 1);
            }

            .yuan.active {
                background-color: #d19886;
                color: #fff;
            }
        }
    }

    .cart_view {
        .imgbox {
            height: 420px !important;
            padding-top: 5px;
            font-size: 16px;

            .pics {
                width: 122px;
                height: 122px;
            }
        }

        .floor {
            .all {
                width: 220px;
                display: inline-block;
                margin-bottom: 5px;
            }
        }
    }

    .third {
        background-color: #f8f4ef;
        margin: 20px 0;

        .right {
            float: right;
            width: 50%;
            display: flex;
            align-items: center;
            position: relative;
            height: 60px;

            .one {
                margin-right: 30px;

                span {
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                }

                i {
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                }
            }

            .two {
                margin-right: 30px;
                display: flex;
                align-items: center;

                span {
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                    opacity: 0.5;
                    margin-right: 10px;
                }

                i {
                    font-size: 24px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: rgba(209, 152, 134, 1);
                }
            }

            .three {
                font-size: 22px;
                font-family: Microsoft YaHei;
                font-weight: 600;
                color: rgba(255, 255, 255, 1);
                width: 176px;
                height: 60px;
                line-height: 60px;
                background: rgba(209, 152, 134, 1);
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }
</style>