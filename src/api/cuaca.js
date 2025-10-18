import api from "./axios";

const appId = "bbcd7c927cd5ee57f4d6d6f6c9bda892";

export async function getGeo(city) {
  const response = await api.get(
    `/geo/1.0/direct?q=${city}&appid=${appId}&limit=1`
  );
  return response.data;
}
export async function getWeather(lat, lon) {
  const response = await api.get(
    `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`
  );
  return response.data;
}