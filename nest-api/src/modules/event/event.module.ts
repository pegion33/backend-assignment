import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity])],
})
export class EventModule {}