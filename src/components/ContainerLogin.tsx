export default function ContainerLogin({ children }: { children: React.ReactNode }) {
  return (
    <section className={`
      flex justify-between items-center
      w-max h-max bg-black overflow-hidden
      shadow-xl shadow-zinc-950 rounded-3xl
    `}>
      {children}
    </section>
  )
}
