
const Footer = ({items, setItems}) => {
  const checkedItems = items.filter(item => item.checked).length;
  const uncheckedItems = items.filter(item => !item.checked).length;

  return (
    <footer>
<div className="flex justify-around">
  <p> total items: {items.length}</p>  
    <p> items Purchased: {checkedItems}</p> 
    <p>items Left: {uncheckedItems} </p>
</div>

    </footer>
  )
}

export default Footer