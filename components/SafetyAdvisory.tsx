export default function SafetyAdvisory() {
  return (
    <section
      aria-labelledby="safety-advisory-title"
      className="w-full border-y border-amber-200 bg-amber-50 py-8 lg:py-10"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl border border-amber-300 bg-surface-card p-6 shadow-sm lg:p-8">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="material-symbols-outlined mt-0.5 shrink-0 rounded-full bg-amber-100 p-2 text-amber-700"
            >
              warning
            </span>
            <div className="min-w-0">
              <h2
                id="safety-advisory-title"
                className="text-[22px] leading-[30px] font-bold text-amber-950"
              >
                Important Safety Advisory <span className="font-medium">/</span>{' '}
                <span dir="rtl">اہم ہدایات</span>
              </h2>

              <div className="mt-5 space-y-6 text-[15px] leading-[25px] text-on-surface">
                <div>
                  <h3 className="font-bold text-amber-950">English</h3>
                  <p className="mt-1">
                    Rawdah and Umrah permits are completely free on the official Nusuk app. Do not pay any agent,
                    broker, or third party a single rupee for booking. Anyone asking for money to secure a slot is
                    running a scam. You can easily book your own permit using the timing steps above.
                  </p>
                </div>

                <div dir="rtl" lang="ur" className="text-right">
                  <h3 className="font-bold text-amber-950">اردو</h3>
                  <p className="mt-1">
                    نسک ایپ پر ریاض الجنہ اور عمرہ کا پرمٹ بالکل <strong>مفت</strong> ہے۔ کسی ایجنٹ، ٹریول آپریٹر
                    یا تیسرے فریق کو پرمٹ کے نام پر ایک روپیہ بھی نہ دیں۔ اپنی ذاتی معلومات یا پاسپورٹ کسی کے ساتھ
                    شیئر نہ کریں؛ اوپر بتائے گئے ٹائمنگ طریقے سے آپ خود اپنا پرمٹ باآسانی بک کر سکتے ہیں۔
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
