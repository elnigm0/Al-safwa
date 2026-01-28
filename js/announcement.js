/**
 * Al Safwa Educational Center - Modern Tech Announcement
 * Version: 2.1 (GitHub Pages Compatible)
 */

(() => {
  // تم تعديل التحقق ليعمل على GitHub Pages وأي مسار فرعي
  const isHomePage = 
    location.pathname === "/" || 
    location.pathname.endsWith("index.html") || 
    location.pathname.split("/").pop() === ""; // يغطي حالات GitHub Pages

  if (!isHomePage) return;

  // --- 1. نظام التنسيق (CSS) ---
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
    
    .alsafwa-overlay {
      position: fixed; inset: 0; background: rgba(7, 10, 18, 0.9);
      backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
      display: flex; align-items: center; justify-content: center;
      z-index: 10000; opacity: 0; transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .alsafwa-card {
      position: relative; width: min(500px, 92%); padding: 2px;
      border-radius: 28px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
      transform: scale(0.8) translateY(40px); transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 0 50px rgba(59, 130, 246, 0.4);
    }
    
    .alsafwa-inner {
      background: #0f172a; border-radius: 26px; padding: 40px 25px;
      text-align: center; font-family: 'Cairo', sans-serif; overflow: hidden;
      position: relative; color: #f8fafc;
    }

    .tech-badge {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 7px 18px; background: rgba(59, 130, 246, 0.1);
      border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 100px;
      color: #60a5fa; font-size: 13px; font-weight: 700; margin-bottom: 25px;
    }

    .pulse-dot {
      width: 8px; height: 8px; background: #3b82f6; border-radius: 50%;
      animation: tech-pulse 1.5s infinite;
    }

    .alsafwa-title {
      font-size: clamp(20px, 5vw, 28px); font-weight: 900; margin-bottom: 18px;
      background: linear-gradient(to bottom, #ffffff, #94a3b8);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }

    .alsafwa-text {
      font-size: 16px; line-height: 1.8; color: #cbd5e1; margin-bottom: 30px;
    }

    .close-btn {
      background: linear-gradient(90deg, #3b82f6, #2563eb);
      color: white; border: none; padding: 12px 35px; border-radius: 12px;
      font-size: 16px; font-weight: 700; cursor: pointer; transition: 0.3s;
    }

    .close-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3); }

    @keyframes tech-pulse {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
      70% { transform: scale(1.2); box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(styleTag);

  // --- 2. بناء الهيكل (DOM) ---
  const overlay = document.createElement("div");
  overlay.className = "alsafwa-overlay";

  const card = document.createElement("div");
  card.className = "alsafwa-card";

  card.innerHTML = `
    <div class="alsafwa-inner">
      <div class="tech-badge">
        <span class="pulse-dot"></span>
        إعلان هام - 2026
      </div>
      <h2 class="alsafwa-title">سنتر الصفوة التعليمي</h2>
      <p class="alsafwa-text">
        يتشرف السنتر بقيادة الأستاذ <br>
        <strong style="color:#fff">محمد السيد جابر</strong> <br>
        بإقامة حفل المتفوقين السنوي لتكريم طلابنا المتميزين.
      </p>
      <button class="close-btn" id="closeAnnounce">دخول الموقع</button>
      <div style="margin-top:25px; font-size:9px; color:#475569; letter-spacing:1px;">
        ENG. MOHAMED ESSAM
      </div>
    </div>
  `;

  overlay.appendChild(card);
  document.body.appendChild(overlay);

  // --- 3. الحركة والتشغيل ---
  setTimeout(() => {
    overlay.style.opacity = "1";
    card.style.transform = "scale(1) translateY(0)";
  }, 100);

  const hide = () => {
    overlay.style.opacity = "0";
    card.style.transform = "scale(0.8) translateY(-40px)";
    setTimeout(() => overlay.remove(), 600);
  };

  document.getElementById("closeAnnounce").onclick = hide;
  overlay.onclick = (e) => { if (e.target === overlay) hide(); };
})();
