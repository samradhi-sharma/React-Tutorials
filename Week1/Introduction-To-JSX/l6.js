// this code basically helps one understand that how to add image tags in the table.
function Tab(){
    let carDetails =[{carname:"bmw", avg:20, img:"https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesarperez209-733745.jpg&fm=jpg"}, {carname:"audi", avg:30, img:"https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesarperez209-733745.jpg&fm=jpg"}];
    return(
        <>
        <h1>Cars detail</h1>
        <table>
            <tr>
            <th>carname</th>
            <th>avg</th>
            <th>img</th>
            </tr>
            {carDetails.map((car) => (
                <tr>
                    <td>{car.carname}</td>
                    <td>{car.avg}</td>
                    <td><img src={car.img} alt="car image" width="100"></img></td>
                </tr>
            ))}
        </table>
        </>
    )
}

const rootElement =  ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Tab/>);