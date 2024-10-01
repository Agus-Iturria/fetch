const apiURL = 'https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users'; 
const userTable = document.querySelector('#userTable tbody');
function fetchUsers() {
  fetch(apiURL)
    .then(response => {
      return response.json(); 
    })
    .then(users => {
      showUsers(users); 
    })
    .catch(error => {
      console.error('Error al obtener usuarios:', error); 
    });
}

function showUsers(users) {
  userTable.innerHTML = ''; 
  users.forEach(user => {

    userTable.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      </tr>
    `;
  });
}
fetchUsers();
