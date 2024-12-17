import express from "express"
import bodyParser from "body-parser";
import XLSX from "xlsx"
import  fs from "fs";
import cors from "cors"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import dotenv  from "dotenv";

dotenv.config({
    path: "./.env"
})

const app = express();

//middlewares
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

// Helper function to get users from Excel
const getUsersFromExcel = () => {
    if (fs.existsSync('./users.xlsx')) {
        const workbook = XLSX.readFile('./users.xlsx');
        const worksheet = workbook.Sheets['Users'];
        return XLSX.utils.sheet_to_json(worksheet);
    }
    return [];
};

// Helper function to save users to Excel
const saveUsersToExcel = (users) => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(users);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
    XLSX.writeFile(workbook, './users.xlsx');
};

const writeData = (posts) => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(posts);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'posts');
    XLSX.writeFile(workbook, './data.xlsx');
}

const readData = () => {
        const workbook = XLSX.readFileSync('./data.xlsx');
        const worksheet = workbook.Sheets['posts'];
        return XLSX.utils.sheet_to_json(worksheet);
}

// Signup route
app.post('/signup', async (req, res) => {
    const { name, email, password} = req.body;
    const users = getUsersFromExcel();

    // Check if user already exists
    const userExists = users.some(user => user.Email === email);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ id: Date.now(), Name: name, Email: email, Password: hashedPassword});

    // Save the updated users list to Excel
    saveUsersToExcel(users);
    res.json({ message: 'Signup successful!'});
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const users = getUsersFromExcel();

    // Find user
    const user = users.find(user => user.Email === email);
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const name = user.Name;  
    // Check password
    const passwordMatch = await bcrypt.compare(password, user.Password);
    if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.Email, name:name }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Login successful!', token, name });
});

app.post("/create", async (req, res) => {
    const { title, content , author } = req.body;
    
    const data = readData();
    data.push({id: Date.now(), title: title, content: content, author: author });
    writeData(data);
    res.status(201).send(data);
}
);

app.get("/create", async (req, res) => {
        const data = readData();
        res.send(data);
});



    app.get('/search/:title', (req, res) => {
        const idToSearch = req.params.title;
        try {
          // Load and parse the Excel file
          const workbook = XLSX.readFileSync('./data.xlsx'); // Update with your file path
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const data = XLSX.utils.sheet_to_json(worksheet);
      
          // Search for the matching ID
          console.log(idToSearch);
          
          const match = data.find((post) => post.title=== idToSearch);
      
          if (match) {
            res.json(match);
          } else {
            res.status(404).json({ message: 'posts not found' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Error reading the file' });
        }
    });

  //  route to delete posts
const authenticateToken = async (req, res, next) => {
    const authHeader =req.headers['authorization'];
    const token =authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);
    await jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

app.delete('/create/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    const user = req.user; // Assuming authenticateToken sets req.user
    
    const posts =  readData();
    const postToDelete =  posts.find(post => post.id === parseInt(id));
    
    if (!postToDelete) {
        return res.status(404).json({ error: 'Post not found' });
    }
        
    if (postToDelete.author !== user.name) {
        return res.status(403).json({ error: 'You are not authorized to delete this post' });   
    }

    const filteredPosts = await posts.filter(post => post.id !== parseInt(id));    
    filteredPosts.push(filteredPosts);
    writeData(filteredPosts);
    res.status(200).json({ success: true, message: 'Post deleted' });
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});
