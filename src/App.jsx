import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './components/AnimatedSection';
import confetti from 'canvas-confetti';


const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;

  const response = await fetch("https://api.sheety.co/adca022e3f378612d1e381ae982be983/btcLeads/sheet1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      sheet1: {
        name,
        email,
        phone
      }
    })
  });

  const container = document.getElementById("form-container");
  if (response.ok) {
    container.innerHTML = `
      <div class='flex flex-col items-center justify-center gap-4 text-center text-white'>
        <div class='text-3xl font-bold text-green-400'>✓</div>
        <p class='text-lg'>הפרטים התקבלו בהצלחה!</p>
      </div>
    `;
  } else {
    alert("שגיאה בשליחה, נסה שוב.");
  }
};
export default function App()

{
  return (
    <main
      dir="rtl"
      className="min-h-screen snap-y snap-mandatory scroll-smooth bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white font-sans px-6 md:px-12"
    >
      {/* צד שמאל - תוכן טקסטואלי */}
      <motion.section
        whileHover={{ scale: 1.01 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4.1, ease: "easeOut" }}
        className="min-h-screen w-full px-6 md:px-12 py-24 snap-start flex items-center justify-center"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 2.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold leading-snug tracking-tight text-right text-white"
          >
            <span>מה אם כל מה שידעת על</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 font-extrabold underline decoration-white underline-offset-4">כסף</span>{" "}
            <span>— בכלל לא נכון?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-neutral-200 leading-relaxed text-right font-light tracking-wide"
          >
            <span className="text-teal-300 font-semibold">ביטקוין</span> הוא לא מטבע. הוא דרך להבין מהו{" "}
            <span className="text-cyan-400 font-semibold">ערך</span>,{" "}
            <span className="text-cyan-400 font-semibold">שליטה</span> ו{" "}
            <span className="text-cyan-400 font-semibold">אמון</span> — בעולם שלא מחכה לאף אחד.
          </motion.p>
          {/* באנר דק ויוקרתי - רספונסיבי */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="w-full max-w-2xl bg-gradient-to-br from-neutral-700 via-neutral-800 to-black border border-neutral-600 rounded-2xl px-4 py-3 flex flex-row-reverse items-center justify-between gap-3 shadow-lg backdrop-blur-sm mt-6
              md:flex-row md:gap-6 md:px-6 md:py-4"
          >
            <h3 className="text-base md:text-xl font-semibold text-white text-right leading-snug flex-1">
              הצצה נדירה אל מאחורי הכסף
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const flash = document.createElement("div");
                flash.style.position = "fixed";
                flash.style.top = "0";
                flash.style.left = "0";
                flash.style.width = "100vw";
                flash.style.height = "100vh";
                flash.style.backgroundColor = "white";
                flash.style.opacity = "0.9";
                flash.style.zIndex = "9999";
                flash.style.transition = "opacity 0.8s ease-out";
                document.body.appendChild(flash);
                setTimeout(() => {
                  flash.style.opacity = "0";
                  setTimeout(() => {
                    flash.remove();
                    const videoOverlay = document.createElement("div");
                    videoOverlay.style.position = "fixed";
                    videoOverlay.style.top = "0";
                    videoOverlay.style.left = "0";
                    videoOverlay.style.width = "100vw";
                    videoOverlay.style.height = "100vh";
                    videoOverlay.style.backgroundColor = "#1f2937";
                    videoOverlay.style.zIndex = "10000";
                    videoOverlay.style.display = "flex";
                    videoOverlay.style.alignItems = "center";
                    videoOverlay.style.justifyContent = "center";
                    videoOverlay.style.color = "white";
                    videoOverlay.style.fontSize = "2rem";
                    videoOverlay.style.fontWeight = "bold";
                    videoOverlay.innerHTML = `
                      <div style="text-align:center">
                        <div style="font-size:2rem; font-weight:bold; margin-bottom:20px;">סרטון אנימציה על ביטקוין</div>
                        <button id="closeOverlay" style="padding:12px 24px; font-size:1rem; font-weight:bold; background:white; color:black; border:none; border-radius:8px; cursor:pointer;">חזרה</button>
                      </div>
                    `;
                    document.body.appendChild(videoOverlay);
                    document.getElementById("closeOverlay").addEventListener("click", () => {
                      videoOverlay.remove();
                    });
                  }, 800);
                }, 100);
              }}
              className="px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:scale-105 transition duration-300 flex-shrink-0"
            >
              צפו בסרטון ▶️
            </motion.button>
          </motion.div>
          {/* Scroll Indicator */}
          <div className="w-full flex justify-center mt-4 animate-bounce">
            <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </motion.section>
      {/* Divider: לגל דק - אחרי סקשן ראשון, רקע הבא: bg-neutral-900 */}
      <div className="w-full h-12 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" className="text-neutral-900" />
        </svg>
      </div>

      {/* מעבר גרדיאנט דק */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 md:my-12"></div>
      {/* סקשן: איך כסף באמת עובד */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="min-h-screen w-full px-6 md:px-12 py-24 snap-start flex items-center justify-center"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            אז איך כסף באמת עובד?
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            ברוב חיינו, למדנו שכסף זה דבר שאחרים שולטים בו – הבנק, המדינה, או מי שיש לו יותר. 
            אבל מה אם זה לא חייב להיות ככה?
            <br /><br />
            הנה שלוש עובדות שלא מספרים לך — והן משנות הכול:
          </p>
          <ul className="text-lg md:text-xl text-neutral-300 max-w-3xl space-y-4 text-right list-disc list-inside mt-6">
            <li>ביטקוין לא נוצר בשביל "להתעשר" — אלא כדי ״לשבור״ את המערכת שאנחנו חיים בה.</li>
            <li>הוא לא נשלט על ידי אף מדינה, בנק או ארגון — כולו פתוח, שקוף ומאובטח על ידי הכורים.</li>
            <li>לא צריך להבין בטכנולוגיה כדי להבין מה זה ביטקוין — צריך להבין ערך, חופש ואמון.</li>
          </ul>
        </div>
      </motion.section>
      {/* Divider: לגל דק - אחרי bg-neutral-900, רקע הבא: bg-neutral-900 */}
      <div className="w-full h-12 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" className="text-neutral-900" />
        </svg>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 md:my-12"></div>
      {/* סקשן: איך הכול התחיל */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="min-h-screen w-full px-6 md:px-12 py-24 snap-start flex items-center justify-center"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            איך הכול התחיל?
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
  <span className="text-blue-400 font-semibold">בפעם הראשונה</span> ששמעתי על ביטקוין – חשבתי שזה שטות.<br />
  <span className="text-blue-400 font-semibold">בפעם השנייה</span> – זה הרגיש כמו סינית.<br />
  <span className="text-blue-400 font-semibold">השלישית?</span> זה כבר <span className="text-indigo-400 font-semibold">לא עזב אותי</span>.<br /><br />
  אז בניתי הסבר שמתחיל מה<span className="text-indigo-400 font-semibold">שאלות הכי בסיסיות</span> — ומוביל ל<span className="text-blue-400 font-semibold">הבנה אמיתית</span>.<br />
  בלי גיקים. בלי רעש. בלי שיווק. <span className="text-neutral-100 font-medium">פשוט</span>, <span className="text-neutral-100 font-medium">נקי</span>, <span className="text-neutral-100 font-medium">ישר</span>.
</p>
        </div>
      </motion.section>
      {/* Divider: לגל דק - אחרי bg-neutral-900, רקע הבא: bg-gradient-to-br from-sky-700 via-blue-800 to-indigo-900 */}
      <div className="w-full h-12 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" className="text-sky-700" />
        </svg>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 md:my-12"></div>
      {/* CTA נוסף אחרי "איך הכול התחיל" */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="min-h-screen w-full px-6 md:px-12 py-24 snap-start flex items-center justify-center bg-gradient-to-br from-sky-700 via-blue-800 to-indigo-900 text-white"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-2xl">
            אתה לא צריך להבין הכול — רק להתחיל.
          </h2>
          <p className="text-lg md:text-xl text-neutral-200 max-w-xl">
            צעד אחד קטן, ופתאום מושגים כמו ביטקוין, כסף וערך נראים אחרת לגמרי.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 ease-in-out"
          >
            רוצה להבין יותר
          </motion.button>
        </div>
      </motion.section>
      {/* Divider: לגל דק - אחרי bg-gradient-to-br from-sky-700..., רקע הבא: bg-neutral-900 */}
      <div className="w-full h-12 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" className="text-neutral-900" />
        </svg>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 md:my-12"></div>
      {/* עדות אנושית אנונימית */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="min-h-screen w-full px-6 md:px-12 py-24 snap-start flex items-center justify-center bg-neutral-900 text-white"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">אנשים מספרים</h2>
          <div className="flex flex-col md:flex-row gap-8 mt-8 w-full max-w-3xl">
            {[
              {
                quote: "חשבתי שביטקוין זה תרמית... עד שהבנתי שזה אני שלא הבין.",
                name: "אנונימי, בן 31",
                wallet: "0xA1B...4F9",
              },
              {
                quote: "לא האמנתי שאני אתעניין בכסף. עכשיו אני מבין כמה זה נגע בי כל החיים.",
                name: "עומר, 27",
                wallet: "0xE4A...91C",
              },
              {
                quote: "לא שיניתי את החיים שלי — פשוט התחלתי להבין איך הם עובדים.",
                name: "טל, 34",
                wallet: "0x9C7...D2A",
              },
            ].map(({ quote, name, wallet }, idx) => (
              <div key={idx} className="bg-neutral-800 border border-neutral-600 rounded-xl p-6 shadow-md flex flex-col justify-between flex-1">
                <p className="text-lg italic text-neutral-300 mb-4">“{quote}”</p>
                <div className="text-sm text-neutral-500">{name}</div>
                <div className="text-xs text-neutral-600 mt-1">{wallet}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Divider: לגל דק - אחרי bg-neutral-900, רקע הבא: bg-black */}
      <div className="w-full h-12 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" className="text-black" />
        </svg>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 md:my-12"></div>
      {/* CTA "אם הגעת עד לכאן" - מייד אחרי "אנשים מספרים" */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="min-h-screen w-full px-6 md:px-12 py-24 snap-start flex items-center justify-center bg-black text-white"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            אם הגעת עד לכאן – כנראה שמשהו בך רוצה להבין יותר.
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
            הקורס הזה לא יפתור את כל הבעיות שלך, אבל הוא יגרום לך לשאול את השאלות הנכונות. 
            הדרך מתחילה בצעד אחד קטן.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-black font-bold rounded-xl shadow-lg transition-all duration-300 ease-in-out"
          >
            אני מוכן להתחיל
          </motion.button>
        </div>
      </motion.section>
      {/* Divider: לגל דק - אחרי bg-black, רקע הבא: bg-neutral-950 */}
      <div className="w-full h-12 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" className="text-neutral-950" />
        </svg>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 md:my-12"></div>
      {/* סקשן: אמון זה לא עניין של טכנולוגיה */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="min-h-screen w-full px-6 md:px-12 py-24 snap-start flex items-center justify-center bg-neutral-950 text-white"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            אמון זה לא עניין של טכנולוגיה — זה עניין של בחירה.
          </h2>
          <div className="group flex flex-col items-center w-full max-w-xl">
            <p className="text-sm text-neutral-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">(תלחצו עליי)</p>
            <div className="flex flex-col md:flex-row gap-6">
            {[
              { text: "ערך", colors: "from-sky-500 to-indigo-600" },
              { text: "חופש", colors: "from-purple-500 to-pink-500" },
              { text: "אמון", colors: "from-emerald-500 to-teal-400" },
            ].map(({ text, colors }, idx) => (
              <button
                key={idx}
                onClick={() => {
                  confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                  });
                }}
                className={`px-6 py-3 bg-gradient-to-r ${colors} text-white rounded-full shadow-md transform active:scale-95 transition duration-300 ease-in-out`}
              >
                {text}
              </button>
            ))}
            </div>
          </div>
        </div>
      </motion.section>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 md:my-12"></div>
      {/* טופס השארת פרטים */}
      <motion.section
        id="contact-form"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="min-h-screen w-full px-6 md:px-12 py-24 snap-start flex items-center justify-center bg-neutral-950 text-white"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            רוצה שנעדכן אותך כשהקורס נפתח?
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-xl">
            השאר את הפרטים שלך ונשלח לך אימייל כשזה יקרה. לא ספאם. לא פרסומות. רק ידע.
          </p>
          <div id="form-container">
            <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4 text-right">
              <input
                type="text"
                name="name"
                placeholder="שם מלא"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-600 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="email"
                name="email"
                placeholder="אימייל"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-600 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="מספר טלפון"
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-600 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
              >
                שלחו לי עדכון
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
      {/* Divider: לגל דק - אחרי bg-neutral-950, רקע הבא: bg-neutral-900 */}
      <div className="w-full h-12 overflow-hidden">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" className="text-neutral-900" />
        </svg>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 md:my-12"></div>
      {/* (הסרת CTA הסופי - כעת הוא מופיע אחרי "אנשים מספרים") */}
      {/* סקשן: איך נראית מערכת אחרת */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="min-h-screen w-full px-6 md:px-12 py-24 snap-start flex items-center justify-center bg-neutral-900 text-white"
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            איך נראית מערכת אחרת?
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
            לא צריך לדמיין — נסתכל על העולם דרך עיניים חדשות. 
            נבין איך כסף היה נראה אם הוא באמת היה שלנו. 
            בלי מתווכים. בלי מניפולציות. רק אתה, וארנק דיגיטלי בשליטתך.
          </p>
        </div>
      </motion.section>
      {/* קרדיט תחתון */}
      <footer className="py-8 text-center text-sm text-neutral-600">
        Built by Yuval Atia
      </footer>
    </main>
  );
}
