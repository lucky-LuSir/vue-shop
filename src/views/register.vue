<template>
    <div class="main clearfix">
        <div class="login_view">
            <div class="title">
                <img src="../img/logo.jpg" alt="">
            </div>
            <el-form :model="loginObj" :rules="rules" ref="loginObj" label-width="100px" class="loginObj">
                <div class="res_item">
                    <el-form-item label="User name" prop="username">
                        <el-input placeholder="please enter user name" v-model="loginObj.username"></el-input>
                    </el-form-item>
                </div>
                <div class="res_item">
                    <el-form-item label="Password" prop="password">
                        <el-input type="password" autocomplete="new-password" placeholder="please enter password" v-model="loginObj.password"></el-input>
                    </el-form-item>
                </div>
                <div class="res_item">
                    <el-form-item label="Password" prop="password2">
                        <el-input type="password" placeholder="please enter password" v-model="loginObj.password2"></el-input>
                    </el-form-item>
                </div>
                <div class="res_item">
                    <el-form-item label="E-mail" prop="email">
                        <el-input placeholder="please enter email" @blur="hasEmailFn()" v-model="loginObj.email"></el-input>
                    </el-form-item>
                </div>
                <div class="res_item">
                    <el-form-item label="Phone" prop="iphone">
                        <el-input placeholder="please enter phone" v-model="loginObj.iphone"></el-input>
                    </el-form-item>
                </div>
                <div class="res_item">
                    <el-form-item label="First name" prop="firstName">
                        <el-input placeholder="please enter frist name" v-model="loginObj.firstName"></el-input>
                    </el-form-item>
                </div>
                <div class="res_item">
                    <el-form-item label="Last name" prop="lastName">
                        <el-input placeholder="please enter last name" v-model="loginObj.lastName"></el-input>
                    </el-form-item>
                </div>
                <div class="agreeBox">
                    <input class="agreeS" type="checkbox" v-if="loginObj.gouxuanValue">
                    <span class="agreeText">does the user agree</span>
                </div>
                <div class="btns">
                    <el-form-item>
                        <el-button @click="loginSys('loginObj')">Landing</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loginObj: {
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                iphone: '',
                password: '',
                password2: '',
                gouxuanValue: false
            },
            rules: {
                username: [{
                    required: true,
                    message: "请输入username",
                    trigger: "blur"
                }],
                firstName: [{
                    required: true,
                    message: "请输入first name",
                    trigger: "blur"
                }],
                lastName: [{
                    required: true,
                    message: "请输入last name",
                    trigger: "blur"
                }],
                email: [{
                    required: true,
                    message: '请输入邮箱地址',
                    trigger: 'blur'
                },
                {
                    type: 'email',
                    message: '请输入正确的邮箱地址',
                    trigger: 'blur'
                }
                ],
                iphone: [{
                    required: true,
                    message: "请输入last name",
                    trigger: "blur",
                },
                {
                    pattern: /^1[34578]\d{9}$/,
                    message: '请输入正确的手机号格式'
                }
                ],
                password: [{
                    required: true,
                    message: "请输入last name",
                    trigger: "blur"
                },
                {
                    min: 6,
                    max: 20,
                    message: '长度在 6 到 20 个字符',
                    trigger: 'change'
                }
                ],
                password2: [{
                    required: true,
                    message: "请输入last name",
                    trigger: "blur"
                },
                {
                    min: 6,
                    max: 20,
                    message: '长度在 6 到 20 个字符',
                    trigger: 'change'
                }
                ],
            }
        }
    },
    methods: {
        async hasEmailFn () {
            let email = this.loginObj.email;
            console.log(email);
            const res = await this.$ajax.post(`/email_number/`, {
                email: email
            })
            console.log(res);
            if (res.data.count == 1) {
                this.$message.error("当前邮箱已注册");
                return;
            } else {
                this.$message.info("当前邮箱可以注册");
                return;
            }
        },
        loginSys (loginObj) {
            this.$refs.loginObj.validate(async (valid) => {
                if (valid) {
                    if (this.loginObj.password != this.loginObj.password2) {
                        this.$message.info('两次密码不一致');
                        return;
                    }
                    var registerObj = {
                        password: this.loginObj.password,
                        password2: this.loginObj.password2,
                        username: this.loginObj.username,
                        email: this.loginObj.email,
                        family_name: this.loginObj.firstName,
                        last_name: this.loginObj.lastName,
                        mobile: this.loginObj.iphone,
                        allow: "true"
                    }
                    console.log(registerObj);
                    const res = await this.$ajax.post(`/users/`, registerObj);
                    console.log(res)
                    if (res.data.token) {
                        this.$message({
                            type: "success",
                            message: "注册成功"
                        })
                        window.sessionStorage.setItem("username", res.data.username);
                        // window.sessionStorage.setItem("userObj", res.data);
                        // var _mainObj = {
                        //     'user_id': res.data.user_id,
                        //     'token': res.data.token,
                        //     'username': res.data.username
                        // }
                        // let token = _mainObj.token;
                        // _mainObj = JSON.stringify(_mainObj);
                        // window.sessionStorage.setItem('_mainObj', _mainObj);
                        // window.sessionStorage.setItem("authentication", JSON.stringify(token));
                        this.$router.push("/login");
                    } else {
                        this.$message({
                            type: "success",
                            message: "很遗憾注册失败"
                        })
                    }
                } else { }
            })
        },
    },
}
</script>

