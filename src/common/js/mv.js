/* MV视频类 */
export default class MV {
  constructor ({id, name, user, pic_url, cover_url_260}) {
    this.id = id
    this.name = name
    this.pic_url = pic_url
    this.cover_url_260 = cover_url_260 || ''
    this.userId = user.id
    this.userName = user.name
    this.avatar_50 = user.avatar_50
  }
}