import { FilterQuery,Document,QueryOptions,UpdateQuery } from "mongoose";

import Users,{userDocument} from '../models/users'


export function CreateUser(input: any) {
    console.log(input)
    input.createdOn=new Date()
    return Users.create(input)
}
export function findUser(filterQuery:FilterQuery<userDocument>,options:QueryOptions) {
    return Users.find(filterQuery,{},options);

}

export function FindAndUpdate(filterQuery:FilterQuery<userDocument>,update:UpdateQuery<userDocument>,options:QueryOptions) {
    console.log(filterQuery)
    console.log(update)
    return Users.updateOne({_id:filterQuery},update,options);
    
}

export function DeleteUser(filterQuery:FilterQuery<userDocument>) {
    return Users.deleteOne({_id:filterQuery.id});
    
}
