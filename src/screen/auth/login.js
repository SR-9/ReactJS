
const BASE_URL = 'https://us-central1-esoteric-portal-249903.cloudfunctions.net/widgets'

export default class LoginPresenter {

    login(email, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
             },
            body: JSON.stringify({ email, password })
        };
        fetch(`${BASE_URL}/auth/login` , requestOptions)
            .then(response => response.json())
            .then(response => console.log(response));
    }

}