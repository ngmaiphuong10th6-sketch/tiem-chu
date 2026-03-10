export const UserSchema = {

name:String,

email:String,

password:String,

role:{
type:String,
default:"student"
},

studentCode:String

}