from pydantic import BaseModel
from typing import Optional

class Book(BaseModel):
    """Book model representing a book in the library"""
    id: int
    title: str
    author: str
    description: str
    
    class Config:
        schema_extra = {
            "example": {
                "id": 1,
                "title": "The Great Gatsby",
                "author": "F. Scott Fitzgerald",
                "description": "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."
            }
        } 