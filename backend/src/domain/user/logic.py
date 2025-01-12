from src.domain.user.repo import UserRepository

class UserLogic:
    @staticmethod
    async def get_user_by_email(email: str):
        return await UserRepository.find_by_email(email)