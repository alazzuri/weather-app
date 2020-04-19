const apiRequest = async (baseUrl, apiKey, location) => {
  const path = `${baseUrl}?q=${location}&appid=${apiKey}`;
  const response = await fetch(path);
  const data = await response.json();
  return data;
};

export default apiRequest;
