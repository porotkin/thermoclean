import {AlertTriangle, Award, Calendar} from "lucide-react"

const milestones = [
    {
        icon: Calendar,
        title: "1993 — The Brief",
        body: "Thermos UK approached R&R Chemicals to formulate a cleaning product for their premium vacuum flasks.",
    },
    {
        icon: AlertTriangle,
        title: "The Problem",
        body: "Customers were returning premium flasks because household bleach was destroying the vacuum-sealed welds.",
    },
    {
        icon: Award,
        title: "30+ Years On",
        body: "Launched with Boots and Lakeland, Thermoclean has been the only product of its kind on the market for over three decades.",
    },
]

export default function History() {
    return (
        <section
            id="history"
            className="bg-white py-20 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                        Our History
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Born from a problem with premium flasks
                    </h2>
                    <p className="mt-4 text-base text-slate-600 sm:text-lg">
                        A purpose-built formula, developed at the request of Thermos UK to
                        solve a problem that household bleach could not.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {milestones.map(({icon: Icon, title, body}) => (
                        <div
                            key={title}
                            className="rounded-xl border border-slate-200 bg-white p-6"
                        >
                            <div
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                                <Icon className="h-5 w-5"/>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
