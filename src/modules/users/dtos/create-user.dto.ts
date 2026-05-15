import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNumber()
  id!: number;

  @IsString()
  @IsNotEmpty({ message: 'Name is Mandatory' })
  @MinLength(3, { message: 'Name should be minimum 3 character' })
  name!: string;

  @IsString()
  @IsOptional()
  gender!: string;

  @IsEmail()
  email!: string;
  
  @IsBoolean()
  isMarried!: boolean;
}
