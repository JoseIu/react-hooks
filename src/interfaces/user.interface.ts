export interface UserInterface {
  id: string;
  name: string;
  email: string;
  status: boolean;
  role: Role;
  image: string;
}

export enum Role {
  Estudiante = 'estudiante',
  Profesor = 'profesor',
}
