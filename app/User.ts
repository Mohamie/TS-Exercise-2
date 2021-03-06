export interface User
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
    firstName: () => string;
    fullName: () => string;
}