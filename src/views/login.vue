<template>
    <div class="main clearfix">
        <div class="login_view">
            <div class="title">
                <img src="../img/logo.jpg" alt="">
            </div>
            <el-form :model="loginObj" :rules="rules" ref="loginObj" label-width="100px" class="loginObj">
                <div class="ipt_item">
                    <div class="label">
                        <img src="../assets/login001.png" alt="">
                    </div>
                    <el-form-item label="" prop="keyword">
                        <el-input placeholder="please enter account" v-model="loginObj.keyword"></el-input>
                    </el-form-item>
                </div>
                <div class="ipt_item">
                    <div class="label">
                        <img src="../assets/login002.png" alt="">
                    </div>
                    <el-form-item label="" prop="password">
                        <el-input type="password" placeholder="please enter  pin"  @keyup.enter.native="loginSys('loginObj')"  v-model="loginObj.password"></el-input>
                    </el-form-item>
                </div>
                <div class="btns">
                    <el-form-item>
                        <el-button @click="loginSys('loginObj')">Landing</el-button>
                    </el-form-item>
                </div>
                <div class="status">
                    <div class="left">register ID</div>
                    <div class="right">
                        forget password？
                    </div>
                </div>
                <div class="others">
                    <div class="text">
                        other accounts log in
                        <i>
                            <span class="el-icon-arrow-right"></span>
                        </i>
                    </div>
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
                keyword: '',
                password: ''
            },
            rules: {},
        }
    },
    created() {
        let username = window.sessionStorage.getItem("username");
        this.loginObj.keyword = username;
    },
    methods: {
        loginSys (formName) {
            if (this.loginObj) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        var loginObj = {
                            username: this.loginObj.keyword,
                            password: this.loginObj.password,
                        }
                        const res = await this.$ajax.post(`/authorizations/`, loginObj);
                        console.log(res);
                        
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
                            window.sessionStorage.setItem("user_id", res.data.user_id);
                            this.$router.push('/index');
                            location.reload();
                        }
                    }
                });
            }
        },
    },
}
</script>

<style scoped lang="less">
.main {
    background-image: url(../img/PAU_DSC_0208.jpg);
    width: 100%;
    height: 600px;
    background-size: 100% 600px;
}
.login_view {
    float: right;
    width: 427px;
    height: 541px;
    background: rgba(255, 255, 255, 1);
    border-radius: 16px;
    margin-right: 290px;
    margin-top: 28px;
    .title {
        img {
            width: 362px;
            height: 196px;
        }
    }
}
.loginObj {
    .ipt_item {
        position: relative;
        width: 348px;
        height: 41px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(209, 152, 134, 1);
        border-radius: 2px 2px 2px 2px;
        margin: 0 auto;
        margin-bottom: 20px;
        /deep/ .el-form-item__label {
            display: none;
        }
        /deep/ .el-input__inner {
            border: 0;
            height: 40px;
            margin-top: -2px;
            // width: 300px;
            border-left: 1px solid #d19886;
            border-radius: 0;
            width: 253px;
        }
        /deep/ .el-form-item {
            display: inline-block;
            // margin-top: -4px;
        }
        /deep/ .el-form-item__content {
            margin-left: 0 !important;
        }
        .label {
            width: 26px;
            height: 26px;
            // display: inline-block;
            position: absolute;
            border: 1px dashed #ccc;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
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
