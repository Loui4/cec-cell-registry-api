import { IsNumber, IsString } from 'class-validator';

export class CreateBibleClassMembershipDto {
  @IsString()
  public role: string;

  @IsNumber()
  public churchId: number;

  @IsNumber()
  public bibleClassId: number;
}
