import UnidadModel from '../models/UnidadModel.js';

/**
 * List all units
 */
export const index = async (req, res, next) => {
  try {
    const unidades = await UnidadModel.listarUnidades();
    
    res.json({
      success: true,
      data: unidades
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new unit
 */
export const agregar = async (req, res, next) => {
  try {
    const data = req.body;
    
    // Basic validation
    if (!data.placa_unidad) {
      return res.status(400).json({
        success: false,
        message: 'La placa de la unidad es requerida'
      });
    }
    
    const newUnidad = await UnidadModel.create(data);
    
    res.status(201).json({
      success: true,
      message: 'Unidad creada exitosamente',
      data: newUnidad
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update a unit by ID
 */
export const editar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    
    // Check if unit exists
    const unidad = await UnidadModel.findById(id);
    if (!unidad) {
      return res.status(404).json({
        success: false,
        message: 'Unidad no encontrada'
      });
    }
    
    const updated = await UnidadModel.update(id, data);
    
    if (updated) {
      res.json({
        success: true,
        message: 'Unidad actualizada exitosamente'
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'No se pudo actualizar la unidad'
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a unit by ID
 */
export const eliminar = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // Check if unit exists
    const unidad = await UnidadModel.findById(id);
    if (!unidad) {
      return res.status(404).json({
        success: false,
        message: 'Unidad no encontrada'
      });
    }
    
    const deleted = await UnidadModel.delete(id);
    
    if (deleted) {
      res.json({
        success: true,
        message: 'Unidad eliminada exitosamente'
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'No se pudo eliminar la unidad'
      });
    }
  } catch (error) {
    next(error);
  }
};
