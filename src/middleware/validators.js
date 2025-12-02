import { body, param, validationResult } from 'express-validator';

/**
 * Middleware to handle validation errors
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Error de validación',
      errors: errors.array()
    });
  }
  
  next();
};

/**
 * Validation rules for creating a unit
 */
export const validateCreateUnidad = [
  body('placa_unidad')
    .notEmpty()
    .withMessage('La placa de la unidad es requerida')
    .isLength({ min: 3, max: 20 })
    .withMessage('La placa debe tener entre 3 y 20 caracteres'),
  
  body('modelo_unidad')
    .optional()
    .isLength({ max: 100 })
    .withMessage('El modelo no puede exceder 100 caracteres'),
  
  body('capacidad_unidad')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('La capacidad debe ser un número entre 1 y 100'),
  
  body('estado_unidad')
    .optional()
    .isIn(['activo', 'inactivo', 'mantenimiento'])
    .withMessage('Estado inválido. Debe ser: activo, inactivo o mantenimiento'),
  
  body('Ruta_id_ruta')
    .optional()
    .isInt()
    .withMessage('El ID de ruta debe ser un número entero'),
  
  body('Ubicacion_id_ubicacion')
    .optional()
    .isInt()
    .withMessage('El ID de ubicación debe ser un número entero'),
  
  handleValidationErrors
];

/**
 * Validation rules for updating a unit
 */
export const validateUpdateUnidad = [
  param('id')
    .isInt()
    .withMessage('El ID debe ser un número entero'),
  
  body('placa_unidad')
    .optional()
    .isLength({ min: 3, max: 20 })
    .withMessage('La placa debe tener entre 3 y 20 caracteres'),
  
  body('modelo_unidad')
    .optional()
    .isLength({ max: 100 })
    .withMessage('El modelo no puede exceder 100 caracteres'),
  
  body('capacidad_unidad')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('La capacidad debe ser un número entre 1 y 100'),
  
  body('estado_unidad')
    .optional()
    .isIn(['activo', 'inactivo', 'mantenimiento'])
    .withMessage('Estado inválido. Debe ser: activo, inactivo o mantenimiento'),
  
  body('Ruta_id_ruta')
    .optional()
    .isInt()
    .withMessage('El ID de ruta debe ser un número entero'),
  
  body('Ubicacion_id_ubicacion')
    .optional()
    .isInt()
    .withMessage('El ID de ubicación debe ser un número entero'),
  
  handleValidationErrors
];

/**
 * Validation rules for deleting a unit
 */
export const validateIdParam = [
  param('id')
    .isInt()
    .withMessage('El ID debe ser un número entero'),
  
  handleValidationErrors
];
