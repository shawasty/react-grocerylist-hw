import { useEffect, useState } from 'react';
import './App.css';
import View from './components/View';

const getDatafromLS = () => {
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function App() {
  const [groceries, setGroceries] = useState(getDatafromLS());

  
// create input field states
  const [item, setItem] = useState ('');
  const [brand, setBrand] = useState ('');
  const [units, setUnits] = useState ('');
  const [quantity, setQuantity] = useState (0);
  const [isPurchased, setIsPurchased] = useState ('false');

  const handleSubmit =(e) => {
    e.preventDefault();
    let grocery = {
      item : item,
      brand : brand,
      units : units,
      quantity :  quantity,
      isPurchased : isPurchased

    }
    
    setGroceries([...groceries,grocery]);
    setItem('');
    setBrand('');
    setUnits('');
    setQuantity('');
    setIsPurchased('false');
  }
  // delete grocery item
    const deleteGrocery = (item)=>{
     const toggle = (setIsPurchased) ? 'true' : 'false';
     const filterGrocery = groceries.filter((element,index)=>{
       return element.item !== item
     })
     setGroceries(filterGrocery)

     console.log(toggle)
    }



  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem ('groceries', JSON.stringify(groceries));
  },[groceries])



  return (
    <div className="wrapper">
      <h1>GROCERYLIST APP</h1>
      <p>Add and delete at will</p>
      <div className="main">
        <div className="form-container">
          <form action="" className="form-group" autoComplete='off' onSubmit={handleSubmit}>
            <label htmlFor="item">Item</label>
            <input type="text" className="form-control"  
              onChange={(e) => setItem(e.target.value)} value={item}
            />
            <br />
            <label htmlFor="brand">Brand</label>
            <input type="text" className="form-control" 
              onChange={(e) => setBrand(e.target.value)} value={brand}
            />
            <br />
            <label htmlFor="units">Units</label>
            <input type="text" className="form-control" 
              onChange={(e) => setUnits(e.target.value)} value={units}
            />
            <br />
            <label htmlFor="item">Quantity</label>
            <input type="text" className="form-control" 
              onChange={(e) => setQuantity(e.target.value)} value={quantity}
            />
            {/* <br />
            <label htmlFor="isPurchased">Purchased</label>
            <input type="text" className="checkbox" 
               onChange={(e) => setIsPurchased(e.target.value)} 
            /> */}
            <br />
            <button value="submit" className='btn btn-success btn-md'> ADD</button>


          </form>

        </div>
        <div className="view-container">
          {groceries.length>=0&& <>
          <div className="table-responsive">
          <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th> Brand</th>
                  <th>Units</th>
                  <th>Quantity</th>
                  <th>Purchased</th>
                  <th>delete</th>                    
                 
                </tr>
              </thead>
              <thead>
                <View groceries={groceries} deleteGrocery={deleteGrocery}/>
              </thead>
            </table>
            
          </div>
            <button className="btn btn-danger btn-md " onClick={()=>setGroceries([])}>Remove All</button>
          </>}
          
          {groceries.length <= 0 && <div> No groceries are added yet</div>}
          </div>
      </div>
     
    </div>
  );
}

export default App;
