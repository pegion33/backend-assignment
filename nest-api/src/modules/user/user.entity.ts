import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { EventEntity } from '../event/event.entity';

@Entity({name: 'users'})
export class UserEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => EventEntity, event => event.user)
  events: EventEntity[];
}