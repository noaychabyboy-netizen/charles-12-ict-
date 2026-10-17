
"use strict";

// Get the HTML elements.
const form = document.getElementById("profileForm");
const result = document.getElementById("result");
const dataTypes = document.getElementById("dataTypes");

// Set the maximum birth year.
const birthYearInput = document.getElementById("birthYear");

if (birthYearInput) {
    birthYearInput.max = new Date().getFullYear();
}

// Escape user-entered text before displaying it as HTML.
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}

// Generate the student profile.
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value.trim();
    const hobby = document.getElementById("hobby").value.trim();
    const birthYear = Number(birthYearInput.value);
    const gradeLevel = Number(document.getElementById("gradeLevel").value);
    const average = Number(document.getElementById("average").value);
    const careerInput = document.getElementById("career").value.trim();
    const enrolledAnswer = document.getElementById("enrolled").value;

    const currentYear = new Date().getFullYear();

    // Validate the information.
    if (
        birthYear < 1900 ||
        birthYear > currentYear ||
        gradeLevel < 1 ||
        gradeLevel > 12 ||
        average < 0 ||
        average > 100
    ) {
        alert("Please enter valid student information.");
        return;
    }

    // STRING
    const studentName = name;
    const studentCourse = course;
    const studentHobby = hobby;

    // NUMBER
    const age = currentYear - birthYear;
    const studentGrade = gradeLevel;
    const averageGrade = average;

    // BIGINT
    const studentNumber = 98765432109876543210n;

    // BOOLEAN
    const isEnrolled = enrolledAnswer === "yes";

    // UNDEFINED
    let futureCareer;

    if (careerInput !== "") {
        futureCareer = careerInput;
    }

    // NULL
    const emergencyContact = null;

    // SYMBOL
    const studentID = Symbol("StudentID");

    // OBJECT
    const studentProfile = {
        name: studentName,
        course: studentCourse,
        hobby: studentHobby,
        age: age,
        gradeLevel: studentGrade,
        averageGrade: averageGrade,
        studentNumber: studentNumber,
        enrolled: isEnrolled,
        futureCareer: futureCareer,
        emergencyContact: emergencyContact,
        studentID: studentID
    };

    // Calculate the grade remark.
    let remark;

    if (averageGrade >= 95) {
        remark = "Very impressive";
    } else if (averageGrade >= 90) {
        remark = "Outstanding";
    } else if (averageGrade >= 85) {
        remark = "Very Satisfactory";
    } else if (averageGrade >= 80) {
        remark = "Satisfactory";
    } else if (averageGrade >= 75) {
        remark = "Passed";
    } else {
        remark = "Needs Improvement";
    }

    // Display the student profile without a photo.
    result.innerHTML = `
        <h2>Your Student Profile</h2>

        <div class="profile-header">
            <h3>${escapeHTML(studentName)}</h3>
            <p>${escapeHTML(studentCourse)} Student</p>
        </div>

        <div class="profile-row">
            <span>Hobby</span>
            <span>${escapeHTML(studentHobby)}</span>
        </div>

        <div class="profile-row">
            <span>Age (estimated)</span>
            <span>${age} years old</span>
        </div>

        <div class="profile-row">
            <span>Grade Level</span>
            <span>${studentGrade}</span>
        </div>

        <div class="profile-row">
            <span>Average Grade</span>
            <span>${averageGrade}</span>
        </div>

        <div class="profile-row">
            <span>Student Number</span>
            <span>${studentNumber}</span>
        </div>

        <div class="profile-row">
            <span>Enrollment</span>
            <span>${isEnrolled ? "Currently Enrolled" : "Not Enrolled"}</span>
        </div>

        <div class="profile-row">
            <span>Future Career</span>
            <span>${futureCareer === undefined
                ? "Undecided"
                : escapeHTML(futureCareer)}</span>
        </div>

        <div class="profile-row">
            <span>Emergency Contact</span>
            <span>Not provided (null)</span>
        </div>

        <div class="profile-row">
            <span>Unique Student ID</span>
            <span>${studentID.toString()}</span>
        </div>

        <div class="remark">
            Grade Remark: ${remark}
        </div>
    `;

    // Demonstrate all 8 JavaScript data types.
    let unfinishedRequirement;

    const types = [
        {
            name: "String",
            value: studentName,
            type: typeof studentName,
            description: "Stores text such as a name."
        },
        {
            name: "Number",
            value: age,
            type: typeof age,
            description: "Stores numbers such as age and grades."
        },
        {
            name: "BigInt",
            value: studentNumber.toString() + "n",
            type: typeof studentNumber,
            description: "Stores very large whole numbers."
        },
        {
            name: "Boolean",
            value: String(isEnrolled),
            type: typeof isEnrolled,
            description: "Represents true or false."
        },
        {
            name: "Undefined",
            value: String(unfinishedRequirement),
            type: typeof unfinishedRequirement,
            description: "A declared variable without an assigned value."
        },
        {
            name: "Null",
            value: String(emergencyContact),
            type: "null",
            description: "Represents an intentionally empty value."
        },
        {
            name: "Symbol",
            value: studentID.toString(),
            type: typeof studentID,
            description: "Creates a unique identifier."
        },
        {
            name: "Object",
            value: "Student Profile",
            type: typeof studentProfile,
            description: "Groups related student information."
        }
    ];

    // Display data types on the webpage.
    dataTypes.innerHTML = types.map(function (item) {
        return `
            <div class="type-item">
                <strong>${item.name}</strong>
                <p>
                    Value:
                    <span class="type-value">${escapeHTML(item.value)}</span>
                </p>
                <p>Type: ${escapeHTML(item.type)}</p>
                <p>${item.description}</p>
            </div>
        `;
    }).join("");

    // Display information in the browser console.
    console.clear();

    console.log("===== STUDENT INFORMATION =====");
    console.log(studentProfile);

    console.log("===== JAVASCRIPT DATA TYPES =====");

    types.forEach(function (item) {
        console.log(
            item.name + ":",
            item.value,
            "| Type:",
            item.type
        );
    });

    console.log("===== ADDITIONAL FEATURES =====");
    console.log("Calculated Age:", age);
    console.log("Grade Remark:", remark);
    console.log("Enrollment Status:", isEnrolled);
    console.log("Complete Student Profile:", studentProfile);
    console.log("Program completed successfully!");
});

// Reset the form and displayed information.
form.addEventListener("reset", function () {
    result.innerHTML = `
        <h2>Your Student Profile</h2>
        <p class="empty-message">
            Fill out the form to display your profile here.
        </p>
    `;

    dataTypes.textContent =
        "Generate your profile to see the data types.";
});
