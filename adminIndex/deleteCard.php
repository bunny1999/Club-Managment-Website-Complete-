<?php
    $clubName = $_POST["cardName"];  
?>
<?php include "../connection.php";?>
<?php
    $sql="DELETE FROM cards Where cardTitle='".$clubName."'";
    $conn->query($sql);
    header("location:./adminIndex.php");
?> 