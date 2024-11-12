function Cars(){
    let cars =["BMW", "Audi", "Nexa", "Honda", "Maruti"];
    return (
        <>
        {cars.map((i, index) => <ul><li key={index}>{i}</li></ul>)}
        </>
    )
}
const rootElement =  ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Cars/>);