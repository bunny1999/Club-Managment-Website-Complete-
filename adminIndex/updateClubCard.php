<?php
    $clubName = $_POST["cardName"];
    $newTitle  =  $_POST["newCardTitle"];
    $newDesc  =  $_POST["newCardDescription"];
    $newImage  =  $_POST["newCardImage"];
    // echo $clubName.$newTitle.$newImage.$newDesc;
?>
<?php include "../connection.php";?>
<?php
    $sql="UPDATE cards SET cardImage='".$newImage."',cardTitle='".$newTitle."',cardDescription='".$newDesc."' Where cardTitle='".$clubName."'";
    $conn->query($sql);
    header("location:./adminIndex.php");
?> 