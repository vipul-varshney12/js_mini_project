/*async function fetchData(){
    try{
       const response= await fetch("https://api.example.com/data");
       const data= await response().json();
       console.log(data)

    }
    catch(error){
       console.log(error);
    }
 } */

   /* async function fetchDatsa(){
        try{
            const response= await fetch("h")
            const data= await response.json();
            consoloe.log(data);

        }
        catch(errr){
            console.log(errr);
        }
    }
*/
const arr=[1,2,3,4,5];
const transform =arr.map((num)=>{
    return num*2;
})
console.log(transform);

const timeset = () => {
    for (let i = 0; i < 5; i++) { // Change the loop condition
        setTimeout(() => {
            console.log(i); // This now correctly logs the value of i at the time it was set.
        }, 2000 * i);
    }
}
timeset();

/*
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send(`
       <h1>Cookie Example</h1>
       <a href="/set-cookie">Set Cookie</a><br>
       <a href="/view-cookies">View Cookies</a><br>
       <a href="/delete-cookie">Delete Cookie</a>
    `);
});

app.get('/set-cookie', (req, res) => {
    res.cookie('user', 'JohnDoe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set! <a href="/">Go back</a>');
});

app.get('/view-cookies', (req, res) => {
    res.send(`Cookies: ${JSON.stringify(req.cookies)} <a href="/">Go back</a>`);
});

app.get('/delete-cookie', (req, res) => {
    res.clearCookie('user');
    res.send('Cookie has been deleted! <a href="/">Go back</a>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

*/


/*
const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Session middleware
app.use(session({
    secret: 'your-secret-key', // Change this to a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using https
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send(`
       <h1>Session Example</h1>
       <a href="/set-session">Set Session</a><br>
       <a href="/view-session">View Session</a><br>
       <a href="/destroy-session">Destroy Session</a>
    `);
});

app.get('/set-session', (req, res) => {
    req.session.username = 'JohnDoe'; // Set a session variable
    res.send('Session has been set! <a href="/">Go back</a>');
});

app.get('/view-session', (req, res) => {
    const username = req.session.username ? req.session.username : 'Not set';
    res.send(`Session Username: ${username} <a href="/">Go back</a>`);
});

app.get('/destroy-session', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Error destroying session');
        }
        res.send('Session has been destroyed! <a href="/">Go back</a>');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

*/
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 3000;

// Secret key and algorithm for encryption
const SECRET_KEY = 'your-32-byte-long-secret-key';  // Must be 32 bytes for AES-256
const ALGORITHM = 'aes-256-cbc';

// Middleware
app.use(bodyParser.json());

// Encryption and Decryption Functions
function encrypt(text) {
    const iv = crypto.randomBytes(16); // Initialization vector
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted; // Combine IV and encrypted text
}

function decrypt(text) {
    const parts = text.split(':'); // Separate IV from encrypted text
    const iv = Buffer.from(parts.shift(), 'hex');
    const encryptedText = Buffer.from(parts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(SECRET_KEY), iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Socket.io connection
io.on('connection', (socket) => {
    console.log('New user connected');

    // Listen for chat messages
    socket.on('chat message', (msg) => {
        // Encrypt the message
        const encryptedMessage = encrypt(msg);
        
        // Emit the encrypted message
        io.emit('chat message', encryptedMessage);
    });

    // Optionally, listen for a message request from the client
    socket.on('request decrypt', (encryptedMessage) => {
        // Decrypt the message
        const decryptedMessage = decrypt(encryptedMessage);
        
        // Emit the decrypted message back to the requesting client or everyone
        io.emit('chat message decrypted', decryptedMessage);
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
