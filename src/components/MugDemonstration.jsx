import beforeMug from "../../assets/img/mug-before.jpg";
import afterMug from "../../assets/img/mug-after.jpg";
import liftedStains from "../../assets/img/mug-lifted-stains.jpg";
import soakVideo from "../../assets/vid/VID_20260910_154741.mp4";
import pourVideo from "../../assets/vid/VID_20260911_162152.mp4";

const steps = [
    {
        id: "mug-before",
        src: beforeMug,
        alt: "Dirty white mug with heavy brown staining inside before cleaning",
        width: 1050,
        height: 1400,
        title: "Before cleaning",
        caption: "Start with a heavily stained mug.",
    },
    {
        id: "mug-soak",
        type: "video",
        src: soakVideo,
        poster: beforeMug,
        title: "Add Thermoclean and soak",
        caption:
            "Add half a sachet of THERMOCLEAN to the dirty mug, fill with hot water and leave for 24 hours.",
    },
    {
        id: "mug-pour",
        type: "video",
        src: pourVideo,
        poster: afterMug,
        title: "Pour away the liquid",
        caption:
            "Pour away the liquid from the mug, the staining is lifted away, not just bleached so you cannot see it.",
    },
];

const resultPhotos = [
    {
        id: "mug-after",
        src: afterMug,
        alt: "The same white mug with a clean interior after the 24-hour soak",
        width: 1400,
        height: 1050,
        title: "After 24 hours",
        caption: "The same mug after cleaning with Thermoclean.",
    },
    {
        id: "mug-lifted-stains",
        src: liftedStains,
        alt: "Bowl of liquid containing the lifted staining beside the clean mug and a Thermoclean sachet",
        width: 1050,
        height: 1400,
        title: "Staining lifted away",
        caption:
            "The removed staining is visible in the liquid beside the clean mug.",
    },
];

export function DemonstrationCard({item}) {
    return (
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="aspect-square border-b border-slate-200 bg-slate-100">
                {item.type === "video" ? (
                    <video
                        controls
                        controlsList="nodownload"
                        onContextMenu={(event) => event.preventDefault()}
                        playsInline
                        preload="none"
                        poster={item.poster}
                        aria-labelledby={`${item.id}-title`}
                        aria-describedby={`${item.id}-caption`}
                        className="h-full w-full object-contain"
                    >
                        <source src={item.src} type="video/mp4"/>
                        Your browser does not support video playback.
                    </video>
                ) : (
                    <img
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain"
                    />
                )}
            </div>
            <figcaption className="p-6">
                <h4
                    id={`${item.id}-title`}
                    className="text-lg font-semibold text-slate-900"
                >
                    {item.title}
                </h4>
                <p
                    id={`${item.id}-caption`}
                    className="mt-3 text-sm leading-relaxed text-slate-600"
                >
                    {item.caption}
                </p>
            </figcaption>
        </figure>
    );
}

export default function MugDemonstration() {
    return (
        <section
            id="mug-demonstration"
            aria-labelledby="mug-demonstration-heading"
            className="mt-24 border-t border-slate-200 pt-20"
        >
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                    See It in Action
                </p>
                <h3
                    id="mug-demonstration-heading"
                    className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                >
                    A stained mug, cleaned in 24 hours
                </h3>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">
                    Watch the mug being cleaned with half a sachet of Thermoclean, hot
                    water and a 24-hour soak.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {steps.map((step) => (
                    <DemonstrationCard key={step.id} item={step}/>
                ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {resultPhotos.map((photo) => (
                    <DemonstrationCard key={photo.id} item={photo}/>
                ))}
            </div>
        </section>
    );
}
