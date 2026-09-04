/*
1. Define a string literal union type UserStatus that accepts only "active",
   "inactive", or "pending". 
*/

type UserStatus = "active" | "inactive" | "pending";

/*
2. Define a tuple type Coordinate containing exactly two numbers: [latitude:
   number, longitude: number].
*/

type Coordinate = [latitude: number, longitude: number];

/*
3. Define a type alias UserProfile with properties: - id: readonly number -
   user: string - email: string - status: UserStatus - location: Coordinate -
   bio: optional string.
*/


type UserProfile = {

  readonly id: number;
  user: string;
  email: string;
  status: UserStatus;
  location: Coordinate;
  bio?: string;

};

const user: UserProfile = {
  id: 1,
  user: "simo",
  email: "simo@gmail.com",
  status: "active",
  location: [33.33, 66.66]
};

console.log(user);