import { IsEmail, IsString } from 'class-validator';

export class AuthCredential {
  @IsEmail()
  @IsString()
  email: string;
  @IsString()
  password: string;
}
