<?php

if(isset($_POST['submit']))
{$usrnm=$_POST['username'];
$pss=$_POST['password'];
	if((strlen($usrnm)<=5) or (strlen($pss)<=8) )
  {
    echo "Username must be 5 characters long and Password must be 8 characters long";
  }
}
?>