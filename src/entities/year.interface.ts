import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Year } from '@interfaces/year.interface';
import { CellAttendanceEntity } from './cell-attendance.interface';

@Entity()
export class YearEntity extends BaseEntity implements Year {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  year: string;

  @Column()
  @IsNotEmpty()
  start: string;

  @Column()
  @IsNotEmpty()
  to: string;

  @OneToMany(type=>CellAttendanceEntity, cellAttendance=>cellAttendance.year)
  cellAttendances: CellAttendanceEntity[]

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}