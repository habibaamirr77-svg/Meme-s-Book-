document.addEventListener('DOMContentLoaded', function() {
    // إعداد مطر الورود والقلوب
    const bgContainer = document.getElementById('floating-elements');
    const items = ['💖', '🌷', '🌸', '✨', '🎀', '💝', '🌹', '💐'];
    const count = 35; // عدد العناصر المتساقطة

    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'floating';
        el.textContent = items[Math.floor(Math.random() * items.length)];
        
        // توزيع أفقي عشوائي
        el.style.left = Math.random() * 100 + 'vw';
        
        // جعل العناصر تبدأ من ارتفاعات مختلفة (فوق الشاشة) لتسقط تباعاً
        el.style.top = Math.random() * -100 + 'vh'; 
        
        el.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        // سرعة سقوط عشوائية (بين 4 و 8 ثواني)
        const duration = (Math.random() * 4 + 4) + 's';
        el.style.animationDuration = duration;
        
        // تأخير عشوائي لتبدأ الورود بالسقوط في أوقات مختلفة
        el.style.animationDelay = (Math.random() * 8) + 's';
        
        bgContainer.appendChild(el);
    }

    // إعداد محتوى الكتاب
    const book = document.getElementById('book');
    const totalSheets = 9;

    const pages = [
        {
            front: { title: "", text: "", isCover: true, coverTitle: "My Virtual Twin", coverSubtitle: "April's Queen" },
            back: { title: "✨ Introduction 💕 ✨", text: '"They say April is the month of blooming, but I say it is the month that gave me the most beautiful gift of fate. Today we celebrate not just your birthday, but your existence that gave everything meaning." 💕' }
        },
        {
            front: { title: "✨ The Beginning ✨", text: "If someone had told me that this chat would turn into a real friendship, I wouldn't have believed them. It started with a simple coincidence, but over time, you became the person I go to tell about anything that happens in my day without thinking. 💕" },
            back: { title: "✨ The Distance ✨", text: "Distance was never an obstacle for us to be close. On the contrary, I discovered that real connections don't need us to be in the same place to feel each other. 💕" }
        },
        {
            front: { title: "✨ Our Humor ✨", text: "Beyond the idea of us being 'Online' friends, I really love that we understand each other's sense of humor. The laughter we share over trivial situations or jokes that only we understand is what confirms to me that we're really on the same wave. 💕" },
            back: { title: "✨ Birthday Vibes ✨", text: "Happy birthday to the nicest person born in April. Really, your presence in my day makes a big difference and makes the mood much better. 💕" }
        },
        {
            front: { title: "✨ Why You? ✨", text: "Because you really listen to me without judgment.\n\nBecause our conversations are the highlight of my day.\n\nBecause simply.. You are easy to talk to. 💕" },
            back: { title: "✨ Wishes ✨", text: "I wish you a year full of success and achieving everything you aspire for. You deserve all the good things, Meme, because your heart is really kind. 💕" }
        },
        {
            front: { title: "✨ Support ✨", text: "Know that I'm always supporting you in any decision you make, and I'm here if you need to vent anytime.. I'm just one text away. 💕" },
            back: { title: "✨ Fact ✨", text: "We don't need to meet every day to prove we're friends. What matters is that whenever we need each other, we always find each other. 💕" }
        },
        {
            front: { title: "✨ Memories ✨", text: "Every moment we spent together, big or small, became etched in my memory. Thank you for all the laughter and conversations that brightened my days. 💕" },
            back: { title: "✨ Dreams ✨", text: "I wish we could be together and celebrate for real. We could laugh at the same jokes and sit together at a CAFE. InshaAllah this will happen soon. 💕" }
        },
        {
            front: { title: "✨ Friendship ✨", text: "True friendship is the one that stays stronger than distance and time. We are two different people, but our hearts understand each other in a strange way. 💕" },
            back: { title: "✨ Respect ✨", text: "I respect you so much. Your way of thinking, your way of speaking, and your kind heart - all of this makes you a very special person. 💕" }
        },
        {
            front: { title: "✨ Positive Energy ✨", text: "Your presence in my life gave me positive energy. Even on my darkest days, your words remain a source of light for me. 💕" },
            back: { title: "✨ Inner Beauty ✨", text: "Not only are you beautiful on the outside, but you're also very beautiful on the inside. Your kind heart and sweet spirit are what distinguish you from everyone else. 💕" }
        },
        {
            front: { title: "✨ Final Words ✨", text: "I'm grateful for every moment. And with each passing day, I discover that you deserve more and more. Happy birthday Meme! 🎂💕" },
            back: { title: "✨ Happy Birthday 💖 ✨", text: "I wish you all the happiness on your birthday. InshaAllah all your dreams come true, and every day is better than the previous one. 💕", isEnd: true }
        }
    ];

    // إنشاء الصفحات برمجياً
    for (let i = 0; i < totalSheets; i++) {
        const sheet = document.createElement('div');
        sheet.className = 'page';
        sheet.id = 'p' + (i + 1);
        sheet.style.zIndex = totalSheets - i;

        const page = pages[i];
        
        // الجزء الأمامي للورقة
        let frontContent = '';
        if (page.front.isCover) {
            frontContent = `<div class="front cover-front"><h1>${page.front.coverTitle}</h1><p>${page.front.coverSubtitle}</p></div>`;
        } else {
            frontContent = `<div class="front"><div class="page-content"><h3>${page.front.title}</h3><p>${page.front.text}</p></div></div>`;
        }

        // الجزء الخلفي للورقة
        let backContent = '';
        if (page.back.isEnd) {
            backContent = `<div class="back cover-back"><h2>${page.back.title}</h2><p style="margin-top: 15px;">${page.back.text}</p></div>`;
        } else {
            backContent = `<div class="back"><div class="page-content"><h3>${page.back.title}</h3><p>${page.back.text}</p></div></div>`;
        }

        sheet.innerHTML = frontContent + backContent;
        sheet.onclick = function() { togglePage(i + 1); };
        book.appendChild(sheet);
    }

    function togglePage(index) {
        const sheet = document.getElementById('p' + index);
        if (sheet.classList.contains('flipped')) {
            sheet.classList.remove('flipped');
            setTimeout(() => { sheet.style.zIndex = totalSheets - index + 1; }, 600);
        } else {
            sheet.classList.add('flipped');
            sheet.style.zIndex = index;
        }
    }
});