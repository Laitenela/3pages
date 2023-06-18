<?php

class Controller_Api
{
  public function touch($routes)
  {
    if ($routes[2] === "articles") {
      parse_str($_SERVER['QUERY_STRING'], $queryArray);
      include "server/models/articles.php";
      $articles_model = new Articles_Model();
      header('Content-Type: application/json; charset=utf-8');
      echo json_encode($articles_model->get_articles($queryArray['start'], $queryArray['quantity']));
      exit();
    }

    if ($routes[2] === "offering") {
      echo "Thanks";
    }
  }
}
