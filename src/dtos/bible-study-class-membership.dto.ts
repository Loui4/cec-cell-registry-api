import { IsNumber, IsString } from 'class-validator';

export class CreateBibleStudyClassMembershipDto {
  @IsString()
  public role: string;

  @IsNumber()
  public churchId: number;

  @IsNumber()
  public bibleClassId: number;
}
