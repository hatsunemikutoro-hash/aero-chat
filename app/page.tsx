import FrutigerButton from "./components/AeroButton"
import Link from "next/link"

function Contador() {
  const dataInicio = new Date("2026-02-07T00:00:00")
  const agora = new Date()

  const diff = agora.getTime() - dataInicio.getTime()

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24))

  return (
    <p>
      {dias} dias de puro amor ❤
    </p>
  )
}

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        bg-[url('/asadal_stock_108.jpg')]
        bg-cover
        bg-center
        text-white
        flex
        flex-col
        items-center
        justify-center
        gap-4
      "
    >
      <div className="
  bg-white/10
  p-10
  rounded-3xl
  backdrop-blur-md
  border
  border-white/35
  shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_20px_rgba(0,180,255,0.2)]

  flex
  flex-col
  justify-center
  items-center
  gap-4

  max-w-md
  w-full
">
        <h1 className="text-5xl font-bold mb-2">
          Nosso Cantinho ❤️
        </h1>

        <Contador></Contador>

        <FrutigerButton
          texto="Entrar no chat"
          href="/chat"
          />
      </div>
    </main>
  ) 
}