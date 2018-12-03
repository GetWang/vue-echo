/* User 用户类 */
export default class User {
  constructor ({
    id,
    name,
    avatar,
    avatar_50,
    avatar_150,
    content,
    followed_count
  }) {
    this.id = id
    this.name = name
    this.avatar = avatar || ''
    this.avatar_50 = avatar_50
    this.avatar_150 = avatar_150
    this.desc = content || ''
    this.followed_count = followed_count
  }
}