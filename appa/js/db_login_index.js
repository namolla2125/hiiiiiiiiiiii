const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../db/main.db');
function start(){
  db.all("SELECT id FROM account", (err, rows) => {
    if(err) throw err;
    // for(let row of rows){
    //     console.log(row);
    // }
    console.log(rows);
    id__(rows);
  })
  db.all("SELECT pw FROM account", (err, rows) => {
      if(err) throw err;
      // for(let row of rows){
      //     console.log(row);
      // }
      console.log(rows);
      id__(rows);
  })
  db.close();
}

let login_id = "";
let login_pw = "";
function _keyupid(){
  login_id = document.getElementById("login-id").value;
  
}
function _keyuppw(){
  login_pw = document.getElementById("login-pw").value;
  
}
function id__(id){
    var a = 0;
    for(let id_ of id["id"]){
        if( id_ === login_id ){
            a = 1;
        }
    }
}
function pw__(pw){
    var a = 0;
    for(let pw_ of pw["pw"]){
        if( pw_ === login_pw ){
            if(a == 1){
                alert("로그인이 성공적으로 완료 되었습니다."); 
                window.sessionStorage.setItem(
                    "userNickname",
                    login_id
                );
                window.sessionStorage.setItem(
                    "userPassword",
                    login_pw
                );
            }    
        }
    }
}