import { Injectable } from '@nestjs/common';
import { Episode } from './entity/episode.entity';
import { randomUUID } from 'crypto';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Injectable()
export class EpisodesService {
    private episodes: Episode[] = [];

    async findAll(sort: 'asc' | 'desc' = 'desc') {
        const sortAsc = (a: Episode,b: Episode) => (a.name > b.name ? 1 : -1);
        const sortDesc = (a: Episode,b: Episode) => (a.name < b.name ? 1: -1);

        return sort === 'asc'
            ? this.episodes.sort(sortAsc)
            : this.episodes.sort(sortDesc)
    }

    async findFeatured() {
        return this.episodes.filter(e => e.featured);
    }

    async findOne(id: string) {
        return this.episodes.filter(e => e.id === id);
    }

    async create(createEpisodeDto: CreateEpisodeDto) {
        const newEpisode = {...createEpisodeDto, id: randomUUID()};
        this.episodes.push(newEpisode);

        return newEpisode;
    }
}
