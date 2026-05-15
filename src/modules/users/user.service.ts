import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/common/auth/auth.service";

export type User = {
    id: number,
    email: string,
    password: string,
    name: string,
    isMarried: boolean
}

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  users: User[] = [
    {
      id: 101,
      email: 'keshava@gmail.com',
      password: 'Test1234',
      name: 'Keshava',
      isMarried: false,
    },
    {
      id: 102,
      email: 'veera@gmail.com',
      password: 'Test1234',
      name: 'Veera',
      isMarried: true,
    },
    {
      id: 103,
      email: 'tagore@gmail.com',
      password: 'Test1234',
      name: 'Tagore',
      isMarried: false,
    },
  ];

  getUsers() {
    if (this.authService.isAuthnicated) {
      return this.users;
    }
    return 'You are not logged in';
  }

  getUserById(id: number): User | string {
    if (this.authService.isAuthnicated) {
      const found = this.users.find((x: User) => x.id === id);
      if (!found) {
        return 'User not found';
      }
      return found;
    }
    return 'You are not logged in';
  }

  createUser(user: User) {
    if (this.authService.isAuthnicated) {
      this.users.push(user);
    }
    return 'You are not logged in';
  }
}