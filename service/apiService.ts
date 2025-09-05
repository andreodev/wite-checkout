import { CustomApiError } from "@/types/api";



class ApiService {
    private baseUrl: string;
    private token: string | null = null;

    constructor() {
        this.baseUrl =
            process.env.NEXT_PUBLIC_API_BASE_URL ||
            "http://localhost:3000/api";

        if (typeof window !== "undefined") {
            this.setTokenFromCookie();
        }
    }


    private async setTokenFromCookie(): Promise<void> {
        const cookie: { value?: string } | undefined | null = await cookieStore.get("authToken");
        this.token = cookie?.value || null;
    }
    
    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {

        if(!this.token) await this.setTokenFromCookie()

        const url: string = `${this.baseUrl}${endpoint}`;

        const isFormData: boolean = options.body instanceof FormData;

        const config = {
            headers: {
                ...(isFormData ? {} : { "Content-Type": "application/json" }),
                ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
                ...options.headers,
            },
            ...options,
        }
        
        try {
            const response: Response = await fetch(url, config);

            if (response.status === 204 || response.status === 200) {
                if (options.method === "DELETE") {
                    return {} as T;
                }
            }

            const data: T & { message?: string; code?: string; timestamp?: string; path?: string } = await response.json();

            if (!response.ok) {
                throw new CustomApiError(
                    data.message || "Erro na requisição",
                    data.code ?? "",
                    response.status.toString(),
                    data.timestamp ?? "",
                    data.path ?? "",
                )
            }
            return data;
        }

        catch (error: unknown) {
            if (error instanceof CustomApiError) {
                throw error;
            }
            throw new CustomApiError(
               "Erro de conexão. Verifique sua internet e tente novamente.", "network_error"
            );
        }
    }
}
