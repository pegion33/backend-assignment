import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from '../event/event.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepo: Repository<EventEntity>
  ) {}

  async getPopularLessons(limit = 3) {
    return this.eventRepo
      .createQueryBuilder('event')
      .select('lesson.id', 'lessonid')
      .addSelect('lesson.title', 'title')
      .addSelect('COUNT(*)', 'eventcount')
      .leftJoin('event.lesson', 'lesson')
      .groupBy('lesson.id, lesson.title')
      .orderBy('eventcount', 'DESC')
      .limit(limit)
      .getRawMany();
  }
}
