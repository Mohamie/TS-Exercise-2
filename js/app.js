/// <reference path="User.ts" />
var SalesRep = /** @class */ (function () {
    function SalesRep() {
    }
    SalesRep.prototype.firstName = function () {
        return this.fornames.split(" ")[0];
    };
    SalesRep.prototype.fullName = function () {
        return this.firstName() + ' ' + this.surname;
    };
    return SalesRep;
}());
/// <reference path="User.ts" />
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.firstName = function () {
        return this.nickname ? this.nickname : this.fornames.split(" ")[0];
    };
    Customer.prototype.fullName = function () {
        return this.firstName() + ' ' + this.surname;
    };
    return Customer;
}());
/// <reference path="SalesRep.ts" />
/// <reference path="Customer.ts" />
var manager = new Customer();
manager.fornames = "Thabelo Nelson";
manager.surname = "Mohamie";
manager.nickname = "Prof";
manager.emailAddress = "nelly@gmail.com";
manager.role = "Manager";
manager.dateCreated = new Date(2021, 3, 6);
manager.locked = true;
console.log("Sales Rep Manager Information");
console.log("FullName: " + manager.fullName());
console.log("Nickname: " + manager.nickname);
console.log("Email: " + manager.emailAddress);
console.log("Role: " + manager.role);
console.log("Created: " + manager.dateCreated);
console.log("Locked: " + (manager.locked ? 'Yes' : 'No'));
//# sourceMappingURL=app.js.map