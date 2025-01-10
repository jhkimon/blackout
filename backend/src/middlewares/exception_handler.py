from fastapi import Request, FastAPI
from fastapi.responses import JSONResponse
from src.core.exceptions import (
    AuthenticationError, AuthorizationError,
    DatabaseConnectionError, DataNotFoundError,
    DataConflictError, ValidationError,
    FileUploadError, InvalidFileFormatError
)

# 예외 핸들러 등록
def register_exception_handlers(app: FastAPI):
    # 인증 실패 (401 Unauthorized)
    @app.exception_handler(AuthenticationError)
    async def auth_exception_handler(request: Request, exc: AuthenticationError):
        return JSONResponse(
            status_code=401,
            content={"detail": exc.message},
        )

    # 권한 없음 (403 Forbidden)
    @app.exception_handler(AuthorizationError)
    async def authz_exception_handler(request: Request, exc: AuthorizationError):
        return JSONResponse(
            status_code=403,
            content={"detail": exc.message},
        )

    # 데이터베이스 연결 실패 (500 Internal Server Error)
    @app.exception_handler(DatabaseConnectionError)
    async def db_exception_handler(request: Request, exc: DatabaseConnectionError):
        return JSONResponse(
            status_code=500,
            content={"detail": exc.message},
        )

    # 데이터 없음 (404 Not Found)
    @app.exception_handler(DataNotFoundError)
    async def data_not_found_handler(request: Request, exc: DataNotFoundError):
        return JSONResponse(
            status_code=404,
            content={"detail": exc.message},
        )

    # 데이터 충돌 (409 Conflict)
    @app.exception_handler(DataConflictError)
    async def data_conflict_handler(request: Request, exc: DataConflictError):
        return JSONResponse(
            status_code=409,
            content={"detail": exc.message},
        )

    # 입력값 유효성 검사 실패 (422 Unprocessable Entity)
    @app.exception_handler(ValidationError)
    async def validation_exception_handler(request: Request, exc: ValidationError):
        return JSONResponse(
            status_code=422,
            content={"detail": exc.message},
        )

    # 파일 업로드 실패 (400 Bad Request)
    @app.exception_handler(FileUploadError)
    async def file_upload_exception_handler(request: Request, exc: FileUploadError):
        return JSONResponse(
            status_code=400,
            content={"detail": exc.message},
        )

    # 잘못된 파일 형식 (400 Bad Request)
    @app.exception_handler(InvalidFileFormatError)
    async def invalid_file_format_handler(request: Request, exc: InvalidFileFormatError):
        return JSONResponse(
            status_code=400,
            content={"detail": exc.message},
        )

    # 모든 예외 처리 (500 Internal Server Error)
    @app.exception_handler(Exception)
    async def global_exception_handler(request: Request, exc: Exception):
        return JSONResponse(
            status_code=500,
            content={"detail": "서버 내부 오류가 발생했습니다."}
        )