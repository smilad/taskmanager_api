import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateComapanyDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsString({ message: 'کد دعوت الزامی است' })
  inviteKey: string;
}
