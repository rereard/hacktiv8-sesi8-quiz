const Content = () => { 
    return(
        <div className="container-fluid my-5 d-flex justify-content-center">
            <div className="row bg-light">
                <div className="col-9 p-5 ">
                    <h2>Test App</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas harum asperiores velit voluptas cumque voluptatibus quaerat minima, laudantium nulla laborum doloremque commodi.</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    This is modal body
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>           
    )
}
export default Content