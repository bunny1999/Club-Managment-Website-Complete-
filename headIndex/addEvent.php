<?php
    $club  =$_POST["clubName"];
    $heading = $_POST["eventName"];
    $eventDate = $_POST["eventDate"];
    $lastDate =  $_POST["lastDate"];
    // $pDate = $_POST["presentDate"];
?>
<?php include "../connection.php";?>
<?php
    $sql1  = "INSERT INTO events(club,eventTitle) values('".$club."','".$heading."')";
    $sql2 = "INSERT INTO eventDetails values('".$heading."','".$lastDate."','".$eventDate."')";
    $conn->query($sql1);
    $conn->query($sql2);
    header("location:./editJoinPage.php");
?>