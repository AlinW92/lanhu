<template>
  <div class="footer" id="page3">
    <div class="container">
        <div class="footer__content">
            <ul class="u1">
                <h3>相关产品</h3>
                <li>AIM-手机版</li>
                <li>AIM-PC版</li>
            </ul>
            <ul class="u2">
                <h3>关于我们</h3>
                <li>地址：广西南宁市双拥路铭湖经典B座2305</li>
                <li>官方邮箱：123456789@qq.com</li>
                <li>客服电话：123456789</li>
            </ul>
            <ul class="u3">
                <h3>联系我们</h3>
                <li><img src="../../assets/img/weibo.png"></li>
                <li><img src="../../assets/img/wechat.png"></li>
                <li><img src="../../assets/img/qq.png"></li>
            </ul>
        </div>
        <div class="footer__info">
            <p>南宁市梵云网络科技有限公司</p>
            <p>AIM.COM 桂ICP证050897号 免责声明 隐私政策</p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.footer {
  position: relative;
  padding: 40px 0;
  color: #838383;
  text-align: left;
  background-color: #2a2a2a;
  background-repeat: repeat-x;
  overflow: hidden;
  &__content{
      width:976px;
      margin: auto;
      overflow: hidden;
      padding-bottom: 50px;
      border-bottom: 1px solid #666;
  }
  h3 {
    margin-bottom: 20px;
  }
  ul{
      float: left;
      margin-right: 120px;
  }
  ul li {
    margin-right: 24px;
    font-size: 18px;
    font-weight: 400;
    line-height: 36px;
    color: #838383;
  }
    ul.u3{
        margin-right: 0;
    }
  ul.u3 li {
    float: left;
  }
  .footer__info{
      text-align: center;
      margin-top: 40px;
  }
  .footer__info p{
      line-height: 36px;
  }
}
</style>
