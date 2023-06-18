<?php

class Route
{
  static function start()
  {
    $routes = explode('/', $_SERVER['REQUEST_URI']);
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
      explode('/', $_SERVER['REQUEST_URI']);
      if ($routes[1] === "api") {
        include "server/controllers/api.php";
        $controller = new Controller_Api($routes);
      } else {
        include "server/controllers/page.php";
        $controller = new Controller_Page();
      }
    } else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      include "server/controllers/api.php";
      $controller = new Controller_Api($routes);
    }
    $controller->touch($routes);
  }
}
