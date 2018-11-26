import Sound from 'common/js/sound'

/* Channel 频道类 */
export default class Channel {
  constructor ({id, name, pic, pic_500, sound, info, sound_count, follow_count, share_count}) {
    this.id = id
    this.name = name
    this.pic = pic
    this.pic_500 = pic_500
    this.soundList = sound.map((item) => {
      return new Sound(item)
    })
    this.info = info
    this.soundCount = sound_count
    this.followCount = follow_count
    this.shareCount = share_count
  }
}