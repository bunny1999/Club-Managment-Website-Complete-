<?php include "../connection.php"; ?>
<?php
    $id=$_POST["identity"];
    $usn = $_POST["Dusn"];
    $club = $_POST["Dclub"];

    $sql = "DELETE FROM members where usn='".$usn."' AND club='".$club."'";
    $conn->query($sql);
    if($id == "admin"){
        header("location:../adminIndex/adminStudentsPage.php");    
    }
    else if($id=="head"){
        header("location:../headIndex/comonHeadPage.php");
    }
?>