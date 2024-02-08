from fastapi import APIRouter
from fastapi import HTTPException
from src.db import db

courses_router = APIRouter()

@courses_router.get("/courses/books/")
async def search_books(limit: int = 0):
    query_params = {}
    query_params["number"] = limit
    books = await db.book.find_many(
        where=query_params
    )
    return books

@courses_router.post("/courses")
async def create_course(course_data):
    course = await db.course.create(data=course_data.dict())
    return course

@courses_router.get("/courses/{course_id}")
async def get_course(course_id: int):
    course = await db.course.find_unique(
        where={"id": course_id},
        include={"students": True, "books": True}
    )
    if course is None:
        raise HTTPException(status_code=404, detail="Course not found")
    return course

@courses_router.get("/courses")
async def get_courses(user: Annotated[User, Depends(get_user)]):
    if user.type == AccountType.TEACHER:
        courses = await db.course.find_many(where={"teacher": {"id": user.id}})
    elif user.type == AccountType.STUDENT:
        courses = await db.course.find_many(
            where={"students": {"some": {"student": {"id": user.id}}}}
        )
    else:
        raise HTTPException(status_code=403, detail="Forbidden")
    return courses