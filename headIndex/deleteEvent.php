<?php include "../connection.php";?>
<?php
    $club = $_POST["club"];
    $title = $_POST["title"];

    $sql = "DELETE FROM events where club='".$club."' AND eventTitle='".$title."'";
    $conn->query($sql);
    header("location:./editJoinPage.php");
?>