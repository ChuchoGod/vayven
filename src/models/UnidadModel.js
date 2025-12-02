import pool from '../config/database.js';

class UnidadModel {
  constructor() {
    this.table = 'unidad';
    this.primaryKey = 'id';
    this.allowedFields = [
      'placa_unidad',
      'modelo_unidad',
      'capacidad_unidad',
      'estado_unidad',
      'Ruta_id_ruta',
      'Ubicacion_id_ubicacion'
    ];
  }

  /**
   * Get all units
   * @returns {Promise<Array>}
   */
  async findAll() {
    try {
      const [rows] = await pool.query(`SELECT * FROM ${this.table}`);
      return rows;
    } catch (error) {
      console.error('Error in findAll:', error);
      throw error;
    }
  }

  /**
   * Find unit by ID
   * @param {number} id
   * @returns {Promise<Object|null>}
   */
  async findById(id) {
    try {
      const [rows] = await pool.query(
        `SELECT * FROM ${this.table} WHERE ${this.primaryKey} = ?`,
        [id]
      );
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error('Error in findById:', error);
      throw error;
    }
  }

  /**
   * Create new unit
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async create(data) {
    try {
      // Filter only allowed fields
      const filteredData = this.filterAllowedFields(data);
      
      const fields = Object.keys(filteredData);
      const values = Object.values(filteredData);
      const placeholders = fields.map(() => '?').join(', ');
      
      const [result] = await pool.query(
        `INSERT INTO ${this.table} (${fields.join(', ')}) VALUES (${placeholders})`,
        values
      );
      
      return {
        id: result.insertId,
        ...filteredData
      };
    } catch (error) {
      console.error('Error in create:', error);
      throw error;
    }
  }

  /**
   * Update unit by ID
   * @param {number} id
   * @param {Object} data
   * @returns {Promise<boolean>}
   */
  async update(id, data) {
    try {
      // Filter only allowed fields
      const filteredData = this.filterAllowedFields(data);
      
      const fields = Object.keys(filteredData);
      const values = Object.values(filteredData);
      
      const setClause = fields.map(field => `${field} = ?`).join(', ');
      
      const [result] = await pool.query(
        `UPDATE ${this.table} SET ${setClause} WHERE ${this.primaryKey} = ?`,
        [...values, id]
      );
      
      return result.affectedRows > 0;
    } catch (error) {
      console.error('Error in update:', error);
      throw error;
    }
  }

  /**
   * Delete unit by ID
   * @param {number} id
   * @returns {Promise<boolean>}
   */
  async delete(id) {
    try {
      const [result] = await pool.query(
        `DELETE FROM ${this.table} WHERE ${this.primaryKey} = ?`,
        [id]
      );
      
      return result.affectedRows > 0;
    } catch (error) {
      console.error('Error in delete:', error);
      throw error;
    }
  }

  /**
   * Filter data to only include allowed fields
   * @param {Object} data
   * @returns {Object}
   */
  filterAllowedFields(data) {
    const filtered = {};
    for (const field of this.allowedFields) {
      if (data.hasOwnProperty(field)) {
        filtered[field] = data[field];
      }
    }
    return filtered;
  }

  /**
   * List all units (alias for findAll)
   * @returns {Promise<Array>}
   */
  async listarUnidades() {
    return this.findAll();
  }
}

export default new UnidadModel();
