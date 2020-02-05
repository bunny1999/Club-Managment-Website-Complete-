<?php include "../connection.php";?>

<?php
// header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
$sql = "SELECT * FROM events";
$sql1= "SELECT * FROM eventDetails";
$arr = array();
foreach($conn->query($sql) as $data){
    $item = array(
        "club"  => $data["club"],
        "title"=> $data["eventTitle"],
        "updateon" => $data["eventUpdateDate"]
    );
    array_push($arr,$item);
}
$arr1 = array();
foreach($conn->query($sql1) as $data){
    $item = array(
        "eventDate" => $data["eventDate"],
        "lastDate" => $data["dueDate"]
    );
    array_push($arr1,$item);
}
$array = array();
$i=0;
$clubName = array();
while($i<count($arr)){
    array_push($clubName,$arr[$i]["club"]);
    $i++;
}
$clubShort = array();
foreach(array_unique($clubName)as $data){
    array_push($clubShort,$data);
}
foreach($clubShort as $data){
    $array[$data] = array();
}
$i=0;
while($i<count($arr) && $i<count($arr1)){
    $item = array(
        "title"=>$arr[$i]["title"],
        "updateon"=>$arr[$i]["updateon"],
        "eventDate"=>$arr1[$i]["eventDate"],
        "lastDate"=>$arr1[$i]["lastDate"]
    );
    array_push($array[$arr[$i]["club"]],$item);
    $i++;
}
echo json_encode($array);
?>
