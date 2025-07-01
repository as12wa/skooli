// مبدئيًا نضع تنبيه بسيط
console.log("مرحبًا بك في منصة سكولي!");

// لاحقًا يمكنك ربطه باختيار نوع الحجز أو تسجيل الدخول
// عرض رسالة تأكيد بعد إرسال نموذج الحجز
document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.querySelector('.booking-form form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('تم إرسال طلب الحجز بنجاح! سنتواصل معك قريبًا.');
      bookingForm.reset();
    });
  }

  const teacherForm = document.querySelector('.teacher-section form');
  if (teacherForm) {
    teacherForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('تم إرسال بيانات المعلم بنجاح!');
      teacherForm.reset();
    });
  }

  const loginForm = document.querySelector('.login-register form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('تم تسجيل الدخول بنجاح (تجريبي)');
      loginForm.reset();
    });
  }
});
