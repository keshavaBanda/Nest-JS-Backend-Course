import { UserService } from './user.service';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/getuser-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
  public user: string = 'keshava';

  constructor(private userService: UserService) { }

  // @Get(':isMarried')
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Param('isMarried') param: GetUserParamDto,
  ) {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  postUsers(@Body() user: CreateUserDto) {
    return "user has been created"
  }

  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    return "User updated successfully"
  }
}
