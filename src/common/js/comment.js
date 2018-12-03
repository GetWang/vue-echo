import User from './user'

/* Comment 评论类 */
export default class Comment {
  constructor ({
    id,
    content,
    like,
    sound_id,
    user
  }) {
    this.id = id
    this.content = content || ''
    this.likeCount = like || 0
    this.soundId = sound_id || ''
    this.user = user ? new User(user) : {}
  }
}