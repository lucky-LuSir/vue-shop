<template>
    <div class="main _cm_layout">
        <div class="first">
            <el-form :model="userForm" :rules="userRules" ref="userForm" label-width="100px" class="userForm">
                <div class="quote_view">
                    <h2>Basic information</h2>
                    <div class="floor">
                        <div class="ipt_item">
                            <el-form-item label="Your Name">
                                <el-input v-model="userForm.name" placeholder="Ueser name"></el-input>
                            </el-form-item>
                        </div>
                        <div class="ipt_item">
                            <el-form-item label="gender">
                                <el-input v-model="userForm.gender" placeholder="Please select your gender"></el-input>
                            </el-form-item>
                        </div>
                        <div class="half_item">
                            <el-form-item label="first_name" prop="first_name">
                                <el-input v-model="userForm.first_name" placeholder="Please enter your f..."></el-input>
                            </el-form-item>
                        </div>
                        <div class="half_item _marginR">
                            <el-form-item label="LAst_name" prop="last_name">
                                <el-input v-model="userForm.last_name" placeholder="Please enter your L..."></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ipt_item">
                            <el-form-item label="e-mail" prop="email">
                                <el-input v-model="userForm.email" placeholder="Please select your e-mail"></el-input>
                            </el-form-item>
                        </div>
                        <div class="ipt_item">
                            <el-form-item label="mobile" prop="mobile">
                                <el-input v-model="userForm.mobile" placeholder="Please select your mobile"></el-input>
                            </el-form-item>
                        </div>
                        <div class="ipt_item _marginR">
                            <el-form-item label="company">
                                <el-input v-model="userForm.company" placeholder="Please select your company"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ipt_item">
                            <el-form-item label="Change the password">
                                <el-input v-model="userForm.password" placeholder="Please select your new password"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="btns">
                        <el-form-item>
                            <el-button @click="changeUserInfoFn('userForm')">Confirm the changes</el-button>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
        </div>
        <div class="second">
            <el-form :model="addrForm" :rules="addrRules" ref="addrForm" label-width="100px" class="addrForm">
                <div class="quote_view">
                    <h2 style="margin-bottom: 35px;">Address management</h2>
                    <div class="desc">
                        <span style="margin-right: 30px;">New address</span>
                        <span>Delete address</span>
                    </div>
                    <div class="floor">
                        <div class="half_item">
                            <el-form-item label="first_name">
                                <el-input placeholder="Please enter your f..."></el-input>
                            </el-form-item>
                        </div>
                        <div class="half_item _marginR">
                            <el-form-item label="LAst_name">
                                <el-input placeholder="Please enter your L..."></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ipt_item">
                            <el-form-item label="e-mail">
                                <el-input placeholder="Please select your e-mail"></el-input>
                            </el-form-item>
                        </div>
                        <div class="ipt_item">
                            <el-form-item label="mobile">
                                <el-input placeholder="Please select your mobile"></el-input>
                            </el-form-item>
                        </div>
                        <div class="ipt_item _marginR">
                            <el-form-item label="Zip code">
                                <el-input placeholder="Please select your Zip code"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="floor">
                        <div class="ipt_item">
                            <el-form-item label="Country">
                                <el-input placeholder="Please select your Country"></el-input>
                            </el-form-item>
                        </div>
                        <div class="ipt_item">
                            <el-form-item label="City">
                                <el-input placeholder="Please select your city"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="checks">
                        <input type="checkbox">Set to default addr
                    </div>
                    <div class="btns">
                        <el-form-item>
                            <el-button @click="addAddrFn('addrForm')">Confirm the changes</el-button>
                        </el-form-item>
                    </div>
                </div>
            </el-form>

        </div>
        <div class="third">
            <el-form :model="passwordForm" :rules="addrRules" ref="passwordForm" label-width="100px" class="passwordForm">
                <div class="quote_view">
                    <h2 style="margin-bottom: 35px;">Retrieve password</h2>
                    <div class="floor">
                        <div class="ipt_item">
                            <el-form-item label="old_password" prop="old_password">
                                <el-input type="password" v-model="passwordForm.old_password" placeholder="Please select your old_password"></el-input>
                            </el-form-item>
                        </div>
                        <div class="ipt_item">
                            <el-form-item label="new_password" prop="new_password">
                                <el-input type="password" v-model="passwordForm.new_password" placeholder="Please select your new_password"></el-input>
                            </el-form-item>
                        </div>
                        <div class="ipt_item">
                            <el-form-item label="confirm_password" prop="confirm_password">
                                <el-input type="password" v-model="passwordForm.confirm_password" placeholder="Please select your confirm_password"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="btns">
                        <el-form-item>
                            <el-button @click="retrievePasFn('passwordForm')">Confirm the changes</el-button>
                        </el-form-item>
                    </div>
                </div>
            </el-form>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userRules: {
                    first_name: [{
                        required: true,
                        message: "Please input first name",
                        trigger: "blur"
                    }],
                    last_name: [{
                        required: true,
                        message: "Please input last name",
                        trigger: "blur"
                    }],
                    email: [{
                        required: true,
                        message: "Please input email",
                        trigger: "blur"
                    }],
                    mobile: [{
                        required: true,
                        message: "Please input mobile",
                        trigger: "blur"
                    }],
                },
                userForm: {
                    name: '',
                    gender: '',
                    company: '',
                    password: '',
                    // ---
                    first_name: '',
                    last_name: '',
                    email: '',
                    mobile: '',
                },
                addrForm: {

                },
                addrRules: {},
                passwordForm: {
                    old_password: '',
                    new_password: '',
                    confirm_password: '',
                },
                passwordRules: {
                    old_password: [{
                        required: true,
                        message: "Please input old_password",
                        trigger: "blur"
                    }],
                    new_password: [{
                        required: true,
                        message: "Please input new_password",
                        trigger: "blur"
                    }],
                    confirm_password: [{
                        required: true,
                        message: "Please input confirm_password",
                        trigger: "blur"
                    }],
                }
            }
        },
        methods: {
            async changeUserInfoFn(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        let user_id = window.sessionStorage.getItem("user_id");
                        let paramObj = {
                            id: user_id,
                            first_name: this.userForm.first_name,
                            last_name: this.userForm.last_name,
                            email: this.userForm.email,
                            mobile: this.userForm.mobile,
                        }
                        const res = await this.$ajax.post(`/user/`, paramObj);
                        console.log(res)
                        if (res.status == 200) {
                            this.$message({
                                type: "success",
                                message: res.data.message
                            })
                        }
                    } else {
                        this.$message({
                            type: "error",
                            message: "Please complete the information"
                        })
                    }
                })


            },
            async addAddrFn(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        let user_id = window.sessionStorage.getItem("user_id");
                        // let paramObj = {
                        //     id: user_id,
                        //     first_name: this.userForm.first_name,
                        //     last_name: this.userForm.last_name,
                        //     email: this.userForm.email,
                        //     mobile: this.userForm.mobile,
                        // }
                        // const res = await this.$ajax.post(`/user/`, paramObj);
                        // console.log(res)
                        // if (res.status == 200) {
                        //     this.$message({
                        //         type: "success",
                        //         message: res.data.message
                        //     })
                        // }
                    } else {
                        this.$message({
                            type: "error",
                            message: "Please complete the information"
                        })
                    }
                })


            },
            async retrievePasFn(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        let user_id = window.sessionStorage.getItem("user_id");
                        let paramObj = {
                            id: user_id,
                            old_password: this.passwordForm.old_password,
                            new_password: this.passwordForm.new_password,
                            confirm_password: this.passwordForm.confirm_password,
                        }
                        const res = await this.$ajax.put(`/alter_password/`, paramObj);
                        console.log(res)
                        // if (res.status == 200) {
                        //     this.$message({
                        //         type: "success",
                        //         message: res.data.message
                        //     })
                        // }
                    } else {
                        this.$message({
                            type: "error",
                            message: "Please complete the information"
                        })
                    }
                })


            }
        },
    }
</script>

<style scoped lang="less">
    .main {
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
    }
</style>