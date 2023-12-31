<?php
class Db_Model
{
  protected $db;
  public function __construct()
  {
    [
      'host'     => $host,
      'user'     => $user,
      'pass'     => $pass,
      'database' => $db
    ]            = parse_ini_file(dirname(__DIR__, 1) . '\config\db_access.ini');

    $this->db    = mysqli_connect($host, $user, $pass, $db);
    mysqli_set_charset($this->db, 'utf8mb4');
  }
}
