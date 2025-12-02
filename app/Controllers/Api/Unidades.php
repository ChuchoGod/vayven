<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\Api\UnidadModel;
use CodeIgniter\HTTP\ResponseInterface;

class Unidades extends BaseController
{
    public function index()
    {
        // Regresar la información completa de las unidades
        $model = new UnidadModel();
        $unidades = $model->listarUnidades();
        echo '<pre>';
        print_r($unidades);
        echo '<pre>';
    }

    public function agregar() {

    }

    Public function editar($id) {

    }

    public function eliminar($id) {

    }
}
