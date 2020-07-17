<template>
  <div class="home">
    <canvas id="sakura"></canvas>
    <div class="content">
      <div class="home-header">
        <router-link class="link" to="/posts">
          <img class="home-logo" src="../../assets/logo.jpg" alt="logo" />
        </router-link>
      </div>
      <div class="home-body">
        <div class="list">
<!--          <router-link class="link" to="/posts">文章</router-link>-->
          <a class="link" href="/posts">文章</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://github.com/ShibaPipi">
            github
          </a>
        </div>
        <div class="introduce">左手代码右手诗&nbsp;&nbsp;&nbsp;&nbsp;心中编程口中歌</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { init as sakura } from '../../utils/sakura'

  export default {
    name: 'Home',
    mounted() {
      sakura()
    }
  }
</script>

<style lang="less" scoped>
  .home {
    position: fixed;
    left: 0;
    top: 0;

    .content {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      font-size: 20px;
      text-align: center;
      padding-top: 12%;

      .home-logo {
        width: 220px;
        border-radius: 50%;
        animation: myLogo 3s;
        -moz-animation: myLogo 3s; /* Firefox */
        -webkit-animation: myLogo 3s; /* Safari and Chrome */
        -o-animation: myLogo 3s; /* Opera */
        animation-iteration-count: infinite;
      }

      .home-header {
        .link {
          display: block;
        }
      }

      .home-body {
        padding-top: 20px;

        .list {
          .link {
            display: inline-block;
            padding: 20px;
            color: #409eff;
            min-width: 80px;
          }

          .link:hover {
            color: rgb(155, 35, 35);
          }
        }
      }

      .introduce {
        padding-top: 20px;
        color: #fff;
      }
    }
  }

  @keyframes myLogo {
    0% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
    25% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 0.8;
    }
    100% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
  }

  @-moz-keyframes myLogo {
    0% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
    25% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 0.8;
    }
    100% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
  }

  @-webkit-keyframes myLogo {
    0% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
    25% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 0.8;
    }
    100% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
  }

  @-o-keyframes myLogo {
    0% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
    25% {
      transform: rotate(0deg) scale(1, 1);
      opacity: 0.8;
    }
    100% {
      transform: rotate(0deg) scale(0.8, 0.8);
      opacity: 1;
    }
  }
</style>
