/**Adding JS inside JSX */
function sum(){
    let a = 10+5;
    return a;
}
function App(){
    var name ="world";
    var age=23;
    let demo = null;
    let a = undefined;
    let t = true;
    return(
        <>
        <h1>String {name}</h1>
        <p> Age {age}</p>
        <p>Null {demo}</p>
        <p>Undefined {a}</p>
        <p>Boolean {t}</p>
        <p>Calling a function{sum()}</p>
        </>
    )
    
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

// Remember one thing if you are importing anything from js in jsx we have to write that in curly braces.
