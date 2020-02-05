<?php
    $name= $_POST["headName"];
    $email = $_POST["headEmail"];
    $phone= $_POST["headPhone"];
    $club = $_POST["headClub"];
?>
<?php include "../connection.php";?>
<?php
    try{
        $sql0 = "SELECT name,email,phone from members where postion='Head' and club='".$club."'";
        foreach($conn->query($sql0) as $data){
            $Tname = $data["name"];
            $Temail = $data["email"];
            $Tphone= $data["phone"];
        }
        $sql2= "UPDATE members SET postion='NULL' where name='".$Tname."' and email='".$Temail."' and phone='".$Tphone."' and club='".$club."'";
        $conn->query($sql2);
    }
    catch(PDOException $e){
    }
    finally{
        $sql="UPDATE heads SET headName='".$name."',email='".$email."',phone='".$phone."' Where club='".$club."'";
        $sql1 = "UPDATE members SET postion='Head' where name='".$name."' and email='".$email."' and phone='".$phone."' and club='".$club."'";
        $conn->query($sql);
        $conn->query($sql1);    
        header("location:./adminStudentsPage.php");
    }
?> 