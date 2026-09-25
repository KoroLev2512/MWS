import { ApiError } from './api-error';
import type { ApiPath, JSONValue, RequestOptions } from './types';

export class ApiClient {
  private readonly baseUrl: string;
  private readonly defaultHeaders: HeadersInit;

  constructor(baseUrl?: string, defaultHeaders?: HeadersInit) {
    this.baseUrl = baseUrl ?? '';
    this.defaultHeaders = defaultHeaders ?? {
      'Content-Type': 'application/json',
    };
  }

  private buildUrl(path: ApiPath, params?: RequestOptions['params']): string {
    const fullUrl = path.startsWith('http://') || path.startsWith('https://')
      ? path
      : `${this.baseUrl}${path}`;

    if (!params) return fullUrl;

    const url = new URL(fullUrl, typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });

    return url.toString();
  }

  public async request<T = unknown>(
    path: ApiPath,
    options: RequestInit & { params?: RequestOptions['params'] } = {}
  ): Promise<T> {
    const { params, headers, ...customOptions } = options;
    const url = this.buildUrl(path, params);

    const mergedHeaders = {
      ...this.defaultHeaders,
      ...headers,
    };

    const response = await fetch(url, {
      headers: mergedHeaders,
      ...customOptions,
    });

    if (!response.ok) {
      let errorData: unknown;
      try {
        errorData = await response.json();
      } catch {
        errorData = await response.text().catch(() => null);
      }
      throw new ApiError(response.status, response.statusText, errorData);
    }

    // Handle 204 No Content
    if (response.status === 204) {
      return null as T;
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return (await response.json()) as T;
    }

    return (await response.text()) as unknown as T;
  }

  public async get<T = unknown>(url: ApiPath, options?: RequestOptions): Promise<T> {
    return this.request<T>(url, {
      method: 'GET',
      ...options,
    });
  }

  public async post<T = unknown, B extends JSONValue | FormData = JSONValue>(
    url: ApiPath,
    body?: B,
    options?: RequestOptions
  ): Promise<T> {
    const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
    const headers = isFormData
      ? { ...(options?.headers ?? {}) } // Let fetch set boundary for FormData
      : options?.headers;

    return this.request<T>(url, {
      method: 'POST',
      body: isFormData ? body : (body !== undefined ? JSON.stringify(body) : undefined),
      ...options,
      headers,
    });
  }

  public async put<T = unknown, B extends JSONValue = JSONValue>(
    url: ApiPath,
    body?: B,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(url, {
      method: 'PUT',
      body: body !== undefined ? JSON.stringify(body) : undefined,
      ...options,
    });
  }

  public async delete<T = unknown>(url: ApiPath, options?: RequestOptions): Promise<T> {
    return this.request<T>(url, {
      method: 'DELETE',
      ...options,
    });
  }
}

export const api = new ApiClient();
