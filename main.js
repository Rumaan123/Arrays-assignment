let employees = [
    { name: "Rumaan", hoursWorked: 25, hourlyRate: 40, salary: 100000 },
    { name: "Salma", hoursWorked: 30, hourlyRate: 45, salary: 20000 },
];
function calculateSalary(hoursWorked, hourlyRate) {
    return hoursWorked * hourlyRate;
}
employees.forEach(employee => {
    if (employee.salary === undefined) {
        employee.salary = calculateSalary(employee.hoursWorked, employee.hourlyRate);
    }
    console.log(`Name: ${employee.name}, Hours Worked: ${employee.hoursWorked}, Hourly Rate: $${employee.hourlyRate}, Salary: $${employee.salary.toFixed(2)}`);
});
export {};
