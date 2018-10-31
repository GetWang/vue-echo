/* 回声音乐类 */
export default class Sound {
  constructor ({id, name, user, pic_100, pic_200}) {
    this.id = id
    this.name = name
    this.pic_100 = pic_100
    this.pic_200 = pic_200
    this.userId = user.id
    this.userName = user.name
    this.avatar_50 = user.avatar_50
  }
}