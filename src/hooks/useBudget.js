import { BudgetContext, BudgetProvider } from "../contexts/BudgetContext";
import { useContext } from "react";

function useBudget() {
    const context = useContext(BudgetContext);

    return context;
}

export default useBudget;