<style scoped lang="less">
.main {
    background-image: url(../img/PAU_DSC_0208.jpg);
    width: 100%;
    height: 710px;
    background-size: 100% 600px;
}
.login_view {
    float: right;
    width: 427px;
    height: 646px;
    background: rgba(255, 255, 255, 1);
    border-radius: 16px;
    margin-right: 290px;
    margin-top: 28px;
    .title {
        img {
            width: 256px;
            height: 130px;
        }
    }
}
.loginObj {
    padding: 0 25px;

    .res_item {
        /deep/ .el-form-item {
            display: flex;
            margin-bottom: 16px;
        }
        /deep/ .el-form-item__label {
            font-size: 18px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            min-width: 110px !important;
            text-align: left;
            width: 120px !important;
        }
        /deep/ .el-input__inner {
            width: 254px;
            height: 41px;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(233, 233, 233, 1);
            border-radius: 2px;
        }

        /deep/ .el-form-item__content {
            margin: 0 !important;
            width: 220px;
        }
    }
    .agreeBox {
        text-align: left;
        .agreeS {
            border-radius: 50%;
            display: inline-block;
            width: 12px;
            height: 12px;
        }
        .agreeText {
            font-size: 13px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(106, 106, 106, 1);
            margin-left: 10px;
        }
    }

    .btns {
        padding-top: 20px;
        .el-button {
            width: 348px;
            height: 45px;
            background: rgba(209, 152, 134, 1);
            border-radius: 2px 2px 2px 2px;
            font-size: 20px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(255, 254, 254, 1);
            // line-height: 81px;
        }
        /deep/ .el-form-item__content {
            margin-left: 0 !important;
        }
    }
    .status {
        width: 348px;
        margin: 0 auto;
        border-bottom: 1px solid #ccc;
        font-size: 13px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        padding-bottom: 18px;
        display: flex;
        justify-content: space-between;
    }
    .others {
        width: 348px;
        margin: 0 auto;
        margin-top: 25px;
        .text {
            font-size: 13px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(54, 62, 21, 1);
            text-align: right;
        }
        i {
            margin-left: 10px;
            background-color: red;
            width: 14px;
            height: 14px;
            display: inline-block;
            border-radius: 50%;
            background-color: #d19886;
            color: #fff;
            span {
                font-size: 12px;
            }
        }
    }
}
</style>
