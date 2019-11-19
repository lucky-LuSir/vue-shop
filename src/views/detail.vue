<template>
    <div class="main _cm_layout clearfix">
        <div v-if="detailType == 1" class="view_left fl">
            <div class="pic">
                <img src="../img/bgc0002.png" alt="">
            </div>
            <div class="desc">
                <div class="top">
                    Basswood shutters
                </div>
                <div class="content">
                    Basswood has become one of the most widely used materials for shutters in the global market. This is due to its resistance to warping, easy workability, durability, and its acceptance of a variety of colors and finishes. Basswood (tilia americana) is a member of the hardwood family, with all our Basswood being plantation grown. Basswood shutters are manufactured for indoors only, and are not recommended for wet areas.
                </div>
            </div>
        </div>
        <div v-if="detailType == 2" class="view_left fl">
            <div class="pic">
                <img src="../img/bgc0003.png" alt="">
            </div>
            <div class="desc">
                <div class="top">
                    Paulownia shutters
                </div>
                <div class="content">
                    Paulownia wood has a straight texture, the material is light and soft, and has a strong grain pattern. Paulownia wood is wear resistant, corrosion resistant and does not conduct electricity.The wood grain texture is bright, prominent and beautiful with stained colours.
                </div>
            </div>
        </div>
        <div v-if="detailType == 3" class="view_left fl">
            <div class="pic">
                <img src="../img/bgc0004.png" alt="">
            </div>
            <div class="desc">
                <div class="top">
                    PVC shutters
                </div>
                <div class="content">
                    PVC is extruded using a Foamwood material, and has been developed to make shutters suitable for wet areas such as bathrooms and above kitchen sinks. Our Fauxwood is a solid product and uses the same painted finishes as our Basswood Range. Aluminium reinforcement is used in the stiles to reduce weight and increase the strength of the shutters. Fauxwood shutters are termite and fire resistant. Whilst Fauxwood shutters are suitable for wet areas, they are not recommended for outdoor use. </div>
            </div>
        </div>
        <div class="view_right fl">
            <div class="top">
                four-step design shutters
            </div>
            <div class="content">
                <el-form :model="formObj" :rules="rules" ref="formObj" label-width="100px" class="demo-ruleForm clearfix">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="First-step" name="1">
                            <div class="floor" style="height: 220px;">
                                <div class="ipt_item">
                                    <el-form-item label="Material" prop="material">
                                        <el-radio-group @click.native="getPriceFn()" v-model="formObj.material">
                                            <el-radio-button label="PVC"></el-radio-button>
                                            <el-radio-button label="Paulownia"></el-radio-button>
                                            <el-radio-button label="Basswood"></el-radio-button>
                                            <el-radio-button label="Mixed Material"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor">
                                <div class="ipt_item">
                                    <el-form-item label="WIDTH" prop="width">
                                        <el-input placeholder="eg: min 350" @click.native="getPriceFn()" v-model="formObj.width"></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor">
                                <div class="ipt_item">
                                    <el-form-item label="HEIGHT" prop="height">
                                        <el-input placeholder="eg: min 350" @click.native="getPriceFn()" v-model="formObj.height"></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor">
                                <div class="ipt_item">
                                    <el-form-item label="Type of Size" prop="size_type">
                                        <el-radio-group @click.native="getPriceFn()" v-model="formObj.size_type">
                                            <el-radio-button label="Size of Measurement"></el-radio-button>
                                            <el-radio-button label="Size of Actural Shutters"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor">
                                <div class="ipt_item">
                                    <el-form-item>
                                        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                                            <i class="el-icon-upload"></i>
                                        </el-upload>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Two-step" name="2">
                            <div class="floor" style="height: 220px;">
                                <div class="ipt_item">
                                    <el-form-item label="Installation Style" prop="sash_type">
                                        <el-radio-group @click.native="getPriceFn()" v-model="formObj.sash_type">
                                            <el-radio-button label="Single layer"></el-radio-button>
                                            <el-radio-button label="Double layer"></el-radio-button>
                                            <el-radio-button label="Track folding"></el-radio-button>
                                            <el-radio-button label="Orbital push and pull"></el-radio-button>
                                            <el-radio-button label="Shaped window"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor">
                                <div class="ipt_item nums">
                                    <el-form-item label="Panels">
                                        <el-input-number v-model="formObj.sashes_num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor" style="height: 220px;">
                                <div class="ipt_item" style="text-align: left;">
                                    <el-form-item style="text-align: left;" prop="close_mode" label="Configurations">
                                        <el-radio-group style="text-align: left;" v-model="formObj.close_mode">
                                            <el-radio-button label="LR"></el-radio-button>
                                            <el-radio-button label="LTR"></el-radio-button>
                                            <el-radio-button label="LRTLR"></el-radio-button>
                                            <!-- <el-radio-button label="Custom ( description )"></el-radio-button> -->
                                        </el-radio-group>
                                        <!-- <el-input></el-input> -->
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor">
                                <div class="ipt_item">
                                    <el-form-item label="Number of Midrails" prop="plate_num">
                                        <el-radio-group v-model="formObj.plate_num">
                                            <el-radio-button label="0"></el-radio-button>
                                            <el-radio-button label="1"></el-radio-button>
                                            <el-radio-button label="2"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Three-step" name="3">
                            <div class="floor">
                                <div class="ipt_item nums">
                                    <el-form-item label="Number of Frames">
                                        <el-input-number v-model="formObj.bars_num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor">
                                <div class="ipt_item">
                                    <el-form-item label="Frame Type" prop="bar_type">
                                        <el-radio-group v-model="formObj.bar_type">
                                            <el-radio-button label="0"></el-radio-button>
                                            <el-radio-button label="1"></el-radio-button>
                                            <el-radio-button label="2"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="Four-step" name="4">
                            <div class="floor" style="height: 220px;">
                                <div class="ipt_item nums">
                                    <el-form-item label="Colour" prop="color">
                                        <el-radio-group @click.native="getPriceFn()" v-model="formObj.color">
                                            <el-radio-button label="PURE WHITE"></el-radio-button>
                                            <el-radio-button label="LOVE NOTE"></el-radio-button>
                                            <el-radio-button label="SUPER WHITE"></el-radio-button>
                                            <el-radio-button label="CHINA WHITE"></el-radio-button>
                                            <el-radio-button label="ANTIQUE WHITE"></el-radio-button>
                                            <el-radio-button label="GOLDEN OAK"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor" style="height: 220px;">
                                <div class="ipt_item">
                                    <el-form-item label="Louver Size" prop="Leaf_type">
                                        <el-radio-group @click.native="getPriceFn()" v-model="formObj.Leaf_type">
                                            <el-radio-button label="63.5"></el-radio-button>
                                            <el-radio-button label="89.9"></el-radio-button>
                                            <el-radio-button label="114"></el-radio-button>
                                            <el-radio-button label="False"></el-radio-button>
                                            <el-radio-button label="Flip"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor">
                                <div class="ipt_item">
                                    <el-form-item label="Tilt Rod Type" prop="rod_type">
                                        <el-radio-group @click.native="getPriceFn()" v-model="formObj.rod_type">
                                            <el-radio-button label="Centre Tilt Rod"></el-radio-button>
                                            <el-radio-button label="Hidden Rod"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                            <!-- <div class="floor">
                                <div class="ipt_item">
                                    <el-form-item label="Louver type" prop="Louver_type">
                                        <el-radio-group v-model="formObj.Louver_type">
                                            <el-radio-button label="1"></el-radio-button>
                                            <el-radio-button label="2"></el-radio-button>
                                            <el-radio-button label="3"></el-radio-button>
                                            <el-radio-button label="4"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div> -->
                            <div class="floor">
                                <div class="ipt_item nums">
                                    <el-form-item label="Number">
                                        <el-input-number @click.native="getPriceFn()" v-model="formObj.Numbers" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="floor">
                                <div class="ipt_item">
                                    <el-form-item label="server" prop="server">
                                        <el-radio-group @click.native="getPriceFn()" v-model="formObj.server">
                                            <el-radio-button label="false"></el-radio-button>
                                            <el-radio-button label="true"></el-radio-button>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                    <div style="margin-right: 25px;" class="prices">
                        <div class="old_price">
                            <del>${{oldPrice}}</del>
                        </div>
                        <div class="new_price">
                            ${{newPrice}}
                        </div>
                    </div>
                    <el-form-item>
                        <el-button class="addCartBtn" @click="addCartListFn('formObj')">Configure and buy</el-button>
                    </el-form-item>
                </el-form>

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
                dialogFormVisible: false,
                detailType: 1,
                activeNames: ['1'],
                formObj: {
                    material: '',
                    width: '',
                    height: '',
                    size_type: '',
                    sash_type: '',
                    sashes_num: '',
                    close_mode: '',
                    plate_num: '',
                    bars_num: '',
                    bar_type: '',
                    color: '',
                    Leaf_type: '',
                    rod_type: '',
                    Louver_type: '',
                    Numbers: '',
                    server: "",
                },
                oldPrice: 0,
                newPrice: 0,
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
                rules: {
                    material: [{
                        required: true,
                        message: "Please select materia",
                        trigger: "change"
                    }],
                    width: [{
                        required: true,
                        message: "Please select width",
                        trigger: "change"
                    }],
                    height: [{
                        required: true,
                        message: "Please select height",
                        trigger: "change"
                    }],
                    size_type: [{
                        required: true,
                        message: "Please select size_type",
                        trigger: "change"
                    }],
                    sash_type: [{
                        required: true,
                        message: "Please select sash_type",
                        trigger: "change"
                    }],
                    close_mode: [{
                        required: true,
                        message: "Please select close_mode",
                        trigger: "change"
                    }],
                    plate_num: [{
                        required: true,
                        message: "Please select plate_num",
                        trigger: "change"
                    }],
                    bar_type: [{
                        required: true,
                        message: "Please select bar_type",
                        trigger: "change"
                    }],
                    color: [{
                        required: true,
                        message: "Please select color",
                        trigger: "change"
                    }],
                    Leaf_type: [{
                        required: true,
                        message: "Please select Leaf_type",
                        trigger: "change"
                    }],
                    rod_type: [{
                        required: true,
                        message: "Please select rod_type",
                        trigger: "change"
                    }],
                    Louver_type: [{
                        required: true,
                        message: "Please select Louver_type",
                        trigger: "change"
                    }],
                    server: [{
                        required: true,
                        message: "Please select server",
                        trigger: "change"
                    }],

                },
                num: 1,
                cartParamObj: {},
            };
        },
        created() {
            this.detailType = window.sessionStorage.getItem("detailType") ? window.sessionStorage.getItem("detailType") : 1;
        },
        methods: {
            addCartListFn(formObj) {
                this.$refs[formObj].validate(async (valid) => {
                    if (valid) {
                        let user_id = window.sessionStorage.getItem("user_id");
                        this.cartParamObj = {
                            user_id: user_id ? +(user_id) : '',
                            material: this.formObj.material,
                            width: +(this.formObj.width),
                            length: +(this.formObj.height),
                            type_of_size: this.formObj.size_type,
                            installation_syle: this.formObj.sash_type,
                            panels: this.formObj.sashes_num,
                            configurations: this.formObj.close_mode,
                            number_of_midrails: +(this.formObj.plate_num),
                            number_of_frames: this.formObj.bars_num,
                            frame_type: this.formObj.bar_type,
                            colour: this.formObj.color,
                            louver_size: this.formObj.Leaf_type,
                            tilt_rod_tupe: this.formObj.rod_type,
                            number_of_shutters: +(this.formObj.Numbers),
                            install_service: this.formObj.server == "true" ? 1 : 0,
                            price: this.newPrice
                        }
                        console.log(this.cartParamObj);
                        let token = window.sessionStorage.getItem("authentication");
                        if (!token) {
                            this.dialogFormVisible = true;
                            return;
                        }
                        const res = await this.$ajax.post(`/retail_cart/`, this.cartParamObj);
                        console.log(res)
                        if (res.status == 200) {
                            this.$message({
                                type: "success",
                                message: "Successfully joined the shopping cart!"
                            })
                            this.$router.push("/cart");
                        }
                    } else {
                        this.$message({
                            type: "error",
                            message: "Please complete the information"
                        })
                    }
                });
            },
            async getPriceFn() {
                // if (this.formObj.material && this.formObj.width && this.formObj.height && this.formObj.color && this.formObj.Numbers) {
                    let paramObj = {
                        material: this.formObj.material,
                        color: this.formObj.color,
                        width: +(this.formObj.width),
                        length: +(this.formObj.height),
                        num: this.formObj.Numbers,
                        // window_shsa_type: this.formObj.sash_type,
                        // service: this.formObj.server
                    }
                    const res = await this.$ajax.post(`/get_price/`, paramObj);
                    this.oldPrice = res.data.actual_price;
                    this.newPrice = res.data.discount_price;
                // } else {
                //     console.log("请完善信息");
                // }
            },
            loginSys(formName) {
                if (this.loginObj) {
                    this.$refs[formName].validate(async (valid) => {
                        if (valid) {
                            var loginObj = {
                                username: this.loginObj.keyword,
                                password: this.loginObj.password,
                            }
                            const res = await this.$ajax.post(`/authorizations/`, loginObj);
                            if (res.status === 200) {
                                var _mainObj = {
                                    'user_id': res.data.user_id,
                                    'token': res.data.token,
                                    'username': res.data.username
                                }
                                let token = _mainObj.token;
                                _mainObj = JSON.stringify(_mainObj);
                                window.sessionStorage.setItem('_mainObj', _mainObj);
                                window.sessionStorage.setItem("username", res.data.username);
                                window.sessionStorage.setItem("authentication", JSON.stringify(token));
                                // location.reload();
                                // console.log(this.cartParamObj)
                                this.$router.push("/cart");
                            } else {
                                this.$message({
                                    type: "error",
                                    message: "账号或密码错误!"
                                })
                            }
                        } else {
                            this.$message({
                                type: "error",
                                message: "Please complete the information"
                            })
                        }
                    })
                }
            },
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped lang="less">
    .main {
        padding-top: 70px;
        padding-bottom: 80px;
    }

    .view_left {
        padding-top: 70px;
        width: 620px;

        .pic {
            img {
                width: 617px;
                height: 610px;
            }
        }

        .desc {
            .top {
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(0, 0, 0, 1);
                margin: 50px 0 30px;
            }

            .content {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(43, 43, 43, 1);
                line-height: 26px;
            }
        }
    }

    .view_right {
        width: 800px;
        padding-left: 80px;
        box-sizing: border-box;

        .top {
            font-size: 36px;
            font-family: Microsoft YaHei;
            font-weight: 600;
            color: rgba(0, 0, 0, 1);
            margin-bottom: 20px;
        }

        .content {
            /deep/ .el-collapse-item__header {
                font-size: 32px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(0, 0, 0, 1);
                margin-top: 10px;
                margin-bottom: 20px;
            }

            .floor {
                display: flex;
            }

            .floor .ipt_item {
                position: relative;
                width: 100%;
                height: 150px;
            }

            .floor /deep/ .el-input__inner {
                width: 100%;
                width: 493px;
                height: 64px;
                border: 4px solid #cdcdcd;
            }

            .floor /deep/ .el-form-item__label {
                width: 200px !important;
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
                top: 35px;
                margin-left: 0 !important;
            }

            /deep/ .el-radio-button {
                margin-bottom: 10px;
            }

            /deep/ .el-radio-button__inner {
                min-width: 130px;
                height: 64px;
                line-height: 64px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 4px solid rgba(209, 152, 134, 1);
                background-color: #ffffff;
                border-radius: 10px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(209, 152, 134, 1);
                padding: 0 10px;
                margin-right: 50px;
            }

            /deep/ .el-radio-button.is-active .el-radio-button__inner {
                background-color: #f8f4ef !important;
                color: #666666;
            }

            /deep/ .el-upload-dragger {
                width: 100px;
                height: 64px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 19px;
                padding-bottom: 26px;
                border: 4px solid rgba(209, 152, 134, 1);
            }

            /deep/ .el-radio-group {
                text-align: left;
            }
        }

        .nums {
            /deep/ .el-input {
                display: flex;
                justify-content: center;
            }

            /deep/ .el-input-number__decrease {
                border-radius: 50%;
                width: 38px;
                border: 2px solid #cdcdcd;
                // box-sizing: border-box;
            }

            /deep/ .el-input-number__increase {
                border-radius: 50%;
                width: 38px;
                border: 2px solid #cdcdcd;
                // box-sizing: border-box;
            }

            /deep/ .el-input__inner {
                width: 140px !important;
                height: 40px !important;
                line-height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                // border: 4px solid #cdcdcd;
                border: none !important;
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: rgba(60, 60, 60, 1);
            }
        }

        .el-collapse {
            border-bottom: 0;
        }

        .prices {
            // float: right;
            margin: 50px 0 20px;
            text-align: right;
        }

        .addCartBtn {
            margin-top: 30px;
            float: right;
            width: 382px;
            height: 91px;
            background: rgba(209, 152, 134, 1);
            font-size: 28px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: rgba(254, 253, 253, 1);
        }
    }
</style>