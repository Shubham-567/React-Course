import PropsType from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  return (
    <div className='list-card'>
      <h1 className='list-category'>{category}</h1>
      <ol className='list-items'>{listItems}</ol>
    </div>
  );
}

List.propsType = {
  category: PropsType.string,
  items: PropsType.arrayOf(
    PropsType.shape({
      id: PropsType.number,
      name: PropsType.string,
      calories: PropsType.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
