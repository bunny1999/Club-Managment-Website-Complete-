<?php
  session_start();
  $valid =$_SESSION["name"];
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

    <link rel="stylesheet" type="text/css" href="adminIndex.css" media=screen >

    <title>Eventos</title>
  </head>
  <body>
    <input type="hidden" id="varify" value="<?php echo $valid?>">
    <nav class="nav nav-pills nav-justified fixed-top navbar-dark bg-dark">
        <span style="padding-right: 40px;" ></span>
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link navBarBtn" href="./adminHeadsPage.php">Club Heads</a>
        <a class="nav-link navBarBtn" href="./adminStudentsPage.php">Students</a>
        <!-- <a class="nav-link disabled" href="#">Disabled</a> -->
        <span style="padding-right: 900px"></span>
        <a class="btn btn-outline-success my-2 my-sm-0" style="height: 35px; position: relative;top:3px;" href="../apiData/logout.php">Logout</a>
    </nav>
    <div class="jumbotron jumbotron-fluid" >
        <div class="container">
          <h1 class="display-4 text-center">Eventos</h1>
          <p class="lead text-center">Live your weekes with all your passion !</p>
        </div>
    </div>
    <div class="container-fluid" id="mainContainer">
        <div class="container row" id="mainCardContainer">
            <div class="card addCardBox" id="addCardsCard" style="width: 15rem;">
                <div class="card-body">
                    <button id="addCardButton" onclick="createClub();" type="submit"><span class="glyphicon">&#x2b;</span></button>
                </div>
            </div>
            <!-- JavaScript API Cards -->
        </div>
    </div>
    <script src="adminIndex.js"></script>
    <script src="./getEditCardsAPI.js"></script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
