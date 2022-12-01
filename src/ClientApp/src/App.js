import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import DelForm from "./components/DelForm";
import Form from "./components/Form";

const App = () => {

    const [items, setItems] = useState([]);
    const [length, setLength] = useState([]);

    // States of current view
    const [mainView, setMainView] = useState(true);
    const [insertView, setInsertView] = useState(false);
    const [modifyView, setModifyView] = useState(false);
    const [deleteView, setDeleteView] = useState(false);

    // States handler
    const insertHandler = () => {
        setMainView(false);
        setInsertView(true);
    }
    const modifyHandler = () => {
        setMainView(false);
        setModifyView(true);
    }
    const deleteHandler = () => {
        setMainView(false);
        setDeleteView(true);
    }

    const ConsumeAPI = async () => {
        const response = await fetch("api/item/PaginateItems");

        if (response.ok) {
            const data = await response.json();
            var arr = []
            for (var i = 0; i <= data.length; i++) {
                arr.push(i);
            }
            setLength(arr)
            setItems(data)
        }

    }

    const createItem = async (item) => {
        const response = await fetch("api/item/CreateItem", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(item)
        })

        if (response.ok) {
            setInsertView(false);
            setMainView(true);
        }
    }

    const modifyItem = async (item) => {
        const response = await fetch("api/item/UpdateItem", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(item)
        })

        if (response.ok) {
            setModifyView(false);
            setMainView(true);
        }
    }

    const deleteItem = async (code) => {
        const response = await fetch("api/item/DeleteItem/" + code, {
            method: 'DELETE',
        })

        if (response.ok) {
            setDeleteView(false);
            setMainView(true);
        }
    }


    useEffect(() => {
        ConsumeAPI();
    }, [])

    return (
        <div className="container">
            { mainView && (
                    <><table className="table table-striped my-5">
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
                            {items.map((item, length) => (
                                <tr>
                                    <td>{length+1}</td>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-evenly px-5 pb-5">
                        <button type="button" className="btn btn-dark mx-2 my-2" onClick={ insertHandler }>Insertar articulo</button>
                        <button type="button" className="btn btn-dark mx-2 my-2" onClick={ modifyHandler }>Modificar articulo</button>
                        <button type="button" className="btn btn-dark mx-2 my-2" onClick={ deleteHandler }>Eliminar articulo</button>
                    </div></>
                )
            }
            { insertView && (
                <><div className="d-flex justify-content-center py-5">
                    <h1>Insertar articulo</h1>
                    </div><Form action="insert" changeItem={ createItem } /></>
                )
            }
            { modifyView && (
                <><div className="d-flex justify-content-center py-5">
                    <h1>Modificar articulo</h1>
                    </div><Form action="modify" changeItem={ modifyItem } /></>
                )
            }
            { deleteView && (
                <><div className="d-flex justify-content-center py-5">
                    <h1>Eliminar articulo</h1>
                    </div><DelForm deleteItem={ deleteItem } /></>
                )
            }
        </div>
    )
}

export default App;