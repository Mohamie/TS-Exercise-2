import {User} from './User'

export class SalesRep implements User
{
    fornames: string;
    surname: string;
    nickname?: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean;
    failedLoginAttempts: number;


    firstName() : string
   {
       return this.fornames.split(" ")[0];
   }

   fullName() : string
   {
        return this.firstName() + ' ' + this.surname;
   }
}