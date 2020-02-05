<?php
   $clubName = array_keys($_GET);
   $clubName = $clubName[0];
?>
<?php include "../connection.php";?>
<?php
    $sql1= "SELECT imageJ,titleJ,descriptionJ FROM joinPage where club='".$clubName."'";
    foreach($conn->query($sql1) as $data){
        $cover= $data["imageJ"];
        $title= $data["titleJ"];
        $disc= $data["descriptionJ"];
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <link rel="stylesheet" href="./commonCSSJoin.css" media="screen"> -->

    <title>Eventos</title>
    <style type="text/css">
        body{
            position: relative;
        }
        #eventsBox{
            border-radius:40px;
            border:3px solid #3696FA;
            border-top-color: #FEC134;
        }
    </style>
  </head>
  <body data-spy="scroll" data-target="#navbar-example2" data-offset="50">  
        <input type="hidden" id="clubName" value="<?php echo $clubName?>">
        <nav id="navbar-example2" class="navbar fixed-top navbar-light bg-light">
            <a class="navbar-brand" href="../firstIndex.html"><img src="../media/left-arrow.png"></a>
            <ul class="nav nav-pills">
                <li class="nav-item">
                <a class="nav-link" href="#About">About</a>
                <li class="nav-item">
                </li>
                <a class="nav-link" href="#joinForm">Event & Join</a>
                </li>
            </ul>
        </nav>
        <div style="margin-top:50px"></div>
        <div id="About" class="card bg-dark text-white">
            <img id="clubCoverImage" class="card-img" src="../media/<?php echo $cover?>"alt="Club Cover" style="height:600px;opacity: 0.5;">
            <div class="card-img-overlay" style="margin:100px 100px">
                <h1 class="card-title" id="clubCoverTitle" style="font-weight: bolder;font-size: 80px"><?php echo $title?></h1>
                <h4 class="card-text" id="clubCoverDescription"><?php echo $disc ?></h4>
            </div>
        </div>
        <div style="margin-top:10px;">
            <div id="eventsBox" style="float:left;width:700px;margin:0px 30px;height:550px;">
                <div id="eventContainer">
                    <h2 class="text-center" style="background-color:#FEC134;border-top-left-radius:27px;border-top-right-radius:27px;height:50px;color:white;">Events</h2>
                    <span style="padding:10px;"></span>
                    <div id="eventList" style="height:450px;overflow:auto;margin-right:20px;">
                        <!-- DOM by Javascript   -->
                    </div>    
                </div>
            </div>
            <div id="joinForm" style="margin: 0px 80px;width:430px;float:left;">
                <h2 style="color:#0879FA;" class="text-center">Submit</h2>
                <span style="padding: 10px;"></span>
                <form method="POST" action="../apiData/addStudent.php">
                    <div class="form-group">
                        <label for="inputUSN">USN</label>
                        <input type="text" class="form-control" name="usn" id="inputUSN" placeholder="Ex. 1dt*cs0*" required>
                    </div>    
                    <div class="form-group ">
                        <label for="inputName">Name</label>
                        <input type="text" class="form-control" name="name" id="inputName" placeholder="Ex. John" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group ">
                            <label for="inputInterest">Interest</label>
                            <input readonly type="text" class="form-control " name="club" id="inputInterest" value="<?php echo $clubName?>" >
                        </div>
                        <span style="padding:10px;"></span>
                        <div class="form-group ">
                                <label for="inputDepartment">Department</label>
                                <select id="inputDepartment" class="form-control" name="department" required>
                                    <option selected>CSE Department</option>
                                    <option>ISE Dept.</option>
                                    <option>ECE Dept.</option>
                                    <option>EEE Dept.</option>
                                </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group ">
                            <label for="inputMobile">Mobile No.</label>
                            <input type="text" class="form-control " name="phone" id="inputMobile" placeholder="Mobile No." required>
                        </div>
                        <span style="padding:10px;"></span>
                        <div class="form-group ">
                            <label for="inputYear">Year</label>
                            <select id="inputYear" name="year" class="form-control" required>
                                <option selected>THIRD YEAR</option>
                                <option>SECOUND YEAR</option>
                                <option>FIRST YEAR</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group  ">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control " name="email" id="inputEmail" placeholder="Email" required>
                    </div>
                    <button type="submit" class="btn btn-primary" style="margin-left:140px;">Join Now</button>                   
                    <span style="padding: 40px;"></span>
                </form>
            </div>
        </div>
    <script src="./comonJoinPage.js"></script>
    <!-- <script src="../localStorageAPI/setAPI.js"></script> -->
    <!-- <script src="../localStorageAPI/getAPIJoinPage.js"></script> -->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
