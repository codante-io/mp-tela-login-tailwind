import Image from 'next/image'

export default function Home() {
  return (
    <main className='
      bg-[#030304]
      rounded-[34px]
      drop-shadow-md
    '>
      <div className='
        hidden

        lg:block
        absolute
        right-0
        w-[499px]
        h-full
        bg-[#070708b8]
        rounded-r-[34px]
      '/>
      <div className='flex'>
        <form className='
          flex
          flex-col
          px-14
          pt-20
        '>
          <h1 className='
            tracking-wider
            font-bold
            text-5xl
            text-gray-200
            mb-14
            dot
          '>
            Faça seu login
          </h1>
          <div className='mb-6'>
            <label
              className='text-gray-400 text-xs mb-1.5'
              htmlFor="email"
            >
              Email
            </label>
            <div className='group h-12'>
              <div className='
                h-12
                opacity-0
                transition
                duration-500
                
                group-focus-within:opacity-75
                bg-gradient-to-tr
                from-[#4158D0]
                via-[#C850C0]
                to-[#FFCC70]
                rounded-xl
                blur
                -inset-0.5
                ease-in-out
              ' />
              <div className='
                relative
                -top-[3rem]
                p-[3px]
                
                focus-within:bg-gradient-to-tr
                from-[#4158D0]
                via-[#C850C0]
                to-[#FFCC70]
                rounded-xl
              '>
                <input
                  className='
                    px-2
                    w-full
                    h-10
                    text-white
                    bg-zinc-900
                    rounded-xl
                  '
                  type="email"
                  id="email"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className='text-gray-400 text-xs mb-1.5'
              htmlFor="pass"
            >
              Senha
            </label>
            <div className='group h-12'>
              <div className='
                h-12
                opacity-0
                transition
                duration-500
                
                group-focus-within:opacity-75
                bg-gradient-to-tr
                from-[#4158D0]
                via-[#C850C0]
                to-[#FFCC70]
                rounded-xl
                blur
                -inset-0.5
                ease-in-out
              ' />
              <div className='
                relative
                -top-[3rem]
                p-[3px]
                
                focus-within:bg-gradient-to-tr
                from-[#4158D0]
                via-[#C850C0]
                to-[#FFCC70]
                rounded-xl
              '>
                <input
                  className='w-full px-2 text-white rounded-xl h-10 bg-zinc-900'
                  type="password"
                  id="pass"
                />
              </div>
            </div>
          </div>
          <a
            className='
              mb-9
              text-right
              tracking-wide
              text-xs
              text-gray-400
              underline
              
              hover:text-white
              hover:no-underline
              ease-in-out
              duration-300
            '
            href=""
          >
            Esqueci minha senha
          </a>
          <button className='
            h-12
            mb-9
            font-bold
            text-white
            text-2xl
            tracking-wide
            rounded-xl
            bg-gradient-to-r
            from-[#4158D0]
            via-[#C850C0]
            to-[#FFCC70]

            hover:animate-pulse
            ease-in-out
          '>
            Entrar
          </button>
          <a
            className='
              mb-9
              text-center
              tracking-wide
              text-xs
              text-gray-400
              underline
              
              hover:text-white
              hover:no-underline
              ease-in-out
              duration-300  
            '
            href=""
          >
            Ainda não tenho conta
          </a>
        </form>
        <Image
          className='h-full hidden lg:block'
          src="/background.svg"
          alt="Mountain"
          width={606}
          height={700}
        />
      </div>
    </main>
  )
}
