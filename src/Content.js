import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
const Content = ({ items, setItems }) => {

  // const[name,setName]=useState('dhivakar');

  // const handleNameChange = () => {
  //   const names = ['dhivakar', 'hari', 'durai'];
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int]) ;
  // }
  // const handleClick = () => {
  //   console.log('you clicked it')
  // }
  // const handleClick2 = (name) => {
  //   console.log(`${name}  was clicked`)
  // }

  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    }
      : item
    );
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;
    addItem(newItem);
    setNewItem('');

    // console.log('submitted');
    // const listItems = items.filter((item) => item.id !== id);
    // setItems(listItems);
    // localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }



  // Filter the items based on the search query
  const filteredItems = items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()));




  return (
    <main className="container">

      <div className=" mt-3 sm:columns-2">

        <SearchItem
          search={search}
          setSearch={setSearch}

        />

        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />

      </div>

      {/* <div className="container">

                      <p onDoubleClick={handleClick}>
                        Hello {name}!
                      </p>

                      <button onClick={handleNameChange}>Change Name</button>


                      <button onClick={() => handleClick2('dhivakar')}>Click me</button>

                    </div> */}

      {/* <div className="">

                    </div> */}
      <div className="">

        {items.length ? (
          <ul className="list-none mx-auto my-10">
            {/* {items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))} */}
            {(filteredItems.lenght ? items : filteredItems).map((item) => (
              <li className={` p-2 flex items-center justify-between px-7 py-2 mb-1  ${item.checked ? "bg-stone-300" : "bg-gray-100"
                }`} key={item.id}>
                <div className="flex items-center">
                  <input
                    type="checkbox" onChange={() => handleCheck(item.id)}
                    checked={item.checked}
                    className="rounded text-blue-500 mr-2"
                  />
                  <label className={`text-gray-800 float-left ml-10 mt-2 ${item.checked ? "line-through" : ""
                    }`} onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                </div>

                <button className="px-4 py-2 rounded bg-red-500 text-white " onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) :
          (<div className="mx-auto my-10">
            <ul className="list-none">
              <li className="bg-gray-100 p-2 text-center">
                <p>List is Empty</p>

              </li>

            </ul>

          </div>
          )
        }
      </div>

      {/* <table className="table-fixed w-full mx-4 my-5 contentTable" style={{}}>
        <thead>
          <tr>
            <th>checkbox</th>

            <th>item name</th>
            <th>action</th>
          </tr>

        </thead>

        {items.length ? (
        <tbody>

            {
              items.map((item) => (
                <tr key={item.id} className="table-row"> 
                  <td className="table-cell">
                    <input
                      type="checkbox"
                      onChange={() => handleCheck(item.id)}
                      checked={item.checked}
                      className=" checked:bg-blue-500"
                    />
                  </td>
                  <td className="table-cell">{item.item}</td>
                  <td className="table-cell">
                    <button className="px-4 py-2 rounded bg-red-500 text-white" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }

       


        </tbody>
           ) :
           (
            <tr className="items-center">
             <p className="" style={{textAlign:'center'}}>There is no data</p>
             </tr>
           )
         }
      </table> */}

    </main>
  )
}

export default Content