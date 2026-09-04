/*
1. Define a string literal union type UserStatus that accepts only "active", "inactive", or "pending". 
*/

type UserStatus = "active" | "inactive" | "pending";

/*
2. Define a tuple type Coordinate containing exactly two numbers: [latitude: number, longitude: number].
*/

type Coordinate = [latitude: number, longitude: number];

/*
3. Define a type alias UserProfile with properties: - id: readonly number - user: string - email: string - status: UserStatus - location: Coordinate - bio: optional string.
*/
