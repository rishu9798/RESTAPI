
export default class UserModel{
    constructor(name, email,password,role,id){
        this.name= name;
        this.email=email;
        this.password=password;
        this.role=role;
        this._id= id;

    }
}