import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAutoDto } from 'src/dtos/CreateAuto.dto';
import { Auto } from 'src/interfaces/auto.interface';
import { AutosService } from './autos.service';

@Controller('autos')
export class AutosController {
    constructor(private readonly autosService: AutosService) { }

    @Post()
    async create(@Body() createAutoDto: CreateAutoDto) {
        this.autosService.create(createAutoDto);
    }

    @Get()
    async findAll(): Promise<Auto[]> {
        return this.autosService.findAll();
    }
}
