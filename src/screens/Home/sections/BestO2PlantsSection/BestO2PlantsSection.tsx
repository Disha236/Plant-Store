import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const decorativeVectors = [
    {
        alt: "Vector",
        src: "./assets/images/vector-4.svg",
        className: "h-[46px] w-[46px] sm:h-[56px] sm:w-[56px]",
    },
    {
        alt: "Vector",
        src: "./assets/images/vector-3.svg",
        className: "h-[46px] w-[46px] sm:h-[56px] sm:w-[56px]",
    },
];

const paragraphs = [
    `Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.`,
    `Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.`,
];

export const BestO2PlantsSection = (): JSX.Element => {
    return (
        <section className="relative w-full py-8 sm:py-10 lg:py-12">
            <div className="mx-auto flex w-full flex-col items-center">
                <header className="mb-8 flex items-center justify-center gap-3 sm:mb-10 sm:gap-4">
                    <img
                        className={decorativeVectors[0].className}
                        alt={decorativeVectors[0].alt}
                        src={decorativeVectors[0].src}
                    />
                    <h2 className="[text-shadow:0px_1.99px_1.59px_#00000016] [font-family:'Inter',Helvetica] text-center text-[32px] font-semibold leading-none tracking-[0] text-white sm:text-[42px] lg:text-[55px]">
                        Our Best o2
                    </h2>
                    <img
                        className={decorativeVectors[1].className}
                        alt={decorativeVectors[1].alt}
                        src={decorativeVectors[1].src}
                    />
                </header>
                <Card className="relative rounded-[48px] border-none bg-[#ffffff0d] shadow-none backdrop-blur-[20px] backdrop-brightness-[100%] before:pointer-events-none before:absolute before:inset-0 before:rounded-[48px] before:p-[2px] before:content-[''] before:[background:linear-gradient(136deg,rgba(255,255,255,0.27)_0%,rgba(255,255,255,0)_62%,rgba(255,255,255,0.33)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] lg:rounded-[151px] lg:before:rounded-[151px]">
                    <img
                        className="pointer-events-none absolute -left-10 -top-48 h-[750px] w-[860px] object-contain"
                        alt="Best O2 Plants"
                        src="./assets/images/Aglaonema.png"
                    />
                    <div className="grid items-center gap-4 md:gap-8 grid-cols-[35%_1fr] md:grid-cols-[45%_1fr] lg:grid-cols-[minmax(420px,1fr)_minmax(0,732px)]">
                        <div className="relative z-10 min-h-[350px] md:min-h-[450px] lg:min-h-[550px]">
                        </div>
                        <div className="relative z-10 flex flex-col items-start justify-center lg:pr-6">
                            <h3 className="[font-family:'Inter',Helvetica] text-[28px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_-0.18px_1.59px_#00000010] md:text-[38px]">
                                We Have Small And Best O2 Plants Collection&apos;s
                            </h3>
                            <div className="mt-6 space-y-4 max-w-[732px]">
                                {paragraphs.map((paragraph, index) => (
                                    <p
                                        key={`paragraph-${index}`}
                                        className="[font-family:'Inter',Helvetica] text-lg font-semibold leading-[normal] tracking-[0] text-white md:text-xl"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                <button
                                    type="button"
                                    className="inline-flex h-[55px] w-[150px] items-center justify-center rounded-xl border-2 border-solid border-[#ffffffbf] text-xl font-medium text-white transition-colors hover:bg-white/10"
                                >
                                    Explore
                                </button>
                                <button
                                    type="button"
                                    aria-label="Next"
                                    className="inline-flex h-[55px] w-[55px] items-center justify-center rounded-xl border-2 border-solid border-[#ffffffbf] transition-colors hover:bg-white/10"
                                >
                                    <ArrowRightIcon className="h-6 w-6 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};