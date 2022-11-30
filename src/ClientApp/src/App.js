import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";

const App = () => {

    let itemModel = {
        Index: 1,
        Code: "ART001",
        Name: "Detergente",
        Description: "Descripcion",
        Quantity: 3
    }

    const [item, setItem] = useState(itemModel)

    useEffect(() => {
        console.log("Esto se ha actualizado: ", item.Quantity)
    }, [item])

    useEffect(() => {
        console.log("Iniciando React")
    }, [])

    return (
        <div className="container-fluid">
            <div className="col">
                <Button msg="Insertar articulo" />
                <Button msg="Modificar articulo" />
                <Button msg="Eliminar articulo" />
            </div>

            <br/>

            <p>Description : {item.Description} </p>
            <p>Quantity : {item.Quantity} </p>
            <button
                onClick={() => setItem(
                    {
                        ...item,
                        Description: "Agotado",
                        Quantity: 0
                    }
                ) }
            >Agotado</button> 
        </div>
        )
}

export default App;