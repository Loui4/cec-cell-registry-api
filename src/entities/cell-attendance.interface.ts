import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne } from 'typeorm';
import { CellAttendance } from '@interfaces/cell-attendance';
import { YearEntity } from './year.interface';
import { WeekEntity } from './week.interface';
import { BibleStudyClassEntity } from './bible-class.entity';
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

  @ManyToOne(type=>BibleStudyClassEntity, bible=>bible.cellAttendances)
  bibleStudy: BibleStudyClassEntity;

  @ManyToOne(type=>MemberEntity, bible=>bible.cellAttendances)
  member: MemberEntity;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
