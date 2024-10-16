function ListOfFruits({ items, category }) {
    return (
      <div>
        <h2 className="list-category">{category}</h2>
        <ul className="list">
          {items.map(item => (
            <li key={item.id}>
              {item.name} - <span style={{ color: item.color }}>{item.color}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  ListOfFruits.defaultProps = {
    category: "I do not like Fruits!",
    items: []
  };
  
  export default ListOfFruits;