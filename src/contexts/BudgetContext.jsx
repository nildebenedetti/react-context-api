import { createContext } from "react";
import { useState } from "react";

const BudgetContext = createContext(null)

function BudgetProvider({children}) {
    const [ budgetMode, setBudgetMode ] = useState(false)

    const budgetValues = {
        budgetMode,
        setBudgetMode
    }

    return (
        <BudgetContext value={budgetValues}>
            {children}
        </BudgetContext>
    );
};

export { BudgetContext, BudgetProvider };