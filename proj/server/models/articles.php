<?php

class Articles_Model extends Db_Model
{
  public function get_articles($start, $quantity)
  {
    $start   -= 1;
    $articles = [];

    $request  = "SELECT * ";
    $request .= "FROM articles ";
    $request .= "ORDER BY `date` DESC ";
    $request .= "LIMIT $start, $quantity;";
    $responce = mysqli_query($this->db, $request);

    while ($row = mysqli_fetch_assoc($responce))
      array_push($articles, $row);

    return $articles;
  }
}
