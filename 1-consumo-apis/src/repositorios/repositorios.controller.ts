import { Controller, Get } from '@nestjs/common';
import { RepositoriosService } from './repositorios.service';

@Controller('repositorios')
export class RepositoriosController {
    constructor(private repositoriosService: RepositoriosService) {}

    @Get()
    async getRepositorios() {
        return await this.repositoriosService.getPopularRepositories();
    }
}
