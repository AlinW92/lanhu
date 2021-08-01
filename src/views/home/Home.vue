<template>
  <Header />
  <div class="advantage">
    <div class="container">
      <div class="advantage__list">
        <div class="advantage__list__content">
          <img src="../../assets/img/chat.png" alt="" />
          <h3>保护你的聊天内容</h3>
          <p>所有的聊天内容都可以加密 让聊天更放心</p>
          <span>立即体验</span>
        </div>
      </div>
      <div class="advantage__list">
        <div class="advantage__list__content">
          <img src="../../assets/img/fire.png" alt="" />
          <h3>阅后即焚功能</h3>
          <p>保护个人隐私，让黑客无从下手</p>
          <span>立即体验</span>
        </div>
      </div>
      <div class="advantage__list">
        <div class="advantage__list__content">
          <img src="../../assets/img/share.png" alt="" />
          <h3>独立的数据库</h3>
          <p>自己的数据库自己掌控一切尽在掌握</p>
          <span>立即体验</span>
        </div>
      </div>
      <div class="advantage__list">
        <div class="advantage__list__content">
          <img src="../../assets/img/phone2.png" alt="" />
          <h3>简约的页面设计</h3>
          <p>操作方便，简约大气符合大众化的用户习惯</p>
          <span>立即体验</span>
        </div>
      </div>
      <div class="advantage__list">
        <div class="advantage__list__content">
          <img src="../../assets/img/file.png" alt="" />
          <h3>高效率文件传输与沟通</h3>
          <p>高速传输文件图片实时语音沟通和视频会议</p>
          <span>立即体验</span>
        </div>
      </div>
      <div class="advantage__list">
        <div class="advantage__list__content">
          <img src="../../assets/img/Moments.png" alt="" />
          <h3>独立的社交圈子</h3>
          <p>分享所见所闻，探索人生意义享受美好生活</p>
          <span>立即体验</span>
        </div>
      </div>
    </div>
  </div>
  <div class="reason content__mg">
    <div class="container">
      <div class="content__picture">
        <img src="../../assets/img/pic01.png" alt="" />
      </div>
      <div class="content__text">
        <h3><span>为什么选我们？</span></h3>
        <p>
          AIM是一款专门为企业开发的聊天工具，功能包括聊天系统、通讯录信息提取、
          个性圈子（内含语音、视频、图片、文件和文档展示等功能）、实时会议和语音。
          我们的优势在于聊天内容可加密，阅后即焚功能，数据库由你掌控，
          为贵公司的商业机密保驾护航。
        </p>
        <a href="">立即体验</a>
      </div>
    </div>
  </div>
  <div class="edition content__mg" id="page1">
    <div class="container">
      <div class="edition__substance">
        <h4>沟通，是肆无忌惮地畅所欲言</h4>
        <p>
          AIM，有阅后即焚和聊天加密功能来保驾护航，<br />从此不再担心内部资料泄密，你的数据你掌控。
        </p>
        <div class="edition__btn">
          <p class="edition__apple">
            <span>2021-07-30</span>
            <a href=""><img src="../../assets/img/ios01.png" />下载</a>
          </p>
          <p class="edition__android">
            <span>2021-07-30</span>
            <a href=""><img src="../../assets/img/android1.png" />下载</a>
          </p>
        </div>
      </div>
      <div class="content__picture">
        <img src="../../assets/img/pic2.png" alt="" />
      </div>
    </div>
  </div>
  <div class="desktop content__mg" id="page2">
    <div class="container">
      <div class="desktop__substance">
        <div class="content__picture">
          <img src="../../assets/img/pic3.png" alt="" />
        </div>
        <div class="desktop__text">
          <h4>沟通，是随时随地爽快收发</h4>
          <p>
            公司内部文件，随时随地快速收发，加密保护，防止拦截，让企业沟通方便快捷，万无一失。
          </p>
          <div class="desktop__window">
            <span>2021-07-30</span>
            <a href="" class="desktop__window__btn"
              ><img src="../../assets/img/computer.png" />下载
              <div class="dropdown">
                <ul>
                  <li><a href="">2021-07-30 AIM1.0.1版</a></li>
                  <li><a href="">2021-07-30 AIM1.0.1版</a></li>
                  <li><a href="">2021-07-30 AIM1.0.1版</a></li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from './Footer'
import Header from './Header'

// import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Footer,
    Header
  }
  // setup () {
  //   axios
  //     .get(
  //       'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register'
  //     )
  //     .then(response => {
  //       console.log(response)
  //     })
  // }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";

