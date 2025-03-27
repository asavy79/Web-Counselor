from langchain_community.vectorstores.pgvector import PGVector
from langchain_openai import OpenAIEmbeddings
from langchain.schema import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader
from uuid import uuid4

from dotenv import load_dotenv

load_dotenv()

CONNECTION_STRING = "postgresql+psycopg2://postgres:yourpassword@localhost:5432/course-project"
DATA_PATH = r"data"

embeddings = OpenAIEmbeddings(model="text-embedding-3-large")

vector_store = PGVector(
    collection_name="cs_docs",
    connection_string=CONNECTION_STRING,
    embedding_function=embeddings
)

loader = PyPDFLoader(
    r"data/computer-science-bachelor-science-bscs.pdf")

raw_documents = loader.load()
print("DOCUMENTS:")
print(raw_documents)

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=100,
    length_function=len,
    is_separator_regex=False
)

chunks = text_splitter.split_documents(raw_documents)

uuids = [str(uuid4()) for _ in range(len(chunks))]


if __name__ == "__main__":
    print("Chunks:")
    print(chunks)
    print('adding')
    vector_store.add_documents(documents=chunks, ids=uuids)
