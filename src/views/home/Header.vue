/* eslint-disable vue/require-v-for-key */
<template>
  <div class="header">
    <div class="container">
      <div class="head__content">
        <div class="logo__content">
          <img class="logoimg" src="../../assets/img/logo.png" alt="logo" />
          <span>AIM APP</span>
        </div>
        <div class="menu">
          <ul>
            <li><a href="/">首页</a></li>
            <li><a @click="Submit(1)">下载手机版</a></li>
            <li><a @click="Submit(2)">下载PC版</a></li>
            <li><a @click="Submit(3)">联系我们</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="container">
        <div class="banner__text">
          <h3>欢迎使用AIM</h3>
          <p>这是一款你的秘密你做主的</p>
          <p>聊天工具</p>
          <span
            >无论何时何地，你都可以随时查看专属信息<br />不用担心数据泄漏<br />一切尽在掌握</span
          >
          <div class="download__btn ap2">
            <div>
                <a class="an1">
                  <img src="../../assets/img/download_ios.png" />
                  <div class="ios_ewm">
                  <span><img src="../../assets/img/erweima.png" /></span>
                  </div>
                </a>
            </div>
            <a href="javascript:void(0)" class="an2"
              ><img src="../../assets/img/download_android.png" />
              <span class="an_ewm"><img src="../../assets/img/erweima.png" /></span>
            </a>
          </div>
        </div>
        <div class="banner__picture">
          <div class="grid-content bg-purple">
            <img src="../../assets/img/phone1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  data: function () {
    return {
      tagList: [
        {
          id: 1,
          name: '安卓2.0',
          list: [
            {
              id: '20',
              name: '安卓2.0',
              pid: 1,
              link: 'https://cli.im/',
              litpic: '/uploads/allimg/20210803/4c8f6ad18656035a40c1a5cd226d759b.png',
              create_time: '2021-08-03'
            },
            {
              id: '18',
              name: '安卓1.0',
              pid: 1,
              link: '/uploads/file/20210806/phpqrcode-2010100721_1.1.4.zip',
              litpic: '/uploads/allimg/20210803/4c8f6ad18656035a40c1a5cd226d759b.png',
              create_time: '2021-08-03'
            }
          ]
        },
        {
          id: 2,
          name: '苹果端',
          list: [
            {
              id: '19',
              name: '苹果端1.0',
              pid: 2,
              link: 'https://cli.im/',
              litpic: '/uploads/allimg/20210803/4c8f6ad18656035a40c1a5cd226d759b.png',
              create_time: '2021-08-03'
            }
          ]
        },
        {
          id: 3,
          name: 'PC端',
          list: [
            {
              id: '20',
              name: 'PC2.0',
              pid: 3,
              link: 'https://cli.im/',
              litpic: '/uploads/allimg/20210803/4c8f6ad18656035a40c1a5cd226d759b.png',
              create_time: '2021-08-03'
            },
            {
              id: '21',
              name: 'PC1.0',
              pid: 3,
              link: 'https://cli.im/',
              litpic: '/uploads/allimg/20210803/4c8f6ad18656035a40c1a5cd226d759b.png',
              create_time: '2021-08-03'
            }
          ]
        }
      ]
    }
  },
  methods: {
    Submit (key) {
    //   debugger
      var PageId = document.querySelector('#page' + key)
      console.log(PageId.offsetTop)
      window.scrollTo({
        top: PageId.offsetTop,
        behavior: 'smooth'
      })
    },
    getData: function () {
      axios.get('http://119.28.31.14/api/tagList').then(res => {
        this.tagList = res.data
      }).catch(err => {
        console.log(err)
      })
    }

  }

}
</script>

<style lang="scss" scoped>
@import "../../style/base.scss";

.header {
  width: 100%;
  background: url(../../assets/img/background.png) no-repeat;
  height: 950px;
  background-size: 100% 100%;
  overflow: hidden;
}
.head__content {
  overflow: hidden;
}
.logo__content {
  float: left;
  line-height: 90px;
}
.menu {
  float: right;
  line-height: 90px;
}
.logo__content {
  img {
    vertical-align: middle;
  }
  span {
    font-size: 30px;
    font-weight: 500;
    color: #2c2f43;
    margin-left: 12px;
  }
}
.menu ul li {
  float: left;
  margin-right: 60px;
}
.menu ul li a {
  height: 30px;
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  color: #2c2f43;
  cursor: pointer;
}
.banner__text {
  float: left;
  width: 498px;
  margin-top: 60px;
  h3 {
    font-size: 52px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 82px;
    color: #191c1f;
  }
  p {
    font-size: 40px;
    font-weight: 400;
    line-height: 82px;
    color: #191c1f;
  }
  p:nth-child(3) {
    color: #e12751;
  }
  span {
    font-size: 22px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 33px;
    color: #7078ac;
  }
  .download__btn {
    margin-top: 50px;
    position: relative;
  }
  .ap2 a {
    float: left;
  }
  .ap2 a.an2{
    margin-left: 60px;
  }

  /*APP下载*/
  .ap2 a.an1 .ios_ewm {
    width: 206px;
    height: 217px;
    position: absolute;
    top: 45px;
    left: -17px;
    background: url(../../assets/img/dropdownbox.png) no-repeat;
    background-size: 100%;
    opacity: 0;
    -webkit-transition: opacity 0.25s, transform 0.3s;
    -moz-transition: opacity 0.25s, transform 0.3s;
    transition: opacity 0.25s, transform 0.3s;
    img{
        position: absolute;
        top: 42px;
        left: 38px;
    }
  }
  .ap2 a.an1:hover .ios_ewm {
    visibility: visible;
    opacity: 1;
    max-width: none;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
  .ap2 a.an2 .an_ewm {
    width: 206px;
    height: 217px;
    position: absolute;
    top: 45px;
    right: 113px;
    background: url(../../assets/img/dropdownbox.png) no-repeat;
    background-size: 100%;
    -webkit-transition: opacity 0.25s, transform 0.3s;
    -moz-transition: opacity 0.25s, transform 0.3s;
    transition: opacity 0.25s, transform 0.3s;
    opacity: 0;
    img{
        position: absolute;
        top: 42px;
        left: 38px;
    }
  }
  .ap2 a.an2:hover .an_ewm {
    visibility: visible;
    opacity: 1;
  }
}
.banner__picture {
  float: right;
}
</style>
