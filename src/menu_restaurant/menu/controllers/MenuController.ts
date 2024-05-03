import { Request, Response } from 'express';
import { MenuService } from '../services/MenuService';
import { MenuDTO } from '../dtos/MenuDTO';

export class MenuController {
    private menuService = new MenuService();

    public create(req: Request, res: Response): void {
        const dto = new MenuDTO(req.body.name, req.body.price);
        const menuItem = this.menuService.create(dto);
        res.status(201).json(menuItem);
    }

    public findAll(req: Request, res: Response): void {
        res.status(200).json(this.menuService.findAll());
    }

    public findOne(req: Request, res: Response): void {
        const menuItem = this.menuService.findOne(Number(req.params.id));
        if (menuItem) {
            res.status(200).json(menuItem);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    }

    public update(req: Request, res: Response): void {
        const updatedItem = this.menuService.update(Number(req.params.id), req.body);
        if (updatedItem) {
            res.status(200).json(updatedItem);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    }

    public delete(req: Request, res: Response): void {
        const isDeleted = this.menuService.delete(Number(req.params.id));
        if (isDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    }
}
