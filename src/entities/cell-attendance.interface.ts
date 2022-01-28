import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CellAttendance } from '@interfaces/cell-attendance';

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

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
