import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RepositoriosService {
    constructor(private httpService: HttpService) {}
    
    async getPopularRepositories() {
        const url = 'https://api.github.com/search/repositories?q=stars:>0&sort=stars&order=desc';
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
        };
        
        try {
            const response = await firstValueFrom(this.httpService.get(url, { headers }));
            return response.data.items;
        } catch (error) {
            console.error('Error fetching data from GitHub API', error);
            throw error;
        }
    }
}
