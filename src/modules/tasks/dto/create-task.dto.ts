import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsString } from 'class-validator';

export class CreateTaskDto {
	@ApiProperty()
	@IsString()
	title: string;

	@ApiProperty({})
	@IsString()
	description: string;

	@ApiProperty({ type: 'boolean' })
	@IsBoolean()
	completed: boolean;

	@ApiProperty({ type: 'string', format: 'date-time' })
	@IsDateString()
	due_date: Date;
}
