import { Injectable } from '@nestjs/common';

export class User {
    userId: number;
    username: string;
    password: string;
}

const user: User[] = [
    {
        userId: 1,
        username: "Alice",
        password: "topsecret"
    },
    {
        userId: 2,
        username: "Bob",
        password: "123456"
    }
]

@Injectable()
export class UsersService {
    async findUserByName(username: string): Promise<User | undefined> {
        return user.find(user => user.username === username);
    }
}