.content__mg {
  padding: 168px 0;
}
.content__picture,
.content__text {
  float: left;
}
.content__picture {
  width: 612px;
  height: 312px;
  img {
    width: 100%;
  }
}
.content__text {
  width: 540px;
  height: 380px;
  margin-left: 52px;
  position: relative;
  h3 {
    width: 236px;
    height: 24px;
    background: linear-gradient(127deg, #24e8c7 0%, #24d4e8 100%);
    opacity: 0.9;
    border-radius: 2px;
    text-align: center;
    position: relative;
    margin-top: 20px;
    span {
      font-size: 32px;
      font-weight: 600;
      line-height: 33px;
      color: #2c2f43;
      opacity: 1;
      position: absolute;
      width: 100%;
      top: -21px;
      left: 11px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: #595f6f;
    margin-top: 64px;
  }
  a {
    display: inline-block;
    text-decoration: none;
    width: 200px;
    height: 50px;
    background: #fa2851;
    box-shadow: 0px 6px 24px rgb(214 14 53 / 30%);
    opacity: 1;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: opacity 0.25s, transform 0.3s;
  }
  a:hover {
    background: #e9133d;
  }
}
.advantage {
  position: relative;
  padding: 30px 0;
  color: #cdbfe3;
  text-align: center;
  background-color: $content-bgColor;
  background-repeat: repeat-x;
  overflow: hidden;
  &__list h3 {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: #1a47b0;
    margin-top: 36px;
  }
  &__list img {
    border: 1px dashed #999;
  }
  &__list p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: #595f6f;
    opacity: 1;
    margin-top: 8px;
    padding: 0 20px;
  }
  &__list span {
    width: 200px;
    height: 50px;
    background: #fa2851;
    box-shadow: 0px 6px 24px rgba(214, 14, 53, 0.3);
    opacity: 1;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
    opacity: 0;
    transition: opacity 0.25s, transform 0.3s;
    margin-top: 62px;
    cursor: pointer;
  }
  &__list {
    float: left;
    cursor: pointer;
    width: 360px;
  }
  &__list__content {
    padding-left: 80px !important;
    padding-right: 80px !important;
    padding-top: 33px;
    padding-bottom: 50px;
  }
  &__list:hover {
    background: #fff;
  }
  &__list:hover span {
    opacity: 1;
  }
  &__list span:hover {
    opacity: 1;
    background: #e9133d;
  }
}

.reason {
  position: relative;
  color: #cdbfe3;
  background-color: #fff;
  background-repeat: repeat-x;
  overflow: hidden;
  padding: 168px 0;
}
.edition {
  background-color: $content-bgColor;
  overflow: hidden;
  &__btn {
    margin-top: 20px;
    display: flex;
    p {
      float: left;
      width: 142px;
      text-align: center;
      margin-right: 40px;
      span {
        font-size: 16px;
        font-weight: 400;
        line-height: 36px;
        color: #a1abc6;
        display: block;
      }
      a {
        display: block;
        background: #fa2851;
        box-shadow: 0px 6px 24px rgb(214 14 53 / 30%);
        opacity: 1;
        border-radius: 5px;
        font-size: 16px;
        height: 48px;
        line-height: 48px;
        font-weight: 400;
        color: #ffffff;
        transition: opacity 0.25s, transform 0.3s;
        img {
          vertical-align: middle;
        }
      }
      a:hover {
        background: #e9133d;
      }
    }
  }
  &__substance {
    float: left;
    width: 468px;
    margin-left: 0;
    margin-right: 160px;
    h4 {
      font-size: 52px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 64px;
      color: #2c2f43;
    }
    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 36px;
      color: #595f6f;
      margin-top: 64px;
    }
  }
}
.desktop {
  overflow: hidden;
}
.desktop__text {
  width: 520px;
  float: right;
  h4 {
    font-size: 52px;
    font-weight: 400;
    line-height: 64px;
    color: #2c2f43;
    text-align: right;
    padding-left: 104px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    color: #595f6f;
    margin-top: 64px;
    text-align: right;
  }
  .desktop__window {
    width: 142px;
    font-size: 16px;
    font-weight: 400;
    line-height: 36px;
    color: #595f6f;
    margin-top: 64px;
    text-align: center;
    float: right;
    position: relative;
    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 36px;
      color: #a1abc6;
      display: block;
    }
    &__btn {
      display: block;
      background: #fa2851;
      box-shadow: 0px 6px 24px rgb(214 14 53 / 30%);
      opacity: 1;
      border-radius: 5px;
      font-size: 16px;
      height: 48px;
      line-height: 48px;
      font-weight: 400;
      text-align: center;
      color: #fff;
      img {
        vertical-align: middle;
      }
    }
    .dropdown {
      background: url(../../assets/img/dropdownbox01.png);
      width: 246px;
      height: 180px;
      position: absolute;
      top: 85px;
      right: -35px;
      opacity: 0;
      ul {
        width: 178px;
        margin: auto;
        margin-top: 30px;
      }
      ul li {
        border-bottom: 1px solid rgba(44, 47, 67, 0.1);
        line-height: 35px;
      }
      ul li a {
        height: 22px;
        font-size: 14px;
        font-weight: 400;
        line-height: 36px;
        color: #595f6f;
      }
    }
    &__btn:hover {
      background: #e9133d;
    }
    &__btn:hover .dropdown {
      opacity: 1;
    }
  }
}
</style>
