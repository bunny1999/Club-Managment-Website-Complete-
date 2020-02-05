<?php
    $clubName = $_POST["clubName"];
    $newTitle  =  $_POST["newTitle"];
    $newDesc  =  $_POST["newDescription"];
    $newImage  =  $_POST["newCoverImage"];
?>
<?php include "../connection.php";?>
<?php
    $sql="UPDATE joinPage SET imageJ='".$newImage."',titleJ='".$newTitle."',descriptionJ='".$newDesc."' Where club='".$clubName."'";
    $conn->query($sql);
    header("location:./editJoinPage.php");
?>