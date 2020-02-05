<?php
    $id=$_POST["identity"];
    $usn =$_POST["usn"];
    $name=$_POST["name"];
    $club=$_POST["club"];
    $dept = $_POST["department"];
    $phone = $_POST["phone"];
    $year = $_POST["year"];
    $email = $_POST["email"];
    switch($dept){
        case "CSE Department":
        $dept= "CSE";
        break;
        case "ISE Dept.":
        $dept= "ISE";
        break;
        case "ECE Dept.":
        $dept= "ECE";
        break;
        case "EEE Dept.":
        $dept= "EEE";
        break;
    }
    switch($year){
        case "FIRST YEAR":
        $year = "1st";
        break;
        case "SECOUND YEAR":
        $year = "2nd";
        break;
        case "THIRD YEAR":
        $year = "3rd";
        break;
    }
    $usn = strtoupper($usn);
?>
<?php include "../connection.php"; ?>
<?php
    $sql="INSERT INTO members(usn,name,branch,club,email,phone,year) values('".$usn."','".$name."','".$dept."','".$club."','".$email."','".$phone."','".$year."')";
    $conn->query($sql);
    // echo $sql;
    if($id == "admin"){
        header("location:../adminIndex/adminStudentsPage.php");    
    }
    else if($id=="head"){
        header("location:../headIndex/comonHeadPage.php");
    }
    else{
        header("location:../joinPages/comonJoinPage.php?".$club);
    }
?>