<?php
$dbuser = "theyieor_they";
$dbpass = "@#living45////";
$dbserver = "localhost";
$dbname = "theyieor_theyie";

$dbconn = mysqli_connect($dbserver, $dbuser, $dbpass, $dbname);

if (!$dbconn) {
    die("<script>alert('Error connecting to the database. Please reload the page.')</script>");
} 

?>