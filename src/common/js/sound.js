/* 回声音乐类 */
export default class Sound {
  constructor ({id, name, length, exchange_count, like_count, comment_count, user, pic_100, pic_200, channel}) {
    this.id = id
    this.name = name
    this.duration = +length
    this.shareCount = +exchange_count
    this.likeCount = +like_count
    this.commentCount = +comment_count
    this.pic_100 = pic_100
    this.pic_200 = pic_200
    this.userId = user.id
    this.userName = user.name
    this.avatar_50 = user.avatar_50
    this.channelId = channel.id
    this.channelName = channel.name
  }
}