import { IsNotEmpty, IsObject, IsString } from 'class-validator';

import { Cinema } from '../../cinema/entities';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  cinemaId: string;

  /**
   * cinema generated by validate-movie-input middleware
   */
  @IsNotEmpty()
  @IsObject()
  cinema: Cinema;
}
