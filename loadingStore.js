import { create } from 'zustand';

export const useLoadingStore = create((set) => ({
    isLoading: false,
    loadingMessage: '',
    setLoading: (isLoading, loadingMessage = '') => set({ isLoading, loadingMessage }),
}));

