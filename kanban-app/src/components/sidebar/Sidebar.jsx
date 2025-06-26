import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/tasks/add-task">Add Task</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar