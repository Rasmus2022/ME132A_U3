// The `DATABASE` object contains 3 keys: students, courses and teachers
//
// NOTE: there are "relationships" between some of the objects, for example each
//       student has an array of `courses`; each course object in this array has
//       the key `courseId` - which means it doesn't contain all the information
//       about the course directly, you would have to use this `courseId` to find
//       the corresponding course from `DATABASE.courses`.

const DATABASE = {
  // STUDENTS
  // ========
  // 
  // Each student is an object in the form of:
  //
  //  {
  //    studentId,
  //    firstName,    
  //    lastName,
  //    courses: [
  //      { courseId, started: { semester, year }, passedCredits },
  //      ...
  //    ]
  //  }
  students: [
    {
      studentID: 0,
      firstName: "Melinda",
      lastName: "Siebeneicher",
      courses: [
        {
          courseId: 11,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 14,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 1,
        },
        {
          courseId: 0,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 4,
        },
        {
          courseId: 12,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 9,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 5,
        },
        {
          courseId: 3,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 7.5,
        },
      ],
    },
    {
      studentID: 1,
      firstName: "Tintin",
      lastName: "Söderqvist",
      courses: [
        {
          courseId: 13,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 7,
        },
        {
          courseId: 8,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 4,
        },
        {
          courseId: 6,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 15,
        },
        {
          courseId: 3,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 7.5,
        },
        {
          courseId: 19,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 2,
        },
        {
          courseId: 29,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 7.5,
        },
        {
          courseId: 29,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 7.5,
        },
        {
          courseId: 5,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 15,
        },
        {
          courseId: 19,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 7.5,
        },
        {
          courseId: 4,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 10,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 13,
        },
        {
          courseId: 3,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 7.5,
        },
      ],
    },
    {
      studentID: 2,
      firstName: "Wilma",
      lastName: "Einarsson",
      courses: [
        {
          courseId: 21,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 6,
        },
        {
          courseId: 21,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 7,
        },
        {
          courseId: 0,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 0,
        },
        {
          courseId: 18,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 2,
        },
        {
          courseId: 6,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 9,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 5,
        },
        {
          courseId: 15,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 2,
        },
        {
          courseId: 8,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 0,
        },
        {
          courseId: 7,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 28,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 7.5,
        },
        {
          courseId: 2,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 26,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 7.5,
        },
        {
          courseId: 7,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 14,
        },
        {
          courseId: 11,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 3,
      firstName: "Jonna",
      lastName: "Stark Jönsson",
      courses: [
        {
          courseId: 29,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 6,
        },
        {
          courseId: 9,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 5,
        },
        {
          courseId: 22,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 15,
        },
        {
          courseId: 14,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 0,
        },
        {
          courseId: 13,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 15,
        },
        {
          courseId: 28,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 4,
        },
        {
          courseId: 26,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 7.5,
        },
        {
          courseId: 25,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 2,
        },
      ],
    },
    {
      studentID: 4,
      firstName: "Isak",
      lastName: "Andersson",
      courses: [
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 9,
        },
        {
          courseId: 29,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 4,
        },
        {
          courseId: 20,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 12.5,
        },
        {
          courseId: 17,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 4,
        },
        {
          courseId: 13,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 20,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 12.5,
        },
        {
          courseId: 4,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 5,
        },
        {
          courseId: 11,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 21,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 7.5,
        },
        {
          courseId: 16,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 14,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 4,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 3,
        },
      ],
    },
    {
      studentID: 5,
      firstName: "Elsa",
      lastName: "Söderqvist",
      courses: [
        {
          courseId: 3,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 7.5,
        },
        {
          courseId: 27,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 12.5,
        },
        {
          courseId: 13,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 15,
        },
        {
          courseId: 28,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 7,
        },
        {
          courseId: 19,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 7.5,
        },
        {
          courseId: 7,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 1,
        },
        {
          courseId: 10,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 15,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 0,
        },
        {
          courseId: 9,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 29,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 7.5,
        },
        {
          courseId: 18,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 4,
        },
      ],
    },
    {
      studentID: 6,
      firstName: "Clara Marie",
      lastName: "Sigeback",
      courses: [
        {
          courseId: 21,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 0,
        },
        {
          courseId: 23,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 1,
        },
        {
          courseId: 0,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 15,
        },
        {
          courseId: 11,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 6,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 7,
        },
        {
          courseId: 19,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 0,
        },
      ],
    },
    {
      studentID: 7,
      firstName: "Isak",
      lastName: "Nimvik",
      courses: [
        {
          courseId: 6,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 15,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 4,
        },
        {
          courseId: 13,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 12,
        },
        {
          courseId: 14,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 9,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 0,
        },
        {
          courseId: 7,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
      ],
    },
    {
      studentID: 8,
      firstName: "Clara Marie",
      lastName: "Einarsson",
      courses: [
        {
          courseId: 20,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 10,
        },
        {
          courseId: 21,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 2,
        },
        {
          courseId: 19,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 7.5,
        },
        {
          courseId: 5,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 13,
        },
        {
          courseId: 21,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 7.5,
        },
        {
          courseId: 7,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 12,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 12.5,
        },
        {
          courseId: 25,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 15,
        },
        {
          courseId: 20,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 12.5,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 16,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 1,
        },
      ],
    },
    {
      studentID: 9,
      firstName: "Mehmet Kaan",
      lastName: "Knutsson",
      courses: [
        {
          courseId: 0,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 9,
        },
        {
          courseId: 0,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 8,
        },
        {
          courseId: 11,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 0,
        },
        {
          courseId: 17,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 29,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 7.5,
        },
      ],
    },
    {
      studentID: 10,
      firstName: "Bea",
      lastName: "Duncalf",
      courses: [
        {
          courseId: 12,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 0,
        },
        {
          courseId: 14,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 5,
        },
        {
          courseId: 8,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 21,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 7.5,
        },
        {
          courseId: 2,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 0,
        },
        {
          courseId: 11,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 12,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 3,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 7,
        },
      ],
    },
    {
      studentID: 11,
      firstName: "Sohny",
      lastName: "Bröddén",
      courses: [
        {
          courseId: 13,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 12,
        },
        {
          courseId: 21,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 1,
        },
        {
          courseId: 27,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 12.5,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 8,
        },
        {
          courseId: 2,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 17,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 7.5,
        },
        {
          courseId: 29,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 2,
        },
        {
          courseId: 6,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 15,
        },
        {
          courseId: 22,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 9,
        },
        {
          courseId: 13,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 2,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 12.5,
        },
        {
          courseId: 21,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 0,
        },
      ],
    },
    {
      studentID: 12,
      firstName: "Ellinor",
      lastName: "Boukhezzar",
      courses: [
        {
          courseId: 3,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 4,
        },
        {
          courseId: 3,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 2,
        },
        {
          courseId: 12,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 5,
        },
        {
          courseId: 4,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 2,
        },
        {
          courseId: 10,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 6,
        },
        {
          courseId: 20,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 12.5,
        },
      ],
    },
    {
      studentID: 13,
      firstName: "Matilda",
      lastName: "Lund",
      courses: [
        {
          courseId: 0,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 15,
        },
        {
          courseId: 12,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 17,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 2,
        },
        {
          courseId: 3,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 7.5,
        },
        {
          courseId: 20,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 2,
        },
        {
          courseId: 19,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 14,
      firstName: "Wilma",
      lastName: "Olsson",
      courses: [
        {
          courseId: 6,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 14,
        },
        {
          courseId: 18,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 2,
        },
        {
          courseId: 17,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 13,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 16,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 17,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 0,
        },
        {
          courseId: 12,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 3,
        },
      ],
    },
    {
      studentID: 15,
      firstName: "Ellinor",
      lastName: "Stark Jönsson",
      courses: [
        {
          courseId: 4,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 12.5,
        },
        {
          courseId: 19,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 2,
        },
        {
          courseId: 21,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 2,
        },
        {
          courseId: 7,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 1,
        },
        {
          courseId: 7,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 22,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 15,
        },
        {
          courseId: 5,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 4,
        },
        {
          courseId: 12,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 5,
        },
        {
          courseId: 8,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 18,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 4,
        },
        {
          courseId: 26,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 0,
        },
        {
          courseId: 15,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 17,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 1,
        },
      ],
    },
    {
      studentID: 16,
      firstName: "Bea",
      lastName: "Sigeback",
      courses: [
        {
          courseId: 22,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 15,
        },
        {
          courseId: 10,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 7,
        },
        {
          courseId: 2,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 5,
        },
        {
          courseId: 1,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 4,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 8,
        },
        {
          courseId: 17,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 7.5,
        },
      ],
    },
    {
      studentID: 17,
      firstName: "Pranvera",
      lastName: "Sowole",
      courses: [
        {
          courseId: 7,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 14,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 12.5,
        },
        {
          courseId: 10,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 15,
        },
        {
          courseId: 18,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 3,
        },
      ],
    },
    {
      studentID: 18,
      firstName: "Pranvera",
      lastName: "Knutz",
      courses: [
        {
          courseId: 20,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 12.5,
        },
        {
          courseId: 26,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 7.5,
        },
        {
          courseId: 21,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 4,
        },
        {
          courseId: 16,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 5,
        },
        {
          courseId: 27,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 12.5,
        },
        {
          courseId: 12,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 1,
        },
        {
          courseId: 7,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 15,
        },
        {
          courseId: 0,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 15,
        },
        {
          courseId: 14,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 2,
        },
        {
          courseId: 14,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 19,
      firstName: "Isak",
      lastName: "Sowole",
      courses: [
        {
          courseId: 26,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 7.5,
        },
        {
          courseId: 9,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 2,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 0,
        },
        {
          courseId: 28,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 14,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 4,
        },
        {
          courseId: 16,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 5,
        },
        {
          courseId: 1,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 5,
        },
        {
          courseId: 0,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 15,
        },
        {
          courseId: 26,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 7.5,
        },
        {
          courseId: 29,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 5,
        },
        {
          courseId: 20,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 3,
        },
        {
          courseId: 11,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 2,
        },
        {
          courseId: 9,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 0,
        },
        {
          courseId: 13,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 10,
        },
      ],
    },
    {
      studentID: 20,
      firstName: "Wilma",
      lastName: "Thanjalak",
      courses: [
        {
          courseId: 5,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 15,
        },
        {
          courseId: 6,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 15,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 18,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 0,
        },
        {
          courseId: 6,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 15,
        },
        {
          courseId: 20,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 1,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 12.5,
        },
        {
          courseId: 27,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 6,
        },
      ],
    },
    {
      studentID: 21,
      firstName: "Tea",
      lastName: "Nimvik",
      courses: [
        {
          courseId: 8,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 15,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 4,
        },
        {
          courseId: 12,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 2,
        },
        {
          courseId: 27,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 12.5,
        },
        {
          courseId: 15,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 3,
        },
        {
          courseId: 4,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 0,
        },
        {
          courseId: 15,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 4,
        },
        {
          courseId: 15,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 1,
        },
        {
          courseId: 20,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 10,
        },
        {
          courseId: 16,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 22,
      firstName: "Lina",
      lastName: "Einarsson",
      courses: [
        {
          courseId: 12,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 28,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 6,
        },
        {
          courseId: 11,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 1,
        },
        {
          courseId: 12,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 1,
        },
        {
          courseId: 7,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 14,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 12.5,
        },
        {
          courseId: 2,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 4,
        },
        {
          courseId: 13,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 10,
        },
      ],
    },
    {
      studentID: 23,
      firstName: "Jonna",
      lastName: "Einarsson",
      courses: [
        {
          courseId: 28,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 0,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 2,
        },
        {
          courseId: 10,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 3,
        },
        {
          courseId: 17,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 7.5,
        },
        {
          courseId: 10,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 15,
        },
        {
          courseId: 17,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 3,
        },
        {
          courseId: 21,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 3,
        },
      ],
    },
    {
      studentID: 24,
      firstName: "Lina",
      lastName: "Pihl",
      courses: [
        {
          courseId: 20,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 12.5,
        },
        {
          courseId: 29,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 7.5,
        },
        {
          courseId: 15,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 1,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 1,
        },
        {
          courseId: 19,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 7.5,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 12.5,
        },
        {
          courseId: 19,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 7.5,
        },
        {
          courseId: 1,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 5,
        },
        {
          courseId: 20,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 11,
        },
        {
          courseId: 1,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 7,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 14,
        },
        {
          courseId: 14,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 25,
      firstName: "Elin",
      lastName: "Wulkan",
      courses: [
        {
          courseId: 18,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 3,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 2,
        },
        {
          courseId: 13,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 4,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 9,
        },
        {
          courseId: 27,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 3,
        },
        {
          courseId: 20,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 7,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 12.5,
        },
        {
          courseId: 4,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 3,
        },
      ],
    },
    {
      studentID: 26,
      firstName: "Niklas",
      lastName: "Gerre",
      courses: [
        {
          courseId: 20,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 2,
        },
        {
          courseId: 0,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 11,
        },
        {
          courseId: 14,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 1,
        },
        {
          courseId: 5,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 15,
        },
        {
          courseId: 22,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 15,
        },
        {
          courseId: 23,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 11,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 12,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 27,
      firstName: "Niklas",
      lastName: "Knutsson",
      courses: [
        {
          courseId: 21,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 7.5,
        },
        {
          courseId: 16,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 2,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 26,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 7.5,
        },
        {
          courseId: 12,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 0,
        },
        {
          courseId: 4,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 12.5,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 8,
        },
        {
          courseId: 11,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 3,
        },
        {
          courseId: 13,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 15,
        },
        {
          courseId: 23,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 4,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 15,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 1,
        },
        {
          courseId: 5,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 15,
        },
        {
          courseId: 11,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 28,
      firstName: "Edit",
      lastName: "Lund",
      courses: [
        {
          courseId: 5,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 16,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 12.5,
        },
        {
          courseId: 5,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 1,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 3,
        },
        {
          courseId: 0,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 29,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 7.5,
        },
        {
          courseId: 28,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 7.5,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 12.5,
        },
      ],
    },
    {
      studentID: 29,
      firstName: "Elsa",
      lastName: "Wulkan",
      courses: [
        {
          courseId: 4,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 12.5,
        },
        {
          courseId: 5,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 15,
        },
        {
          courseId: 4,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 0,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 12.5,
        },
        {
          courseId: 3,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 7.5,
        },
        {
          courseId: 0,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 15,
        },
        {
          courseId: 16,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 1,
        },
        {
          courseId: 28,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 2,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 4,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 6,
        },
        {
          courseId: 5,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 15,
        },
        {
          courseId: 22,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
      ],
    },
    {
      studentID: 30,
      firstName: "Lina",
      lastName: "Stavnjak",
      courses: [
        {
          courseId: 18,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 3,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 7.5,
        },
        {
          courseId: 15,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 3,
        },
        {
          courseId: 14,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 23,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 5,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 12.5,
        },
        {
          courseId: 10,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 6,
        },
        {
          courseId: 19,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 7.5,
        },
        {
          courseId: 27,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 12.5,
        },
      ],
    },
    {
      studentID: 31,
      firstName: "Malin",
      lastName: "Gistorp Larsson",
      courses: [
        {
          courseId: 20,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 9,
        },
        {
          courseId: 23,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 2,
        },
        {
          courseId: 3,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 6,
        },
        {
          courseId: 14,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 0,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 26,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 7,
        },
        {
          courseId: 23,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 23,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 2,
        },
        {
          courseId: 23,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 2,
        },
        {
          courseId: 0,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 15,
        },
        {
          courseId: 10,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 5,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 15,
        },
        {
          courseId: 2,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 4,
        },
        {
          courseId: 28,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 6,
        },
      ],
    },
    {
      studentID: 32,
      firstName: "Ivan",
      lastName: "Pihl",
      courses: [
        {
          courseId: 16,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 0,
        },
        {
          courseId: 1,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 10,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 13,
        },
        {
          courseId: 2,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 0,
        },
        {
          courseId: 14,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 2,
        },
        {
          courseId: 24,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 12.5,
        },
        {
          courseId: 14,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 9,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 1,
        },
        {
          courseId: 28,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 7,
        },
        {
          courseId: 15,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 3,
        },
        {
          courseId: 1,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 33,
      firstName: "Matilda",
      lastName: "Stark Jönsson",
      courses: [
        {
          courseId: 16,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 4,
        },
        {
          courseId: 25,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 15,
        },
        {
          courseId: 3,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 7.5,
        },
        {
          courseId: 22,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 15,
        },
        {
          courseId: 5,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 9,
        },
        {
          courseId: 28,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 7.5,
        },
        {
          courseId: 8,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 0,
        },
        {
          courseId: 26,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 7.5,
        },
        {
          courseId: 20,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 12.5,
        },
        {
          courseId: 0,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 15,
        },
        {
          courseId: 15,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 4,
        },
        {
          courseId: 9,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 2,
        },
        {
          courseId: 26,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 7.5,
        },
      ],
    },
    {
      studentID: 34,
      firstName: "Alexander",
      lastName: "Gistorp Larsson",
      courses: [
        {
          courseId: 27,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 12.5,
        },
        {
          courseId: 21,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 1,
        },
        {
          courseId: 5,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 15,
        },
        {
          courseId: 3,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 2,
        },
        {
          courseId: 25,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 15,
        },
        {
          courseId: 6,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 13,
        },
        {
          courseId: 8,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 25,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 15,
        },
        {
          courseId: 23,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 4,
        },
        {
          courseId: 22,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 4,
        },
        {
          courseId: 15,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 1,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 2,
        },
      ],
    },
    {
      studentID: 35,
      firstName: "Elin",
      lastName: "Tran",
      courses: [
        {
          courseId: 27,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 12.5,
        },
        {
          courseId: 12,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 5,
        },
        {
          courseId: 28,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 0,
        },
        {
          courseId: 27,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 8,
        },
        {
          courseId: 2,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 3,
        },
        {
          courseId: 4,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 2,
        },
        {
          courseId: 26,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 5,
        },
        {
          courseId: 6,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 9,
        },
        {
          courseId: 2,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 2,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 2,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 5,
        },
        {
          courseId: 19,
          started: { semester: "Autumn", year: 2016 },
          passedCredits: 7.5,
        },
        {
          courseId: 22,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 15,
        },
      ],
    },
    {
      studentID: 36,
      firstName: "Kim",
      lastName: "Tran",
      courses: [
        {
          courseId: 20,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 26,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 3,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 12.5,
        },
        {
          courseId: 16,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 28,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 7,
        },
        {
          courseId: 2,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 12,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 37,
      firstName: "Melinda",
      lastName: "Taspunar",
      courses: [
        {
          courseId: 8,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 15,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 1,
        },
        {
          courseId: 25,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 15,
        },
        {
          courseId: 26,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 6,
        },
        {
          courseId: 14,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 38,
      firstName: "Sally",
      lastName: "Tran",
      courses: [
        {
          courseId: 25,
          started: { semester: "Autumn", year: 2015 },
          passedCredits: 3,
        },
        {
          courseId: 23,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 1,
        },
        {
          courseId: 1,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
        {
          courseId: 6,
          started: { semester: "Spring", year: 2017 },
          passedCredits: 5,
        },
      ],
    },
    {
      studentID: 39,
      firstName: "Wilma",
      lastName: "Coursell",
      courses: [
        {
          courseId: 1,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 28,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 7.5,
        },
        {
          courseId: 2,
          started: { semester: "Spring", year: 2018 },
          passedCredits: 1,
        },
        {
          courseId: 19,
          started: { semester: "Autumn", year: 2017 },
          passedCredits: 7.5,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2014 },
          passedCredits: 12.5,
        },
        {
          courseId: 25,
          started: { semester: "Spring", year: 2019 },
          passedCredits: 5,
        },
        {
          courseId: 20,
          started: { semester: "Autumn", year: 2018 },
          passedCredits: 12.5,
        },
        {
          courseId: 26,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 0,
        },
        {
          courseId: 29,
          started: { semester: "Spring", year: 2016 },
          passedCredits: 7.5,
        },
        {
          courseId: 24,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 8,
        },
        {
          courseId: 1,
          started: { semester: "Autumn", year: 2014 },
          passedCredits: 5,
        },
        {
          courseId: 19,
          started: { semester: "Autumn", year: 2019 },
          passedCredits: 1,
        },
        {
          courseId: 8,
          started: { semester: "Spring", year: 2015 },
          passedCredits: 5,
        },
      ],
    },
  ],

  // COURSES
  // =======
  // 
  // Each course is an object in the form of:
  //
  //  {
  //    courseId,
  //    title,
  //    totalCredits,
  //    courseResponsible,            <-- This is the `teacherId` of the courseResponsible
  //    teachers: [ teacherId, ... ],
  //  }
  courses: [
    {
      courseId: 0,
      title: "Literature of Contemporary Western Civilization",
      totalCredits: 15,
      teachers: [0, 5],
      courseResponsible: 0,
    },
    {
      courseId: 1,
      title: "Architecture of Persia",
      totalCredits: 5,
      teachers: [5, 0],
      courseResponsible: 5,
    },
    {
      courseId: 2,
      title: "Literature of the Romantic Age",
      totalCredits: 5,
      teachers: [1, 6, 7],
      courseResponsible: 1,
    },
    {
      courseId: 3,
      title: "Architecture of the Rennaisance Age",
      totalCredits: 7.5,
      teachers: [2],
      courseResponsible: 2,
    },
    {
      courseId: 4,
      title: "History of Contemporary Western Civilization",
      totalCredits: 12.5,
      teachers: [8],
      courseResponsible: 8,
    },
    {
      courseId: 5,
      title: "Poetry of Persia",
      totalCredits: 15,
      teachers: [8, 7],
      courseResponsible: 8,
    },
    {
      courseId: 6,
      title: "Architecture of Contemporary Western Civilization",
      totalCredits: 15,
      teachers: [6, 2],
      courseResponsible: 6,
    },
    {
      courseId: 7,
      title: "Poetry of the Incan Empire",
      totalCredits: 15,
      teachers: [3, 7, 1],
      courseResponsible: 3,
    },
    {
      courseId: 8,
      title: "History of the Baroque Age",
      totalCredits: 5,
      teachers: [9, 3, 0],
      courseResponsible: 9,
    },
    {
      courseId: 9,
      title: "Poetry of North and South America",
      totalCredits: 5,
      teachers: [6],
      courseResponsible: 6,
    },
    {
      courseId: 10,
      title: "Architecture of the Romantic Age",
      totalCredits: 15,
      teachers: [6, 8, 2],
      courseResponsible: 6,
    },
    {
      courseId: 11,
      title: "Literature of the Middle Ages",
      totalCredits: 5,
      teachers: [8, 2, 1],
      courseResponsible: 8,
    },
    {
      courseId: 12,
      title: "Literature of North and South America",
      totalCredits: 5,
      teachers: [0, 5, 8],
      courseResponsible: 0,
    },
    {
      courseId: 13,
      title: "Literature of the Baroque Age",
      totalCredits: 15,
      teachers: [4, 0],
      courseResponsible: 4,
    },
    {
      courseId: 14,
      title: "Architecture of Rome",
      totalCredits: 5,
      teachers: [5],
      courseResponsible: 5,
    },
    {
      courseId: 15,
      title: "Art of Rome",
      totalCredits: 5,
      teachers: [3, 8],
      courseResponsible: 3,
    },
    {
      courseId: 16,
      title: "Art of the Romantic Age",
      totalCredits: 5,
      teachers: [3],
      courseResponsible: 3,
    },
    {
      courseId: 17,
      title: "Art of Contemporary Western Civilization",
      totalCredits: 7.5,
      teachers: [2, 0, 3],
      courseResponsible: 2,
    },
    {
      courseId: 18,
      title: "History of Persia",
      totalCredits: 5,
      teachers: [1],
      courseResponsible: 1,
    },
    {
      courseId: 19,
      title: "History of the Incan Empire",
      totalCredits: 7.5,
      teachers: [5],
      courseResponsible: 5,
    },
    {
      courseId: 20,
      title: "History of Rome",
      totalCredits: 12.5,
      teachers: [5, 7],
      courseResponsible: 5,
    },
    {
      courseId: 21,
      title: "Architecture of the Middle Ages",
      totalCredits: 7.5,
      teachers: [3, 7, 5],
      courseResponsible: 3,
    },
    {
      courseId: 22,
      title: "Art of Classic Greece",
      totalCredits: 15,
      teachers: [1],
      courseResponsible: 1,
    },
    {
      courseId: 23,
      title: "History of the Middle Ages",
      totalCredits: 5,
      teachers: [5],
      courseResponsible: 5,
    },
    {
      courseId: 24,
      title: "Literature of Classic Greece",
      totalCredits: 12.5,
      teachers: [1],
      courseResponsible: 1,
    },
    {
      courseId: 25,
      title: "Poetry of the Baroque Age",
      totalCredits: 15,
      teachers: [0, 8, 2],
      courseResponsible: 0,
    },
    {
      courseId: 26,
      title: "Architecture of Classic Greece",
      totalCredits: 7.5,
      teachers: [7, 3, 5],
      courseResponsible: 7,
    },
    {
      courseId: 27,
      title: "Literature of the Incan Empire",
      totalCredits: 12.5,
      teachers: [3, 2],
      courseResponsible: 3,
    },
    {
      courseId: 28,
      title: "Poetry of the Middle Ages",
      totalCredits: 7.5,
      teachers: [3, 0],
      courseResponsible: 3,
    },
    {
      courseId: 29,
      title: "History of the Romantic Age",
      totalCredits: 7.5,
      teachers: [7, 5],
      courseResponsible: 7,
    },
  ],

  // TEACHERS
  // ========
  //
  // Each teacher is an object in the form of:
  //
  //  { teacherId, firstName, lastName, post, }
  teachers: [
    {
      teacherId: 0,
      firstName: "Sebastian",
      lastName: "Pineiro",
      post: "Lektor",
    },
    {
      teacherId: 1,
      firstName: "Erik",
      lastName: "Karlsson",
      post: "Adjunkt"
    },
    {
      teacherId: 2,
      firstName: "Sebastian",
      lastName: "Boztepe",
      post: "Docent",
    },
    {
      teacherId: 3,
      firstName: "Maria",
      lastName: "Berg",
      post: "Professor"
    },
    {
      teacherId: 4,
      firstName: "Suzan",
      lastName: "Engberg",
      post: "Docent"
    },
    {
      teacherId: 5,
      firstName: "Sven",
      lastName: "Bengtegård",
      post: "Lektor"
    },
    {
      teacherId: 6,
      firstName: "Johannes",
      lastName: "Packmohr",
      post: "Lektor",
    },
    {
      teacherId: 7,
      firstName: "Carina",
      lastName: "Corominas",
      post: "Lektor",
    },
    {
      teacherId: 8,
      firstName: "Thomas",
      lastName: "Jakobsson",
      post: "Adjunkt",
    },
    {
      teacherId: 9,
      firstName: "Pär",
      lastName: "Ström Hyllén",
      post: "Adjunkt",
    },
  ],
};
