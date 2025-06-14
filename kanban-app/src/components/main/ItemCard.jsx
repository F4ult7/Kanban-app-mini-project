const ItemCard = ({title,priority, dueDate, handleDelete }) => {
  return (
    <div>

        <h3>Task: {title}</h3>
              <h5>Priority: {priority}</h5>
              <p>Due Date: {dueDate}</p>
              <div >
                <button id="listDeleteBtn" onClick={handleDelete}>Delete</button>
              </div>
    </div>
  )
}
export default ItemCard