<?php
    $cardImage = $_POST["newCardImage"];
    $cardTitle = $_POST["newCardTitle"];
    $cardDesc = $_POST["newCardDescription"];

    $headImage = $_POST["headImage"];
    $headTitle = $_POST["headTitle"];
    $headDesc = $_POST["headDescription"];

    $joinImage = $_POST["joinImage"];
    $joinTitle = $_POST["joinTitle"];
    $joinDesc = $_POST["joinDescription"];
    
    $username = $_POST["username"];
    $password =$_POST["password"];
?>
<?php include "../connection.php";?>
<?php
    try{
        $sql0="INSERT INTO cards values('".$cardTitle."','".$cardDesc."','".$cardImage."')";
        $sql1="INSERT INTO joinPage values('".$cardTitle."','".$joinTitle."','".$joinDesc."','".$joinImage."')";
        $sql2="INSERT INTO headPage values('".$cardTitle."','".$headTitle."','".$headDesc."','".$headImage."')";
        $sql3="INSERT INTO heads(club,username,password) values('".$cardTitle."','".$username."','".$password."')";
        $conn->query($sql0);
        $conn->query($sql1);
        $conn->query($sql2);
        $conn->query($sql3);
        header("location:./adminIndex.php");
    }
    catch(PDOException $e){
        echo "Error:".$e->getMessage();
    }
?> 