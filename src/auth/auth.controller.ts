import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredential } from './dto/auth-credential.dto';
import { CreateComapanyDto } from './dto/create-company.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/singup')
  async singUp(@Body() createUserDto: CreateComapanyDto): Promise<any> {
    return await this.authService.createCompany(createUserDto);
  }

  @Post('/singin')
  async singIn(
    @Body() authCredetialDto: AuthCredential,
  ): Promise<{ accessToken: string }> {
    return await this.authService.findCompany(authCredetialDto);
  }
  //format document
  @Post('/singin-user')
  async singInUser(
    @Body() authCredetialDto: AuthCredential,
  ): Promise<{ accessToken: string }> {
    return await this.authService.findUser(authCredetialDto);
  }
}
