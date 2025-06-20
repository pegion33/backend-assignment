import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import { LessonEntity } from '../lesson/lesson.entity';
import { UserEntity } from '../user/user.entity';
import { CourseEntity } from '../course/course.entity';

@Entity({name: 'events'})
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  event_id: string;

  @Column({ type: 'timestamptz' })
  timestamp: Date;

  @Column()
  action: string;

  @Column()
  duration_minutes: number;

  @ManyToOne(() => UserEntity, user => user.events)
  user: UserEntity;

  @ManyToOne(() => CourseEntity, course => course.events)
  course: CourseEntity;

  @ManyToOne(() => LessonEntity, lesson => lesson.events)
  lesson: LessonEntity;
}