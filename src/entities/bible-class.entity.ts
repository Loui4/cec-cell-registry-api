import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import {  BibleClass } from '@/interfaces/bible-class.interface';
import { ChurchEntity } from './church.entity';
import { CellAttendanceEntity } from './cell-attendance.entity';
import { BibleClassMembershipEntity } from './bible-class-membership.entity';

@Entity()
export class BibleClassEntity extends BaseEntity implements  BibleClass {
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

  @OneToMany(type=>CellAttendanceEntity, cellAttendance=>cellAttendance.bibleClass)
  cellAttendances: CellAttendanceEntity[]

  @OneToMany(type=>BibleClassMembershipEntity, memberShip=>memberShip.bibleClass)
  memberships: BibleClassMembershipEntity[]

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
