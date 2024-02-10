<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = htmlspecialchars($_REQUEST['name']);
    $email = htmlspecialchars($_REQUEST['email']);
    $message = htmlspecialchars($_REQUEST['message']);
    
    // check if the email input is empty
    if (empty($email)) {
        echo "Email is empty";
    } else {
        // the message
        $msg = "Name: " . $name . "\n" . "Message: " . $message;
        
        // use wordwrap() if lines are longer than 70 characters
        $msg = wordwrap($msg,70);

        // send email
        mail("your-email@example.com","New message from website",$msg);
        
        // Redirect to a new page or display a success message
        echo "Email sent!";
    }
}
?>
