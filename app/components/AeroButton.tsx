import Link from "next/link"

type Props = {
  texto: string
  href: string
}

export default function FrutigerButton({
  texto,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="
        relative
        rounded-full
        px-8
        py-3
        text-white
        font-bold
        inline-block
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
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
    </Link>
  )
}