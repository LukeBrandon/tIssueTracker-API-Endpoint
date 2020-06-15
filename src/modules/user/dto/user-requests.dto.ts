
export interface LoginRequest {
    email: string;
    password: string;
}


export interface CreateUserRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface LoginRequestResponse {
    success: boolean;
    userId?: string;
}

export interface CreateUserResponse {
    success: boolean;
    message: string;
    userId?: string;
}