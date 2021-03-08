import {Customer} from './Customer'
import {SalesRep} from './SalesRep'


const manager: Customer = new Customer();

manager.fornames = "Thabelo Nelson"; 
manager.surname = "Mohamie"; 
manager.nickname = "Prof";
manager.emailAddress = "nelly@gmail.com";
manager.role = "Manager";
manager.dateCreated = new Date(2021, 3, 6);
manager.locked = true;



console.log("Sales Rep Manager Information")
console.log(`FullName: ${manager.fullName()}`)
console.log(`Nickname: ${manager.nickname}`)
console.log(`Email: ${manager.emailAddress}`)
console.log(`Role: ${manager.role}`)
console.log(`Created: ${manager.dateCreated}`)
console.log(`Locked: ${manager.locked ? 'Yes' : 'No'}`)