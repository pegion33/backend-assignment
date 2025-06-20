import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id/activities')
  async getUserActivities(@Param('id') id: string) {
    const userid = parseInt(id, 10);
    return this.userService.getUserActivitiesGroupedByCourse(userid);
  }
}
