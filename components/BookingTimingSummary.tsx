export default function BookingTimingSummary() {
  return (
    <section
      aria-labelledby="booking-timing-summary-title"
      className="w-full border-y border-primary/10 bg-primary/5 py-10 lg:py-12"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-surface-card p-6 shadow-sm lg:p-8">
          <h2
            id="booking-timing-summary-title"
            className="text-[24px] leading-[32px] font-bold text-on-surface"
          >
            How to Secure a Rawdah Permit on Nusuk
          </h2>
          <p className="mt-4 text-[16px] leading-[28px] text-on-surface-variant">
            To secure your Rawdah permit, proceed through the Nusuk app until you reach the visitor selection
            screen. Pause here and wait until the clock reaches <strong className="text-on-surface">:19</strong>,{' '}
            <strong className="text-on-surface">:39</strong>, or <strong className="text-on-surface">:59</strong>.
            The moment the time rolls over (to <strong className="text-on-surface">:20</strong>,{' '}
            <strong className="text-on-surface">:40</strong>, or <strong className="text-on-surface">:00</strong>),
            tap Continue immediately to enter the schedule screen. Newly opened slots refresh instantly and turn{' '}
            <strong className="text-primary">green</strong>—select your preferred green time slot right away and
            confirm your booking before it fills up.
          </p>
        </div>
      </div>
    </section>
  );
}
