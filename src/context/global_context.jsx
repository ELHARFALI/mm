import axios from "axios";
import { useContext, createContext, useState, useEffect, useReducer } from "react";

const AppContext = createContext()


export const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [categories, setCategories] = useState([])

    // get all meals
    const fetchMeals = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            const meals = response.data.meals;
            setMeals(meals)
        } catch (error) {
            console.log(error.response);
        }
    }

    // get all categories
    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            const categories = response.data.categories;
            setCategories(categories)
        } catch (error) {
            console.error(error);
        }
    };

    console.log(categories);

    useEffect(() => {
        fetchMeals()
        fetchCategories()
    }, [])

    return (
        <AppContext.Provider value={{meals, categories}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}