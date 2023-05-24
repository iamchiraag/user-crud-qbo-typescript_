import {Schema,model,Document} from "mongoose";
export interface userDocument extends Document{
    firstName:string,
    lastName:string
    gender:string
    email:string
    dept:string
    phone:number
    createdOn:Date
}

interface Users{
    firstName:string,
    lastName:string
    gender:string
    email:string
    dept:string
    phone:number
    createdOn:Date
}

const UserSchema= new Schema<Users>({
    firstName:{
        type:String,
        required:true
    },
    
    lastName:{
        type:String,
        required:true
    },
    
    gender:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    
    dept:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    
    createdOn:{
        type:Date,
        required:true
    }
})


const userModl = model<Users>('user',UserSchema);


export default userModl