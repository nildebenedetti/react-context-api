import { BudgetContext, BudgetProvider } from "../contexts/BudgetContext";
import { useContext } from "react";

function useBudget() {
    const BudgetContext = useContext(BudgetProvider);

    return BudgetContext;
}

export default useBudget;