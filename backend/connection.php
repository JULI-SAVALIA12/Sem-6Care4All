<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: text/plain");

$host = "localhost";
$user = "root"; // Default for XAMPP
$password = ""; // Default for XAMPP
$database = "sem6example"; // Change to your actual database name

$con = mysqli_connect($host, $user, $password, $database);

if (!$con) {
    die(json_encode(["error" => "Database connection failed: " . mysqli_connect_error()]));
}
?>
