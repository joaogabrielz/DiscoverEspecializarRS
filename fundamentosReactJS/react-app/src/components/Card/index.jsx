import './style.css';

export function Card({name, time}) { // (props)
  return (
    <div className='card'>
      <strong>{ name }</strong>
      <small>{ time }</small>

      {/* <strong>{props.name}</strong>
      <small>{props.time}</small> */}
       {/* <small>{props.idade}</small> */}
    </div>
  )
}