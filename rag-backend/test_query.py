from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores.pgvector import PGVector

from dotenv import load_dotenv
import os
load_dotenv()


llm = ChatOpenAI(temperature=0, model="gpt-4o-mini")

CONNECTION_STRING = "postgresql+psycopg2://postgres:yourpassword@postgresdb:5432/course-project"


embeddings = OpenAIEmbeddings(model="text-embedding-3-large")

vector_store = PGVector(
    collection_name="cs_docs",
    connection_string=CONNECTION_STRING,
    embedding_function=embeddings
)


num_results = 5


retriever = vector_store.as_retriever(search_kwargs={"k": num_results})


def prompt_llm(question, db_context):
    question = f"Look in the core courses, electives, foundation courses, and math courses. {question}"
    docs = retriever.invoke(question)

    knowledge = ""

    for doc in docs:
        knowledge += doc.page_content+"\n\n"

    rag_prompt = f"""
    You are an academic advisor at a university who specializes in helping students make informed decisions about their course selections and academic path. Your role is to provide clear, accurate, and helpful guidance based on the provided course information and student history.

    Instructions:
    1. Use ONLY the information provided in the Knowledge section below
    2. Consider the student's academic history when making recommendations
    3. Be specific and reference course codes/names when relevant
    4. If you cannot answer a question based on the provided information, clearly state that
    5. Focus on practical, actionable advice

    Question: {question}

    Knowledge: {knowledge}

    Student History: {db_context}

    Please provide a clear, structured response that directly addresses the student's question.
    Do not format your response in markdown.
    """

    response = llm.invoke(rag_prompt)

    return response.content
