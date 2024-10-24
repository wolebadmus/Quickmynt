import { create } from "zustand";


const useModalStore = create((set) => ({

    isOpen:false,
    setIsOpen: (isOpen) => set({ isOpen })

}));

export default useModalStore