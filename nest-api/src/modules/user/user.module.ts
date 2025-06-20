import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { EventEntity } from '../event/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, EventEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
