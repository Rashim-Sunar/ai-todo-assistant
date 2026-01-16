# AI To-Do Assistant 🤖📝

An intelligent CLI-based To-Do List Assistant powered by AI, PostgreSQL, Drizzle ORM, and OpenRouter (GPT models).  
The assistant can understand natural language and perform CRUD operations on your todo list automatically.

---

## 🚀 Features

- Add new todos using natural language  
- View all todos  
- Search todos  
- Delete todos  
- AI-driven task planning and execution  
- PostgreSQL database integration  
- Uses OpenRouter GPT models  
- CLI-based interactive interface  

---

## 🛠 Tech Stack

- Node.js  
- Drizzle ORM  
- PostgreSQL  
- OpenRouter AI (GPT-4o-mini)  
- readline-sync (CLI input)  
- dotenv  

---

## 📁 Project Structure
```sh
├── db
│ ├── index.js
│ ├── schema.js
├── drizzle
├── docker-compose.yml
├── drizzle.config.js
├── index.js
├── package.json
└── README.md
```
---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Rashim-Sunar/ai-todo-assistant.git
cd ai-todo-assistant
```

### 2. Install dependencies
```sh
npm install
```
### 3. Setup Environment Variables
Create a .env file in the root directory:
```sh
DATABASE_URL=postgres://admin:admin@localhost:5431/postgres
OPENROUTER_API_KEY=your_openrouter_api_key
```

### 4. Start PostgreSQL using Docker
```sh
docker-compose up -d
```

### 5. Run Database Migrations (if needed)
```sh
npx drizzle-kit push
```

### 6. Start the Application
```sh
node index.js
```

---

## 🧠 How It Works
The AI assistant follows a structured reasoning flow:

<ol type='1'>
  <li>START</li>
  <li>PLAN</li>
  <li>ACTION</li>
  <li>OBSERVATION</li>
  <li>OUTPUT</li>
</ol>

Based on user input, the AI decides which database tool to call and performs operations automatically.
   



