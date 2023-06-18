<?php
class Controller_Page
{
  public function touch()
  {
    readfile("index.html");
  }
}
