
function saveAndCheckPassword() {
  // الحصول على قيم المدخلات
  const passwordInput = document.getElementById("passwordteather"); 
  const textInput = document.getElementById("myInput");   
  const password = passwordInput.value;
  const text = textInput.value;
 // التحقق من كلمة المرور لحفظ النص    
  if (password === "mostafa1") {    
    // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
    let savedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];    
    savedTexts.push(text);
    localStorage.setItem("savedTexts", JSON.stringify(savedTexts));        
       // عرض النصوص المحفوظة
       displaySavedTexts();
  } else {
    alert("كلمة المرور خاطئة");
  }
    // حفظ النص في localStorage
    let savedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];
    savedTexts.push(text);
    localStorage.setItem("savedTexts", JSON.stringify(savedTexts));   
  
  
    // عرض رسالة تأكيد
    alert("تم حفظ النص بنجاح.");
  
    // تحديث قائمة النصوص المعروضة
    displaySavedTexts();
  }


// دالة لعرض النصوص المحفوظة
function displaySavedTexts() {
  const resultDiv = document.getElementById("result");
  const savedTexts = JSON.parse(localStorage.getItem("savedTexts")) || [];
  resultDiv.innerHTML = ""; // مسح المحتوى السابق
  savedTexts.forEach(text => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    resultDiv.appendChild(newParagraph);
  });
}

function deleteText(index) {
let savedTexts = JSON.parse(localStorage.getItem("savedTexts"));
savedTexts.splice(index, 1);
localStorage.setItem("savedTexts", JSON.stringify(savedTexts));
displaySavedTexts();
}

// دالة لحذف جميع النصوص
function deleteAllTexts() {
  const deletePassword = prompt("أدخل كلمة المرور للحذف:");
  if (deletePassword === "mostafadel") {
    localStorage.removeItem("savedTexts");
    displaySavedTexts(); // عرض قائمة فارغة بعد الحذف
    alert("تم حذف جميع النصوص بنجاح.");
  } else {
    alert("كلمة المرور للحذف خاطئة.");
  }
}
// عند تحميل الصفحة، عرض النصوص المحفوظة
window.onload = function() {
  displaySavedTexts();
};
// ربط حدث النقر بزر الحذف    
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", deleteAllTexts);