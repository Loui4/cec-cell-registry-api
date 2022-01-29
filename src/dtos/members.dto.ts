import { IsEmail, IsString, IsDateString} from 'class-validator';

export class CreateMemberDto {

  @IsEmail()
  public email: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public gender: string;

  @IsString()
  public phoneNumber: string;

  @IsDateString()
  public dateOfBirth: string;
}
