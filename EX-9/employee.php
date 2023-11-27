<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Details</title>
</head>
<style>
    body{
        padding: 15px;
    }
</style>
<body>
    <?php
        $ip = $_POST['emp'];
        if($ip == "Display"){
            $conn = mysqli_connect('localhost:3307','root','','ip');
            if(!$conn){
                die('Could not connect: '.mysqli_connect_error());
            }
            $sql = 'SELECT * FROM EMPDETAILS';
            $res = mysqli_query($conn, $sql);
            echo "<table border=1 style='text-align:center'>
                    <tr>
                        <th>EMP ID</th>
                        <th>EMP NAME</th>
                        <th>DESIGNATION</th>
                        <th>DEPARTMENT</th>
                        <th>DATE OF JOIN</th>
                        <th>SALARY</th>
                    </tr>";
            if(mysqli_num_rows($res) > 0){
                while($row = mysqli_fetch_assoc($res)){
                    echo "<tr>
                            <td>{$row['EMPID']}</td>
                            <td>{$row['ENAME']}</td>
                            <td>{$row['DESIG']}</td>
                            <td>{$row['DEPT']}</td>
                            <td>{$row['DOJ']}</td>
                            <td>{$row['SALARY']}</td>
                        </tr>";
                }
                echo "</table>";
                echo "<h2><a href='home.html'>Home</a></h2>";
            }
            else{
                echo "No results";
                echo "<h2><a href='home.html'>Home</a></h2>";
            }
            mysqli_close($conn);
        }
        else if($ip == "Update"){
            $eid = $_POST['eid'];
            $col = $_POST['col'];
            $val = $_POST['val'];
            $conn = mysqli_connect('localhost:3307','root','','ip');
            if(!$conn){
                die('Could not connect: '.mysqli_connect_error());
            }
            $sql = "UPDATE EMPDETAILS SET $col = '$val' WHERE EMPID = $eid";
            $res = mysqli_query($conn, $sql);   
            if($res > 0){
                echo "<h1>Successfully Updated!!!</h1>";
                echo "<h2><a href='home.html'>Home</a></h2>";
            }
            else{
                echo "<h1>Updation Failed...</h1>";
                echo "<h2><a href='home.html'>Home</a></h2>";
            }
        }
    ?>
</body>
</html>
