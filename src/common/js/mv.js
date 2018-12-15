import Comment from './comment'

/* MV视频类 */
export default class MV {
  constructor ({
    id,
    name,
    user,
    pic_url,
    cover_url,
    cover_url_260,
    info,
    like_count,
    share_count,
    bullet_count,
    view_count,
    source,
    comments
  }) {
    this.id = id
    this.name = name
    this.pic_url = pic_url || ''
    this.cover_url = cover_url || ''
    this.cover_url_260 = cover_url_260 || ''
    this.info = info || ''
    this.likeCount = +like_count
    this.shareCount = +share_count
    this.commentCount = +bullet_count || 0
    this.viewCount = +view_count
    this.source = source || ''
    this.userId = user.id
    this.userName = user.name
    this.avatar_50 = user.avatar_50
    this.commentList = Array.isArray(comments) ? comments.map((item) => {
      return new Comment(item)
    }) : []
  }
}