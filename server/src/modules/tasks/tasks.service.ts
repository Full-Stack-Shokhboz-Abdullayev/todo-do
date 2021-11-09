import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
	constructor(@InjectConnection() private connection: Connection) {}
	async create(createTaskDto: CreateTaskDto) {
		const q = `INSERT INTO tasks (${Object.keys(createTaskDto).join(
			', ',
		)}) VALUES ('${Object.values(createTaskDto).join("', '")}') RETURNING *;`;
		const [task]: Task[] = await this.connection.query(q);
		return task;
	}

	findAll() {
		return this.connection.query(`SELECT * FROM tasks;`);
	}

	async findOne(id: number) {
		const [task] = await this.connection.query(
			`SELECT * FROM tasks WHERE tasks.id = ${id};`,
		);
		return task;
	}

	async update(id: number, updateTaskDto: UpdateTaskDto) {
		const {
			raw: [task],
		} = await this.connection
			.createQueryBuilder()
			.update(Task)
			.set(updateTaskDto)
			.where(`id = ${id}`)
			.returning('*')
			.execute();

		return task;
	}

	async remove(id: number) {
		await this.connection.query(`DELETE FROM tasks WHERE id = ${id};`);
		return `Successfully removed a task with an id of ${id}.`;
	}
}
