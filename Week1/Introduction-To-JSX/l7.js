function Car() {
    let carDetails = [
        {
            carname: "bmw",
            avg: 20,
            img: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesarperez209-733745.jpg&fm=jpg",
        },
        {
            carname: "audi",
            avg: 30,
            img: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?cs=srgb&dl=pexels-cesarperez209-733745.jpg&fm=jpg",
        },
    ];

    return (
        <>
            <h1>Cars Detail</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Car Name</th>
                        <th>Average (MPG)</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {carDetails.map((car, index) => (
                        <tr key={index}>
                            <td>{car.carname}</td>
                            <td>{car.avg}</td>
                            <td>
                                <img src={car.img} alt={`${car.carname} image`} width="100" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

function Student() {
    let students = [
        { name: "Samdam", age: 2 },
        { name: "Damdam", age: 3 },
    ];

    return (
        <>
            <h1>Students Detail</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

function App() {
    let showCars = false; // Set to true to show car details, false to show student details

    if (showCars) {
        return <Car />;
    } else {
        return <Student />;
    }
}

// Rendering the app
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
