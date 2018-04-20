'use strict';

/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...

    score < 0 || score > 100
        ? gradeOfStudent = 0
        : score >= 0 && score < 60
        ? gradeOfStudent = 1
        : score >= 60 && score < 70
        ? gradeOfStudent = 2
        : score >= 70 && score < 80
        ? gradeOfStudent = 3
        : score >= 80 && score < 90
        ? gradeOfStudent = 4
        : gradeOfStudent = 5;


    // ...AND THIS COMMENT LINE!
    return gradeOfStudent;
}
module.exports = grade;