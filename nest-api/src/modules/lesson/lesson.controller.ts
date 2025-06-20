import { Controller, Get } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


ApiTags('lessons')
@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @ApiOperation({ summary: 'Returns top 3 lessons by event count' })
  @ApiResponse({ status: 200, description: 'List of popular lessons' })
  @Get('popular')
  async getPopularLessons() {
    return this.lessonService.getPopularLessons();
  }
}
