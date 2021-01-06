import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {

    it('should return todos', () => {
      expect(service.getData()).toHaveLength(2);
      service.addTodo()
      expect(service.getData()).toHaveLength(3);
    });
    // it('should return "Welcome to api!"', () => {
    //   expect(service.getData()).toEqual({ message: 'Welcome to api!' });
    // });
  });
});
