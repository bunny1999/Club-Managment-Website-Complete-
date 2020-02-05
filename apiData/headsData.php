<?php include "../connection.php";?>

<?php
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
$sql = "SELECT * FROM heads";
$arr = array();
foreach($conn->query($sql) as $data){
    $item= array(
        "clubName" => $data["club"],
        "headName" => $data["headName"],
        "headEmail" => $data["email"],
        "headPhone" => $data["phone"],
        "headUsername" => $data["username"],
        "headPassword" => $data["password"],
    );
    array_push($arr,$item);
    //  json_encode($data);
}   
$headsAPI =  json_encode($arr);
echo $headsAPI;
?>
