import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from '../event/event.entity';
import { isEmpty } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepo: Repository<EventEntity>
  ) {}

  async getUserActivitiesGroupedByCourse(userid: number) {
    const events = await this.eventRepo.find({
      where: { user: { id: userid } },
      relations: ['course'],
      order: { timestamp: 'ASC' }
    });

    const grouped = events.reduce((acc, event) => {
      const courseid = event.course.id;
      if (!acc[courseid]) {
        acc[courseid] = {
          courseTitle: event.course.title,
          events: []
        };
      }
      acc[courseid].events.push({
        event_id: event.event_id,
        timestamp: event.timestamp,
        action: event.action,
        duration_minutes: event.duration_minutes
      });
      return acc;
    }, {});
    
    return grouped;
  }
}
