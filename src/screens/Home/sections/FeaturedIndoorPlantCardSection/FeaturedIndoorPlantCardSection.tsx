import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { GlassCard } from "../../../../components/ui/GlassCard";

const indicators = [{ active: true }, { active: false }, { active: false }];

export const FeaturedIndoorPlantCardSection = (): JSX.Element => {
    return (
        <section className="w-full">
            <div className="ml-auto w-full max-w-[518px]">
                <Card className="h-auto border-0 bg-transparent p-0 shadow-none">
                    <article className="relative mx-auto min-h-[719px] w-full max-w-[518px] overflow-hidden">
                        <GlassCard
                            className="absolute inset-x-0 bottom-0 z-0 mx-auto h-auto w-full"
                            width={512}
                            height={624}
                        />
                        <img
                            className="absolute left-1/2 top-24 z-10 h-auto w-full max-w-[370px] -translate-x-1/2 object-cover"
                            alt="Rose gold feminine"
                            src="./assets/images/Aglaonema.png"
                        />
                        <div className="relative z-20 flex min-h-[719px] flex-col justify-end px-[81px] pb-[58px]">
                            <div className="flex flex-col">
                                <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffbf] text-[23px] leading-[normal] tracking-[0]">
                                    Indoor Plant
                                </p>
                                <h2 className="mt-[8px] [font-family:'Inter',Helvetica] font-normal text-[#ffffffbf] text-[38px] leading-[normal] tracking-[0]">
                                    Aglaonema&nbsp;&nbsp;plant
                                </h2>
                                <div className="mt-[15px] flex items-center justify-between">
                                    <Button
                                        variant="outline"
                                        className="h-auto w-[217px] rounded-xl border-2 border-white bg-transparent px-0 py-[15px] text-center [font-family:'Inter',Helvetica] font-normal text-[#ffffffbf] text-[28px] leading-[normal] tracking-[0] hover:bg-white/10 hover:text-white"
                                    >
                                        Buy Now
                                    </Button>
                                    <img
                                        className="h-5 w-5 object-cover"
                                        alt="Right arrow"
                                        src="./assets/images/arrow.png"
                                    />
                                </div>
                                <div className="mt-[29px] flex justify-center gap-[13px]">
                                    {indicators.map((indicator, index) => (
                                        <span
                                            key={`indicator-${index}`}
                                            className={
                                                indicator.active
                                                    ? "h-1.5 w-[21px] rounded-[46px] bg-white"
                                                    : "h-1.5 w-1.5 rounded-[3px] bg-white"
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                </Card>
            </div>
        </section>
    );
};
