import {createContext, Dispatch, FC, ReactNode, SetStateAction, useState} from "react";

interface IGlobalContextProps {
    category: string
    setCategory: Dispatch<SetStateAction<string>>
}

export const GlobalContext = createContext<IGlobalContextProps>({
    category: '', setCategory: () => {}
})

export const GlobalContextProvider:FC<{children: ReactNode}> = ({children}) => {
    const [category, setCurrentCategory] = useState('All')
    return(
        <GlobalContext.Provider value={{category, setCategory: setCurrentCategory}}>
            {children}
        </GlobalContext.Provider>
    )
}
