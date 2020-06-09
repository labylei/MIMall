<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login()">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a v-bind:href="'/#/product/'+ item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle" >
                                        </div>
                                        <div class="pro-name">{{item.name}}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>红米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90" 
                                            alt="Redmi 智能电视 MAX 98''" width="160" height="110">
                                        </div>
                                        <div class="pro-name">Redmi 智能电视 MAX 98</div>
                                        <div class="pro-price">19999起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0f2d1079c767a834f098dd824bb6fee.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90" 
                                            alt="小米电视4A 60英寸" width="160" height="110">
                                        </div>
                                        <div class="pro-name">小米电视4A 60英寸</div>
                                        <div class="pro-price">1899起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/70f6c0c28c61e8585805565e5e16da84.png?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90" 
                                            alt="Redmi 智能电视 X55" width="160" height="110">
                                        </div>
                                        <div class="pro-name">Redmi 智能电视 X55</div>
                                        <div class="pro-price">2299起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&amp;w=160&amp;h=110&amp;f=webp&amp;q=90" 
                                            alt="Redmi 红米电视 70英寸 R70A" width="160" height="110">
                                        </div>
                                        <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                                        <div class="pro-price">2999起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&amp;w=160&amp;h=110" 
                                            alt="小米壁画电视 65英寸" width="160" height="110">
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999起</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg?thumb=1&amp;w=160&amp;h=110" 
                                            alt="小米全面屏电视E55A" width="160" height="110">
                                        </div>
                                        <div class="pro-name">小米全面屏电视E55A</div>
                                        <div class="pro-price">1599起</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
        return{
            phoneList:[]
        }
    },
    computed:{
        username(){
            return this.$store.state.username;
        },
        cartCount(){
            return this.$store.state.cartCount;
        },
    },
    //过滤器
    filters:{
        currency(val){
            if(!val) return '0.00';
            return '￥' + val.toFixed(2) + '元';
        }
    },
    mounted(){
        this.getProductList();       
    },
    methods:{
        login(){
            this.$router.push('/login');
        },
        getProductList(){
          this.axios.get('/products',{
            params:{
                categoryId:'100012',
                pageSize:6
            } 
        }).then((res)=>{
            if(res.list.length>=6){
                this.phoneList=res.list.slice(0,6);
            }
        })
      },
      goToCart(){
        this.$router.push('/cart');
    }
    },
}
</script>

<style lang="scss">
  @import './../assets/scss/base.scss';
  @import'./../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .header{
      .nav-topbar{
          height: 39px;
          line-height: 39px;
          background-color: #333333;
          color: #B0B0B0;
           .container{
            position: relative;
            @include flex();
          a{
              display: inline-block;
              color: #B0B0B0;
              margin-right: 17px;
              text-decoration: none;
          }
          .my-cart{
              width: 110px;
              background-color: #FF6600;
              text-align: center;
              color: #ffffff;
              margin-right: 0;
              .icon-cart{
                  @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                  margin-right: 4px;
              }
          }
      }
      }
     .nav-header{
         .container{
             position: relative;
             height: 112px;
             @include flex();
             .header-logo{
                 display: inline-block;
                 width: 55px;
                 height: 55px;
                 background-color: #FF6600;
                 a{
                     display: inline-block;
                     width: 110px;
                     height: 55px;
                     &:before{
                         content: ' ';
                         @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                         transition: margin .2s;
                     }
                     &:after{
                         content: ' ';
                         @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                     }
                     &:hover:before{
                         margin-left: -55px;
                         transition: margin .2s;
                     }
                 }
             }
             .header-menu{
                 display: inline-block;
                 width: 643x;
                 padding-left: 209px;
                 .item-menu{
                     display: inline-block;
                     color: #333333;
                     font-weight: bold;
                     font-size: 16px;
                     line-height: 112px;
                     margin-right: 20px;
                     span{
                         cursor: pointer;
                     }
                     &:hover{
                         color: $colorA;
                         .children{
                             height: 220px;
                             opacity: 1;
                         }
                     }
                     .children{
                         position: absolute;
                         left: 0;
                         width: 1226px;
                         height: 0;
                         opacity: 0;
                         overflow: hidden;
                         border-top:1px solid #E5E5E5;
                         box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                         z-index: 10;
                         transition: all .5s;
                         .product{
                             position: relative;
                             text-decoration: none;
                             float: left;
                             width: 16.6%;
                             height: 220px;
                             font-size: 12px;
                             line-height: 12px;
                             text-align: center;
                             background-color: #ffffff;
                             a{
                                 display: inline-block;
                             }
                             img{
                                 width: auto;
                                 height: 111px;
                                 margin-top: 26px;
                             }
                             .pro-img{
                                 height: 137px;
                             }
                             .pro-name{
                                 font-weight: bold;
                                 margin-top: 19px;
                                 margin-bottom: 8px;
                                 color: $colorB;
                             }
                             .pro-price{
                                 color: $colorA;
                             }
                             &:before{
                             content: ' ';
                             position: absolute;
                             top: 28px;
                             right: 0;
                             border-left: 1px solid $colorF;
                             height: 100px;
                             width: 1px;
                             }
                             &:last-child:before{
                                 display: none;
                             }

                         }
                     }
                 }
             }
             .header-search{
                 width: 319px;
                 .wrapper{
                     height: 50px;
                     border: 1px solid #E0E0E0;
                     display: flex;
                     align-items: center;
                     input{
                         border: none;
                         box-sizing: border-box;
                         border-right: 1px solid #E0E0E0;
                         width: 264px;
                         height: 50px;
                         padding-left: 14px;
                     }
                     a{
                         @include bgImg(18px,18px,'/imgs/icon-search.png');
                         
                         margin-left: 17px;
                     }
                 }
             }
         }
     }

  }
</style>