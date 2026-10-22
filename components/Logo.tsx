import Image from "next/image";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center" data-variant={dark ? "dark" : "light"}>
      <Image
        src="/images/alif-ce-logo.png"
        alt="ALIF Engineering & Construction"
        width={3627}
        height={1082}
        priority
        className="h-11 w-auto shrink-0 max-sm:h-10"
      />
    </span>
  );
}
