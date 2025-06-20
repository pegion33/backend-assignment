import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CourseModule } from './modules/course/course.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { EventModule } from './modules/event/event.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    UserModule,
    CourseModule,
    LessonModule,
    EventModule,
  ],
})
export class AppModule {}