import {Coffee, CupSoda, Droplets, Flower2, Sandwich, Utensils, Wine,} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"

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
            </div>
        </section>
    )
}
