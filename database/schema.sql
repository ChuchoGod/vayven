-- Vayven Database Schema
-- Migrated from CodeIgniter 4 (PHP) to Node.js

-- Create database
CREATE DATABASE IF NOT EXISTS vayven CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE vayven;

-- Table: unidad
CREATE TABLE IF NOT EXISTS unidad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa_unidad VARCHAR(20) NOT NULL UNIQUE,
    modelo_unidad VARCHAR(100),
    capacidad_unidad INT,
    estado_unidad VARCHAR(50) DEFAULT 'activo',
    Ruta_id_ruta INT,
    Ubicacion_id_ubicacion INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_placa (placa_unidad),
    INDEX idx_estado (estado_unidad),
    INDEX idx_ruta (Ruta_id_ruta),
    INDEX idx_ubicacion (Ubicacion_id_ubicacion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Sample data (optional)
INSERT INTO unidad (placa_unidad, modelo_unidad, capacidad_unidad, estado_unidad, Ruta_id_ruta, Ubicacion_id_ubicacion) VALUES
('ABC-123', 'Toyota Hiace', 15, 'activo', 1, 1),
('DEF-456', 'Mercedes-Benz Sprinter', 20, 'activo', 2, 1),
('GHI-789', 'Ford Transit', 12, 'mantenimiento', 1, 2);
