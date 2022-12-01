import { useState } from "react";

const ItemModel = {
    code: "",
    name: "",
    description: "",
    quantity: 0
}

const Form = ({ action, changeItem }) => {

    const [item, setItem] = useState(ItemModel);

    const updateData = (e) => {
        setItem(
            {
                ...item,    
                [e.target.name]: e.target.value
            }
        )
    }

    const sendData = () => {
        if (action === "insert") {
            if (item.id === 0 && (item.name !== "" && item.code !== "" && item.description !== "" && item.quantity !== null)) {
                changeItem(item)
            }
        } else if (action === "modify") {
            if (item.code !== "") {
                changeItem(item)
            }
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="border p-5 col-12 col-md-9 col-lg-6">
                <form>
                    <div className="row g-3 justify-content-between py-2">
                      <div className="col-3">
                        <label className="form-label">Nombre</label>
                      </div>
                      <div className="col-8">
                        <input name="name" className="form-control" onChange={(e) => updateData(e)} value={item.name} />
                      </div>
                    </div>
                    <div className="row g-3 justify-content-between py-2">
                      <div className="col-3">
                        <label className="form-label">Codigo</label>
                      </div>
                      <div className="col-8">
                        <input name="code" className="form-control" onChange={(e) => updateData(e)} value={item.code} />
                      </div>
                    </div>
                    <div className="row g-3 justify-content-between py-2">
                      <div className="col-3">
                        <label className="form-label">Descripcion</label>
                      </div>
                      <div className="col-8">
                        <input name="description" className="form-control" onChange={(e) => updateData(e)} value={item.description} />
                      </div>
                    </div>
                    <div className="row g-3 justify-content-between py-2">
                      <div className="col-3">
                        <label className="form-label">Cantidad inicial</label>
                      </div>
                      <div className="col-8">
                        <input name="quantity" className="form-control" onChange={(e) => updateData(e)} value={item.quantity} />
                      </div>
                    </div>
                    <div className="d-flex pt-4 justify-content-center" >
                        <button type="submit" className="btn btn-secondary" onClick={ sendData }>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;