import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Week } from '@interfaces/week.interface';
import { CellAttendanceEntity } from './cell-attendance.entity';

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

  @OneToMany(type=>CellAttendanceEntity, cellAttendance=>cellAttendance.week)
  cellAttendances: CellAttendanceEntity[]

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
