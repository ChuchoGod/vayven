import express from 'express';
import * as unidadesController from '../controllers/unidadesController.js';
import {
  validateCreateUnidad,
  validateUpdateUnidad,
  validateIdParam
} from '../middleware/validators.js';

const router = express.Router();

// Unidades routes with validation
router.get('/unidad', unidadesController.index);
router.post('/unidad/agregar', validateCreateUnidad, unidadesController.agregar);
router.put('/unidad/editar/:id', validateUpdateUnidad, unidadesController.editar);
router.delete('/unidad/eliminar/:id', validateIdParam, unidadesController.eliminar);

export default router;
