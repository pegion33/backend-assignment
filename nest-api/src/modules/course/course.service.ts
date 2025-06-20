import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from '../event/event.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepo: Repository<EventEntity>
  ) {}

  async getCourseStats(courseId: string) {
    const [totalEvents, avgDuration] = await Promise.all([
      this.eventRepo.count({
        where: { course: { id: courseId } }
      }),
      this.eventRepo
        .createQueryBuilder('event')
        .select('AVG(event.duration_minutes)', 'avg')
        .where('event.courseId = :courseId', { courseId })
        .getRawOne()
    ]);

    return {
      courseId,
      totalEvents,
      avgLessonDuration: parseFloat(avgDuration.avg) || 0
    };
  }
}
