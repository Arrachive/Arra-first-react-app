import Header from "../components/Header"
import List from "../components/List"
import data from "../src/data"

export default function App() {
  const ListData = data.map((items)=> {
    return (
      <List
      key={items.id}
      items={items}
      />
    )
  })
  return (
    <>
    <Header/>
    {ListData}
    </>
  )
}

