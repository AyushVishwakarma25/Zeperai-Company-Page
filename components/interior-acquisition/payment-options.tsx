const paymentLogos = [
  {
    name: "UPI",
    src: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/upi/default.svg",
  },
  {
    name: "Razorpay",
    src: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/razorpay/default.svg",
  },
  {
    name: "Skydo",
    src: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/skydo/default.svg",
  },
]

export function PaymentOptions() {
  return (
    <section className="mt-8 rounded-3xl border border-black/[0.08] bg-white px-6 py-8 text-center md:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4452FB]">Payment accepted</p>
      <h2 className="mt-3 font-poppins text-2xl font-bold tracking-[-0.03em] md:text-3xl">Pay locally or internationally</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#6B6B72]">We accept UPI and Razorpay for payments in India, plus Skydo for international payments.</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {paymentLogos.map((logo) => (
          <div key={logo.name} className="flex h-14 min-w-28 items-center justify-center rounded-2xl border border-black/[0.08] bg-[#F5F5F7] px-5">
            <img src={logo.src} alt={`${logo.name} payment`} className="max-h-7 max-w-24 object-contain" />
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-[#6B6B72]">International payments supported through Skydo.</p>
    </section>
  )
}
