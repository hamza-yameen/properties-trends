import React from 'react'
import Logo from '@/assets/Logo.png'

const Hero = () => {
  return (
    <section className="bg-[#F1EFED] flex flex-col items-center justify-center px-4">

        {/* Logo */}
        <div className="flex flex-col items-center justify-center mb-24">
          <img 
            src={Logo} 
            alt="The Refined Report Logo" 
            className="w-auto"
          />

          <p className="text-[#3A3B40] font-[300px] font-montserrat text-[16px] tracking-wider">
            MARK MENENDEZ
          </p>

          <p className='text-[#3A3B40] font-[300px] font-montserrat text-[14px] tracking-wider'>
            AT DOUGLAS ELLIMAN REAL ESTATE
          </p>
        </div>


        <h2 className="font-area-extended tracking-widest font-semibold text-[45px] text-[#3A3B40] text-center leading-relaxed mb-5">
          The Refined Report
        </h2>

        <div className="w-full py-8 border-y border-[#3A3B40]/40">
          <p className="font-montserrat font-medium text-[#3A3B40] text-center leading-relaxed">
            A focused look at Houston's ultra-luxury market, providing data-driven insights on<br /> single-family homes and condominiums priced at $2M and above.
          </p>
        </div>

    </section>
  )
}

export default Hero
