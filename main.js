    let studentName = "";
    let studentCode = "";

    function startExam() {
      const name = document.getElementById("studentName").value.trim();
      const code = document.getElementById("studentCode").value.trim().toUpperCase();
      const errorBox = document.getElementById("loginError");

      if (name.split(" ").length < 4) {
        errorBox.textContent = "❌ يجب كتابة الاسم رباعي.";
        return;
      }

      if (!/^A\d{5}$/.test(code) || code < "A12345" || code > "A67890") {
        errorBox.textContent = "❌ الكود غير صالح. يجب أن يكون بين A12345 و A67890.";
        return;
      }

      studentName = name;
      studentCode = code;

      document.getElementById("login").classList.add("hidden");
      document.getElementById("exam").classList.remove("hidden");
    }

    function submitExam() {
      const q1 = document.querySelector('input[name="q1"]:checked');//Q1
      const q2 = document.querySelector('input[name="q2"]:checked');//Q2
      const q3 = document.querySelector('input[name="q3"]:checked');//Q3
      const q4 = document.querySelector('input[name="q4"]:checked');//Q4
      const q5 = document.querySelector('input[name="q5"]:checked');//Q5
      const q6 = document.querySelector('input[name="q6"]:checked');//Q6
      const q7 = document.querySelector('input[name="q7"]:checked');//Q7
      const q8 = document.querySelector('input[name="q8"]:checked');//Q8
      const q9 = document.querySelector('input[name="q9"]:checked');//Q9
      const q10 = document.querySelector('input[name="q10"]:checked');//Q10
      const q11 = document.querySelector('input[name="q11"]:checked');//Q11
      const q12 = document.querySelector('input[name="q12"]:checked');//Q12
      const q13 = document.querySelector('input[name="q13"]:checked');//Q13
      const q14 = document.querySelector('input[name="q14"]:checked');//Q14
      const q15 = document.querySelector('input[name="q15"]:checked');//Q15
      const q16 = document.querySelector('input[name="q16"]:checked');//Q16
      const q17 = document.querySelector('input[name="q17"]:checked');//Q17
      const q18 = document.querySelector('input[name="q18"]:checked');//Q18
      const q19 = document.querySelector('input[name="q19"]:checked');//Q19
      const q20 = document.querySelector('input[name="q20"]:checked');//Q20

      let score = 0;
      let report = "";


/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q1 && q1.value === "اسم") {
        score++; report += "✔️ سؤال 1: صحيح<br>";
      } else {
        report += "❌ سؤال 1: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/





/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q2 && q2.value === "خبر") {
        score++; report += "✔️ سؤال 2: صحيح<br>";
      } else {
        report += "❌ سؤال 2: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/





/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q3 && q3.value === "طرق") {
        score++; report += "✔️ سؤال 3: صحيح<br>";
      } else {
        report += "❌ سؤال 3: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/





/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q4 && q4.value === "مجازي") {
        score++; report += "✔️ سؤال 4: صحيح<br>";
      } else {
        report += "❌ سؤال 4: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/






/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q5 && q5.value === "ألف وصل") {
        score++; report += "✔️ سؤال 5: صحيح<br>";
      } else {
        report += "❌ سؤال 5: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/






/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q6 && q6.value === "الألف") {
        score++; report += "✔️ سؤال 6: صحيح<br>";
      } else {
        report += "❌ سؤال 6: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/






/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q7 && q7.value === "متصل") {
        score++; report += "✔️ سؤال 7: صحيح<br>";
      } else {
        report += "❌ سؤال 7: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/






/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q8 && q8.value === "جملة_فعلية") {
        score++; report += "✔️ سؤال 8: صحيح<br>";
      } else {
        report += "❌ سؤال 8: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/






/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q9 && q9.value === "فعل_من_الافعل_الخمسة") {
        score++; report += "✔️ سؤال 9: صحيح<br>";
      } else {
        report += "❌ سؤال 9: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/









/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q10 && q10.value === "خبر_ظل") {
        score++; report += "✔️ سؤال 10: صحيح<br>";
      } else {
        report += "❌ سؤال 10: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/










/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q11 && q11.value === "خطأ") {
        score++; report += "✔️ سؤال 11: صحيح<br>";
      } else {
        report += "❌ سؤال 11: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/






/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q12 && q12.value === "صح") {
        score++; report += "✔️ سؤال 12: صحيح<br>";
      } else {
        report += "❌ سؤال 12: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/





/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q13 && q13.value === "خطأ") {
        score++; report += "✔️ سؤال 13: صحيح<br>";
      } else {
        report += "❌ سؤال 13: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/







/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q14 && q14.value === "خطأ") {
        score++; report += "✔️ سؤال 14: صحيح<br>";
      } else {
        report += "❌ سؤال 14: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/






/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q15 && q15.value === "صح") {
        score++; report += "✔️ سؤال 15: صحيح<br>";
      } else {
        report += "❌ سؤال 15: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/




/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q16 && q16.value === "خطأ") {
        score++; report += "✔️ سؤال 16: صحيح<br>";
      } else {
        report += "❌ سؤال 16: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/






/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q17 && q17.value === "صح") {
        score++; report += "✔️ سؤال 17: صحيح<br>";
      } else {
        report += "❌ سؤال 17: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/





/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q18 && q18.value === "خطأ") {
        score++; report += "✔️ سؤال 18: صحيح<br>";
      } else {
        report += "❌ سؤال 18: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/






/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q19 && q19.value === "صح") {
        score++; report += "✔️ سؤال 19: صحيح<br>";
      } else {
        report += "❌ سؤال 19: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/





/*
=============================
====Start Correct mistakes===
=============================
*/
      if (q20 && q20.value === "خطأ") {
        score++; report += "✔️ سؤال 20: صحيح<br>";
      } else {
        report += "❌ سؤال 20: خطأ<br>";
      }
/*
=============================
=====End Correct mistakes====
=============================
*/




      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
        <h2>📋 النتيجة</h2>
        <p><strong>الاسم:</strong> ${studentName}</p>
        <p><strong>الكود:</strong> ${studentCode}</p>
        <p><strong>الدرجة:</strong> ${score} من 20</p>
        <h3>التفاصيل:</h3>
        ${report}
      `;
      document.getElementById("exam").classList.add("hidden");
      resultDiv.classList.remove("hidden");
    }