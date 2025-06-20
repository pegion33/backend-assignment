import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { EventEntity } from '../event/event.entity';

@Entity({name: 'lessons'})
export class LessonEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @OneToMany(() => EventEntity, event => event.lesson)
  events: EventEntity[];
}