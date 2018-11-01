/* Album 专辑类 */
export default class Album {
  constructor ({id, name, cover_url, user, score}) {
    this.id = id
    this.name = name
    this.cover_url = cover_url
    this.userId = user.id
    this.userName = user.name
    this.average_score = score.average_score
  }
}