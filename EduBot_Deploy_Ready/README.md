# EduBot 🤖 — AI Chat Assistant (OpenRouter API)

EduBot is a simple AI chatbot built using **Flask** and the **OpenRouter API**.  
It’s perfect for school or demo projects, and can be deployed easily on **Render**, **Railway**, or **Heroku**.

---

## 🚀 Features
- Chat with AI (via OpenRouter API)
- Frontend with TailwindCSS
- Flask backend (Python)
- Ready for deployment

---

## 🧩 Setup Locally

1. Clone or extract the project.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Set your API key:
   ```bash
   export OPENROUTER_API_KEY="your-api-key-here"
   ```
4. Run the app:
   ```bash
   python app.py
   ```
5. Visit:
   [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🌐 Deploy to Render

1. Push this folder to GitHub.
2. Go to [Render.com](https://render.com) → New → Web Service.
3. Connect your GitHub repo.
4. Add an environment variable:
   ```
   OPENROUTER_API_KEY = your-api-key-here
   ```
5. Set start command:
   ```
   gunicorn app:app
   ```
6. Click **Deploy** 🎉

Your chatbot will be live at something like:
```
https://edubot.onrender.com
```

---
Made with ❤️ for school projects.
