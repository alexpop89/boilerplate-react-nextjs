import axios, {AxiosRequestConfig, AxiosResponse, Method} from 'axios';


/**
 * How to use it:
 * Initialize: const api = ApiService.getInstance();
 * Set Auth Token: api.setAuthToken('your-auth-token');
 * Make Requests: const response = await api.get<MyResponseType>('/my-endpoint'); - DON'T BE LAZY AND DEFINE TYPES!!!
 */

class ApiService {
    private static instance: ApiService;
    private baseURL: string = process.env.NEXT_PUBLIC_API_URL!;
    private authToken: string | null = null;

    private constructor() {
        axios.defaults.withCredentials = true; // To send cookies automatically
    }

    // Singleton pattern to ensure only one instance of ApiService
    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    public setAuthToken(token: string): void {
        this.authToken = token;
    }

    public clearAuthToken(): void {
        this.authToken = null;
    }

    public get<T>(endpoint: string, params?: any): Promise<AxiosResponse<T>> {
        return this.makeRequest('GET', endpoint, null, params);
    }

    public post<T>(endpoint: string, data: any): Promise<AxiosResponse<T>> {
        return this.makeRequest('POST', endpoint, data);
    }

    public put<T>(endpoint: string, data: any): Promise<AxiosResponse<T>> {
        return this.makeRequest('PUT', endpoint, data);
    }

    public patch<T>(endpoint: string, data: any): Promise<AxiosResponse<T>> {
        return this.makeRequest('PATCH', endpoint, data);
    }

    public delete<T>(endpoint: string): Promise<AxiosResponse<T>> {
        return this.makeRequest('DELETE', endpoint);
    }

    private async makeRequest<T>(
        method: Method,
        endpoint: string,
        data?: any,
        params?: any
    ): Promise<AxiosResponse<T>> {
        const config: AxiosRequestConfig = {
            method,
            url: `${this.baseURL}${endpoint}`,
        };

        if (this.authToken) {
            config.headers = config.headers ?? {};
            config.headers.Authorization = `Bearer ${this.authToken}`;
        }

        if (data) {
            config.data = data;
        }

        if (params) {
            config.params = params;
        }

        return axios.request<T>(config);
    }
}

export default ApiService;