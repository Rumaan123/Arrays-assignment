//part 2 : multi dimentional arrays and tuples -student grades

type Student = {
    name: string;
    grades: number[];
};

let students: Student[] = [
    {
        name: "Rumaan",
        grades: [95, 90, 85], // Example grades
    },
    {
        name: "Mirha",
        grades: [85, 80, 75], // Example grades
    }
];

function calculateAverageGrade(grades: number[]): number {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

function printStudentInfo(student: Student): void {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`Name: ${student.name}, Average Grade: ${averageGrade.toFixed(2)}`);
}

students.forEach(student => {
    printStudentInfo(student);
});
