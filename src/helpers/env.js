export const getEnvironment = () => ({
  apiUrl: import.meta.env.VITE_API_URL,
  messariWsUrl: import.meta.env.VITE_WS_MESSARI_MARKET_URL
});
