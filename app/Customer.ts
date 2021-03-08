import {User} from './User'

export class Customer implements User
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
    lastLoginDate: Date;

   firstName() : string
   {
       return this.nickname! ? this.nickname : this.fornames.split(" ")[0];
   }

   fullName() : string
   {
        return this.firstName() + ' ' + this.surname;
   }
}