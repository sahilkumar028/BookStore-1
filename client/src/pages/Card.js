import "./style/Card.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/BooksCard', { state: { message: props }});
  };
  return (
  <div className="col-sm-4 p-2" >
    <div className="card h-100" id="cards">
      <div className="row h-100">
        <div className="col-xl-6">
          <img src={props.url} className="card-img h-100 img-thumbnail" alt={props.name} />  
        </div>
        <div className="col-xl-6">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text text-truncate">{props.description}</p>
            <p className="card-text"><small className="text-muted">MRP: <b>{props.mrp}</b></small></p>
            <div className="card-footer">
              <button className="col-sm-5 btn btn-warning w-100 mb-1">Add To Cart</button>
              <button className="col-sm-5 btn btn-warning w-100" onClick={handleButtonClick}>Buy Now</button>
            </div>  
          </div>  
        </div>  
      </div>
    </div>
  </div>

  );
}
