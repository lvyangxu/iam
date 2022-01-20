import { Controller, Get } from '@nestjs/common';
import { User } from './entity';
import { UserService } from './service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  async getHello(): Promise<User[]> {
    return this.appService.findAll();
  }
}
