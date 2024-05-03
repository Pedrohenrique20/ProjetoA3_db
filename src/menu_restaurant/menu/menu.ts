import express from 'express';
import { MenuController } from './controllers/MenuController';

const app = express();
app.use(express.json());

const menuController = new MenuController();

app.post('/menu', menuController.create);
app.get('/menu', menuController.findAll);
app.get('/menu/:id', menuController.findOne);
app.put('/menu/:id', menuController.update);
app.delete('/menu/:id', menuController.delete);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
