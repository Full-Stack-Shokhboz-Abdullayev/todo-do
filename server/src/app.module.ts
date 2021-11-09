import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
	imports: [ConfigModule, TasksModule],
})
export class AppModule {}
