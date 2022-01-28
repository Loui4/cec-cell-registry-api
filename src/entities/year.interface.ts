import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Year } from '@interfaces/year.interface';

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

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}