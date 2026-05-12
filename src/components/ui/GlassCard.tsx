import { useId } from "react";

interface GlassCardProps {
    width?: number | string;
    height?: number | string;
    className?: string;
}

export const GlassCard = ({
    width = 512,
    height = 624,
    className,
}: GlassCardProps): JSX.Element => {
    const id = useId();
    const clipId = `bgblur_clip_${id}`;
    const gradientId = `gradient_${id}`;

    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 512 624"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <foreignObject x="-15" y="-15" width="542" height="653.157">
                <div
                    style={{
                        backdropFilter: "blur(7.5px)",
                        clipPath: `url(#${clipId})`,
                        height: "100%",
                        width: "100%",
                    }}
                />
            </foreignObject>
            <path
                d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z"
                fill="white"
                fillOpacity="0.05"
                stroke={`url(#${gradientId})`}
            />
            <defs>
                <clipPath id={clipId} transform="translate(15 15)">
                    <path d="M0.5 62.2176C0.500045 21.6647 40.3416 -7.51038 79.6914 2.46959C133.868 16.2101 205.805 30.9338 263.007 30.1571C315.825 29.4399 381.619 15.6258 432.31 2.6317C471.644 -7.45135 511.5 21.6941 511.5 62.2587V563.157C511.5 596.018 484.861 622.657 452 622.657H60C27.1391 622.657 0.5 596.018 0.5 563.157V62.2176Z" />
                </clipPath>
                <linearGradient
                    id={gradientId}
                    x1="32.5"
                    y1="25.1571"
                    x2="459.5"
                    y2="609.157"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="1" />
                </linearGradient>
            </defs>
        </svg>
    );
};
