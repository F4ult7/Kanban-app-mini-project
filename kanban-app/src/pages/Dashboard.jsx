import Content from "../components/main/Content"


const Dashboard = ({tasks, setTasks}) => {
  
  return (
    <div className="dashboard">
      <Content tasks={tasks} setTasks={setTasks} />
    </div>
  )
}
export default Dashboard