async function fetchRandomUsers() {
    try {
        // Endpoint
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();

        // Gebruikers ophalen
        const users = data.results;

        // Aan tabel toevoegen
        const usersDiv = document.getElementById('user-table-body');

        // HTML-string voor de gebruikersgegevens
        let usersHTML = '';

        users.forEach(user => {
            usersHTML += `
                <div class="user">
                    <img src="${user.picture.medium}" alt="Profile Picture">
                    <p>Naam: ${user.name.first} ${user.name.last}</p>
                    <p>E-mail: ${user.email}</p>
                    <p>Gebruikers naam: ${user.login.username}</p>
                </div>
                <hr>
            `;
        });

        // Voeg de gebruikersgegevens toe aan de usersDiv
        usersDiv.innerHTML = usersHTML;

    } catch (error) {
        console.error('Fout bij het ophalen van gebruikers:', error);
    }
}

fetchRandomUsers();