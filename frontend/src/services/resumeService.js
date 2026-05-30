import API from "./api";

export const analyzeResume = async (file) => {

  const formData = new FormData();

  formData.append("file", file);

  const response = await API.post(
    "/resume/analyze",
    formData
  );

  return response.data;
};