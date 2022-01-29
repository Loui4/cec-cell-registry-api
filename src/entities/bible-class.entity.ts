import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import {  BibleStudyClass } from '@interfaces/bible-study-class.interface';
import { ChurchEntity } from './church.entity';
import { CellAttendanceEntity } from './cell-attendance.interface';

@Entity()
export class BibleStudyClassEntity extends BaseEntity implements  BibleStudyClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Unique(['name'])
  name: string;

  @Column()
  @IsNotEmpty()
  venue: string;

  @Column()
  @IsNotEmpty()
  churchId: number;

  @ManyToOne(type=>ChurchEntity, church=>church.bibleStudyClasses)
  church: ChurchEntity

  @OneToMany(type=>CellAttendanceEntity, cellAttendance=>cellAttendance.week)
  cellAttendances: CellAttendanceEntity[]

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
