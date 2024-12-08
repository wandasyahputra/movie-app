export const api = async (url) => {
  const base = import.meta.env.VITE_BASE_URL;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTBhYThhNTk4MjFkMGI4OWEzNDFjOWM5YTExNmE3NiIsIm5iZiI6MTczMzYyODg1Mi44MTIsInN1YiI6IjY3NTUxM2I0ZWUzM2IxMDk3YWMwNWVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gB0-QO9noe2DV-9MNh7WQiRcXvoa7pRO4axbmezTPs",
    },
  };
  return await fetch(base + url, options).then(async (res) => {
    if (!res.ok) {
      const errorData = {
        status: res.status,
        ...(await res.json()),
      };
      throw errorData;
    }
    return await res.json();
  });
};
