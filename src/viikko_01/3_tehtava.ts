/*
1. Define an interface Entity 
-with readonly id: string. 
*/
interface Entity {
    readonly id: string;
}

/* 2. Create an 
-abstract class BaseRepository<T extends Entity>:
 -private items: Map<string, T> = new Map() 
 -protected log(action: string, entityId: string): void (stores or prints log)
 -public add(item: T): void (stores item in Map and calls protected log("ADD",
   item.id)) 
 -public getById(id: string): T | undefined (retrieves item by id) 
 -public getAll(): readonly T[] (returns array of all items) 
 -public abstract validate(item: T): boolean (abstract method) 
*/
// Tyypin pitää toteuttaa Entity-rajapinta
abstract class BaseRepository<T extends Entity> {

    private items: Map<string, T> = new Map();
    protected log(action: string, entityId: string): void {
        console.log(action, entityId);
    };
    public add(item: T): void {
        // Annetaan avain ja arvo
        this.items.set(item.id, item);
        this.log("ADD", item.id)
    };
    public getById(id: string): T | undefined {
        return this.items.get(id);
    };

    public getAll(): readonly T[] {
        const itemsArray = Array.from(this.items.values());
        return itemsArray;
    };
    public abstract validate(item: T): boolean;
}


/*
3. Create a concrete class UserRepository 
extending BaseRepository<User> where User has 
id: string, 
name: string, 
age: number. 
In validate, 
return true if  age >= 18 and name.length > 0. 
If add is called with an invalid user, throw an Error.

*/

class User {
    id: string;
    name: string;
    age: number;

    constructor(id: string, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

}
class UserRepository extends BaseRepository<User> {
    // Abstraktin luokan metodi
    public validate(item: User): boolean {

        return item.age >= 18 && item.name.length > 0;
    }
    // Allekirjoitus pitää olla sama, vaikka runko olisi erilainen
    public override add(user: User) {
        if (!this.validate(user)) {
            throw new Error("Invalid user");
        }
        super.add(user);
    }
}
// TESTAUS:

const repository = new UserRepository();
const user1 = new User("1", "Simeon", 5);
const user2 = new User("2", "Nestori", 19);
const user3 = new User("3", "Elmeri", 18);
const user4 = new User("4", "", 18);

repository.add(user2);
repository.add(user3);

console.log(repository.getAll());
console.log(repository.getById("3"));




