import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BibleClassMembership } from '@interfaces/bible-class-membership.interface';

@Entity()
export class BibleClassMembershipEntity extends BaseEntity implements BibleClassMembership {
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
  role: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
