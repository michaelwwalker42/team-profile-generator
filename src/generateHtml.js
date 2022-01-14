const managerCard = function (employee) {
    return `
    <!-- manager card -->
    <div class="card shadow m-2" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text"><i class="fas fa-mug-hot p-1"></i>Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="#"
                    class="text-decoration-none">${employee.email}</a></li>
            <li class="list-group-item">Office number: ${employee.officeNumber}</li>
        </ul>
    </div>`
};

const engineerCard = function (employee) {
    return `
    <!-- engineer card -->
    <div class="card shadow m-2" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text"><i class="fas fa-solid fa-glasses p-1"></i>Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"${employee.id}</li>
            <li class="list-group-item">Email: <a href="#"
                    class="text-decoration-none"${employee.email}</a></li>
            <li class="list-group-item">GitHub: <a href="#" class="text-decoration-none">${employee.github}</a></li>
        </ul>
    </div>`
};

const internCard = function (employee) {
    return `
    <!-- intern card -->
    <div class="card shadow m-2" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text"><i class="fas fa-solid fa-user-graduate p-1"></i>Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="#"
                    class="text-decoration-none">${employee.email}</a></li>
            <li class="list-group-item">School: ${employee.school}</li>
        </ul>
    </div>`
};

function generateHtml(data) {
    return `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- fontawesome -->
    <script src="https://kit.fontawesome.com/9481a02745.js" crossorigin="anonymous"></script>
    <title>Team Profile</title>
</head>
<body>
    <div class="col-12 text-center text-white py-1 bg-danger">
        <h1>Team Name</h1>
    </div>

    <div class="container">
        <div class="row">
            <div class="d-flex flex-wrap justify-content-center align-items-center">

            ${employeeCards}

            </div>
        </div>
    </div>
</body>
</html>
`
};

module.exports = generateHtml;