import { create } from "zustand";

interface UiState {
    isOpen: boolean;
    closeAlert: () => void;
    message: string | null;
    setSuccessMessage: (message: string) => void;
    setErrorMessage: (message: string) => void;
    title: string | null;
    severity: 'success' | 'error' | null;
    color: 'success' | 'error' | null;
}


export const useUiStore = create<UiState>((set) => ({
    isOpen: false,
    closeAlert: () => set((state) => ({ ...state, isOpen: false, })),
    message: null,
    setSuccessMessage: (message: string) => set((state) => ({ ...state, isOpen: true, severity: 'success', message })),
    setErrorMessage: (message: string) => set((state) => ({ ...state, isOpen: true, severity: 'error', message })),
    title: null,
    severity: null,
    color: null
}));