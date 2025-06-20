import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { CourseEntity } from './course.entity';
import { LessonEntity } from '../lesson/lesson.entity';
import { EventEntity } from '../event/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, LessonEntity, EventEntity])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}