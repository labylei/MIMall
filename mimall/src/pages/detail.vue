<template>
    <div class="all">
      <product-param :title="product.name"></product-param>
      <div class="wrapper">
        <div class="container clearfix">
        <div class="swiper">
          <swiper :options="swiperOption">
              <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-name">{{product.name}}</h2>
          <p class="item-detail">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br/>外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <div class="deliverly">小米自营</div>
          <div class="item-price">{{product.price}}元
            <span class="del">9999元</span>
          </div>
          <div class="item-adress">
            <i class="icon-arr"></i>
            <div class="arr">北京 北京市 朝阳区 安定门街道</div>
            <div class="stork">有现货</div>
          </div>
          <div class="item-version clearfix">
            <h3>选择版本</h3>
            <div class="phone fl " :class="{'checked':version == 1}" @click="version = 1">6GB+64GB 全网通</div>
            <div class="phone fr " :class="{'checked':version == 2}" @click="version = 2">4GB+64GB 移动4G</div>
          </div>
          <div class="item-color">
            <h3>选择颜色</h3>
            <div class="phone checked">
              <span class="color" :class="{'checked':version == 1}" @click="version = 1"></span>
              <span class="">深空灰</span>
            </div>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">{{version==1?'6GB+64GB 全网通' : "4GB+64GB 移动4"}}深灰色</div>
              <div class="fr">{{product.price}}元</div>
            </div>
            <div class="phone-total">总计：{{product.price}}元</div>
          </div>
          <div class="btn-group">
            <a href="javascript:;" class="btn btn-huge fl" @click="addCart">加入购物车</a>
          </div>
        </div>
        <div class="price-info">
          <div class="container">
          <h2>价格说明</h2>
          <div class="desc">
            <img src="/imgs/detail/item-price.jpeg" alt="">
          </div>
          </div>
        </div>
        </div>
      </div>
      <service-bar></service-bar>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import ProductParam from '../components/ProductParam';
import ServiceBar from './../components/ServiceBar';
export default {
    name:'detail',
    data(){
      return{
        id:this.$route.params.id,
        product:[],
        version:1,
        swiperOption:{
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
         }
       }
     }
    },
    
    components:{
      ProductParam,
      Swiper,
      SwiperSlide,
      ServiceBar
    },
    mounted(){
      this.getProductInfo();
    },
    methods:{
      getProductInfo(){
        
        this.axios.get(`/products/${this.id}`).then((res)=>{
          this.product = res;
        })
      },
      addCart(){
        this.axios.post('/carts',{
          productId:this.id,
          selected: true
        }).then((res={cartProductVoList:0})=>{
          this.$store.dispatch('saveCartCount', res.cartProductVoList.length);
          this.$router.push('/cart');
        })
      },

      buy(){
        let id = this.$route.params.id;
        this.$router.push(`/detail/${id}`);
      }
    }
    
}
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
.all{
  .wrapper{
    .swiper{
        float:left;
        width:642px;
        height:617px;
        margin-top:5px;
        img{
          width:100%;
          height:100%;
        }
      }
    .content{
      float: right;
      width: 584px;
      height: 870px;
      .item-name{
        font-size:28px;
        padding-top:30px;
        padding-bottom:16px;
        height: 26px;
      }
      .item-detail{
        font-size: 14px;
        color: #999999;
        padding-bottom: 26px;
        height: 36px;
      }
      .deliverly{
        color: #FF6700;
        font-size: 16px;
        padding-bottom: 14px;
        height: 15px;
      }

      .item-price{
        color: #FF6700;
        font-size: 20px;
        padding-bottom: 54px;
        height: 19px;
        .del{
          color: #999999;
          padding-left: 9px;
          height: 13px;
          font-size: 14px;
          text-decoration: line-through;
        }
      }
      
      .item-adress{
        background-color: #FAFAFA;
        border: 1px solid #E5E5E5;
        height: 108px;
        padding-top: 31px;
        padding-left: 64px;
        line-height: 14px;
        box-sizing: border-box;
        position: relative;
        .icon-arr{
          position: absolute;
          left: 34px;
          top: 27px;
          @include bgImg(20px,20px,'/imgs/detail/icon-loc.png');
        }
        .arr{
          font-size: 14px;
          color: #666666;
        }
        .stork{
          font-size: 14px;
          color: #FF6700;
          height: 14px;
          padding-top: 15px;
        }
      }

      .item-version,.item-color{
        h3{
          font-size: 18px;
          margin-top: 30px;
        }
        .phone{
          border: 1px solid #E5E5E5;
          height: 50px;
          width: 287px;
          font-size: 16px;
          text-align: center;
          line-height: 50px;
          box-sizing: border-box;
          margin-top: 20px;
          cursor: pointer;
          span{
            color:#666666;
            margin-left:15px;
          }
          .color{
            display:inline-block;
            width:14px;
            height:14px;
            background-color:#666666;
          }
          &.checked{
              border:1px solid #FF6600;
              color:#FF6600;
            }
        }
      }

      .item-total{
        width: 584px;
        height: 108px;
        background-color: #FAFAFA;
        margin-top: 50px;
        margin-bottom: 30px;
        padding: 24px 33px 29px 30px;
        box-sizing: border-box;
        font-size: 14px;
        .phone-total{
          font-size: 24px;
          color: #FF6600;
          margin-top: 18px;
        }
      }
      .price-info{
        background-color:#F3F3F3;
        height:340px;
        h2{
          font-size:24px;
          color:#333333;
          padding-top:38px;
          margin-bottom:30px;
      }
    }
    }
  }
}
</style>