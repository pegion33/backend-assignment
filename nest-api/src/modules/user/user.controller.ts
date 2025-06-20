import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Returns a user’s events, grouped by course' })
  @ApiResponse({ status: 200, description: 'List of Users grouped by courses' })
  @Get(':id/activities')
  async getUserActivities(@Param('id') id: string) {
    const userid = parseInt(id, 10);
    return this.userService.getUserActivitiesGroupedByCourse(userid);
  }
}
