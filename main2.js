//part 2 : multi dimentional arrays and tuples -student grades
var students = [
    {
        name: "Rumaan",
        grades: [95, 90, 85], // Example grades
    },
    {
        name: "Mirha",
        grades: [85, 80, 75], // Example grades
    }
];
function calculateAverageGrade(grades) {
    var total = grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return total / grades.length;
}
function printStudentInfo(student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("Name: ".concat(student.name, ", Average Grade: ").concat(averageGrade.toFixed(2)));
}
students.forEach(function (student) {
    printStudentInfo(student);
});
