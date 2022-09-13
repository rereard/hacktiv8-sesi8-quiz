import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Header = () => {
    return(
        <div className="container-fluid border-bottom h-25 px-5 py-3">
            <div className="row">
                <div className="col fs-4">
                    My First React App
                </div>
                <div className="col-2">
                    <form>
                        <div>
                            <input type="text" className="form-control" placeholder='Search...'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Header