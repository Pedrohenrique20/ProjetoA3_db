import { MenuController } from './MenuController';
import { Request } from 'express';

describe('MenuController', () => {
    let controller: MenuController;

    beforeEach(() => {
        controller = new MenuController();
    });

    it('should create a menu item', () => {
        const mockRequest = {
            body: { name: 'Pizza Margherita', price: 20 }
        } as Request;

        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        } as any;

        controller.create(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith(expect.any(Object));
    });

    // ... Outros testes para findAll, findOne, update, delete ...
});
