import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";

const App = () => {

    const [items, setItems] = useState([]);

    const ConsumeAPI = async () => {
        const response = await fetch("api/item/PaginateItems");

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setItems(data)
        }
    }

    useEffect(() => {
        ConsumeAPI();
    }, [])

    return (
        <div className="container">
            <table className="table table-striped my-5">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Cod. Art.</th>
                        <th>Nombre Art.</th>
                        <th>Desc. Art.</th>
                        <th>Cant. Art.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                            </tr>     
                        ))
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-evenly px-5">
                <button type="button" className="btn btn-dark mx-2 my-2">Insertar articulo</button>
                <button type="button" className="btn btn-dark mx-2 my-2">Modificar articulo</button>
                <button type="button" className="btn btn-dark mx-2 my-2">Eliminar articulo</button>
            </div>

            // Test
            
            <div className="d-flex justify-content-center pb-5">
                <h1>Insertar articulo</h1> 
            </div>
            <Form action="none" />
        </div>
        )
}

export default App;