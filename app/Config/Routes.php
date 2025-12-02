<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

// Api

$routes->get('/api/unidad', 'Api\Unidades::index');
$routes->post('/api/unidad/agregar', 'Api\Unidades::agregar');
$routes->put('/api/unidad/editar/(:number)', 'Api\Unidades::editar/$1');
$routes->delete('/api/unidad/eliminar/(:number)', 'Api\Unidades::eliminar/$1');
