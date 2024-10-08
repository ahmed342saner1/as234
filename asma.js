function saveAndCheckPassword4() {
  // الحصول على قيم المدخلات
  const passwordInput4 = document.getElementById("passwordteather4"); 
  const textInput4 = document.getElementById("myInput4");   
  const password4 = passwordInput4.value;
  const text = textInput4.value;
 // التحقق من كلمة المرور لحفظ النص    
  if (password4 === "mostafa4") {    
    // الحصول على النصوص المحفوظة أو إنشاء مصفوفة جديدة
    let savedTexts4 = JSON.parse(localStorage.getItem("savedTexts4")) || [];    
    savedTexts4.push(text);
    localStorage.setItem("savedTexts4", JSON.stringify(savedTexts4));        
       // عرض النصوص المحفوظة
       displaySavedTexts4();
  } else {
    alert("كلمة المرور خاطئة");
  }
}
// دالة لعرض النصوص المحفوظة
function displaySavedTexts4() {
  const resultDiv4 = document.getElementById("result");
  const savedTexts4 = JSON.parse(localStorage.getItem("savedTexts4")) || [];
  resultDiv4.innerHTML = ""; // مسح المحتوى السابق
  savedTexts4.forEach(text => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    resultDiv4.appendChild(newParagraph);
  });
}
// دالة لحذف جميع النصوص
function deleteAllTexts() {
  const deletePassword = prompt("أدخل كلمة المرور للحذف:");
  if (deletePassword === "mostafadel") {
    localStorage.removeItem("savedTexts4");
    displaySavedTexts4(); // عرض قائمة فارغة بعد الحذف
    alert("تم حذف جميع النصوص بنجاح.");
  } else {
    alert("كلمة المرور للحذف خاطئة.");
  }
}
// عند تحميل الصفحة، عرض النصوص المحفوظة
window.onload = function() {
  displaySavedTexts4();
};
// ربط حدث النقر بزر الحذف    
const deleteButton4 = document.getElementById("deleteButton4");
deleteButton4.addEventListener("click", deleteAllTexts);