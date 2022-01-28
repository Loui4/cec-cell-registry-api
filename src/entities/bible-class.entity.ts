import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import {  BibleStudyClass } from '@interfaces/bible-study-class.interface';
import { ChurchEntity } from './church.entity';

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

  @ManyToMany(type=>ChurchEntity, church=>church.bibleStudyClasses)
  church: ChurchEntity

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
