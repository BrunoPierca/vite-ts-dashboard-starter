import { create } from "zustand";
import { User } from "../interfaces";

// Check if delete is useful, remove if not.
export type Action = 'create' | 'edit' | 'details' | 'delete'

interface UsersState {
    activeUser: User | null;
    setActiveUser: (user: User, action: Action) => void;
    modalAction: Action | null;
    removeActiveUser: () => void;
    setModalAction: (action: Action) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
    activeUser: null,
    setActiveUser: (user: User | null, action: Action) => set((state) => ({ ...state, activeUser: user, modalAction: action })),
    modalAction: null,
    removeActiveUser: () => set((state) => ({ ...state, activeUser: null, modalAction: null })),
    setModalAction: (action: Action) => set((state) => ({ ...state, modalAction: action })),
}));