import { createContext, useContext } from "react";

export const TypeContext = createContext({
    type: 'movie',
    findMovie: () => {},
    findSeries: () => {}
})

export default function useType(){
    return useContext(TypeContext)
}

export const TypeProvider = TypeContext.Provider