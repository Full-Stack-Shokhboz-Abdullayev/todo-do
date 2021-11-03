import { Column, Entity } from 'typeorm';
import { Base } from '../../../global/entities/base.entity';

@Entity({ name: 'tasks' })
export class Task extends Base {
	@Column({ type: 'varchar', nullable: true, unique: true })
	title: string;

	@Column({ type: 'varchar', nullable: true })
	description: string;

	@Column({ type: 'bool', nullable: true })
	completed: boolean;

	@Column({ type: 'timestamptz', nullable: true })
	due_date: Date;
}
