<?php
    session_start();
    $clubName=$_SESSION["clubName"];
    if(!empty($clubName)){}
    else{
        header('location:../firstIndex.html');
    }
?>
<?php include "../connection.php";?>
<?php
    $sql="SELECT imageJ,titleJ,descriptionJ FROM joinPage where club='".$clubName."'";
    foreach($conn->query($sql) as $data){
        $image = $data["imageJ"];
        $title = $data["titleJ"];
        $description = $data["descriptionJ"];
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

    <link rel="stylesheet" type="text/css" href="comonCSS.css" media=screen >
    <link rel="stylesheet" type="text/css" href="./editJoinPage.css" media=screen >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Eventos</title>
  </head>
  <body>    
    <nav class="nav nav-pills nav-justified fixed-top navbar-dark bg-dark">
        <span style="padding-right: 40px;" ></span>
        <a class="nav-link navBarBtn" href="./comonHeadPage.php">Home</a>
        <a class="nav-link active" href="#">Edit Club Profile</a>
        <span style="padding-right: 900px"></span>
        <a class="btn btn-outline-success my-2 my-sm-0" style="height: 35px; position: relative;top:3px;" href="../apiData/logout.php">Logout</a>
    </nav>
    <div style="margin-top:37px"></div>
    <div id="About" class="card bg-dark text-white">        
        <img id="clubCoverImage" class="card-img" alt="Club Cover" src="../media/<?php echo $image?>" style="height:600px;opacity: 0.5; ">
        <div class="card-img-overlay">
            <button class="btn btn-warning" onclick="uploadCover();" style="float:right;"><img src="../media/editPNG.png"></button>            
            <input type="file" id="coverImageChange" style="display:none;"/>
        </div>
        <div class="card-img-overlay" style="margin:100px 100px">
            <div>
                <button class="btn btn-warning" onclick="coverTitleChange();" style="float:left;"><img src="../media/smallEditPNG.png"></button>            
                <h1 class="card-title" id="clubCoverTitle" ><?php echo $title?></h1>
            </div>
            <div class="clear">
                 <button class="btn btn-warning" onclick="coverDescriptionChange();" style="float:left;"><img src="../media/smallEditPNG.png"></button>                                        
                <h4 class="card-text" id="clubCoverDescription" ><?php echo $description?></h4>
            </div>
            <div class="clear" id="saveBtnBox">
                <form method="POST" action="./updateJoinPage.php">
                    <input class="toPost" type="text" name="clubName" value="<?php echo $clubName;?>"/>
                    <input class="toPost" type="text" id="newTitle" name="newTitle" value="<?php echo $title?>"/>
                    <input class="toPost" type="text" id="newDescription" name="newDescription" value="<?php echo $description?>"/>
                    <input class="toPost" type="text" id="newCoverImage" name="newCoverImage" value="<?php echo $image?>"/>
                    <button class="btn btn-warning" type="submit" style="font-weight:bolder;font-size:20px;">Save</button>
                </form>
            </div>
        </div>
    </div>
    <div id="eventsBox" style="border-radius:10px;border:1px solid black;margin-top:5px;height:590px;">
        <div id="eventContainer">
            <h2 class="text-center" style="background-color:#FEC134;border-top-left-radius:5px;border-top-right-radius:5px;height:50px;color:white;">Events</h2>
            <br/>
            <div id="eventList" style="height:450px;width:700px;overflow:auto;float:left">
                <!-- DOM by Javascript   -->
            </div>
            <div id="eventList" style="border-radius:40px;margin-left:80px;height:480px;width:500px;overflow:auto;float:left;border:2px solid #0879FA;">
                <div style="width:300px;margin-left:80px;margin-top:20px;">
                    <form onsubmit="addEvent();" method="POST" action="./addEvent.php">
                        <div class="form-group">
                            <label for="formGroupExampleInput">Event Heading</label>
                            <input type="text" class="form-control" id="eventName" name="eventName" style="height:50px;" placeholder="Type In CAPITAL" required>
                        </div>
                        <div class="form-group">
                            <label>Event Date</label>
                            <input type="date" class="form-control" name="eventDate" min="2019-11-01" required>
                        </div>
                        <div style="clear:both;"></div>
                        <div class="form-group" style="margin-top:20px;">
                            <label>Last Submition Date</label>
                            <input type="date" class="form-control" name="lastDate" min="2019-11-01" required>
                        </div>
                        <!-- <input id="presentDate" name="presentDate" type="hidden"> -->
                        <input type="hidden" id="nameClub" name="clubName" value="<?php echo $clubName?>">
                        <button class="btn btn-warning" type="submit" style="border-radius:30px;width:200px;color:white;font-weight:bold;font-size:18px;margin:50px 0px 0px 70px;">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <form method="POST" action="./deleteEvent.php">
        <input type="hidden" name="club" value='<?php echo $clubName?>'>
        <input type="hidden" id="title" name="title">
        <button type="submit" id="Dsubmit" style="display:none;">submit</button>
    </form>
    <script src="./editJoinPage.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
