import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne } from 'typeorm';
import { CellAttendance } from '@/interfaces/cell-attendance.interface';
import { YearEntity } from './year.entity';
import { WeekEntity } from './week.entity';
import { BibleClassEntity } from './bible-class.entity';
import { MemberEntity } from './member.entity';

@Entity()
export class CellAttendanceEntity extends BaseEntity implements CellAttendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  memberId: number;

  @Column()
  @IsNotEmpty()
  bibleClassId: number;

  @Column()
  @IsNotEmpty()
  yearId: number;

  @Column()
  @IsNotEmpty()
  weekId: number;

  @ManyToOne(type=>YearEntity, year=>year.cellAttendances)
  year: YearEntity;

  @ManyToOne(type=>WeekEntity, week=>week.cellAttendances)
  week: WeekEntity;

  @ManyToOne(type=>BibleClassEntity, bible=>bible.cellAttendances)
  bibleClass: BibleClassEntity;

  @ManyToOne(type=>MemberEntity, bible=>bible.cellAttendances)
  member: MemberEntity;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
