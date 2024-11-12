/**Rendering arrays and objects in JSX */

function App(){
    let arr = [1,2,3,4,5,6];
    let obj = {
        name: "John",
        age:10
    }
    return (
        <>
        <h1>Arrays and objects in jsx</h1>
        <h2>{arr}</h2>
        <h2>{obj.name}</h2>
        {/* directly if i write obj it will give error it says you cannot render it like this */}
        {/* here the output is coming in horizontal form but now i want it to give in vertical form */}
        {arr.map((num) => <h2>{num}</h2>)}
        
        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);