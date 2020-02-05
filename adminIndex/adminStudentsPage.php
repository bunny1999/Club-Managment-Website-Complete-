<?php
    $Susn = $_GET["Susn"];
    $Sname = $_GET["Sname"];
    $Sclub  = $_GET["Sclub"];
    $Syear  = $_GET["Syear"];
    session_start();
    $valid = $_SESSION["name"];
    if(!empty($valid)){}
    else{
        header('location:../firstIndex.html');
    }
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="adminStudentsPage.css" media=screen >

    <title>Eventos</title>
  </head>
  <body>
    <input type="hidden" id="varify" value="<?php echo $valid?>">
    <nav class="nav nav-pills nav-justified fixed-top navbar-dark bg-dark">
        <span style="padding-right: 40px;" ></span>
        <a class="nav-link navBarBtn" href="./adminIndex.php">Home</a>
        <a class="nav-link navBarBtn" href="./adminHeadsPage.php">Club Heads</a>
        <a class="nav-link active" href="#">Students</a>
        <!-- <a class="nav-link disabled" href="#">Disabled</a> -->
        <span style="padding-right: 900px"></span>
        <a class="btn btn-outline-success my-2 my-sm-0" style="height: 35px; position: relative;top:3px;" href="../apiData/logout.php">Logout</a>
    </nav>
    <div class="jumbotron jumbotron-fluid" style="height: 200px">
        <div class="container">
            <h1 class="display-4">Students</h1>
            <p class="lead">All Students Details Present In Any Club.</p>
        </div>
    </div>
    <nav class="nav nav-pills nav-justified">
        <span style="padding-right:1100px;"></span>
        <button type="button" id="addStudentBtn" class="btn btn-success" onclick="addStudent('admin');">Add</button>
        <span style="padding-right:10px;"></span>        
        <button type="button" id="deleteStudentBtn" class="btn btn-danger" onclick="deleteStudent(2,8);">Delete</button>
        <span style="padding-right:10px;"></span>                
        <button type="button" id="searchStudentBtn" class="btn btn-info" data-toggle="modal" data-target="#searchInput">Search</button>
        <small style="margin-left:87%;margin-top:10px;"><button class="btn btn-warning" disabled></button> For, Create Head</small>
    </nav>
    <div class="modal" id="searchInput" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" style="margin-left:40%;">Search</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <small class="form-text" style="color:red;margin-bottom:10px;">*Everything is Not Compulsory, Even One-Thing Can Search Your Answer*</small>
                <form id="searchForm" style="width:60%;margin-left:20%;" method="GET">
                    <div class="form-group">
                        <label for="Susn">USN</label>
                        <input type="text" class="form-control" id="Susn" name="Susn">
                    </div>
                    <div class="form-group">
                        <label for="Sname">Name</label>
                        <input type="text" class="form-control" id="Sname" name="Sname">
                    </div>
                    <div class="form-group">
                        <label for="Sclub">Club</label>
                        <input type="text" class="form-control" id="Sclub" name="Sclub">
                    </div>
                    <div class="form-group">                    
                        <label for="Syear">Year</label>
                        <select class='form-control' id='Syear' name="Syear">
                            <option disabled selected value>Choose..</option>
                            <option>3rd</option>
                            <option>2nd</option>
                            <option>1st</option>
                        </select>
                    </div>
                    <button id="searchSubmit" type="submit" style="display:none;">submit</button>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" onclick="SearchStudent();" style="margin-right:40%;">Search</button>
            </div>
            </div>
        </div>
    </div>
    <div clas="container" style="margin: 50px;">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th></th>
                    <th scope="col">#</th>
                    <th scope="col">USN</th>
                    <th scope="col">Name</th>
                    <th scope="col">Branch</th>
                    <th scope="col">Year</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Club Name</th>  
                </tr>
            </thead>
            <tbody>
                <?php include "../connection.php"; ?>
                <?php
                    if(!empty($valid)){
                        if($_GET){
                            echo "<a href='./adminStudentsPage.php' style='background-color:red;padding:5px;color:white;border-radius:40%;margin-left:100%;'>X</a>";
                        }
                        $sql = "call searchStudent('".$_GET["Susn"]."','".$_GET["Sname"]."','".$_GET["Sclub"]."','".$_GET["Syear"]."')";
                        $i=1;
                        foreach($conn->query($sql) as $data){
                            echo "<tr id='row".$i."'><td></td><th scope='row'>".$i."</th>";
                            echo "<td>".$data["usn"]."</td>";
                            echo "<td>".$data["name"]."</td>"; 
                            echo "<td>".$data["branch"]."</td>"; 
                            echo "<td>".$data["year"]."</td>";                           
                            echo "<td>".$data["email"]."</td>"; 
                            echo "<td>".$data["phone"]."</td>"; 
                            echo "<td>".$data["club"]."</td></tr>";
                            $i++; 
                        }
                    }
                ?>
            </tbody>
        </table>
    </div>
    <form method="POST" action="../apiData/addStudent.php">
        <input type='hidden' name='identity' value='<?php echo $valid?>'>
        <input type='hidden' id='susn' name='usn'>
        <input type='hidden' id='sname' name='name'>
        <input type='hidden' id='sdept' name='department'>
        <input type='hidden' id='syear' name='year'>
        <input type='hidden' id='semail' name='email'>
        <input type='hidden' id='sphone' name='phone'>
        <input type='hidden' id='sclub' name='club'>
        <button id='addsubmit' type='submit' style="display:none;">submit</button>
    </form>
    <form method="POST" action="../apiData/deleteStudent.php">
        <input type='hidden' name='identity' value='<?php echo $valid?>'>
        <input type='hidden' id='Dusn' name='Dusn'>
        <input type='hidden' id='Dclub' name='Dclub'>
        <button id='Dbtn' type='submit' style="display:none;">submit</button>
    </form>
    <input type="hidden" id="noOfStudent">

    <input type="hidden" id="HdSusn" value='<?php echo $Susn?>'>
    <input type="hidden" id="HdSname" value='<?php echo $Sname?>'>
    <input type="hidden" id="HdSclub" value='<?php echo $Sclub?>'>
    <input type="hidden" id="HdSyear" value='<?php echo $Syear?>'>

    <form method="POST" action="./makeHead.php">
        <input type='hidden' id='headName' name='headName'>
        <input type='hidden' id='headEmail' name='headEmail'>
        <input type='hidden' id='headPhone' name='headPhone'>
        <input type='hidden' id='headClub' name='headClub'>        
        <button id='makeHead' type='submit' style="display:none;">submit</button>
    </form>
    <script src="getAPIadminStudentsPage.js"></script>
    <script src="../studentDataTableOptionBtns.js"></script>
    <script src="./adminStudentPage.js"></script>    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>