<?php include "../connection.php";?>

<?php
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
$sql = "SELECT * FROM members";
$arr = array();
foreach($conn->query($sql) as $data){
    $item= array(
        "USN" => $data["usn"],
        "Name" => $data["name"],
        "Branch" => $data["branch"],
        "Year" => $data["year"],
        "Club" => $data["club"],
        "Email" => $data["email"],
        "Phone" => $data["phone"],
        "Position" => $data["postion"]
    );
    array_push($arr,$item);
    //  json_encode($data);
}   
$headsAPI =  json_encode($arr);
echo $headsAPI;
?>