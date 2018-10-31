/* User 用户类 */
export default class User {
  constructor ({id, name, avatar_150, followed_count}) {
    this.id = id
    this.name = name
    this.avatar_150 = avatar_150
    this.followed_count = followed_count
  }
}