import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
	@ApiProperty()
	@IsString()
	@IsOptional()
	title: string;

	@ApiProperty({})
	@IsString()
	@IsOptional()
	description: string;

	@ApiProperty({ type: 'boolean' })
	@IsBoolean()
	@IsOptional()
	completed: boolean;

	@ApiProperty({ type: 'string', format: 'date-time' })
	@IsDateString()
	@IsOptional()
	due_date: Date;
}
