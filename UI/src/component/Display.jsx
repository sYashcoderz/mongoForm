const DisplayData = (formData) => {
    console.log("dnoe ==",formData);
    const formStuff = formData?.formData
    return(
        <>
        <h1 style={{margin: '10px', padding:'10px'}} >Confirm your Details </h1>
        <div style={{margin: '10px', padding:'10px'}}>
      {Object.entries(formStuff).map(([key, value]) => (
        <div key={key}>
          <p>{key}: {value}</p>
        </div>
      ))}
    </div>
        </>
    )
}

export default DisplayData;