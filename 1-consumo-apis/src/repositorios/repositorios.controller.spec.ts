import { Test, TestingModule } from '@nestjs/testing';
import { RepositoriosController } from './repositorios.controller';

describe('RepositoriosController', () => {
  let controller: RepositoriosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepositoriosController],
    }).compile();

    controller = module.get<RepositoriosController>(RepositoriosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
