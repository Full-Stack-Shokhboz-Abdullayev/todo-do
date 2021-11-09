import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
	@ApiProperty()
	@IsString()
	title: string;

	@ApiProperty({})
	@IsString()
	description: string;

	@ApiProperty({ type: 'boolean' })
	@IsBoolean()
	@IsOptional()
	completed: boolean;

	@ApiProperty({ type: 'boolean' })
	@IsBoolean()
	@IsOptional()
	important: boolean;

	@ApiProperty({ type: 'string', format: 'date' })
	@IsDateString()
	due_date: Date;
}
