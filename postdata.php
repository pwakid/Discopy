<?php

function postToDiscord($message) {
    $webhookUrl = ""; // Replace {channel-id} with your channel ID
    $token = ""; // Replace YOUR_BOT_TOKEN with your actual Discord bot token

    $headers = [
        'Content-Type: application/json',
        'Authorization: Bot ' . $token
    ];

    $postData = json_encode(['content' => $message]);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $webhookUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    if ($response === false) {
        echo 'Curl error: ' . curl_error($ch);
    } else {
        echo 'Message posted successfully!';
    }

    curl_close($ch);
}

// Example usage
postToDiscord("This is a test message from PHP.");

?>
