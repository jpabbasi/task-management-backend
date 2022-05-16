import { IsString, Matches, MaxLength, Min, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password is sooo weak that Kuririn could kill it. Password requires at least 1 upper case letter, at least 1 lower case letter and atleast 1 number or special character',
  })
  password: string;
}
