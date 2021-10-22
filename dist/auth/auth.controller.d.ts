import { AuthService } from './auth.service';
import { AuthCredential } from './dto/auth-credential.dto';
import { CreateComapanyDto } from './dto/create-company.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    singUp(createUserDto: CreateComapanyDto): Promise<any>;
    singIn(authCredetialDto: AuthCredential): Promise<{
        accessToken: string;
    }>;
    singInUser(authCredetialDto: AuthCredential): Promise<{
        accessToken: string;
    }>;
}
