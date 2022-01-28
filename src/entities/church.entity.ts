import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Church } from '@interfaces/church.interface';
import { BibleStudyClassEntity } from './bible-class.entity';

@Entity()
export class ChurchEntity extends BaseEntity implements Church {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Unique(['name'])
  name: string;

  @Column()
  @IsNotEmpty()
  location: string;

  @OneToMany(type=>BibleStudyClassEntity, bibleStudy=>bibleStudy.church)
  bibleStudyClasses: BibleStudyClassEntity[]

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
