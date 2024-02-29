<?php
// Database connection settings
$host = "localhost";
$username = "root";
$password = "aaa";
$dbname = "coll";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$course = $_POST['course'];
$cname = $_POST['cname'];
$fname = $_POST['fname'];
$mname = $_POST['mname'];
$dob = $_POST['dob'];
$category = $_POST['category'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$address = $_POST['address'];
$adhaar_card = $_POST['adhaar_card'];
$class = $_POST['class'];
$stream = $_POST['stream'];
$board_university = $_POST['board_university'];
$passing_year = $_POST['passing_year'];
$total_marks = $_POST['total_marks'];
$total_marks_obtained = $_POST['total_marks_obtained'];
$percentage = $_POST['percentage'];



// Prepare and execute database query
$stmt = $conn->prepare("INSERT INTO reg (course, cname, fname, mname, dob, category, mobile, email, address, adhaar_card, class, stream, board_university, passing_year, total_marks, total_marks_obtained, percentage) VALUES ( ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?,?, ?)");
$stmt->bind_param("ssssisississsiiii", $course, $cname, $fname, $mname, $dob, $category, $mobile, $email, $address, $adhaar_card, $class, $stream, $board_university, $passing_year, $total_marks, $total_marks_obtained, $percentage );
$stmt->execute();

// Check if data is stored successfully
if ($stmt->affected_rows > 0) {
    echo "Data stored successfully!";
} else {
    echo "Error storing data!";
}

// Close statements and connection
$stmt->close();
$conn->close();
?>





