<?php
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

    <link rel="stylesheet" type="text/css" href="adminHeadsPage.css" media=screen >

    <title>Eventos</title>
  </head>
  <body>
    <input type="hidden" id="varify" value="<?php echo $valid?>">
    <nav class="nav nav-pills nav-justified fixed-top navbar-dark bg-dark">
        <span style="padding-right: 40px;" ></span>
        <a class="nav-link navBarBtn" href="./adminIndex.php">Home</a>
        <a class="nav-link active" href="#">Club Heads</a>
        <a class="nav-link navBarBtn" href="./adminStudentsPage.php">Students</a>
        <!-- <a class="nav-link disabled" href="#">Disabled</a> -->
        <span style="padding-right: 900px"></span>
        <a class="btn btn-outline-success my-2 my-sm-0" style="height: 35px; position: relative;top:3px;" href="../apiData/logout.php">Logout</a>
    </nav>
    <div class="jumbotron jumbotron-fluid" style="height: 200px">
        <div class="container">
            <h1 class="display-4">Clubs & Heads</h1>
            <p class="lead">Modify The Details of Club Heads.</p>
        </div>
    </div>
    <div class="container">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">CLUB NAME</th>
                <th scope="col">Head Name</th>
                <th scope="col">Head Email</th>
                <th scope="col">Head Phone</th>                
                <th scope="col">Head Username</th>
                <th scope="col">Head Password</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- Javascript import through API -->
            </tbody>
        </table>
    </div>
    <form method="POST" action="./modifyHeads.php">
        <input type="hidden" id="Hclub" name="Hclub" required>
        <input type="hidden" id="Hemail" name="Hemail" required>
        <input type="hidden" id="Hpass" name="Hpass" required>
        <button type="submit" id="Hsubmit" style="display:none;">submit</button>
    </form>
    <!-- <script src="../localStorageAPI/setAPI.js"></script> -->
    <script src="getAPIadminHeadsPage.js"></script>
    <script src="adminHeadPage.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>