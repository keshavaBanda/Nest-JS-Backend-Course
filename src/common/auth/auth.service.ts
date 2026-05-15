import { UserService } from './../../modules/users/user.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    public isAuthnicated: boolean = false;
    constructor(@Inject(forwardRef(() => UserService)) private readonly UserService: UserService) { }

    login(email: string, password: string) {
        const user = this.UserService.users.find(u => u.email === email && u.password === password)
        if (user) {
            this.isAuthnicated = true;
            return 'Tokan_Generated'
        }
        return "User does not exists"
    }
}
