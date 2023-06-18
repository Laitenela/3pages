<?php

class Feedback_Model extends Db_Model
{
  public function save_feedback($data)
  {
    $this->insert_data($data);
    $feedback = $this->get_data(10);

    return $feedback;
  }

  private function insert_data($data)
  {
    extract($data);

    $request  = "INSERT INTO `feedback` ";
    $request .= "(`name`,`address`, ";
    $request .= "`phone`,`email`,comment) ";
    $request .= "VALUES ('$name', ";
    $request .= "'$address', '$phone', ";
    $request .= "''$email', '$comment')";

    mysqli_query($this->db, $request);
  }

  private function get_data($value)
  {
    $data     = [];

    $request  = "SELECT * ";
    $request .= "FROM `feedback` ";
    $request .= "ORDER BY `id` DESC ";
    $request .= "LIMIT 0, $value;";
    $responce = mysqli_query($this->db, $request);

    while ($row = mysqli_fetch_assoc($responce)) 
      array_push($data, $row);

    return $data;
  }
}
