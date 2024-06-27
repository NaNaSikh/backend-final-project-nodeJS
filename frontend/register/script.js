document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('password').value;

        try {
            const response = await fetch('http://127.0.0.1:3000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password, email, number })

            });
            console.log(JSON.stringify({ username, password, email, number }))
            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            const token = data.token;
            localStorage.setItem('token', token);
            console.log("sucess");
            console.log(token);
            localStorage.setItem('token', data.token);
            window.location.href = '../first/moves.html';
        } catch (error) {
            console.error('Login error:', error.message);
        }
    });
});
