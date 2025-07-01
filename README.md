
# 🎓 CoursePath: AI-Powered Course Planning (Learning Project)

**CoursePath** is a learning project I built to explore **Retrieval-Augmented Generation (RAG)** techniques in AI development. It’s a prototype chatbot that helps CU Boulder Computer Science students navigate their degree requirements and course prerequisites.

The goal was to simulate an intelligent academic counselor using a RAG-based backend that pulls course information from predefined documents.

---

## 🧠 Features

- 🤖 **AI Chatbot for Course Planning**
  - Ask natural language questions like:
    - "What are the prerequisites for CS401?"
    - "What classes should I take next semester?"
  - Uses a RAG pipeline for accurate answers from structured course info.

- 🔎 **Course Prerequisite Lookup**
  - Simulates prerequisite tracing by referencing curated academic data.

- 🎓 **Focus on CU Boulder Computer Science Major**
  - Currently tailored for Computer Science undergrad courses at CU Boulder.
  - Easily extendable for other majors with updated data.

---

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- OpenAI API key (for the RAG chatbot)
- (Optional) Docker if you want to containerize your environment later

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/coursepath.git
cd coursepath
```

### 2. Set Environment Variables

Create a `.env` file or export directly:

```bash
OPENAI_API_KEY=your_openai_api_key
```

---

### 3. Run the Chatbot

```bash
python app.py
```

*(Assuming your chatbot server script is called `app.py` — adjust if needed.)*

---

## 📌 Notes


- **Learning-Focused:**  
  This project was built for learning purposes—exploring LangChain, RAG, OpenAI API usage, and AI prompt engineering. Not production-ready.

---

## 🙌 Acknowledgements

- [LangChain](https://www.langchain.com/)
- [OpenAI](https://platform.openai.com/)
- CU Boulder course catalog (used for data reference)

---

## 🚧 Project Status

This is an **early-stage, learning project**.

If you’re interested in collaborating on expanding this (adding Neo4j, improving retrieval, building a front end, etc.), feel free to reach out or open an issue!
