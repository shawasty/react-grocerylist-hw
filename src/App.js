import { useState } from 'react';
import './App.css';

function App() {
  let groceryList =[]

  const [item, setItem] = useState ('');
  const [brand, setBrand] = useState ('');
  const [units, setUnits] = useState ('');
  const [quantity, setQuantity] = useState ('');
  const [isPurchased, setIsPurchases] = useState ('');

  const submitForm =(e) => {
    e.preventDefault();
    // console.log(isPurchased.current.checked )
    // groceryList.push({item:item.current.value , brand:brand.current.value , units:units.current.value , quantity:quantity.current.value , isPurchased:isPurchased.current.checked})
    console.log(submitForm)
  }



  return (
    <div className="wrapper">
      <h1>GROCERYLIST APP</h1>
      <p>Add and delete at will</p>
      <div className="main">
        <div className="form-container">
          <form action="" className="form-group" autoComplete='off' onSubmit={submitForm}>
            <label htmlFor="item">Item</label>
            <input type="text" className="form-control" required 
            />
            <br />
            <label htmlFor="brand">Brand</label>
            <input type="text" className="form-control" required/>
            <br />
            <label htmlFor="units">Units</label>
            <input type="text" className="form-control" required/>
            <br />
            <label htmlFor="item">Quantity</label>
            <input type="text" className="form-control" required/>
            <br />
            <label htmlFor="isPurchased">isPurchased</label>
            <input type="checkbox" className="checkbox" required/>
            <br />
            <button value="submit" className='btn btn-success btn-md'> ADD</button>


          </form>

        </div>
        <div className="view-container">

        </div>
      </div>
     
    </div>
  );
}

export default App;
