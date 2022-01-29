import { IsString } from 'class-validator';

export class CreateChurchDto {
  @IsString()
  public name: string;

  @IsString()
  public location: string;
}


