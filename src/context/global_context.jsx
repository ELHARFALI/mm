import axios from "axios";
import { useContext, createContext, useState, useEffect, useReducer } from "react";

const AppContext = createContext()


export const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([])

    const fetchAllMeals = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            const meals = response.data.meals;
            setMeals(meals)
        } catch (error) {
            console.log(error.response);
        }
    }

    console.log(meals);
    

    useEffect(() => {
        fetchAllMeals()
    }, [])

    return (
        <AppContext.Provider value={{meals}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}