import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Week } from '@interfaces/week.interface';

@Entity()
export class WeekEntity extends BaseEntity implements Week {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  month: string;

  @Column()
  @IsNotEmpty()
  week: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
