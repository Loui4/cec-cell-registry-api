import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Member } from '@interfaces/member.interface';
import { CellAttendanceEntity } from './cell-attendance.entity';
import { BibleClassMembershipEntity } from './bible-class-membership.entity';

@Entity()
export class MemberEntity extends BaseEntity implements Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Unique(['email'])
  email: string;

  @Column()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsNotEmpty()
  lastName: string;

  @Column()
  @IsNotEmpty()
  gender: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  @IsNotEmpty()
  phoneNumber: string;

  @OneToMany(type=>CellAttendanceEntity, cellAttendance=>cellAttendance.member)
  cellAttendances: CellAttendanceEntity[]


  @OneToMany(type=>BibleClassMembershipEntity, memberShip=>memberShip.member)
  memberShips: BibleClassMembershipEntity[]
  
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
