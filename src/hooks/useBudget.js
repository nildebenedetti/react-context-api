import { BudgetContext, BudgetProvider } from "../contexts/BudgetContext";
import { useContext } from "react";

function useBudget() {
    const context = useContext(BudgetContext);
    if (context === null) {
        throw new Error('BudgetProvider non trovato');
    }
    return context;
}

export default useBudget;