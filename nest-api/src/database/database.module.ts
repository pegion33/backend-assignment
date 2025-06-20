import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from 'src/modules/course/course.entity';
import { EventEntity } from 'src/modules/event/event.entity';
import { LessonEntity } from 'src/modules/lesson/lesson.entity';
import { UserEntity } from 'src/modules/user/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
              useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.getOrThrow('DB_HOST'),
                port: configService.getOrThrow('DB_PORT'),
                username: configService.getOrThrow('DB_USER'),
                password: configService.getOrThrow('DB_PASSWORD'),
                database: configService.getOrThrow('DB_NAME'),
                autoLoadEntities: true,
                // entities:[UserEntity, CourseEntity, EventEntity, LessonEntity],
              }),
              inject: [ConfigService],
        }),
    ]
})
export class DatabaseModule {}
