import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get(':id/stats')
  async getCourseStats(@Param('id') id: string) {
    return this.courseService.getCourseStats(id);
  }
}
