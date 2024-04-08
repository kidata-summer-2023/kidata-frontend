from fastapi import APIRouter, HTTPException
from src.db import db
from prisma.models import Question

question_router = APIRouter()

@question_router.get("/question/{question_id}", tags=["questions"])
async def get_question(question_id: int) -> Question:
    question = await db.question.find_unique(where={"id": question_id})
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")
    return question