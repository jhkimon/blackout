# src/domain/slackbot/utils.py

def format_summary_with_buttons(summary: str) -> dict:
    """
    요약 결과와 버튼을 포함한 Slack 메시지 포맷 생성
    """
    return {
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": f"📝 *요약 결과:*\n{summary}"
                }
            },
            {
                "type": "actions",
                "elements": [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "📂 대화 정리하기"
                        },
                        "style": "primary",
                        "value": "done",
                        "action_id": "done_action"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "🔄 다시 발상하기"
                        },
                        "style": "danger",
                        "value": "resynectics",
                        "action_id": "resynectics_action"
                    }
                ]
            }
        ]
    }