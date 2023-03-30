import { ApiProperty } from "@nestjs/swagger";

export class CreateAutoDto {
    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly modelo: string;

    @ApiProperty()
    readonly anio: number;
}