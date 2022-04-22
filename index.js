

function submitData(userName, email) {
    const newObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': userName,
            'email': email
        })
    };
    return fetch('http://localhost:3000/users', newObj)
    .then(resp => resp.json())
    .then(body => addNewContact(body.id))

    .catch(response => 'Unauthorized Access')
}

    function addNewContact(newID) {
        document.getElementsByTagName('body')[0].innerHTML = newID;
        document.body.append('Unauthorized Access')
    }

    submitData('Name', 'name@name.com')