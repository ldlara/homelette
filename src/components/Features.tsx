import Image from "next/image";
import type { Dict } from "@/content";

const photos = [
  { src: "/images/bible-leaf-jpg.jpg", position: "center 20%" },
  { src: "/images/hebrew-title-jpg.jpg", position: "center 35%" },
  { src: "/images/nehemiah-leaf-jpg.jpg", position: "center 15%" },
];
const tones = ["bg-paper-deep text-green", "bg-green text-paper", "bg-gold-light text-green"];

export function Features({ t }: { t: Dict }) {
  const f = t.features;
  return (
    <section id="recursos" aria-labelledby="titulo-recursos" className="bg-paper">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-(--margin) pt-24 pb-12 lg:grid-cols-12 lg:gap-x-8 lg:pt-32 lg:pb-14">
        <h2 id="titulo-recursos" data-reveal className="h2 text-green lg:col-span-6">
          {f.title}
        </h2>
        <p data-reveal style={{ "--d": "80ms" } as React.CSSProperties} className="max-w-xl self-end text-lg text-ink lg:col-span-5 lg:col-start-8 lg:text-xl">
          {f.intro}
        </p>
      </div>

      <ul className="[--band:52px] [--sh:70svh] md:[--band:72px] md:[--sh:64svh]">
        {f.items.map((item, i) => (
          <li
            key={item.id}
            style={{ top: `calc(4rem + ${i} * var(--band))`, "--i": i } as React.CSSProperties}
            className={`sticky flex min-h-[calc(var(--sh)-var(--i)*var(--band))] flex-col ${tones[i]}`}
          >
            <div className="mx-auto flex h-(--band) w-full max-w-[1440px] items-center px-(--margin)">
              <h3 className="font-serif text-[clamp(1.4rem,3vw,2.75rem)] leading-none font-medium tracking-[-0.02em] [font-variation-settings:'opsz'_96,'SOFT'_30]">
                {item.title}
              </h3>
            </div>
            <div className="mx-auto grid w-full max-w-[1440px] flex-1 grid-rows-[auto_1fr] lg:grid-cols-12 lg:grid-rows-1">
              <div className="order-2 flex flex-col justify-end px-(--margin) pt-8 pb-10 lg:order-1 lg:col-span-5 lg:pb-14">
                <p className="text-xl font-semibold">{item.lead}</p>
                <p className="mt-3 max-w-[40ch] text-[1.1rem] leading-relaxed">{item.benefit}</p>
              </div>
              <div data-reveal className="relative order-1 aspect-[4/3] lg:order-2 lg:col-span-6 lg:col-start-7 lg:aspect-auto lg:mr-(--margin)">
                <Image
                  src={photos[i].src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="photo object-cover"
                  style={{ objectPosition: photos[i].position }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
