<?php include "../connection.php";?>

<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$sql0 = "SELECT * FROM cards";
$sql1= "SELECT * FROM joinPage";
$sql2="SELECT * FROM headPage";
$arrayAPI = array();
$arrayAPI["cardsAPI"] = array();
$arrayAPI["joinPageAPI"] = array();
$arrayAPI["headPageAPI"] = array();
foreach($conn->query($sql0) as $data){
    $card_item = array(
        "FcardTitle" => $data['cardTitle'],
        "FcardDescription" => $data['cardDescription'],
        "FcardImage" => $data['cardImage'],
    );
    array_push($arrayAPI["cardsAPI"], $card_item);
}

foreach($conn->query($sql1) as $data){
    $joinpage_item= array(
        //can add club Name 
        "JcoverImage" => $data["imageJ"],
        "JcoverTitle" => $data["titleJ"],
        "JcoverDescription" => $data["descriptionJ"],
    );
    array_push($arrayAPI["joinPageAPI"], $joinpage_item);
}

foreach($conn->query($sql2) as $data){
    $headspage_item= array(
        //can add club Name
        "HpageTitle" => $data["titleH"],
        "HpageDescription" => $data["descriptionH"],
        "HpagePNG" => $data["imageH"],
    );
    array_push($arrayAPI["headPageAPI"], $headspage_item);
}

echo json_encode($arrayAPI);
?>
