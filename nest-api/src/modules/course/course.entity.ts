import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { EventEntity } from '../event/event.entity';

@Entity({name: 'courses'})
export class CourseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @OneToMany(() => EventEntity, event => event.course)
  events: EventEntity[];
}