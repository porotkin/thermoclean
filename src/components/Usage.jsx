import {Coffee, CupSoda, Droplets, Flower2, Sandwich, Utensils, Wine} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"

import beforeCup from "../../assets/img/before-1.jpg"
import beforeStrainer from "../../assets/img/before-2.jpg"
import soakCup from "../../assets/img/usage-1.jpg"
import soakStrainer from "../../assets/img/usage-2.jpg"
import afterCup from "../../assets/img/after-1.jpg"
import afterStrainer from "../../assets/img/after-2.jpg"

const visualSteps = [
    {
        n: "1",
        stage: "Before",
        title: "Cleaning results",
        description: "The staining does not have to be heavy, but maybe in a difficult area to clean.",
        images: [
            { src: beforeCup, alt: "Stained mug before cleaning", label: "Mug (Stained)" },
            { src: beforeStrainer, alt: "Stained strainer before cleaning", label: "Strainer (Stained)" },
        ],
        badgeColor: "bg-red-50 text-red-700 border-red-200",
    },
    {
        n: "2",
        stage: "Soaking",
        title: "Add a sachet of Thermoclean to hot water",
        description: "Pour in the sachet and leave to soak. The active solution works to lift stains from hard-to-reach surfaces without any scrubbing.",
        images: [
            { src: soakCup, alt: "Strainer soaking in the mug", label: "Active Soaking" },
            { src: soakStrainer, alt: "Strainer in solution lifting stains", label: "Stains Lifting" },
        ],
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
        n: "3",
        stage: "After",
        title: "Result: clean and fresh",
        description: "Rinse thoroughly to reveal sparkling clean results. Safe for bone china, stainless steel, and melamine.",
        images: [
            { src: afterCup, alt: "Sparkling clean mug", label: "Mug (Clean)" },
            { src: afterStrainer, alt: "Shiny tea strainer", label: "Strainer (Clean)" },
        ],
        badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
]

const items = [
    {icon: Coffee, label: "Enamel & stainless-steel teapots"},
    {icon: Utensils, label: "Cutlery"},
    {icon: Flower2, label: "Porcelain figures"},
    {icon: Sandwich, label: "Melamine picnic ware"},
    {icon: CupSoda, label: "Mugs & cups"},
    {icon: Wine, label: "Fine bone-china"},
    {icon: Droplets, label: "Drinks bottles"},
]

const steps = [
    {
        n: "1",
        title: "Empty one sachet",
        body: "Pour the contents of a single Thermoclean sachet into a flask of very hot water.",
    },
    {
        n: "2",
        title: "Leave to soak",
        body: "Allow to stand — overnight is ideal. No scrubbing required.",
    },
    {
        n: "3",
        title: "Rinse thoroughly",
        body: "Empty the cooled flask and rinse with copious amounts of water. Repeat if stains persist.",
    },
]

export default function Usage() {
    return (
        <section
            id="usage"
            className="bg-slate-50 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                        Versatile & Easy
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        One sachet. Endless uses.
                    </h2>
                    <p className="mt-4 text-base text-slate-600 sm:text-lg">
                        From flasks to fine bone-china, Thermoclean lifts stains without
                        damaging delicate surfaces.
                    </p>
                </div>

                <div className="mt-16">
                    <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Safely cleans
                    </h3>
                    <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
                        {items.map(({icon: Icon, label}) => (
                            <li
                                key={label}
                                className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 text-center"
                            >
                                <Icon className="h-6 w-6 text-brand-700" strokeWidth={1.5}/>
                                <span className="text-xs leading-tight text-slate-700">
                  {label}
                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-20">
                    <h3 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Directions for use
                    </h3>
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {steps.map(({n, title, body}) => (
                            <Card key={n} className="border-slate-200">
                                <CardContent className="p-6 pt-6">
                                    <div
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-semibold text-white">
                                        {n}
                                    </div>
                                    <h4 className="mt-4 text-lg font-semibold text-slate-900">
                                        {title}
                                    </h4>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                        {body}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mt-24 border-t border-slate-200 pt-20">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                            See It in Action
                        </p>
                        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Real Cleaning Demonstration
                        </h3>
                        <p className="mt-4 text-base text-slate-600 sm:text-lg">
                            Watch how Thermoclean removes years of stubborn coffee and tea stains in three simple steps.
                        </p>
                    </div>

                    <div className="mt-16 space-y-12">
                        {visualSteps.map((step, index) => (
                            <div
                                key={step.n}
                                className={`flex flex-col gap-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-xs transition-all duration-300 hover:shadow-md ${
                                    index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                            >
                                <div className="flex flex-col justify-center md:w-1/2">
                                    <span
                                        className={`self-start rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${step.badgeColor}`}
                                    >
                                        Step {step.n} · {step.stage}
                                    </span>
                                    <h4 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
                                        {step.title}
                                    </h4>
                                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 md:w-1/2">
                                    {step.images.map((img, i) => (
                                        <div
                                            key={i}
                                            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:border-brand-200 hover:bg-white"
                                        >
                                            <div className="relative h-40 w-full overflow-hidden rounded-lg sm:h-48">
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                                />
                                            </div>
                                            <span className="relative mt-3 text-xs font-semibold text-slate-600 transition-colors group-hover:text-brand-700">
                                                {img.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
