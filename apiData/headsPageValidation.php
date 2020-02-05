<?php include "../connection.php";?>
<?php
    $status;
    if(isset($_POST["submit"])){
        if(!empty($_POST["userHead"]) && !empty($_POST["passHead"])){
            $username = $_POST["userHead"];
            $password = $_POST["passHead"];
            //we are seaching for the whole row, there we will easyly fetch key value
            $sql = "SELECT * FROM heads WHERE username='".$username."'AND password='".$password."'";
            foreach($conn->query($sql) as $data){
                $dbusername =$data["username"];
                $dbpassword =$data["password"];
                $clubName =$data["club"];   
            }
            if($username == $dbusername && $password == $dbpassword){
              $status = "Valid";
              session_start();
              $_SESSION["clubName"] = $clubName;
              header('location:../headIndex/comonHeadPage.php');
            }
            else{
                $status ="Invalid";
                header('location:../firstIndex.html?errorHead');                   
            }
        }
        else{
            $status = "Invalid";
        }
    }
?>