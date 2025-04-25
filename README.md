# AI Blog Generator

This is a full-stack AI Blog Generator web app using **React (frontend)** and **Flask (backend)**. It generates blog content using OpenAI's API, checks grammar via LanguageTool, suggests images using Unsplash, and allows exporting the blog as a PDF.

---

## Features

- Generate blog posts with OpenAI
- Suggest related images using Unsplash API
- Check grammar using LanguageTool
- Export blog as PDF

---

## Project Structure

```
ai_blog_generator/
├── backend/
│   ├── app.py
│   └── requirements.txt
└── frontend/
    └── src/
        ├── App.js
        ├── BlogForm.js
        └── index.js
```

---

## Setup Instructions

### 1. Backend (Flask)

#### Install dependencies:
```bash
cd backend
pip install -r requirements.txt
```

#### Set environment variable for OpenAI:
```bash
export OPENAI_API_KEY=your_openai_key_here
```

#### Run the Flask server:
```bash
python app.py
```

### 2. Frontend (React)

#### Install dependencies:
```bash
cd frontend
npm install jspdf axios
```

#### Run the React app:
```bash
npm start
```

---

## Deployment Instructions

### Backend (Render)

1. Push the `backend/` folder to GitHub.
2. Go to [https://render.com](https://render.com) and create a new web service.
3. Set build command: `pip install -r requirements.txt`
4. Set start command: `python app.py`
5. Set environment variable: `OPENAI_API_KEY=your_openai_key`
6. Deploy and get your API URL.

### Frontend (Vercel)

1. Push the `frontend/` folder to GitHub.
2. Go to [https://vercel.com](https://vercel.com) and import your GitHub repo.
3. Set output directory to `build` (default).
4. Add an environment variable (optional): `REACT_APP_API_URL=https://your-backend-url`
5. Deploy.

6. react app link
7. https://vercel.com/dharshini138s-projects/ai-blog-generator-xfe5/6EE6xzAR5aW5uPQUZpCfYsdvmvMq

---

## API Keys Required

- OpenAI API Key
- Unsplash Access Key
- (Optional) LanguageTool (public endpoint used)

---

## License

MIT
