import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";

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
                <Button msg="Insertar articulo" />
                <Button msg="Modificar articulo" />
                <Button msg="Eliminar articulo" />
            </div>

            <br/>

        </div>
        )
}

export default App;