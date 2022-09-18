import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */
// Crée un objet à partir d'un type en excluant une propriété
type MyType = Omit<User, "id">;

// Crée un objet à partir d'un type en utilisant certaines de ces propriétés
// type MyType = Pick<User, "firstName" | "lastName" >;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
