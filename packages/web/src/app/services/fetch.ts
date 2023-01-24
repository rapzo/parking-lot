const defaultHeaders = {
  "Content-Type": "application/json",
};

export interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: string;
}

export const fetch = async (url: string, options?: FetchOptions) => {
  const response = await window.fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options?.headers || {}),
    },
  });
  return response.json();
};
