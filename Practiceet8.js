class user 
{
    name ;
    email;
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(this.name);
        console.log(this.email);
    }
}

let users = [];
let user1 = new user('Burhan','nqjkbdq' );
let user2 = new user('Ali','nqjkbdq' );
let user3 = new user(' Ahmed','nqjkbdq' );
users.push(user1);
users.push(user2);
users.push(user3);
users.forEach(element => {
    element.viewData();
});


//   inheritance
class admin extends user{
    constructor(name,email){
        super(name,email);
    }

    editName(name ){
        super.name = name;
    }
    editEmail(email){
        super.email = email;
    }
  
   
}
console.log("Admin >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

let admin1 = new admin('Burhan','nqjkbdq');
admin1.viewData();
admin1.editName('Ali');
admin1.editEmail('nqjkbdq');
admin1.viewData();