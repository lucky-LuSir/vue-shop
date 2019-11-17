<template>
    <div class="main">
        <div class="first _cm_layout">
            <div class="left">
                <img src="../assets/cart001.png" alt="">
                <span>
                    CART
                    <i>({{totalNum}})</i>
                </span>
            </div>
            <div class="right">
                <div class="yuan">
                    1
                </div>
                <span class="text ">my cart</span>
                <div class="line"></div>
                <div class="yuan active">
                    2
                </div>
                <span class="text active">Check order information</span>
                <div class="line"></div>
                <div class="yuan">
                    3
                </div>
                <span class="text">Successfully submit an order</span>
            </div>
        </div>
        <div class="address_view _cm_layout">
            <h2>Select harvest address</h2>
            <div class="add-list-wrap">
                <div class="addr-msg">
                    <h2 class="clearfix" style="padding: 20px 0; text-align: left; font-size: 18px;color: #605f5f;">
                        <span>Consignee information</span>
                        <p class="addr-create" @click="createAddDialog()">Use new address</p>
                    </h2>
                </div>
                <ul class="consignee-list clearfix">
                    <li v-for="(item, index) in addressList" :key="index" class="addList-item defaultFirst" selected="selected">
                        <div @click="setDefaultAddressFn(item, index)" class="addLabel">
                            <span>{{item.receiver}}</span>
                            <i>{{item.country}}{{item.province}}</i>
                            <b></b>
                        </div>
                        <div class="addr-detail">
                            <span class="addr-name">{{item.receiver}}</span>
                            <span class="addr-info">{{item.country}} {{item.state}} {{item.province}} {{item.city}} {{item.place}}</span>
                            <span class="addr-tel">{{item.mobile | companyFilter}}</span>
                        </div>
                        <!-- <div class="op-btns" consigneeid="959992403" isoldaddress="false">
                            <a href="#none" class="ftx-05 setdefault-consignee">设为默认地址</a> <a href="#none" class="ftx-05 edit-consignee">编辑</a>
                            <a href="#none" class="ftx-05 del-consignee hide">删除</a>
                        </div> -->
                    </li>
                </ul>
            </div>
        </div>
        <div class="cart_view _cm_layout">
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
                <el-table-column label="select all" width="240">
                    <template slot-scope="scope">
                        <div class="imgbox">
                            <img class="pics" src="../img/BASS_DSC_0125.jpg" alt="">
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Attributes">
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
                <el-table-column label="Noun" width="250">
                    <template slot-scope="scope">
                        <div class="imgbox">
                            <span>${{scope.row.price}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Quantity" width="250">
                    <template slot-scope="scope">
                        <div class="imgbox">
                            <span>{{scope.row.number_of_shutters}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Total" width="250">
                    <template slot-scope="scope">
                        <div class="imgbox">
                            <span style="color: #d7a697;">${{scope.row.price * scope.row.number_of_shutters}}</span>
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
                        <i>{{totalNum}}</i>
                    </div>
                    <div class="two">
                        <span>Total price(Free shipping):</span>
                        <i>${{totalprice}}</i>
                    </div>
                    <div @click="addOrderListFn()" class="three">
                        Settlement
                    </div>
                </div>
            </div>
        </div>
        <el-dialog class="addressDialog" title="Create address" :visible.sync="addDialogVisible" width="680px">
            <el-form :model="addressForm" :rules="rules" ref="addressForm" label-width="100px" class="demo-addressForm">
                <el-form-item label="receiver" prop="receiver">
                    <el-input v-model="addressForm.receiver"></el-input>
                </el-form-item>
                <el-form-item label="mobile" prop="mobile">
                    <el-input v-model="addressForm.mobile"></el-input>
                </el-form-item>
                <el-form-item label="country" prop="country">
                    <el-input v-model="addressForm.country"></el-input>
                </el-form-item>
                <el-form-item label="state" prop="state">
                    <el-input v-model="addressForm.state"></el-input>
                </el-form-item>
                <el-form-item label="province" prop="province">
                    <el-input v-model="addressForm.province"></el-input>
                </el-form-item>
                <el-form-item label="city" prop="city">
                    <el-input v-model="addressForm.city"></el-input>
                </el-form-item>
                <el-form-item label="zip code" prop="zip_code">
                    <el-input v-model="addressForm.zip_code"></el-input>
                </el-form-item>
                <el-form-item label="place" prop="place">
                    <el-input v-model="addressForm.place"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="createAdd('addressForm')">立即创建</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from "vue";

    // 过滤时间
    Vue.filter("companyFilter", function(value) {
        var newvalue = value.replace(value.slice(3, 7), "****");
        return newvalue;
    });
    export default {
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                totalNum: 0,
                totalprice: 0,
                addressList: [],
                addDialogVisible: false,
                rules: {
                    province: [{
                        required: true,
                        message: 'please select the province',
                        trigger: 'blur'
                    }],
                    city: [{
                        required: true,
                        message: 'please select the city',
                        trigger: 'blur'
                    }],
                    receiver: [{
                        required: true,
                        message: 'please select the receiver',
                        trigger: 'blur'
                    }],
                    mobile: [{
                        required: true,
                        message: 'please select the mobile',
                        trigger: 'blur'
                    }],
                    place: [{
                        required: true,
                        message: 'please select the place',
                        trigger: 'blur'
                    }],
                    country: [{
                        required: true,
                        message: 'please select the country',
                        trigger: 'blur'
                    }],
                    state: [{
                        required: true,
                        message: 'please select the state',
                        trigger: 'blur'
                    }],
                    zip_code: [{
                        required: true,
                        message: 'please select the zip code',
                        trigger: 'blur'
                    }],
                    receiver: [{
                        required: true,
                        message: 'please select the receiver',
                        trigger: 'blur'
                    }],
                },
                addressForm: {
                    receiver: '',
                    country: '',
                    state: '',
                    province: '',
                    city: '',
                    receiver: '',
                    mobile: '',
                    place: '',
                    zip_code: '',
                },
                address_id: '',
                defaultList: {},
                cart_id: [],
            }
        },
        async created() {
            let goodsList = window.sessionStorage.getItem("cartOrderObj");
            if (goodsList) {
                goodsList = JSON.parse(goodsList).goods;
                for (let i = 0; i < goodsList.length; i++) {
                    this.cart_id.push(goodsList[i].id);
                }
            }
            this.tableData = goodsList;
            goodsList.forEach((item, index) => {
                this.totalNum += item.number_of_shutters;
                this.totalprice += item.price * item.number_of_shutters;
            })
            await this.getDefaultAddressFn();
            await this.getDetailListFn();
        },
        methods: {
            async addOrderListFn() {
                let user_id = window.sessionStorage.getItem("user_id");
                let address_id = this.address_id;
                let cart_id = this.cart_id;
                let paramObj = {
                    user_id: user_id,
                    address_id: address_id,
                    cart_id: cart_id,
                }
                console.log(paramObj)
                const res = await this.$ajax.post(`/orders/`, paramObj);
                console.log(res)
            },
            async getDefaultAddressFn() {
                let user_id = window.sessionStorage.getItem("user_id");
                const res = await this.$ajax.get(`/default_address/${user_id}/`);
                if (res.status == 200) {
                    let result = JSON.parse(res.data);
                    this.defaultList = result;
                    this.address_id = result.id;
                }
            },
            async getDetailListFn() {
                let user_id = window.sessionStorage.getItem("user_id");
                const res = await this.$ajax.get(`/address/${user_id}/`);
                let data = res.data;
                data = JSON.parse(data);
                let addrList = data;
                console.log(addrList);
                for (let i = 0; i < addrList.length; i++) {
                    if (addrList[i].id != this.address_id) {
                        this.addressList.push(addrList[i])
                    }
                }
                this.addressList.unshift(this.defaultList);
            },
            async setDefaultAddressFn(item, index) {
                console.log(item)
                var list = document.querySelectorAll(".addList-item");
                for (var i = 0; i < list.length; i++) {
                    list[i].classList.remove("defaultIndex");
                    list[i].classList.remove("defaultFirst");
                }
                list[index].classList.add("defaultIndex");
                let user_id = window.sessionStorage.getItem("user_id");
                const res = await this.$ajax.post(`/default_address/`, {
                    user_id: user_id,
                    address_id: item.id
                })
                if (res.status == 200) {
                    this.address_id = item.id;
                    this.$message({
                        type: "success",
                        message: res.data.message
                    })
                }
            },
            // 新增地址ajax
            async createAdd() {
                let user_id = window.sessionStorage.getItem("user_id");
                let paramObj = {
                    user_id: user_id,
                    receiver: this.addressForm.receiver,
                    zip_code: this.addressForm.zip_code,
                    mobile: this.addressForm.mobile,
                    country: this.addressForm.country,
                    state: this.addressForm.state,
                    province: this.addressForm.province,
                    city: this.addressForm.city,
                    place: this.addressForm.place
                }
                const res = await this.$ajax.post(`/address/`, paramObj);
                if (res.status == 200) {
                    this.$message({
                        type: "success",
                        message: "Address added successfully"
                    })
                    window.sessionStorage.setItem("address_id", res.data.address_id);
                    this.addDialogVisible = false;
                }
            },
            // 新增地址弹出框
            createAddDialog() {
                this.addDialogVisible = true;
            }
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

    .address_view {
        margin-top: 50px;
        margin-bottom: 70px;
        text-align: left;

        h2 {
            line-height: 25px;
            color: #333;
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 25px;
        }

        .add-list-wrap {
            background-color: #fff;
            padding: 0 20px 10px;
            border: 1px solid #f0f0f0;

            .addr-msg {
                span {
                    float: left;
                }
                p {
                    font-size: 16px;
                }

                .addr-create {
                    float: right;
                    font-size: 12px;
                    color: #8781c5;
                    cursor: pointer;
                }
            }

            .consignee-list {
                .addList-item {
                    display: list-item;
                    list-style: none;
                    height: 42px;
                    margin: 6px 0;
                    float: left;
                    width: 99.8%;
                    margin-bottom: 25px;
                }

                .addList-item:hover {
                    background-color: #fff3f3;
                }

                span {
                    font-size: 13px;
                }

                .addList-item.defaultFirst:nth-child(1) {
                    .addLabel {
                        border: 2px solid #e4393c;
                        padding: 4px 10px;
                    }

                    b {
                        display: block;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        width: 12px;
                        height: 12px;
                        overflow: hidden;
                        background: url(//misc.360buyimg.com/user/purchase/2.0.0/css/i/selected-icon.png) no-repeat;
                    }
                }

                .defaultIndex {

                    .addLabel {
                        border: 2px solid #e4393c;
                        padding: 4px 10px;
                    }

                    b {
                        display: block;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        width: 12px;
                        height: 12px;
                        overflow: hidden;
                        background: url(//misc.360buyimg.com/user/purchase/2.0.0/css/i/selected-icon.png) no-repeat;
                    }
                }

                .addLabel:hover {
                    border: 2px solid #e4393c;
                    padding: 4px 10px;
                }

                .addLabel {
                    float: left;
                    list-style: none;
                    position: relative;
                    height: 30px;
                    line-height: 30px;
                    width: 200px;
                    text-align: center;
                    cursor: pointer;
                    background-color: #fff;
                    box-sizing: content-box;
                    padding: 5px 10px;
                    border: 1px solid #ddd;
                    span {
                        margin-right: 10px;
                    }
                    i {
                        font-size: 14px;
                    }

                }

                .addr-detail {
                    float: left;
                    height: 42px;
                    line-height: 42px;
                    margin-left: 10px;

                    span {
                        display: inline-block;
                        margin-left: 10px;
                    }
                }

                .addList-item:hover .op-btns {
                    visibility: visible;
                    float: right;
                    text-align: right;
                    height: 30px;
                    line-height: 30px;

                    a {
                        margin-right: 10px;
                    }
                }

                .op-btns {
                    visibility: hidden;
                    color: #005ea7;
                    font-size: 12px;
                }

            }
        }
    }

    .addressDialog {
        /deep/ .el-dialog {
            margin-top: 10vh !important;
        }

        /deep/ .el-dialog__body {
            height: 65vh;
            overflow: auto;
        }
    }
</style>