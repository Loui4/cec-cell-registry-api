import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { BibleClassMembership } from '@interfaces/bible-class-membership.interface';
import { MemberEntity } from './member.entity';

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

  @ManyToOne(type=>MemberEntity, bible=>bible.memberShips)
  member: MemberEntity;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
