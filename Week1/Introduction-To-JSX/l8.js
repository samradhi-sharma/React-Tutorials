// previously we learned how to use if condition in react, lets learn about ternary operator
function App(){
    let isLoggedIn =true;
    return (
        <>
        <h1>Hello {isLoggedIn ?"alleexa" : "user"}</h1>
        </>
    )
}
const rootElement=ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
