import {MigrationInterface, QueryRunner} from "typeorm";

export class init1635759816719 implements MigrationInterface {
    name = 'init1635759816719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying, "description" character varying, "completed" boolean, "due_date" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_067be4bd67747aa64451933929e" UNIQUE ("title"), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tasks"`);
    }

}
