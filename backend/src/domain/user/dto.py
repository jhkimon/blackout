from pydantic import BaseModel, EmailStr

class UserRegisterDTO(BaseModel):
    email: EmailStr
    username: str
    password: str

class UserLoginDTO(BaseModel):
    email: EmailStr
    password: str

class UserResponseDTO(BaseModel):
    id: str
    email: EmailStr
    username: str