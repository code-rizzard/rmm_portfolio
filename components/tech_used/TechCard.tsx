import Image from "next/image"

interface TechCardProps {
    name: string
    image: string
}

const TechCard = ({
    image,
    name
}: TechCardProps) => {
  return (
    <div className=" w-full flex flex-row gap-4 px-4 py-6 justify-around items-center border border-brand-secondary rounded-sm">
        <Image
        src="/images/rmm_logo.png"
        width={36}
        height={36}
        alt="Tech Logo"
        className="object-contain"
        />
        <p
        className="text-xl"
        >{name}</p>
    </div>
  )
}

export default TechCard