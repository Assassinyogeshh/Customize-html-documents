

async function submitForm(event){
    try {
        event.preventDefault()
        const google_input = document.querySelector('#google_analysis').value;
        const meta_input = document.querySelector('#meta_pixel').value;
        const microsoft_input = document.querySelector('#microsoft_clarity').value;

    const apiUrl= 'http://localhost:3000'
    const response= await axios.post(`${apiUrl}/input/addScript`, {google_input,meta_input,microsoft_input});


    console.log(response?.data.inputScript.script?.google_input);
    const data= response?.data.inputScript.script


    localStorage.setItem('google_input', data.google_input)
    localStorage.setItem('meta_input', data.meta_input)
    localStorage.setItem('microsoft_input', data.microsoft_input)



} catch (error) {
    console.log(error);
}
}


