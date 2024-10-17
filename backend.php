<?php
$host = 'localhost';
$db = 'shoeyoursole_db';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM shoes";
$result = $conn->query($sql);

$shoes = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $shoes[] = $row;
    }
}
echo json_encode($shoes);
?>
