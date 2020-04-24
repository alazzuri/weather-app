const apiRequest = async (baseUrl, apiKey, location, signal) => {
  const path = `${baseUrl}?q=${location}&appid=${apiKey}`;
  const response = await fetch(path, { signal });
  const data = await response.json();
  return data;
};

export default apiRequest;
