const db = require("../config/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let createdDate = `${yyyy}-${mm}-${dd}`;

    let sql = `INSERT INTO posts(title,body,created_at) VALUES('${this.title}', '${this.body}', '${createdDate}')`;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }


  static findAll() {
    let sql = "SELECT * FROM posts;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id=${id}`;
    return db.execute(sql);
  }

  static update(id, title, body) {
    let sql = `UPDATE posts SET title='${title}', body='${body}'
    WHERE id='${id}'`
    return db.execute(sql);
  }

  static delete(id) {
    let sql = `DELETE FROM posts WHERE id = '${id}'`
    return db.execute(sql);
  }


} // class

module.exports = Post;

/*
Luo Node.js REST API jossa käytät express:iä ja 
MariaDb:tä (tai MySQL:ää).

Luo tietokantasovellus node.js:ään. Luo ensin itsellesi 
MariaDb:llä esimerkin
tietokanta.

Lisää koodiisi REST rajapinnan mukaiset metodit: put, 
delete. Put:lla voit
päivittää tietyn id:n perusteella kenttiä title ja body.
Delete:llä voit poistaa
id:n perusteella tietueen. Noudata lisäämissäsi 
perusmetodeissa samaa
arkkitehtuuria kuin pohjakoodissa on noudatettu (model, 
controller, reititys).

Lopullisessa REST API:ssa on siis toteutettu metodit get, 
post, put ja delete.

Testaa sovellustasi Postman:lla että pääset tekemään 
kaikki operaatiot
tietokantaan (tietueiden haku, lisäys, päivitys, poisto). 

Lopuksi Lisää myös tämän projektin lähdekoodit githubin 
repositoryyn ja anna
opettajalle siihen myös pääsy. Samoin kommentoi 
kehittäjän blogiisi tämä
tehtävän osuus (kuten edellisessä tehtävässä)

*/