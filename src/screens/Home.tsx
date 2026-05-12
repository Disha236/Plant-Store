import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlantCard } from "@/components/ui/PlantCard";
import { FeaturedIndoorPlantCardSection } from "./Home/sections/FeaturedIndoorPlantCardSection";
import { HeroIntroSection } from "./Home/sections/HeroIntroSection";
import { CustomerReviewsSection } from "./Home/sections/CustomerReviewsSection";
import { BestO2PlantsSection } from "./Home/sections/BestO2PlantsSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRightIcon } from "lucide-react";

const navItems = [
    { label: "Home", href: "#" },
    { label: "Plants Type", href: "#" },
    { label: "More", href: "#" },
    { label: "Contact", href: "#" },
];


const topSellingSections = [
    {
        key: "aglaonema",
        title: "Aglaonema plant",
        description: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
        price: "Rs. 300/-",
        plantImageSrc: "./assets/images/Aglaonema.png",
    },
    {
        key: "plantain-lilies",
        title: "Plantain Lilies",
        description:
            "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        price: "Rs. 380/-",
        plantImageSrc: "./assets/images/DeskPlant1.png",
    },
    {
        key: "cactus",
        title: "Cactus",
        description: "It is known for their ability to thrive in arid environments",
        price: "Rs. 259/-",
        plantImageSrc: "./assets/images/cactus.png",

    },
    {
        key: "swiss-cheese",
        title: "Swiss cheese Plant",
        description:
            "It is a popular tropical houseplant known for its distinctive, perforated leaves",
        price: "Rs. 400/-",
        plantImageSrc: "./assets/images/SwissCheese.png",
    },
    {
        key: "sansevieria",
        title: "Sansevieria plant",
        description:
            "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
        price: "Rs. 450/-",
        plantImageSrc: "./assets/images/Sansevieria.png",
    },
    {
        key: "agave",
        title: "Agave plant",
        description:
            "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
        price: "Rs. 359/-",
        plantImageSrc: "./assets/images/Agave.png",
    },
];

const socialLinks = ["FB", "TW", "LI"];

const quickLinks = ["Home", "Type's Of plant's", "Contact", "Privacy"];

const sliderDots = ["wide", "dot", "dot"];

