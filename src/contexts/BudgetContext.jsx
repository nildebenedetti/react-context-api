import { createContext } from "react";

const BudgetContext = createContext(null)

function budgetProvider({children}) {
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

export { BudgetContext, budgetProvider };