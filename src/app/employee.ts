export interface Employee {
    id: number;
    name: string;
    lastname: string;
    email: string;
    typeuser: TypeUser;
  }

export interface TypeUser {
    id: number;
    name: string;
}