export const Home = (): JSX.Element => {
    return (
        <main
            className="relative w-full overflow-hidden bg-[#1b2316] text-white"
            data-model-id="11:2"
        >
            <div className="absolute inset-x-0 top-0 z-0 flex justify-center">
                <img
                    className="h-auto w-full max-w-[1728px] object-cover"
                    alt="Nagy arnold x"
                    src="./assets/images/homeBackground.png"
                />
            </div>
            <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(27,35,22,0.1)_0%,rgba(27,35,22,0.2)_18%,rgba(27,35,22,0.72)_50%,#1b2316_78%)]" />
            <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1728px] flex-col">
                <header className="px-4 pb-6 pt-8 md:px-8 lg:px-10">
                    <div className="flex items-start justify-between gap-6">
                        <div className="relative flex min-h-[76px] items-center gap-4">
                            <img
                                className="relative h-[50px] w-[50px] shrink-0 object-cover md:h-[40px] md:w-[40px]"
                                alt="Plant"
                                src="./assets/images/logo.png"
                            />
                            <div className="relative -ml-1 mt-2 opacity-75 [font-family:'Inter',Helvetica] text-[24px] font-black tracking-[0] leading-[normal] text-white md:text-[28px]">
                                FloraVision.
                            </div>
                        </div>
                        <div className="flex items-center gap-6 pt-5">
                            <nav aria-label="Main navigation" className="hidden lg:block">
                                <ul className="flex items-center gap-10">
                                    {navItems.map((item) => (
                                        <li key={item.label} className="flex items-center gap-5">
                                            <a
                                                href={item.href}
                                                className="[font-family:'Indie_Flower',Helvetica] text-2xl font-normal leading-[normal] tracking-[0] text-white transition-opacity hover:opacity-80"
                                            >
                                                {item.label}
                                            </a>
                                            {item.label === "Plants Type" && (
                                                <img
                                                    className="mt-1 h-[5.25px] w-[10.39px]"
                                                    alt="Polygon"
                                                    src="./assets/images/polygon-1.svg"
                                                />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="flex items-center gap-6 md:gap-8">
                            <button
                                type="button"
                                aria-label="Search"
                                className="inline-flex h-auto items-center justify-center"
                            >
                                <img
                                    className="h-[26px] w-[26px] object-cover"
                                    alt="Search interface"
                                    src="./assets/images/search.png"
                                />
                            </button>
                            <button
                                type="button"
                                aria-label="Bag"
                                className="inline-flex h-auto items-center justify-center"
                            >
                                <img
                                    className="h-[26px] w-[26px] object-cover"
                                    alt="Bag"
                                    src="./assets/images/shopingBag.png"
                                />
                            </button>
                            <button
                                type="button"
                                aria-label="Menu"
                                className="inline-flex h-auto flex-col items-end justify-center gap-[9px]"
                            >
                                <img
                                    className="h-1 w-[31px]"
                                    alt="Line"
                                    src="./assets/images/line-1.svg"
                                />
                                <img
                                    className="h-1 w-[23px]"
                                    alt="Line"
                                    src="./assets/images/line-2.svg"
                                />
                            </button>
                        </div>
                    </div>
                </header>
                <section className="px-3 md:px-6 lg:px-8">
                    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_430px]">
                        <div className="flex min-w-0 flex-col gap-32">
                            <HeroIntroSection />
                            <Card className="w-full max-w-[411px] p-6 rounded-[45px] border-none bg-[#ffffff0d] shadow-none backdrop-blur-[8.5px] backdrop-brightness-[100%] before:pointer-events-none before:absolute before:inset-0 before:rounded-[45px] before:p-px before:content-[''] before:[background:linear-gradient(109deg,rgba(255,255,255,1)_0%,rgba(102,102,102,1)_43%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]">
                                <div className="flex items-start gap-4">
                                    <img
                                        className="h-[80px] w-[80px] rounded-full object-cover"
                                        alt="Unsplash"
                                        src="./assets/images/asian.png"
                                    />
                                    <div className="flex flex-col gap-[5px] pt-2">
                                        <div className="[font-family:'Inter',Helvetica] text-[22px] font-normal leading-[normal] tracking-[0] text-white">
                                            Ronnie Hamill
                                        </div>
                                        <img
                                            className="h-[15px] w-[103.5px]"
                                            alt="Group"
                                            src="./assets/images/group-7-3.png"
                                        />
                                    </div>
                                </div>
                                <p className="mt-3 max-w-[341px] opacity-75 [font-family:'Inter',Helvetica] text-[17px] font-normal leading-[normal] tracking-[0] text-white">
                                    I can&apos;t express how thrilled I am with my new natural
                                    plants! They bring such a fresh and vibrant energy to my
                                    home.
                                </p>
                            </Card>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <FeaturedIndoorPlantCardSection />
                        </div>
                    </div>
                </section>
                <section className="mt-10 px-3 md:mt-16 md:px-6 lg:px-8">
                    <div className="mb-8 flex items-center justify-center gap-3 md:mb-12">
                        <img
                            className="h-[66px] w-16"
                            alt="Vector"
                            src="./assets/images/vector-5.svg"
                        />
                        <h2 className="[font-family:'Inter',Helvetica] text-center text-[32px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_1.99px_1.59px_#00000016] md:text-[55px]">
                            Our Trendy plants
                        </h2>
                        <img
                            className="h-[66px] w-16"
                            alt="Vector"
                            src="./assets/images/vector-6.svg"
                        />
                    </div>
                    <div className="mt-20 space-y-36">
                        <Card className="relative rounded-[48px] border-none bg-[#ffffff0d] shadow-none backdrop-blur-[20px] backdrop-brightness-[100%] before:pointer-events-none before:absolute before:inset-0 before:rounded-[48px] before:p-[2px] before:content-[''] before:[background:linear-gradient(136deg,rgba(255,255,255,0.27)_0%,rgba(255,255,255,0)_62%,rgba(255,255,255,0.33)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] lg:rounded-[151px] lg:before:rounded-[151px]">
                            <img
                                className="pointer-events-none absolute -left-10 -top-48 h-[750px] w-[860px] object-contain"
                                alt="Rose gold feminine"
                                src="./assets/images/DeskPlant1.png"
                            />
                            <div className="grid items-center gap-4 md:gap-8 grid-cols-[35%_1fr] md:grid-cols-[45%_1fr] lg:grid-cols-[minmax(420px,1fr)_minmax(0,732px)]">
                                <div className="relative z-10 min-h-[350px] md:min-h-[450px] lg:min-h-[550px]">
                                </div>
                                <div className="relative z-10 flex flex-col items-start justify-center lg:pr-6">
                                    <h3 className="[font-family:'Inter',Helvetica] text-[28px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_-0.18px_1.59px_#00000010] md:text-[38px]">
                                        For Your Desks Decorations
                                    </h3>
                                    <p className="mt-6 max-w-[732px] [font-family:'Inter',Helvetica] text-lg font-semibold leading-[normal] tracking-[0] text-white md:text-xl">
                                        I recently added a beautiful desk decoration plant to my
                                        workspace, and it has made such a positive difference!
                                    </p>
                                    <p className="mt-6 [font-family:'Inter',Helvetica] text-[30px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_1.02px_2.21px_#0000002c] md:text-[38px]">
                                        Rs. 599/-
                                    </p>
                                    <div className="flex items-center gap-4 mt-8">
                                        <button
                                            type="button"
                                            className="inline-flex h-[55px] w-[150px] items-center justify-center rounded-xl border-2 border-solid border-[#ffffffbf] text-xl font-medium text-white transition-colors hover:bg-white/10"
                                        >
                                            Explore
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="Add trendy plant to bag"
                                            className="inline-flex h-[55px] w-[55px] items-center justify-center rounded-xl border-2 border-solid border-[#ffffffbf] transition-colors hover:bg-white/10"
                                        >
                                            <img
                                                className="h-[34px] w-[34px] object-cover"
                                                alt="Bag"
                                                src="./assets/images/shopingBag.png"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="relative rounded-[48px] border-none bg-[#ffffff0d] shadow-none backdrop-blur-[20px] backdrop-brightness-[100%] before:pointer-events-none before:absolute before:inset-0 before:rounded-[48px] before:p-[2px] before:content-[''] before:[background:linear-gradient(136deg,rgba(255,255,255,0.27)_0%,rgba(255,255,255,0)_62%,rgba(255,255,255,0.33)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] lg:rounded-[151px] lg:before:rounded-[151px]">
                            <img
                                className="pointer-events-none absolute -right-10 -top-48 h-[750px] w-[860px] object-contain"
                                alt="Rose gold feminine"
                                src="./assets/images/DeskPlant2.png"
                            />
                            <div className="grid items-center gap-4 md:gap-8 grid-cols-[35%_1fr] md:grid-cols-[45%_1fr] lg:grid-cols-[minmax(420px,1fr)_minmax(0,732px)]">
                                <div className="relative z-10 flex flex-col items-start justify-center lg:pl-20">
                                    <h3 className="[font-family:'Inter',Helvetica] text-[28px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_-0.18px_1.59px_#00000010] md:text-[38px]">
                                        For Your Desks Decorations
                                    </h3>
                                    <p className="mt-6 max-w-[732px] [font-family:'Inter',Helvetica] text-lg font-semibold leading-[normal] tracking-[0] text-white md:text-xl">
                                        The greenery adds a touch of nature and serenity to my
                                        desk, making it feel more inviting and calming
                                    </p>
                                    <p className="mt-6 [font-family:'Inter',Helvetica] text-[30px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_1.02px_2.21px_#0000002c] md:text-[38px]">
                                        Rs. 399/-
                                    </p>
                                    <div className="flex items-center gap-4 mt-8">
                                        <button
                                            type="button"
                                            className="inline-flex h-[55px] w-[150px] items-center justify-center rounded-xl border-2 border-solid border-[#ffffffbf] text-xl font-medium text-white transition-colors hover:bg-white/10"
                                        >
                                            Explore
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="Add trendy plant to bag"
                                            className="inline-flex h-[55px] w-[55px] items-center justify-center rounded-xl border-2 border-solid border-[#ffffffbf] transition-colors hover:bg-white/10"
                                        >
                                            <img
                                                className="h-[34px] w-[34px] object-cover"
                                                alt="Bag"
                                                src="./assets/images/shopingBag.png"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className="relative z-10 min-h-[350px] md:min-h-[450px] lg:min-h-[550px]">
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>
                <section className="mt-16 px-3 md:mt-24 md:px-6 lg:px-8">
                    <div className="mb-10 flex items-center justify-center gap-3 md:mb-14">
                        <img
                            className="h-[66px] w-16"
                            alt="Vector"
                            src="./assets/images/vector-5.svg"
                        />
                        <h2 className="[font-family:'Inter',Helvetica] text-center text-[32px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_1.99px_1.59px_#00000016] md:text-[55px]">
                            Our Top Selling Plants
                        </h2>
                        <img
                            className="h-[66px] w-16"
                            alt="Vector"
                            src="./assets/images/vector-6.svg"
                        />
                    </div>
                    <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-36 md:grid-cols-2 xl:grid-cols-3 mt-20 pt-10">
                        {topSellingSections.map((section) => (
                            <PlantCard title={section.title} description={section.description} price={section.price} plantImageSrc={section.plantImageSrc} />
                        ))}
                    </div>
                </section>
                <section className="mt-20 px-3 md:mt-28 md:px-6 lg:px-8">
                    <div className="mb-10 flex items-center justify-center gap-3 md:mb-14">
                        <img
                            className="h-[66px] w-16"
                            alt="Vector"
                            src="./assets/images/vector-5.svg"
                        />
                        <h2 className="[font-family:'Inter',Helvetica] text-center text-[32px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_1.99px_1.59px_#00000016] md:text-[55px]">
                            Customer Review
                        </h2>
                        <img
                            className="h-[66px] w-16"
                            alt="Vector"
                            src="./assets/images/vector-6.svg"
                        />
                    </div>
                    <div className="flex justify-center">
                        <CustomerReviewsSection />
                    </div>
                </section>
                <section className="mt-10 px-3 md:mt-16 md:px-6 lg:px-8">
                    <div className="mb-8 flex items-center justify-center gap-3 md:mb-12">
                        <img
                            className="h-[66px] w-16"
                            alt="Vector"
                            src="./assets/images/vector-5.svg"
                        />
                        <h2 className="[font-family:'Inter',Helvetica] text-center text-[32px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_1.99px_1.59px_#00000016] md:text-[55px]">
                            Our Best o2
                        </h2>
                        <img
                            className="h-[66px] w-16"
                            alt="Vector"
                            src="./assets/images/vector-6.svg"
                        />
                    </div>
                    <div className="mt-20 space-y-36">
                        <Card className="relative rounded-[48px] border-none bg-[#ffffff0d] shadow-none backdrop-blur-[20px] backdrop-brightness-[100%] before:pointer-events-none before:absolute before:inset-0 before:rounded-[48px] before:p-[2px] before:content-[''] before:[background:linear-gradient(136deg,rgba(255,255,255,0.27)_0%,rgba(255,255,255,0)_62%,rgba(255,255,255,0.33)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] lg:rounded-[151px] lg:before:rounded-[151px]">
                            <img
                                className="pointer-events-none absolute -left-10 -top-32 h-[650px] w-[760px] object-contain"
                                alt="Best O2 Plants"
                                src="./assets/images/Aglaonema.png"
                            />
                            <div className="grid items-center gap-4 md:gap-8 grid-cols-[35%_1fr] md:grid-cols-[45%_1fr] lg:grid-cols-[minmax(420px,1fr)_minmax(0,732px)]">
                                <div className="relative z-10 min-h-[350px] md:min-h-[450px] lg:min-h-[550px]">
                                </div>
                                <div className="relative z-10 flex flex-col items-start justify-center lg:pr-6">
                                    <h3 className="[font-family:'Inter',Helvetica] text-[28px] font-semibold leading-[normal] tracking-[0] text-white drop-shadow-[0px_-0.18px_1.59px_#00000010] md:text-[38px]">
                                        We Have Small And Best O2 Plants Collection's
                                    </h3>
                                    <p className="mt-6 max-w-[732px] [font-family:'Inter',Helvetica] text-lg font-semibold leading-[normal] tracking-[0] text-white md:text-xl">
                                        Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
                                        <br />
                                        Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
                                    </p>
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
                <section className="mt-10 flex justify-center px-3 md:mt-14">
                    <div className="flex items-center gap-4">
                        {sliderDots.map((dot, index) => (
                            <div
                                key={`slider-dot-${index}`}
                                className={
                                    dot === "wide"
                                        ? "h-[11px] w-[31px] rounded-[48px] bg-[#ffffffbf]"
                                        : "h-[11px] w-[11px] rounded-[5.5px] bg-[#ffffffbf]"
                                }
                            />
                        ))}
                    </div>
                </section>
                <section className="px-4 pb-10 pt-16 md:px-8 md:pb-16 lg:px-12">
                    <footer className="grid gap-12 lg:grid-cols-[1.25fr_0.7fr_1fr] lg:items-start">
                        <div>
                            <div className="relative flex min-h-[94px] items-start gap-4">
                                <img
                                    className="relative h-[70px] w-[70px] shrink-0 object-cover"
                                    alt="Plant"
                                    src="./assets/images/logo.png"
                                />
                                <div className="relative -ml-4 mt-5 whitespace-nowrap opacity-75 [font-family:'Inter',Helvetica] text-[34px] font-black leading-[normal] tracking-[0] text-white md:text-[45px]">
                                    FloraVision.
                                </div>
                            </div>
                            <p className="mt-5 max-w-[580px] [font-family:'Inter',Helvetica] text-xl font-medium leading-[normal] tracking-[0] text-white md:text-[28px]">
                                &quot;From lush indoor greens to vibrant outdoor blooms, our
                                plants are crafted to thrive and elevate your living
                                environment.&quot;
                            </p>
                            <div className="mt-12 flex gap-[61px]">
                                {socialLinks.map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="[font-family:'Inter',Helvetica] text-[28px] font-extrabold leading-[normal] tracking-[0] text-white"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="[font-family:'Inter',Helvetica] text-[28px] font-extrabold leading-[normal] tracking-[0] text-white">
                                Quick Link&apos;s
                            </h3>
                            <nav aria-label="Quick links" className="mt-8">
                                <ul className="space-y-5">
                                    {quickLinks.map((item) => (
                                        <li key={item}>
                                            <a
                                                href="#"
                                                className="[font-family:'Inter',Helvetica] text-2xl font-medium leading-[normal] tracking-[0] text-white underline"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="[font-family:'Inter',Helvetica] text-[28px] font-extrabold leading-[normal] tracking-[0] text-white">
                                For Every Update.
                            </h3>
                            <form className="mt-8 flex w-full max-w-[562px] flex-col gap-4 sm:flex-row">
                                <Input
                                    defaultValue=""
                                    placeholder="Enter Email"
                                    className="h-[74px] rounded-lg border-2 border-white bg-transparent px-7 [font-family:'Inter',Helvetica] text-2xl font-medium tracking-[0] text-white placeholder:text-[#ffffffbf]"
                                />
                                <Button
                                    type="submit"
                                    className="h-[74px] min-w-[165px] bg-transparent p-0 hover:bg-transparent"
                                >
                                    <img
                                        className="h-[65px] w-[165px]"
                                        alt="Exclude"
                                        src="./assets/images/exclude.svg"
                                    />
                                </Button>
                            </form>
                            <div className="mt-24 flex items-center justify-between gap-4">
                                <div className="whitespace-nowrap [font-family:'Inter',Helvetica] text-2xl font-medium leading-[normal] tracking-[0] text-white">
                                    FloraVision © all right reserve
                                </div>
                                <div className="flex items-center gap-8">
                                    <button
                                        type="button"
                                        aria-label="Previous"
                                        className="inline-flex h-auto items-center justify-center"
                                    >
                                        <img
                                            className="h-6 w-6 rotate-180 object-cover"
                                            alt="Right arrow"
                                            src="./assets/images/arrow.png"
                                        />
                                    </button>
                                    <div className="[font-family:'Inter',Helvetica] text-xl font-bold leading-[normal] tracking-[0] text-transparent whitespace-nowrap">
                                        <span className="text-[#ffffffbf]">01/</span>
                                        <span className="text-[15px] text-[#ffffffbf]">04</span>
                                    </div>
                                    <button
                                        type="button"
                                        aria-label="Next"
                                        className="inline-flex h-auto items-center justify-center"
                                    >
                                        <img
                                            className="h-6 w-6 object-cover"
                                            alt="Right arrow"
                                            src="./assets/images/arrow.png"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        </main>
    );
};
