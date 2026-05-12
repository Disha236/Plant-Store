import { Button } from "../../../../components/ui/button";

const heroActions = [
    {
        type: "button" as const,
        label: "Buy Now",
    },
    {
        type: "link" as const,
        label: "Live Demo...",
        icon: {
            src: "./assets/images/polygon-2.svg",
            alt: "Polygon",
        },
    },
];

export const HeroIntroSection = (): JSX.Element => {
    return (
        <section className="relative w-full mt-20 text-white">
            <div className="flex flex-col gap-5 sm:gap-6">
                <header className="flex flex-col gap-2">
                    <h1 className="whitespace-nowrap opacity-75 [font-family:'Inter',Helvetica] text-[48px] font-semibold leading-none tracking-[0] text-white sm:text-[72px] lg:text-[96px]">
                        Earth&apos;s Exhale
                    </h1>
                    <p className="ml-3 max-w-[775px] opacity-75 [font-family:'Inter',Helvetica] text-[14px] font-medium leading-snug tracking-[0] text-white sm:text-[18px] lg:text-[23px]">
                        &#34;Earth Exhale&#34; symbolizes the purity and vitality of the
                        Earth&#39;s natural environment and its essential role in sustaining
                        life.
                    </p>
                </header>
                <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                    {heroActions.map((action) =>
                        action.type === "button" ? (
                            <Button
                                key={action.label}
                                variant="outline"
                                className="h-auto min-w-[217px] rounded-xl border-2 border-white bg-transparent px-12 py-4 [font-family:'Inter',Helvetica] text-[20px] font-normal tracking-[0] text-[#ffffffbf] hover:bg-white/10 hover:text-white sm:text-[28px]"
                            >
                                {action.label}
                            </Button>
                        ) : (
                            <button
                                key={action.label}
                                type="button"
                                className="inline-flex items-center gap-4 rounded-full bg-transparent text-left"
                            >
                                <span className="flex h-[74px] w-[74px] items-center justify-center rounded-full border-2 border-white">
                                    <img
                                        className="h-[25px] w-[22px]"
                                        alt={action.icon.alt}
                                        src={action.icon.src}
                                    />
                                </span>
                                <span className="[font-family:'Indie_Flower',Helvetica] text-[25px] font-normal leading-[normal] tracking-[0] text-white">
                                    {action.label}
                                </span>
                            </button>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};
