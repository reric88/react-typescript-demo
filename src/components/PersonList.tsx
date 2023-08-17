type PersonListProps = {
names: {
    first: string,
    last: string,
}[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div style={{backgroundColor: '#ccc'}}>
        {props.names.map(name => {
            return (
                <h2 key={name.first + name.last}>{name.first} {name.last}</h2>
            )
        })}
    </div>
  )
}
