import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from './course.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

ApiTags('courses')
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @ApiOperation({ summary: 'Returns total events per course and average lesson duration' })
  @ApiResponse({ status: 200, description: 'total events per course and average lesson duration' })
  @Get(':id/stats')
  async getCourseStats(@Param('id') id: string) {
    return this.courseService.getCourseStats(id);
  }
}
