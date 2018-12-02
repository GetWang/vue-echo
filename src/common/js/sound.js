/* 回声音乐类 */
export default class Sound {
  constructor ({id, name, length, exchange_count, like_count, comment_count, view_count, songInfo, info, lrc, user, pic_100, pic_200, pic_500, channel, channel_id}) {
    this.id = id
    this.name = name
    this.duration = +length
    this.shareCount = +exchange_count
    this.likeCount = +like_count
    this.commentCount = +comment_count
    this.viewCount = view_count || ''
    this.songInfo = songInfo || []
    this.info = info || ''
    this.lyric = lrc || ''
    this.pic_100 = pic_100
    this.pic_200 = pic_200
    this.pic_500 = pic_500
    this.userId = user.id
    this.userName = user.name
    this.avatar = user.avatar
    this.avatar_50 = user.avatar_50
    this.channelId = channel ? channel.id : (channel_id || '')
    this.channelName = channel ? channel.name : ''
  }
}