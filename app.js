const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

module.exports = app;

app.get('/', (req, res) => {
    const podName = process.env.HOSTNAME || 'Unknown';

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Captain Canary's Adventures</title>
            <style>
                body {
                    text-align: center;
                    font-family: Arial, sans-serif;
                }
                #canaryImg {
                    width: 50%;
                    max-width: 500px; /* Adjust max-width as needed */
                    margin-top: 50px;
                }
                #content {
                    margin-top: 20px;
                }
            </style>
            <script>
                function toggleImage() {
                    var img = document.getElementById('canaryImg');
                    var btn = document.getElementById('toggleBtn');
                    var text = document.getElementById('displayText');
                    if (img.src.includes('canary-working.png')) {
                        img.src = '/canary-vacation.png';
                        btn.textContent = 'Back to Work!';
                        text.innerHTML = "It's " + new Date().toLocaleTimeString('en-US', { timeZone: 'Pacific/Honolulu', hour: '2-digit', minute: '2-digit', hour12: true }) + " in Hawaii.<br>While you're stuck debugging, Captain Canary is catching waves and enjoying the Aloha spirit! 🏄‍♂️🌺";
                    } else {
                        img.src = '/canary-working.png';
                        btn.textContent = 'Go on Vacation!';
                        text.innerHTML = 'Pod Name: ${podName}';
                    }
                }
            </script>
        </head>
        <body>
            <img id="canaryImg" src="/canary-working.png" alt="Captain Canary Working">
            <div id="content">
                <button id="toggleBtn" onclick="toggleImage()">Go on Vacation!</button>
                <p id="displayText">Pod Name: ${podName}</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
