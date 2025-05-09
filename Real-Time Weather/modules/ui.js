const getloadingEl = () => {
  return document.querySelector(".spinner");
};

export const showLoading = () => {
  const loading = getloadingEl();
  loading.style.display = "block";
};
export const hideLoading = () => {
  const loading = getloadingEl();
  loading.style.display = "none";
};
export const renderWeather = (data) => {
  if (data) {
    const html = `
      <div class="weather-card">
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>🌡 Temp: ${data.current.dewpoint_c} °C</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
      <p>💨 Wind: ${data.current.wind_kph} m/s</p>
    </div>`;
    return html;
  }
  return "<h2>Data not found</h2>";
};
export const showError = (erroText) => {
  document.querySelector("#error-message").textContent = erroText;
  document.querySelector("#error-message").style.display = "block";
};
export const hideError = () => {
  document.querySelector("#error-message").style.display = "none";
};
export const clearError = () => {
  document.querySelector("#error-message").textContent = "";
};
