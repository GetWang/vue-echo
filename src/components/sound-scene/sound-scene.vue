<template>
  <!-- 声音场景组件 -->
  <ul class="sound-scene">
    <li class="scene" v-for="scene in scenes" :key="scene.id"
        :class="scene.sceneClass" @click="_getSceneSoundList(scene.idList)">
      <div class="cover">
        <div class="gifPic"></div>
        <div class="mask"><span class="play"></span></div>
      </div>
      <p class="name">{{scene.name}}</p>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  import {getSceneSoundList} from 'api/sound'

  export default {
    name: 'SoundScene',
    props: {
      // 所有声音场景 sounds 的 id 列表
      sceneSoundIdList: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        // 声音场景数据
        scenes: [
          {
            id: 'lunch-tea',
            name: '午后红茶',
            sceneClass: ['lunch-tea'],
            idList: []
          },
          {
            id: 'work-study',
            name: '工作学习',
            sceneClass: ['work-study'],
            idList: []
          },
          {
            id: 'deep-night',
            name: '深夜居酒屋',
            sceneClass: ['deep-night'],
            idList: []
          },
          {
            id: 'weekend-party',
            name: '周末聚会',
            sceneClass: ['weekend-party'],
            idList: []
          },
          {
            id: 'relax-mood',
            name: '放松心情',
            sceneClass: ['relax-mood'],
            idList: []
          }
        ]
      }
    },
    watch: {
      /* 更新每个声音场景的 id 列表 */
      sceneSoundIdList (newList) {
        newList.forEach((item, index) => {
          this.scenes[index].idList = item
        })
      }
    },
    methods: {
      /* 获取声音场景 sound 列表 */
      _getSceneSoundList (idList) {
        const ids = idList.join(',')
        getSceneSoundList(ids).then(res => {
          console.log('res', res)
        })
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import "~common/less/variable";

  .sound-scene {
    .scene {
      display: inline-block;
      margin-right: 1px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      .cover {
        position: relative;
        width: 150px;
        height: 150px;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .gifPic {
          display: none;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: 100% 100%;
        }
        .mask {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("./image/mask-bg.png") repeat 0 0;
          .play {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50px;
            height: 50px;
            margin: -25px 0 0 -25px;
            background: url("./image/play.png") no-repeat center center;
          }
        }
      }
      .name {
        height: 20px;
        padding: 11px 0;
        font-size: @font-size-small;
        line-height: 20px;
        text-align: center;
        color: @color-text;
        transition: color .2s ease-in-out;
      }
      &:hover {
        .cover {
          .gifPic {
            display: block;
          }
          .mask {
            display: block;
          }
        }
        .name {
          color: @color-theme;
        }
      }
      &.lunch-tea {
        .cover {
          background-image: url("./image/lunch-tea.jpg");
          .gifPic {
            background-image: url("./image/lunch-tea.gif");
          }
        }
      }
      &.work-study {
        .cover {
          background-image: url("./image/work-study.jpg");
          .gifPic {
            background-image: url("./image/work-study.gif");
          }
        }
      }
      &.deep-night {
        .cover {
          background-image: url("./image/deep-night.jpg");
          .gifPic {
            background-image: url("./image/deep-night.gif");
          }
        }
      }
      &.weekend-party {
        .cover {
          background-image: url("./image/weekend-party.jpg");
          .gifPic {
            background-image: url("./image/weekend-party.gif");
          }
        }
      }
      &.relax-mood {
        .cover {
          background-image: url("./image/relax-mood.png");
          .gifPic {
            background-image: url("./image/relax-mood.gif");
          }
        }
      }
    }
  }
</style>
