export default function List(props) {
  return(
      <div className="listItem">
    <div>
      <img src={props.items.img.src} alt={props.items.img.alt} /></div>
    <div className="information">
      <h2>{props.items.title}</h2>
      <p className="level">{props.items.level}</p>
      <p className="color">{props.items.color}</p>
    </div>
    </div>
  )
}