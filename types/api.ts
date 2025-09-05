



export class CustomApiError extends Error {
    constructor(
        message: string,
        public status: string,
        public code?: string,
        public timestamp?: string,
        public path?: string,
    ) {
        super(message);
        this.name = "CustomApiError";
    }
}