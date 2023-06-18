<?php
ini_set('display_errors', 1);
require_once 'server/core/route.php';
require_once 'server/models/db_model.php';
require_once 'server/core/controller.php';
$route = new Route();
$route->start();