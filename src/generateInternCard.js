function generateInternCard(employee) {
    return `
    <!-- intern card -->
    <div class="card shadow m-2" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">${employee.name}</h5>
            <p class="card-text"><i class="fas fa-solid fa-user-graduate p-1"></i>Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${employee.email}"
                    class="text-decoration-none">${employee.email}</a></li>
            <li class="list-group-item">School: ${employee.school}</li>
        </ul>
    </div>`
};

module.exports = generateInternCard;