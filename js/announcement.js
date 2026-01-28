// Ultra-Modern Tech Announcement – Al Safwa (Show on Every Refresh)
(() => {
  const isIndex = location.pathname.endsWith("index.html") || location.pathname === "/";
  if (!isIndex) return;

  // تم إزالة قيود الـ Session لكي يظهر الإعلان في كل مرة يتم فيها تحديث الصفحة

  // 1. نظام الألوان والخطوط (CSS)
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
    
    .alsafwa-overlay {
      position: fixed; inset: 0; background: rgba(8, 10, 15, 0.85);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      display: flex; align-items: center; justify-content: center;
      z-index: 10000; opacity: 0; transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
    
    .alsafwa-card {
      position: relative; width: min(480px, 94%); padding: 3px;
      border-radius: 24px; background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
      transform: scale(0.9) translateY(30px); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
    }
    
    .alsafwa-inner {
      background: #0f172a; border-radius: 21px; padding: 40px 30px;
      text-align: center; font-family: 'Cairo', sans-serif; overflow: hidden;
      position: relative; color: #f8fafc;
    }

    .tech-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 16px; background: rgba(59, 130, 246, 0.15);
      border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 100px;
      color: #60a5fa; font-size: 13px; font-weight: 700; text-transform: uppercase;
      margin-bottom: 20px; animation: glow 2s infinite;
    }

    .alsafwa-title {
      font-size: 28px; font-weight: 900; margin-bottom: 15px;
      background: linear-gradient(to right, #fff, #94a3b8);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }

    .alsafwa-text {
      font-size: 17px; line-height: 1.8; color: #94a3b8; margin-bottom: 25px;
    }

    .highlight { color: #f8fafc; font-weight: 700; border-bottom: 2px solid #3b82f6; }

    .close-btn {
      margin-top: 10px; padding: 12px 30px; background: #f8fafc; color: #0f172a;
      border: none; border-radius: 12px; font-weight: 700; cursor: pointer;
      transition: 0.3s; box-shadow: 0 4px 15px rgba(255,255,255,0.1);
    }

    .close-btn:hover { transform: translateY(-2px); background: #3b82f6; color: #fff; }

    @keyframes glow {
      0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.2); }
      50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
    }
  `;
  document.head.appendChild(styleTag);

  // 2. بناء الهيكل (HTML)
  const overlay = document.createElement("div");
  overlay.className = "alsafwa-overlay";

  const card = document.createElement("div");
  card.className = "alsafwa-card";

  card.innerHTML = `
    <div class="alsafwa-inner">
      <div class="tech-badge">
        <span style="width:8px; height:8px; background:#3b82f6; border-radius:50%"></span>
        حدث هام لعام 2026
      </div>
      
      <h2 class="alsafwa-title">سنتر الصفوة التعليمي</h2>
      
      <p class="alsafwa-text">
        بقيادة الأستاذ <span class="highlight">محمد السيد جابر</span>،<br>
        نعلن بكل فخر عن إقامة حفل المتفوقين السنوي.<br>
        <span style="font-size:14px; opacity:0.8">نحتفي بالتميز.. ونصنع المستقبل برؤية تكنولوجية.</span>
      </p>

      <button class="close-btn" id="closeAnnounce">استكشاف المزيد</button>

      <div style="margin-top:25px; font-size:10px; color:#475569; letter-spacing:1px; font-family:monospace;">
        SYSTEM DESIGNED BY: ENG. MOHAMED ESSAM
      </div>
    </div>
  `;

  overlay.appendChild(card);
  document.body.appendChild(overlay);

  // 3. التشغيل والإغلاق
  requestAnimationFrame(() => {
    overlay.style.opacity = "1";
    card.style.transform = "scale(1) translateY(0)";
  });

  const closePopup = () => {
    overlay.style.opacity = "0";
    card.style.transform = "scale(0.9) translateY(-20px)";
    setTimeout(() => overlay.remove(), 600);
  };

  document.getElementById("closeAnnounce").onclick = closePopup;

  // إغلاق تلقائي بعد 12 ثانية
  setTimeout(closePopup, 12000);
})();
