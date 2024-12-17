import { Body, Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post("login")
    login(@Body() input: {username: string, password: string}) {
        return this.authService.authenticate(input);
    }

    @Get("me")
    @UseGuards(AuthGuard)
    getUserInfo(@Request() request) {
        return request.user;
    }
}
