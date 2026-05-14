import { BudgetContext, budgetProvider } from "../contexts/BudgetContext";
import { useContext } from "react";

function useBudget() {
    const BudgetContext = useContext(budgetProvider);

    return BudgetContext;
}

export default useBudget;