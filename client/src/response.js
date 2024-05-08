// Retrieve the head element
const headElement = document.head;

const googleScript = localStorage.getItem('google_input');
const metaScript = localStorage.getItem('meta_input');
const microsoftScript = localStorage.getItem('microsoft_input');

if (googleScript && metaScript && microsoftScript) {
    
    const combinedScripts = googleScript + metaScript + microsoftScript;
    
    headElement.innerHTML = combinedScripts;
} else {
    console.error('Error: LocalStorage values are missing.');
}
