const API_URL = process.env.REACT_APP_API_URL; // .env 파일에서 API URL 가져오기

// 첫 번째 API 호출: /api/user/topic
export const updateTopic = async (email, topic) => {
  try {
    const response = await fetch(`${API_URL}/api/user/topic`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, topic }),
    });

    if (!response.ok) {
      throw new Error("Failed to update topic");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 두 번째 API 호출: /api/user/synectics/generate
export const generateSynectics = async (email) => {
  try {
    const response = await fetch(`${API_URL}/api/user/synectics/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate synectics");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
