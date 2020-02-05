<?php include "../connection.php";?>
<?php
    $status;
    if(isset($_POST["submit"])){
        if(!empty($_POST["userAdmin"]) && !empty($_POST["passAdmin"])){
            $username = $_POST["userAdmin"];
            $password = $_POST["passAdmin"];
            echo $username.$password;
            //we are seaching for the whole row, there we will easyly fetch key value
            $sql = "SELECT * FROM admin WHERE username='".$username."'AND password='".$password."'";
            foreach($conn->query($sql) as $data){
                $dbusername =$data["username"];
                $dbpassword =$data["password"];   
            }
            if($username == $dbusername && $password == $dbpassword){
              $status = "Valid";
              session_start();
              $_SESSION["name"] = "admin";
              header('location:../adminIndex/adminIndex.php');
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