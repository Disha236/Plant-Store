import { GlassCard } from "@/components/ui/GlassCard";
import { Card } from "../../../../components/ui/card";

const reviews = [
    {
        name: "Shelly Russel",
        avatar:
            "./assets/images/indian.png",
        rating: "./assets/images/group-7-1.png",
        review:
            "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    },
    {
        name: "Lula Rolfson",
        avatar:
            "./assets/images/westernGirl.png",
        rating: "./assets/images/group-7-2.png",
        review:
            "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
    {
        name: "Carol Huels",
        avatar:
            "./assets/images/cyberPunkGirl.png",
        rating: "./assets/images/group-7-3.png",
        review:
            "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
];

export const CustomerReviewsSection = (): JSX.Element => {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-[29px]">
                {reviews.map((review) => (
                    <Card
                        key={review.name}
                        className="relative border-0 bg-transparent shadow-none"
                    >
                        <GlassCard className="absolute inset-0 z-0 h-full w-full" />
                        <div className="relative z-10 px-8 pb-12 pt-20">
                            <div className="mb-6 flex items-center gap-4">
                                <img
                                    className="h-[60px] w-[60px] rounded-full object-cover border-2 border-white/20"
                                    alt={review.name}
                                    src={review.avatar}
                                />
                                <div className="flex flex-col gap-1">
                                    <h3 className="[font-family:'Inter',Helvetica] text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                                        {review.name}
                                    </h3>
                                    <img
                                        className="h-[12px] w-auto object-contain"
                                        alt={`${review.name} rating`}
                                        src={review.rating}
                                    />
                                </div>
                            </div>
                            <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-relaxed tracking-normal text-white/70 sm:text-lg">
                                {review.review}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};
