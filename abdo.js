import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, remove } from "firebase/database";

// تكوين Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const savedTextsRef = ref(database, 'savedTexts');

// الحصول على عناصر DOM
const passwordInput = document.getElementById("passwordteather");
const textInput = document.getElementById("myInput");
const resultDiv = document.getElementById("result");
const deleteButton = document.getElementById("deleteButton");

// حفظ النص في قاعدة البيانات
function saveText() {
  const password = passwordInput.value;
  const text = textInput.value;

  if (password === "mostafa1") {
    savedTextsRef.push(text);
    alert("تم حفظ النص بنجاح");
  } else {
    alert("كلمة المرور خاطئة");
  }
}

// عرض النصوص المحفوظة من قاعدة البيانات
function displayTexts() {
  savedTextsRef.on('value', (snapshot) => {
    const data = snapshot.val();
    resultDiv.innerHTML = "";
    if (data) {
      for (const key in data) {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = data[key];
        resultDiv.appendChild(newParagraph);
      }
    } else {
      resultDiv.textContent = "لا توجد نصوص محفوظة";
    }
  });
}

// حذف جميع النصوص من قاعدة البيانات
function deleteAllTexts() {
  savedTextsRef.remove();
  alert("تم حذف جميع النصوص بنجاح");
}

// ربط الأحداث بالأزرار
const saveButton = document.getElementById("saveButton"); // افترض وجود زر لحفظ
saveButton.addEventListener("click", saveText);
deleteButton.addEventListener("click", deleteAllTexts);

// عرض النصوص عند تحميل الصفحة
displayTexts();