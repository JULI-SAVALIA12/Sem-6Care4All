<?php
include('connection.php');

$qry = "SELECT * FROM services";
$result = mysqli_query($con, $qry);


$json_array = array();
while ($row = mysqli_fetch_assoc($result)) {
    //convert each value to utf-8 encoding
    foreach ($row as $key => $value) {
        $row[$key] = mb_convert_encoding($value,"UTF-8","auto");
    }
    $json_array[] = $row;
}

    echo json_encode($json_array);
?>
