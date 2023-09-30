import { create } from "zustand";
import { User } from "../interfaces";

// Check if delete is useful, remove if not.
type actions = 'create' | 'edit' | 'details' | 'delete'

interface UsersState {
    activeUser: User | null;
    setActiveUser: (user: User, action: actions) => void;
    modalAction: actions | null;
    removeActiveUser: () => void;
}

export const useUsersStore = create<UsersState>((set) => ({
    activeUser: null,
    setActiveUser: (user: User | null, action: actions) => set((state) => ({ ...state, activeUser: user, modalAction: action })),
    modalAction: null,
    removeActiveUser: () => set((state) => ({ ...state, activeUser: null, modalAction: null }))
}));