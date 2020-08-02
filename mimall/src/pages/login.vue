<template>
    <div class="login">
        <div class="container">
            <div class="header">
                    <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
            </div>
        </div>
            <div class="body">
                <div class="wrapper">
                    <div class="container">
                    <div class="login-inform">
                        <h3>
                          <span class="loginfirst">帐号登录</span>
                          <span class="point">|</span>
                          <span class="loginsecond">扫码登录</span>
                        </h3>
                        <div class="login-text">
                          <input type="text" 
                          placeholder="邮箱 / 手机号码 / 小米账号"
                          v-model="username">
                        </div>
                        <div class="login-text">
                          <input type="password" 
                          placeholder="密码"
                          v-model="password">
                        </div>
                        <div class="login-submit">
                            <a href="javascript:;" @click="login()">登录</a>
                        </div>
                        <div class="tips">
                            <div class="sms" @click="register()">手机短信登录/注册</div>
                            <div class="reg">立即注册<span>|</span>忘记密码?</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <nav-footer></nav-footer>
    </div>
</template>>

<script>
import NavFooter from './../components/NavFooter'
export default {
    name:'login',
    data(){
        return {
            username:'',
            password:'',
            userId:''
        }
    },
    components:{
        NavFooter
    },
    methods:{
        login(){
            let {username,password } = this;
            this.axios.post('/user/login',{
                username,
                password
            }).then((res)=>{
                this.$cookie.set('userId',res.id,{expires:'Session'});
                this.$store.dispatch('saveUserName',res.username);
                this.$store.dispatch('saveCartCount',res.cartCount);
                this.$router.push({
                    name:'index',
                    params:{
                        from:'login'
                    }
                });
            })
        },
        
        register(){
            this.axios.post('/user/register',{
                username:'qiuqiu',
                password:'123',
                email:'qiu@163.com'
            }).then(()=>{
                this.$message.info('注册成功');
            })
        }
    }
}
</script>
<style lang="scss">
.login{
    .container{
        .header{
            height: 113px;
            img{
                width: auto;
                height: 100%;
            }
        }
    }
    .body{
        .wrapper{
            background:url('/imgs/login-bg.jpg') no-repeat center;
            height: 576px;
            .login-inform{
                box-sizing: border-box;
                width:410px;
                height:510px;
                background-color: #ffffff;
                position: absolute;
                padding-left: 31px;
                padding-right: 31px;
                text-align: center;
                top: 37px;
                right: 0;
                h3{
                    font-size: 24px;
                    line-height: 40px;
                    margin-bottom: 49px;
                    font-weight: initial;
                    margin-top: 40px;
                    .loginfirst{
                        font-family: PingFangSC-Regular;
                        color: #FF6600;
                        margin-right: 35px;
                    }
                    .loginsecond{
                        font-family: PingFangSC-Regular;
                        margin-left: 35px;
                    }
                }
                .login-text{
                    width: 348px;
                    height: 50px;
                    border: 1px solid #E5E5E5;
                    margin-bottom: 20px;
                    input{
                        width: 100%;
                        height: 100%;
                        display: inline-block;
                        border: none;
                        padding: 18px auto;
                        padding-left: 18px;
                        color: #999999;
                        font-size: 14px;
                    }
                }
                .login-submit{
                    display: inline-block;
                    width: 348px;
                    height: 50px;
                    background-color: #FF6600;
                    margin-top: 10px;
                    a{
                        display: inline-block;
                        padding: 17px 158px 17px 158px;
                        color: #ffffff;
                        font-size: 16px;
                    }
                }
                .tips{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 14px;
                    font-size: 14px;
                    .sms{
                        font-size: 14px;
                        color: #FF6600;
                        cursor: pointer;
                    }
                    .reg{
                        span{
                            margin: 0 7px;
                            color:#999999;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>