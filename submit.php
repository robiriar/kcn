<?php
// Database connection settings
$host = "localhost";
$username = "root";
$password = "aaa";
$dbname = "testing";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];

// Prepare and execute database query
$stmt = $conn->prepare("INSERT INTO reg (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
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