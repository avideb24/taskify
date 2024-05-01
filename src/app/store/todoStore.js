import { create } from 'zustand';


export const TodoStore = create((set => ({
    todo: [],
    addToDo: (text) => set((state) => ({
        todo: [...state.todo, text]
    }))

})))