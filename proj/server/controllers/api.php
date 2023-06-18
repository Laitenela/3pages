<?php

class Controller_Api
{
  public function touch($routes)
  {
    $query = $routes[2];
    $this->$query();
  }

  private function articles()
  {
    include "server/models/articles.php";
    $articles = new Articles_Model();

    parse_str($_SERVER['QUERY_STRING'], $queryArray);
    $start    = $queryArray['start'];
    $quantity = $queryArray['quantity'];
    $responce = $articles->get_articles($start, $quantity);
    $json     = json_encode($responce);

    header('Content-Type: application/json; charset=utf-8');
    echo $json;

    exit();
  }

  private function offering()
  {
    include "server/models/feedback.php";
    $feedback = new Feedback_Model();

    $body     = file_get_contents('php://input');
    $data     = json_decode($body, true);
    $responce = $fb_model->save_feedback($data);
    $json     = json_encode($responce);

    header('Content-Type: application/json; charset=utf-8');
    echo $json;

    exit();
  }
}
