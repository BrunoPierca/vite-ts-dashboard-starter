import { privateAxiosInstance } from "./axiosConfig";
import { User } from "../../interfaces";


export const getAllUsers = async (page = 0, USERS_PER_PAGE = 0): Promise<{ users: User[], maxUsers: number }> => {
    const offset: number = USERS_PER_PAGE * page!;
    const response = await privateAxiosInstance.get(`/users?limit=${USERS_PER_PAGE}&offset=${offset}`);
    return response.data
}

interface UserWithPassword extends Partial<User> {
    password: string;
}

export const createUser = async (newUser: UserWithPassword) => {
    const { data } = await privateAxiosInstance.post<User>('/users', newUser);
    return data;
}


export const updateUser = async (user: User) => {
    const newUser = { ...user, id: undefined, created_at: undefined }
    const response = await privateAxiosInstance.patch<User>(`/users/${user.id}`, {
        ...newUser
    });
    return response.data
}

export const deleteUser = async (user: User) => {
    const response = await privateAxiosInstance.delete<User>(`/users/${user.id}`);
    return response.data;
}