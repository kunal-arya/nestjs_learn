import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { ConfigService } from 'src/config/config.service';

@Controller('episodes')
export class EpisodesController {
    constructor(
        private episodeService: EpisodesService,
        private configService: ConfigService
    ) {}

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        console.log({sort});
        return this.episodeService.findAll(sort);
    }

    @Get("featured")
    getFeatured() {

        throw new HttpException("Episode not found", HttpStatus.NOT_FOUND);

        return this.episodeService.findFeatured();
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        console.log({id});
        return this.episodeService.findOne(id);
    }

    @Post()
    create(@Body() input: any) {
        console.log({input});
        return this.episodeService.create(input);
    }
}
