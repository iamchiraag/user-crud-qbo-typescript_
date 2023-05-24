import {ResponseStatus} from '../enum';

export class commonresponse{
    public ResponseStatus!: ResponseStatus;    
    public Result!: any;
    public Message!: string;
}