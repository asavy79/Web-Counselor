# 🎓 CoursePath: Intelligent Course Planning Assistant

**CoursePath** is an AI-powered academic planning assistant that helps Computer Science students at CU Boulder understand their course requirements and prerequisites. It combines the power of a **Neo4j graph database** (still in progress) for course relationship modeling with a **chatbot powered by RAG (Retrieval-Augmented Generation)** to simulate a smart academic counselor.

---

## 🧠 Features

- 📚 **Course Prerequisite Graph**  
  Store and query course dependencies using Neo4j to model complex prerequisite chains.

- 🤖 **AI Counselor Chatbot**  
  Ask natural language questions about your CS degree path. Powered by RAG for accurate and contextual answers.

- 🔎 **Recursive Prerequisite Lookup**  
  Get all the required courses you must take before enrolling in a specific course (e.g., "What do I need before CS401?").

- 🎓 **Focus on Computer Science Major**  
  Currently tailored for testing with CS major requirements. More majors will be added soon.

---

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- Docker (for Neo4j)
- OpenAI API key (for RAG chatbot)
- [Neo4j Python Driver](https://pypi.org/project/neo4j/)

---

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/coursepath.git
cd coursepath
```

### 2. Set up environment variables

```bash
OPENAI_API_KEY=your_openai_api_key
NEO4J_URI=bolt://neo4j:7687
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=your_neo4j_password

```

### 3. Run with docker compose

```bash
docker compose up
```

---

## 🙌 Acknowledgements

- [Neo4j](https://neo4j.com/)
- [LangChain](https://www.langchain.com/)
- [OpenAI](https://platform.openai.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚧 Project Status

This project is currently **in progress**. I'm actively building out features, testing major-specific logic, and refining the chatbot's capabilities.

If you're interested in collaborating — whether it's for data modeling, front-end integration, or improving the AI counselor — feel free to reach out or open an issue! I'd love to connect.
