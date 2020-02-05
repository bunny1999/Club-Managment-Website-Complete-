<?php
    $club  = $_POST["Hclub"];
    $username = $_POST["Hemail"];
    $pas = $_POST["Hpass"];
?>
<?php include "../connection.php";?>
<?php
    $sql="UPDATE heads SET username='".$username."',password='".$pas."' Where club='".$club."'";
    $conn->query($sql);
    header("location:./adminHeadsPage.php");
?> 