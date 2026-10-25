import Image from "next/image";
import type { Dict } from "@/content";

export function Audience({ t }: { t: Dict }) {
  const a = t.audience;
  return (
    <section aria-labelledby="titulo-publico" className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-(--margin) py-24 lg:py-32">
        <h2
          id="titulo-publico"
          data-reveal
          className="h2 max-w-[22ch] text-green lg:pl-[3vw]"
        >
          {a.title}
        </h2>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-x-8">
          <div data-reveal className="relative aspect-[4/5] max-h-[620px] w-full lg:col-span-5">
            <Image src="/images/library-room-jpg.jpg" alt={t.hero.photoAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="photo object-cover" style={{ objectPosition: "78% 50%" }} />
          </div>
          <ul className="flex flex-col justify-center gap-12 lg:col-span-6 lg:col-start-7">
            {a.items.map((item, i) => (
              <li key={item.title} data-reveal style={{ "--d": `${i * 90}ms` } as React.CSSProperties} className="grid gap-3 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8">
                <h3 className="font-serif text-[1.6rem] leading-tight font-medium text-green [font-variation-settings:'opsz'_48,'SOFT'_40]">{item.title}</h3>
                <p className="text-ink">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
