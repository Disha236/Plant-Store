import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { GlassCard } from "../../../../components/ui/GlassCard";

const cactusPlantCard = {
    name: "Cactus",
    description: "It is known for their ability to thrive in arid environments",
    price: "Rs. 259/-",
    plantSrc: "./assets/images/cactus.png",
    bagSrc: "./assets/images/shopingBag.png",
};

export const CactusPlantCardSection = (): JSX.Element => {
    return (
        <Card className="relative w-full border-0 bg-transparent shadow-none">
            <GlassCard className="pointer-events-none absolute z-0" />
            <div className="relative z-10 mx-auto w-[89%] h-[420px] max-w-[612px]">
                <img
                    className="absolute top-[20%] -translate-y-1/2 left-0 w-full object-cover"
                    alt="Rose gold feminine"
                    src={cactusPlantCard.plantSrc}
                />
            </div>
            <article className="relative z-20 px-[66px] pb-[51px] -mt-[26%]">
                <header className="mb-1">
                    <h2 className="[font-family:'Inter',Helvetica] text-[38px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                        {cactusPlantCard.name}
                    </h2>
                </header>
                <p className="max-w-[358px] [font-family:'Inter',Helvetica] text-2xl font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                    {cactusPlantCard.description}
                </p>
                <div className="mt-4 flex max-w-[374px] items-end justify-between">
                    <p className="[font-family:'Inter',Helvetica] text-[38px] font-normal leading-[normal] tracking-[0] text-[#ffffffbf]">
                        {cactusPlantCard.price}
                    </p>
                    <Button
                        type="button"
                        variant="ghost"
                        className="h-[55px] w-[55px] rounded-xl border-2 border-solid border-[#ffffff8f] p-0 hover:bg-white/10"
                        aria-label={`Add ${cactusPlantCard.name} to bag`}
                    >
                        <img
                            className="h-[27px] w-[27px] object-cover"
                            alt="Bag"
                            src={cactusPlantCard.bagSrc}
                        />
                    </Button>
                </div>
            </article>
        </Card>
    );
};
