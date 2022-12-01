const DelForm = ( ) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="border p-5 col-12 col-md-9 col-lg-6">
                <form>
                    <div className="row g-3 justify-content-between py-2">
                      <div className="col-3">
                        <label for="code" className="form-label">Codigo</label>
                      </div>
                      <div className="col-8">
                        <input type="code" id="code" className="form-control"/>
                      </div>
                    </div>
                    <div className="d-flex pt-4 justify-content-center" >
                        <button type="submit" className="btn btn-secondary">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DelForm;
