# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

useContext - 
1.creating context  -  createContext
const userContext = createContext()

2.Provide the context  - Provide 
<userContext.Provider value="vikas">
<Child />
</userContext.Provide>

3.consume context - useContext()
const user = useContext(userContext); // return vikas

useCases - 
Theme switching
Authentication 
Language setting 
sharing data with deep components 

useReducer - State management 
const [state, dispatch]  = useReducer(reducer, initialArg)
reducer - used to update state (state setter function )
initialArg : can be array or Object only 

function reducer(state, action) {
    switch(action.type) {
        case "increament":
        case "decrement":
        case "as on type ":
    }
}

dispatch({type:'increament'});
dispatch({type:'decrement'});

userReducer used to take multiple action on same state variable based on action type.
----------------------------------
useMemo hook 

const useMemoVal = useMemo(() => {

}, [dependency1, dependency2]);
dependenct array can be blank to call one time only 

1.improve performance 
2.avoide unwanted re render 
3.reduce computation cost






Hooks 
useState(), 
useRef()
useEffect()
useEffectEvent()
useContext()
useReducer()
useMemo()    -- memorise value
useCallback() -  memorise function 
useLayoutEffect() - used for dom measurement , layout adjustment , prevent fliker/ jumping 
    not use - not api call / fetc in this hook , event listner  | local state update 
    useLayoutEffect(() => {

    },dependency)

Custom Hook
- fetch API Data
- Managing form 
- Toggle values
- Handling local storage
- Timer login
- Authentication logic

Reuse logic | Keep component clean and small | Avoid duplicate code 

Rules
- start with use (useGreeting)
- reurns values/ function only (no html)
- can use other hooks inside custom hook 

customHook 

Higher Orrder Component ( HOC )
Mainly used for 
1.Reusing logic
2.Adding extra features
3.Wrapping components with reusable component

Example 


lazy() loading 
ex 
const Product = lazy(() => import("./Product"));
<Suspense fallback={<span>Loading...</span>}>
    <Routes>
        <Route />
    </Routes>
</Suspense>


createPortal / partial 


# react_hooks
REACT Practice with basic to advance

git config --global --add safe.directory "C:/vikas/REACT_PRACTICE/react_hooks"
