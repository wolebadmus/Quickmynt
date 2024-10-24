import { create } from "zustand";


const useModalStore = create((set) => ({

    isOpen:true,
    setIsOpen: (isOpen) => set({ isOpen })

}));

export default useModalStore;