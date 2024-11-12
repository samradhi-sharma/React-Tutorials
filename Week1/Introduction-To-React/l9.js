// we can also use arrow functions to write react fragments
function Name(){
    return(<> <p1>JSX is JavaScript XML</p1>
    </>)
}
const App = () =>(
    
        <>
        <h1>hello ji</h1>
        <p>let's learn react</p>
        </>
)
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);