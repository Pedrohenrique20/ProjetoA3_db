import { MenuEntity } from '../entities/MenuEntity';
import { MenuDTO } from '../dtos/MenuDTO';

export class MenuService {
    private items: MenuEntity[] = [];
    private nextId = 1;

    public create(dto: MenuDTO): MenuEntity {
        const newItem = new MenuEntity(this.nextId++, dto.name, dto.price);
        this.items.push(newItem);
        return newItem;
    }

    public findAll(): MenuEntity[] {
        return this.items;
    }

    public findOne(id: number): MenuEntity | undefined {
        return this.items.find(item => item.id === id);
    }

    public update(id: number, updateData: { name?: string; price?: number }): MenuEntity | undefined {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.name = updateData.name ?? item.name;
            item.price = updateData.price ?? item.price;
            return item;
        }
        return undefined;
    }

    public delete(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}
