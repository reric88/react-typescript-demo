type StatusProps = {
    status: string,
}

export const Status = (props: StatusProps) => {
    let message;
    
    if (props.status === 'loading'){
        message = 'Loading...'
    } else if (props.status === 'success'){
        message = 'Data was fetched successfuly!'
    } else if (props.status === 'failure'){
        message = 'Error: Data fetch failed'
    } else {
        message = 'Fatal error'
    }







console.log(message)

  return (

    <div style={
        props.status === 'loading' ? {backgroundColor: 'lightgray'}
     : props.status === 'success' ? {backgroundColor: 'lightgreen'} 
     : props.status === 'failure' ? {backgroundColor: 'yellow'} 
     : {backgroundColor: 'red'}
     }>
        <h2>Status:</h2>
        <p>{message}</p>
    </div>
  )
}
