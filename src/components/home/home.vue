<template>
  <!-- 首页 -->
  <main class="home">
    <section class="content-left">
      <!-- 声音场景 -->
      <sound-scene></sound-scene>
      <!-- 回声榜 -->
      <ul class="echo-rank">
        <li class="rank" v-for="rank in rankList" :key="rank.rankClass" :class="[rank.rankClass]">
          <div class="rank-header">
            <h2 class="rank-name">{{rank.name}}</h2>
            <a class="enter-rank" :href="rank.rankLink">进入榜单</a>
          </div>
          <div class="rank-main">
            <a :href="rank.rankLink" class="rank-type"></a>
            <div class="rank-list">
              <div class="rank-item top1">
                <a :href="rank.soundLink + rank.top1.id" class="cover-link">
                  <img :src="rank.top1.pic_200 || rank.top1.pic_url" :alt="rank.top1.name" class="cover">
                </a>
                <div class="sound-info">
                  <h3 class="rank1">TOP 1</h3>
                  <p class="sound-name"><a :href="rank.soundLink + rank.top1.id" class="link">{{rank.top1.name}}</a></p>
                  <a class="user-info" :href="rank.userLink + rank.top1.userId">
                    <img :src="rank.top1.avatar_50" :alt="rank.top1.userName" class="avatar">
                    <span class="username">{{rank.top1.userName}}</span>
                  </a>
                </div>
              </div>
              <ul class="rank-top2and3">
                <li class="rank-item top2" v-for="(item, index) in rank.top2and3" :key="item.id">
                  <a :href="rank.soundLink + item.id" class="cover-link">
                    <img :src="item.pic_200 || item.pic_url" :alt="item.name" class="cover">
                  </a>
                  <div class="sound-info">
                    <div class="sound-name">
                      <i class="rank-num">{{index + 2}}</i>
                      <a :href="rank.soundLink + item.id" class="link">{{item.name}}</a>
                    </div>
                    <p class="username">
                      <a :href="rank.userLink + item.userId" class="link">{{item.userName}}</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      <!-- echo名人 -->
      <div class="echo-famous">
        <div class="famous-header">
          <h2 class="title">echo名人</h2>
          <a class="enter-famous" href="#/famous">查看全部</a>
        </div>
        <ul class="famous-list">
          <li class="famous-item" v-for="famous in famousUserList" :key="famous.id">
            <a class="famous-link" :href="'#/user/' + famous.id">
              <img :src="famous.avatar_150" :alt="famous.name" class="avatar">
              <p class="famous-name">{{famous.name}}</p>
              <p class="follower"><span class="num">{{famous.followed_count}}人</span>关注</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 专辑 -->
      <div class="echo-album">
        <div class="album-header">
          <h2 class="title">专辑</h2>
          <a href="#/album" class="enter-album">查看全部</a>
        </div>
        <ul class="album-list">
          <li class="album-item" v-for="album in albumList" :key="album.id">
            <a :href="'#/album/' + album.id" class="album-link">
              <img :src="album.cover_url" :alt="album.name" class="cover">
              <h3 class="album-name">{{album.name}}</h3>
              <p class="user-name">{{album.userName}}</p>
              <div class="score-wrapper">
                <ul class="star-list">
                  <li class="star" v-for="i in 5" :key="i" :class="getStarCls(album.average_score, i)"></li>
                </ul>
                <span class="score">{{album.average_score}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="content-right">
      <day-choose></day-choose>
    </section>
  </main>
</template>

<script type="text/ecmascript-6">
  import SoundScene from 'components/sound-scene/sound-scene'
  import DayChoose from 'components/day-choose/day-choose'
  import { getRankChoose } from 'api/home'
  import { getFamousUser } from 'api/user'
  import { getHomeAlbum } from 'api/album'
  import { STATUS_OK } from 'api/config'
  import Sound from 'common/js/sound'
  import MV from 'common/js/mv'
  import User from 'common/js/user'
  import Album from 'common/js/album'

  export default {
    name: 'Home',
    data () {
      return {
        // 回声榜列表
        rankList: [],
        // echo 名人列表
        famousUserList: [],
        // 专辑列表
        albumList: []
      }
    },
    created () {
      this._getRankChoose()
      this._getFamousUser()
      this._getHomeAlbum()
    },
    methods: {
      /* 获取首页回声榜和每日精选数据 */
      _getRankChoose () {
        getRankChoose().then(res => {
          if (res.status === STATUS_OK) {
            this.handleRankChoose(res)
          }
        }).catch(err => {
          console.log('api/getRankChoose error', err)
        })
      },
      /* 获取首页 echo 名人数据 */
      _getFamousUser () {
        getFamousUser().then(res => {
          if (res.status === STATUS_OK) {
            this.handleFamousUser(res)
          }
        }).catch(err => {
          console.log('api/getFamousUser error', err)
        })
      },
      /* 获取首页专辑数据 */
      _getHomeAlbum () {
        getHomeAlbum().then(res => {
          if (res.status === STATUS_OK) {
            this.handleHomeAlbum(res)
          }
        }).catch(err => {
          console.log('api/getHomeAlbum error', err)
        })
      },
      /* 处理首页回声榜和每日精选数据 */
      handleRankChoose (data) {
        const soundHot = {
          name: '热门回声榜',
          rankClass: 'sound-hot',
          rankLink: '#/rank/sound-hot',
          soundLink: '#/sound/',
          userLink: '#/user/',
          top1: new Sound(data.rank.sound_hot.daily[0]),
          top2and3: [new Sound(data.rank.sound_hot.daily[1]), new Sound(data.rank.sound_hot.daily[2])]
        }
        const soundOrigin = {
          name: '原创回声榜',
          rankClass: 'sound-origin',
          rankLink: '#/rank/sound-origin',
          soundLink: '#/sound/',
          userLink: '#/user/',
          top1: new Sound(data.rank.sound_origin.daily[0]),
          top2and3: [new Sound(data.rank.sound_origin.daily[1]), new Sound(data.rank.sound_origin.daily[2])]
        }
        const mvHot = {
          name: '视频回声榜',
          rankClass: 'mv-hot',
          rankLink: '#/rank/mv-hot',
          soundLink: '#/mv/',
          userLink: '#/user/',
          top1: new MV(data.rank.mv_hot.daily[0]),
          top2and3: [new MV(data.rank.mv_hot.daily[1]), new MV(data.rank.mv_hot.daily[2])]
        }
        this.rankList.push(soundHot, soundOrigin, mvHot)
      },
      /* 处理首页 echo 名人数据 */
      handleFamousUser (data) {
        data.lists.forEach((item) => {
          this.famousUserList.push(new User(item))
        })
      },
      /* 处理首页专辑数据 */
      handleHomeAlbum (data) {
        let len = data.list.length
        for (let i = 0; i < 4 && i < len; i++) {
          this.albumList.push(new Album(data.list[i]))
        }
      },
      /* 计算出专辑评分的 star 样式类名 */
      getStarCls (score, index) {
        let arr = []
        let starCount = 0
        score = Number(score)
        // 专辑中评分 star 的个数
        if (score !== 0) {
          starCount = Math.min(5, Math.floor(score / 2) + 1)
        }
        if (index <= starCount) {
          arr.push('star-on')
        } else {
          arr.push('star-off')
        }
        return arr
      }
    },
    components: {
      SoundScene,
      DayChoose
    }
  }
</script>

<style lang="less" scoped rel="stylesheet/less">
  @import "~common/less/variable";

  .home {
    width: 1000px;
    margin: 15px auto;
    overflow: hidden;
    .content-left {
      float: left;
      margin-right: 15px;
      background-color: #fff;
      .echo-rank {
        .rank {
          margin: 35px 30px;
          .rank-header {
            position: relative;
            margin-bottom: 19px;
            .rank-name {
              font-size: @font-size-large-x;
              line-height: 28px;
              text-align: left;
              color: @color-text;
            }
            .enter-rank {
              position: absolute;
              right: 0;
              bottom: 0;
              font-size: @font-size-medium;
              line-height: 20px;
              text-decoration: none;
              color: @color-theme;
            }
          }
          .rank-main {
            overflow: hidden;
            .rank-type {
              float: left;
              width: 90px;
              height: 150px;
              margin-right: 5px;
              background-repeat: no-repeat;
              background-position: 0 0;
              background-size: 100% 100%;
            }
            .rank-list {
              float: left;
              overflow: hidden;
              .rank-item {
                overflow: hidden;
                .cover-link {
                  display: block;
                  float: left;
                  .cover {
                    width: 100%;
                    height: 100%;
                  }
                }
                .sound-info {
                  float: right;
                }
                &.top1 {
                  float: left;
                  margin-right: 5px;
                  .cover-link {
                    width: 150px;
                    height: 150px;
                  }
                  .sound-info {
                    width: 182px;
                    height: 150px;
                    margin-left: -10px;
                    padding: 17px 20px 10px;
                    box-sizing: border-box;
                    background: url("./top1-bg.png") no-repeat 0 0;
                    background-size: 100% 100%;
                    .rank1 {
                      margin-bottom: 10px;
                      font-size: @font-size-medium-x;
                    }
                    .sound-name {
                      height: 40px;
                      margin-bottom: 28px;
                      overflow: hidden;
                      .link {
                        display: block;
                        height: 100%;
                        font-size: @font-size-small;
                        line-height: 20px;
                        text-decoration: none;
                        color: @color-text;
                      }
                    }
                    .user-info {
                      display: block;
                      position: relative;
                      height: 22px;
                      padding-left: 22px;
                      overflow: hidden;
                      line-height: 22px;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      text-decoration: none;
                      .avatar {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 22px;
                        height: 22px;
                        border-radius: 50%;
                      }
                      .username {
                        margin-left: 8px;
                        font-size: @font-size-small-s;
                        color: @color-text-ll;
                      }
                    }
                  }
                }
                &.top2, &.top3 {
                  margin-bottom: 2px;
                  .cover-link {
                    width: 73px;
                    height: 73px;
                  }
                  .sound-info {
                    width: 199px;
                    height:73px;
                    padding: 8px 20px 0 10px;
                    border: 1px solid #f4f4f4;
                    border-left: none;
                    box-sizing: border-box;
                    background-color: #fff;
                    .sound-name {
                      position: relative;
                      height: 36px;
                      margin-bottom: 10px;
                      overflow: hidden;
                      .rank-num {
                        position: absolute;
                        top: 0;
                        left: 0;
                        padding: 1px 5px;
                        font-size: @font-size-small-s;
                        font-style: normal;
                        line-height: 16px;
                        color: #fff;
                      }
                      .link {
                        display: block;
                        height: 100%;
                        font-size: @font-size-small;
                        line-height: 18px;
                        text-indent: 25px;
                        text-decoration: none;
                        color: @color-text;
                      }
                    }
                    .username {
                      .link {
                        display: block;
                        height: 100%;
                        overflow: hidden;
                        font-size: @font-size-small-s;
                        line-height: 14px;
                        text-decoration: none;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: @color-text-ll;
                      }
                    }
                  }
                }
              }
              .rank-top2and3 {
                float: left;
              }
            }
          }
          &.sound-hot {
            .rank-type {
              background-image: url("./sound-hot-rank.png");
            }
            .sound-info {
              .rank1 {
                color: @color-rank-hot;
              }
              .rank-num {
                background-color: @color-rank-hot;
              }
            }
          }
          &.sound-origin {
            .rank-type {
              background-image: url("./sound-origin-rank.png");
            }
            .sound-info {
              .rank1 {
                color: @color-rank-origin;
              }
              .rank-num {
                background-color: @color-rank-origin;
              }
            }
          }
          &.mv-hot {
            .rank-type {
              background-image: url("./mv-hot-rank.png");
            }
            .sound-info {
              .rank1 {
                color: @color-rank-mv;
              }
              .rank-num {
                background-color: @color-rank-mv;
              }
            }
          }
        }
      }
      .echo-famous {
        margin: 35px 30px 0;
        .famous-header {
          position: relative;
          margin-bottom: 25px;
          .title {
            font-size: @font-size-large-x;
            line-height: 28px;
            text-align: left;
            color: @color-text;
          }
          .enter-famous {
            position: absolute;
            right: 0;
            bottom: 0;
            font-size: @font-size-medium;
            line-height: 20px;
            text-decoration: none;
            color: @color-theme;
          }
        }
        .famous-list {
          overflow: hidden;
          .famous-item {
            float: left;
            width: 107px;
            margin-right: 35px;
            &:last-child {
              margin-right: 0;
            }
            .famous-link {
              display: block;
              text-decoration: none;
              .avatar {
                display: block;
                width: 107px;
                height: 107px;
                margin-bottom: 8px;
              }
              .famous-name {
                margin-bottom: 5px;
                overflow: hidden;
                font-size: @font-size-small;
                line-height: 18px;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: @color-text-d;
                &:after {
                  content: 'v';
                  display: inline-block;
                  width: 15px;
                  height: 15px;
                  margin: 2px 0 0 5px;
                  border-radius: 50%;
                  font-size: @font-size-small-s;
                  line-height: 15px;
                  text-align: center;
                  vertical-align: top;
                  color: #fff;
                  background-color: @color-theme-d;
                }
              }
              .follower {
                font-size: @font-size-small-s;
                line-height: 14px;
                color: @color-text-l;
                .num {
                  margin-right: 4px;
                }
              }
            }
          }
        }
      }
      .echo-album {
        margin: 35px 30px 0;
        .album-header {
          position: relative;
          margin-bottom: 23px;
          .title {
            font-size: @font-size-large-x;
            line-height: 28px;
            text-align: left;
            color: @color-text;
          }
          .enter-album {
            position: absolute;
            right: 0;
            bottom: 0;
            font-size: @font-size-medium;
            line-height: 20px;
            text-decoration: none;
            color: @color-theme;
          }
        }
        .album-list {
          overflow: hidden;
          .album-item {
            float: left;
            width: 150px;
            margin-right: 29px;
            &:last-child {
              margin-right: 0;
            }
            .album-link {
              display: block;
              text-decoration: none;
              .cover {
                display: block;
                width: 150px;
                height: 150px;
                margin-bottom: 10px;
              }
              .album-name {
                margin-bottom: 3px;
                overflow: hidden;
                font-size: @font-size-small;
                font-weight: normal;
                line-height: 20px;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: @color-text-dd;
              }
              .user-name {
                overflow: hidden;
                font-size: @font-size-small-s;
                line-height: 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: @color-text;
              }
              .score-wrapper {
                overflow: hidden;
                .star-list {
                  float: left;
                  height: 18px;
                  margin-right: 14px;
                  padding-top: 3px;
                  box-sizing: border-box;
                  font-size: 0;
                  .star {
                    display: inline-block;
                    width: 11px;
                    height: 11px;
                    margin-right: 5px;
                    background-repeat: no-repeat;
                    background-position: 0 0;
                    background-size: 100% 100%;
                    &:last-child {
                      margin-right: 0;
                    }
                    &.star-on {
                      background-image: url("./star-on.png");
                    }
                    &.star-off {
                      background-image: url("./star-off.png");
                    }
                  }
                }
                .score {
                  float: left;
                  height: 18px;
                  font-size: @font-size-small;
                  line-height: 18px;
                  color: @color-text-ll;
                }
              }
            }
          }
        }
      }
    }
    .content-right {
      float: left;
      padding-top: 20px;
    }
  }
</style>