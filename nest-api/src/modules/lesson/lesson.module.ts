import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { LessonEntity } from './lesson.entity';
import { EventEntity } from '../event/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonEntity, EventEntity])],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}