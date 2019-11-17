<template>
    <div class="root">
        <!-- 111 -->
        <!-- <h1>hhahahahh </h1> -->
        <div class="header">
            <div class="header-view _cm_layout">
                <div class="title">
                    Spring Sale | 10% Off: SPRINGSALE
                </div>
                <div class="headTimer">
                    <div class="time_view">
                        <div class="item">
                            <span class="one"></span>
                            <span class="two"></span>
                            <div class="num">
                                {{hours}}
                            </div>
                        </div>
                        <p>：</p>
                        <div class="item">
                            <span class="one"></span>
                            <span class="two"></span>
                            <div class="num">
                                {{minutes}}
                            </div>
                        </div>
                        <p>：</p>
                        <div class="item">
                            <span class="one"></span>
                            <span class="two"></span>
                            <div class="num">
                                {{seconds}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav">
            <div class="nav-view _cm_layout clearfix">
                <div class="logo fl">
                    <img src="../img/logo0001.png" alt="">
                </div>
                <div v-if="isLogin == 2" class="icons fr">
                    <el-badge :value="cartNum" class="item">
                        <img @click="toCart()" src="../assets/cart.png" alt="">
                    </el-badge>
                    <div style="margin-right: 25px;" class="prices">
                        <div class="old_price">
                            <del>$0</del>
                        </div>
                        <div class="new_price">
                            $0
                        </div>
                    </div>
                    <el-dropdown class="btnBox">
                        <keep-alive>
                            <img src="../assets/geren.png" alt="">
                        </keep-alive>
                        <!-- <i class="iconfont el-icon-diy-geren2"></i> -->
                        <el-dropdown-menu class="dropdownMenu dropUser" slot="dropdown">
                            <el-dropdown-item class="changepswParent">
                                <el-button class="changepsw logoutBtn" @click="toUser()" type="text">
                                    Personal center
                                </el-button>
                            </el-dropdown-item>
                            <el-dropdown-item class="changepswParent">
                                <el-button @click="toOrder()" class="changepsw logoutBtn" type="text">
                                    Order management
                                </el-button>
                            </el-dropdown-item>
                            <el-dropdown-item class="changepswParent">
                                <el-button class="changepsw logoutBtn" @click="toUser()" type="text">
                                    Change the password
                                </el-button>
                            </el-dropdown-item>
                            <el-dropdown-item class="logoutParent">
                                <el-button @click="toLogin()" type="text">login</el-button>
                            </el-dropdown-item>
                            <el-dropdown-item class="logoutParent">
                                <el-button @click="toRegister()" type="text">register</el-button>
                            </el-dropdown-item>
                            <!-- <el-dropdown-item class="logoutParent">
                                <el-button @click="toOrder()" type="text">order</el-button>
                            </el-dropdown-item> -->
                            <!-- <el-dropdown-item class="logoutParent">
                                <el-button @click="toDetail()" type="text">detail</el-button>
                            </el-dropdown-item> -->
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div v-if="isLogin == 1" class="icons fr">
                    <el-badge :value="cartNum" class="item">
                        <img @click="toCart()" src="../assets/cart.png" alt="">
                    </el-badge>
                    <div style="margin-right: 25px;" class="prices">
                        <div class="old_price">
                            <del>$0</del>
                        </div>
                        <div class="new_price">
                            $0
                        </div>
                    </div>
                    <el-dropdown class="btnBox">
                        <keep-alive>
                            <div class="boxS">
                                <img src="../assets/geren.png" alt="">
                                <span class="userName">{{username}}</span>
                            </div>
                        </keep-alive>
                        <el-dropdown-menu class="dropdownMenu dropUser" slot="dropdown">
                            <el-dropdown-item class="changepswParent">
                                <el-button class="changepsw logoutBtn" @click="toUser()" type="text">
                                    Personal center
                                </el-button>
                            </el-dropdown-item>
                            <el-dropdown-item class="changepswParent">
                                <el-button @click="toOrder()" class="changepsw logoutBtn" type="text">
                                    Order management
                                </el-button>
                            </el-dropdown-item>
                            <el-dropdown-item class="changepswParent">
                                <el-button class="changepsw logoutBtn" @click="toUser()" type="text">
                                    Change the password
                                </el-button>
                            </el-dropdown-item>
                            <el-dropdown-item class="logoutParent">
                                <el-button @click="toLogin()" type="text">login</el-button>
                            </el-dropdown-item>
                            <el-dropdown-item class="logoutParent">
                                <el-button @click="toRegister()" type="text">register</el-button>
                            </el-dropdown-item>
                            <!-- <el-dropdown-item class="logoutParent">
                                <el-button @click="toOrder()" type="text">order</el-button>
                            </el-dropdown-item> -->
                            <!-- <el-dropdown-item class="logoutParent">
                                <el-button @click="toDetail()" type="text">detail</el-button>
                            </el-dropdown-item> -->
                            <el-dropdown-item class="logoutParent">
                                <el-button @click="toLogout()" type="text">logout</el-button>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                </div>
                <div class="menu fr">
                    <el-menu router :default-active="$route.path ? $route.path : '/index'" class="header_menu" mode="horizontal" background-color="#fff" text-color="#000" active-text-color="#6eaa21">
                        <el-menu-item index="/index">Home</el-menu-item>
                        <el-menu-item index="/Gallery">Gallery</el-menu-item>
                        <el-menu-item index="/Quote">Quote</el-menu-item>
                        <el-menu-item index="/Support">Support</el-menu-item>
                        <el-menu-item index="/Contact">Contact</el-menu-item>
                        <el-menu-item index="/About">About us</el-menu-item>
                    </el-menu>

                </div>
            </div>

        </div>
        <router-view></router-view>
        <div class="footer">
            <div class="footer_view _cm_layout">
                <div class="first item">
                    <div class="title">HELP & INFORMATION</div>
                    <p>
                        Help
                    </p>
                    <p>
                        Track Order
                    </p>
                    <P>
                        Delivery & Returns
                    </P>
                    <P>
                        10% Student Discount
                    </P>
                </div>
                <div class="first item">
                    <div class="title">ABOUT ASOS</div>
                    <p>
                        About Us
                    </p>
                    <p>
                        Careers at ASOS
                    </p>
                    <P>
                        Corporate Responsibility
                    </P>
                    <P>
                        Investors Site
                    </P>
                </div>
                <div class="first item">
                    <div class="title">MORE FROM ASOS</div>
                    <p>
                        Mobile and ASOS Apps
                    </p>
                    <p>
                        ASOS Marketplace
                    </p>
                    <P>
                        Gift vouchers
                    </P>
                    <P>
                        Black Friday
                    </P>
                </div>
                <div class="first item">
                    <div class="title">SHOPPING FROM</div>
                    <p>
                        You're in
                        <span class="reds"></span> ChinaChange
                    </p>
                    <div class="imgs">
                        <img src="../assets/logo001.png" alt="">
                        <img src="../assets/logo002.png" alt="">
                        <img src="../assets/logo003.png" alt="">
                        <img src="../assets/logo004.png" alt="">
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                isLogin: 2, // 1是登录, 2是没登录
                username: '',
                cartNum: '',
                hours: '',
                minutes: '',
                seconds: '',
            }
        },
        created() {
            let token = window.sessionStorage.getItem("authentication");
            if (token) {
                this.isLogin = 1;
            } else {
                this.isLogin = 2;
            }
            this.username = window.sessionStorage.getItem("username");
            this.getCartListFn();
        },
        mounted() {
            let target = new Date("2019-6-6").getTime(); //获取目标时间戳
            setInterval(() => {
                let date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                if (hours < 10) {
                    this.hours = '0' + hours;
                } else {
                    this.hours = hours;
                }
                this.minutes = minutes;
                this.seconds = seconds;
            }, 1000)
        },
        methods: {
            async getCartListFn() {
                let user_id = window.sessionStorage.getItem("user_id");

                const res = await this.$ajax.get(`retail_cart/${user_id}/`);
                let result = JSON.parse(res.data);
                // console.log(result);
                this.cartNum = result.length;
                // let cartNum
            },
            toCart() {
                this.$router.push("/cart")
            },
            toLogin() {
                this.$router.push("/login")
            },
            toUser() {
                this.$router.push("/user")
            },
            toRegister() {
                this.$router.push("/register")
            },
            toOrder() {
                let token = window.sessionStorage.getItem("authentication");
                if (!token) {
                    this.$message({
                        type: "warning",
                        message: "Please login"
                    })
                    return;
                }
                this.$router.push("/order")
            },
            toDetail() {
                this.$router.push("/detail")
            },
            // 退出登录
            toLogout() {
                let _mainObj = window.sessionStorage.getItem('_mainObj');
                if (_mainObj) {
                    this.$confirm("是否退出登陆？", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(() => {
                        window.sessionStorage.removeItem('_mainObj');
                        // window.sessionStorage.removeItem('username');
                        window.sessionStorage.removeItem('authentication');
                        window.sessionStorage.removeItem('user_id');
                        this.$router.push('/login');
                    });
                }
            },
        },
    }
