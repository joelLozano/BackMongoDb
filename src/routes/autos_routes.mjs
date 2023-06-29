import { showAutos ,showAuto, addAuto, updateCar, deleteAuto, deleteAutoV2, upload, formAuto } from'../controllers/autos_controller.mjs';
import { Router} from 'express';
import verificar from '../middleware/middleware.mjs';

const router = Router()

router.get('/',  showAutos)
router.get('/showcar', showAuto)

router.get('/formAuto', formAuto)
router.post('/addcar', upload.single('image'), addAuto)


router.delete('/deleteCar/:id', deleteAuto)
router.delete('/deleteAutoV2/:id', deleteAutoV2)
router.patch('/updateCar/:id', updateCar)

export default router

