import Image from "next/image";

export default function HeroLogin() {
  return (
    <div className={`
      flex justify-center items-center
      w-max h-max bg-black overflow-hidden
    `}>
      <Image src="/image1.png" className="opacity-50 object-cover overflow-hidden" width={606} height={654} alt="text" />
    </div>
  )
}