</script>


<style scoped lang="less">
    .root {
        img {
            cursor: pointer;
        }

        // height: 5000px;
        .header {
            background-color: #d19886;
            height: 80px;
            width: 100%;

            .header-view {
                margin: 0 auto;
                width: 1440px;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 136px;
                padding-right: 136px;
            }

            .title {
                font-size: 28px;
                font-size: 28px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
            }

            .headTimer {
                width: 331px;
                height: 100%;

                .time_view {
                    display: flex;
                    height: 100%;
                    align-items: center;

                    .item {
                        width: 64px;
                        height: 64px;
                        border-radius: 10px;
                        position: relative;

                        >span {
                            display: inline-block;
                            height: 32px;
                            width: 64px;
                            background-color: #ccc;
                        }

                        .one {
                            position: absolute;
                            border-radius: 5px 5px 0 0;
                            left: 0;
                            top: 0;
                            background-color: #e2e2e2;
                        }

                        .two {
                            position: absolute;
                            border-radius: 0 0 5px 5px;
                            left: 0;
                            top: 32px;
                            background-color: #e9e9e9;
                        }

                        .num {
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            font-size: 36px;
                        }
                    }
                    p {
                        padding: 0 7px;
                        font-size: 40px;
                        color: #fff;
                    }
                }
            }
        }

        .nav {
            width: 100%;
            background-color: #f8f4ef;
            .nav-view {
                width: 1440px;
                margin: 0 auto;
                height: 125px;
                position: relative;
            }

            .logo {
                background-color: #f8f4ef;
                height: 125px;
                overflow: hidden;

                img {
                    width: 234px;
                    height: 125px;
                    margin-top: 10px;
                }
            }

            .icons {
                background-color: #f8f4ef;
                // background-color: #fff;
                display: flex;
                height: 125px;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;
                }

                .prices {
                    margin-top: 7px;
                }

                /deep/ .el-badge {
                    margin-right: 20px;
                }
            }

            .menu {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                margin-right: 50px;
                background-color: #f8f4ef !important;
                // background-color: #fff !important;
                height: 125px;
                line-height: 125px;
                display: flex;
                align-items: center;

                /deep/ .el-menu-item {
                    background-color: #f8f4ef !important;
                    // background-color: #fff !important;
                    border-bottom: 0 !important;
                }

                /deep/ .el-menu {
                    border-bottom: 0 !important;
                }
            }

            .boxS {
                display: flex;
                align-items: center;
            }

            .userName {
                margin-left: 6px;
                color: #555;
                font-size: 14px;
                cursor: pointer;
            }

            .userName:hover {
                color: #f40;
            }
        }

        .footer {
            height: 286px;
            width: 100%;
            background-color: #d19886;

            .footer_view {
                padding-top: 50px;
                padding-bottom: 60px;
                display: flex;

                .item {
                    float: left;
                    text-align: left;
                    margin-right: 160px;
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);

                    .title {
                        margin-bottom: 15px;
                        font-size: 24px;
                    }

                    p {
                        margin-bottom: 15px;
                    }
                }

                .item:last-child {
                    margin-right: 0;
                }

                .imgs {
                    img {
                        width: 44px;
                        height: 44px;
                        margin-right: 14px;
                    }

                    img:last-child {
                        margin: 0;
                    }
                }
            }

            .reds {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                color: red;
            }
        }
    }
</style>