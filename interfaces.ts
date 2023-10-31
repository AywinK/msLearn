
interface Employee {
    firstName: string,
    lastName: string,
    fullName(): string
}

let employee: Employee = {
    firstName: "Emil",
    lastName: "And",
    fullName() {
        return this.firstName + " " + this.lastName
    },
}