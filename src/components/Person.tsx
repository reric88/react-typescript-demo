type personProps = {
    name: {
        first: string,
        last: string,
    },
    randomName: {
        first: string,
        last: string,
    }
}

export const Person = (props: personProps) => {
  return (
    <div>
        <p>{props.name.first} {props.name.last}</p>
        <p>{props.randomName.first} {props.randomName.last}</p>
        </div>
  )
}
