import { MenuService } from './MenuServices';

describe('MenuService', () => {
    let service: MenuService;

    beforeEach(() => {
        service = new MenuService();
    });

    it('should create a menu item', () => {
        const item = service.create({ name: 'Pizza Margherita', price: 20 });
        expect(item).toEqual(expect.any(Object));
        expect(item.id).toBe(1);
    });

    // ... Outros testes para findAll, findOne, update, delete ...
});
