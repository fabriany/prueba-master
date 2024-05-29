import { Module } from '@nestjs/common';
import { RepositoriosController } from './repositorios.controller';
import { RepositoriosService } from './repositorios.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [HttpModule],
  controllers: [RepositoriosController],
  providers: [RepositoriosService]
})
export class RepositoriosModule {}
