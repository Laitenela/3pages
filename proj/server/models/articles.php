<?php

class Articles_Model extends Db_Model
{
  public function get_articles($start, $quantity)
  {
    $data_articles = [];
    $start--;
    $request = "SELECT *"
      . " FROM articles"
      . " ORDER BY `date` DESC"
      . " LIMIT $start, $quantity;";

    $responce   = mysqli_query($this->db, $request);
    while ($row = mysqli_fetch_assoc($responce))
      array_push($data_articles, $row);

    return $data_articles;
  }
}
