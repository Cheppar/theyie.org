<?php
include("connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $fname = $_POST["fname"];
    $learn = $_POST["learn"];
    $email = $_POST["email"];
    /*$password = $_POST["password"]; */

    $sql = "INSERT INTO mummy (fname, learn, email, password) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($dbconn, $sql);

    mysqli_stmt_bind_param($stmt, "ssss", $fname, $learn, $email, $password);

    if (mysqli_stmt_execute($stmt)) {
       $to = 'livingmukabwa24@gmail.com';
        $subject = 'New Form Submission';
        $message = "Name: $fname\nemail: $email\nlearn: $learn\npassword";
        mail($to, $subject, $message);
        echo "<script type='text/javascript'>alert('Submitted successfully!');</script>";
        header("Location: index.html");
    } else {
        echo "Error: " . mysqli_error($dbconn);
    }

    mysqli_stmt_close($stmt);
    mysqli_close($dbconn);
}
?>
