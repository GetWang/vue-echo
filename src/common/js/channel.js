import Sound from 'common/js/sound'

/* Channel 频道类 */
export default class Channel {
  constructor ({id, name, pic_500, sound, sound_count, follow_count, share_count}) {
    this.id = id
    this.name = name
    this.pic_500 = pic_500
    this.soundList = sound.map((item) => {
      return new Sound(item)
    })
    this.soundCount = sound_count
    this.followCount = follow_count
    this.shareCount = share_count
  }
}