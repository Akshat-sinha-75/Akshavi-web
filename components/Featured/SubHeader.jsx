import React from 'react'

const FEATURES = [
  {
    title: 'One-Touch SOS',
    body:
      'Instant emergency broadcast to your guardian network with live GPS streaming.',
  },
  {
    title: 'Fake PIN Protection',
    body:
      'Under duress? Enter the fake PIN. Phone looks normal but silently alerts trustees.',
  },
  {
    title: 'Live Tracking',
    body:
      '1-second GPS stream with speed, accuracy, and battery telemetry via WebSocket.',
  },
  {
    title: 'Trust Groups',
    body:
      'Add guardians who receive real-time alerts and can see your live location.',
  },
]

const SubHeader = () => {
  return (
    <div className='w-full max-w-6xl mx-auto z-10 flex flex-col items-center px-6 mt-12 md:mt-32'>
      <div className='w-full md:w-4/5 lg:w-3/4 text-lg md:text-3xl flex flex-col gap-4 md:gap-8 leading-relaxed md:leading-snug text-center font-medium'>
        <p>
          AKSHAVI protects lives through intelligent safety infrastructure. Real-time. Always watching. Never sleeping.
        </p>
        <p className="opacity-70 text-base md:text-xl">
          It integrates seamless safety tools into your daily life, creating a complete ecosystem of protection instead of standalone panic buttons.
        </p>
      </div>

      <div className='w-full mt-16 md:mt-24'>
        <div className='flex items-center justify-center mb-10 md:mb-16'>
          <span className='text-xs md:text-sm tracking-[0.4em] font-bold uppercase text-[var(--color-accent)]'>CORE FEATURES</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center'>
          {FEATURES.map((feature) => (
            <article key={feature.title} className='flex flex-col items-center p-8 rounded-3xl bg-[var(--color-border)]/30 border border-[var(--color-border)]/60 transition-all duration-300 hover:bg-[var(--color-border)]/70 hover:-translate-y-2 hover:shadow-xl'>
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <div className="w-4 h-4 rounded-full bg-[var(--color-accent)] animate-pulse"></div>
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-4">{feature.title}</h4>
              <p className="text-sm md:text-base opacity-75 leading-relaxed">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubHeader
