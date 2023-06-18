<?php

class Route
{
  public function start()
  {
    $query  = strtolower($_SERVER['REQUEST_METHOD']);
    $routes = explode('/', $_SERVER['REQUEST_URI']);

    $this->$query($routes);
  }

  private function get($routes)
  {
    [$path, $name] = $this->get_controller($routes[1]);

    include $path;
    $controller    = new $name($routes);

    $controller->touch($routes);
  }

  private function post($routes)
  {
    include "server/controllers/api.php";
    $controller = new Controller_Api($routes);

    $controller->touch($routes);
  }

  private function get_controller($route)
  {
    $page = ["server/controllers/page.php", "Controller_Page"];
    $api  = ["server/controllers/api.php", "Controller_Api"];

    [$file, $name] = ($route === "api") ? $api : $page;

    return [$file, $name];
  }
}
