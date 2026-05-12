import { Button } from "./button";
import { Card } from "./card";
import { GlassCard } from "./GlassCard";


export const PlantCard = ({ title, description, price, plantImageSrc }: { title: string, description: string, price: string, plantImageSrc: string }): JSX.Element => {
    return (

        <Card className="relative w-full border-0 bg-transparent shadow-none">
            <GlassCard
                width="100%"
                height="100%"
                className="pointer-events-none absolute inset-0 z-0"
            />
            <div className="relative z-10 mx-auto w-[89%] h-[250px] sm:h-[300px] md:h-[350px] xl:h-[420px] max-w-[612px]">
                <img
                    className="absolute top-[20%] -translate-y-1/2 left-0 w-full object-cover"
                    alt="Rose gold feminine"
                    src={plantImageSrc}
                />
            </div>
            <article className="relative z-20 px-6 pb-6 sm:px-10 sm:pb-8 xl:px-[66px] xl:pb-[51px] -mt-[26%]">
                <header className="mb-1">
                    <h2 className="[font-family:'Inter',Helvetica] text-2xl sm:text-3xl xl:text-[38px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                        {title}
                    </h2>
                </header>
                <p className="max-w-[372px] [font-family:'Inter',Helvetica] text-sm sm:text-base md:text-lg xl:text-2xl font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                    {description}
                </p>
                <div className="mt-4 flex max-w-[374px] items-end justify-between">
                    <p className="[font-family:'Inter',Helvetica] text-2xl sm:text-3xl xl:text-[38px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                        {price}
                    </p>
                    <Button
                        type="button"
                        variant="ghost"
                        className="h-10 w-10 sm:h-12 sm:w-12 xl:h-[55px] xl:w-[55px] rounded-xl border-2 border-solid border-[#ffffff8f] p-0 hover:bg-white/10"
                        aria-label={`Add ${title} to bag`}
                    >
                        <img
                            className="h-5 w-5 sm:h-6 sm:w-6 xl:h-[27px] xl:w-[27px] object-cover"
                            alt="Bag"
                            src="./assets/images/arrow.png"
                        />
                    </Button>
                </div>
            </article>
        </Card>
    );
};
