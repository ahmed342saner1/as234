function saveAndCheckPassword3() {
    // الحصول على قيم المدخلات
    const passwordInput3 = document.getElementById("passwordteather3"); 
    const textInput3 = document.getElementById("myInput3");   
    const password3 = passwordInput3.value;
    const text = textInput3.value;
   // التحقق من كلمة المرور لحفظ النص    
    if (password3 === "mostafa3") {    
      // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
      let savedTexts3 = JSON.parse(localStorage.getItem("savedTexts3")) || [];    
      savedTexts3.push(text);
      localStorage.setItem("savedTexts3", JSON.stringify(savedTexts3));        
         // عرض النصوص المحفوظة
         displaySavedTexts3();
    } else {
      alert("كلمة المرور خاطئة");
    }
}
  // دالة لعرض النصوص المحفوظة
  function displaySavedTexts3() {
    const resultDiv3 = document.getElementById("result");
    const savedTexts3 = JSON.parse(localStorage.getItem("savedTexts3")) || [];
    resultDiv3.innerHTML = ""; // مسح المحتوى السابق
    savedTexts3.forEach(text => {
      const newParagraph = document.createElement("p");
      newParagraph.textContent = text;
      resultDiv3.appendChild(newParagraph);
    });
  }
  // دالة لحذف جميع النصوص
  function deleteAllTexts() {
    const deletePassword = prompt("أدخل كلمة المرور للحذف:");
    if (deletePassword === "mostafadel") {
      localStorage.removeItem("savedTexts3");
      displaySavedTexts3(); // عرض قائمة فارغة بعد الحذف
      alert("تم حذف جميع النصوص بنجاح.");
    } else {
      alert("كلمة المرور للحذف خاطئة.");
    }
  }
  // عند تحميل الصفحة، عرض النصوص المحفوظة
  window.onload = function() {
    displaySavedTexts3();
  };
 // ربط حدث النقر بزر الحذف    
  const deleteButton3 = document.getElementById("deleteButton3");
  deleteButton3.addEventListener("click", deleteAllTexts);