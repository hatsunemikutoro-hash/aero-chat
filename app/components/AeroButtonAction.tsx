type Props = {
  texto: string
  onClick?: () => void
}

export default function FrutigerButtonAction({
  texto,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        rounded-full
        px-8
        py-4
        text-white
        font-bold
        inline-block
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
      "
      style={{
        background: `
          radial-gradient(
            farthest-corner at bottom center,
            rgba(255,255,255,0.7),
            transparent
          ),
          linear-gradient(
            to bottom,
            oklch(45% 0.2 320 / 0.75),
            oklch(75% 0.2 320 / 0.8)
          )
        `,
        border: "1px solid oklch(75% 0.2 320 / 0.8)",
        textShadow: "0 2px 0.5em rgba(0,0,0,0.2)",
        boxShadow: "0 4px 4px rgba(0,0,0,0.4)",
      }}
    >
      {texto}
    </button>
  )
}