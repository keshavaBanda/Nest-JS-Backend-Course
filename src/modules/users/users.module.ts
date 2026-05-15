import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/common/auth/auth.module';

@Module({
  imports: [forwardRef(()=> AuthModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UsersModule { }
