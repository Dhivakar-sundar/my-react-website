import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  return (
    <div className="App">
     <Header title="Grocery List"/>
    
     <Content
      items ={items} 
     setItems = {setItems}
     />
     <Footer
      items ={items} 
      setItems = {setItems}
     />
    </div>
  );
}


export default App;


