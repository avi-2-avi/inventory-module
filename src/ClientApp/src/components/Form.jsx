import { useState } from "react";

const ItemModel = {
    id: 0,
    code: "",
    name: "",
    description: "",
    quantity: 0
}

const Form = ({ action, createItem }) => {

    const [item, setItem] = useState(ItemModel);

    const updateData = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setItem(
            {
                ...item,    
                [e.target.name]: e.target.value
            }
        )
    }

    const sendData = () => {
        if (action === "insert") {
            if (item.id === 0 && (item.name != null && item.code != null && item.description != null && item.quantity != null)) {
                createItem(item)
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