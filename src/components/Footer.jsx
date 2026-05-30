import {Globe, Phone} from "lucide-react"
import {Separator} from "@/components/ui/separator"

const demographics = [
    "Taxi & HGV drivers",
    "Anglers",
    "Hikers",
    "Climbers",
]

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    <div>
                        <p className="text-lg font-bold tracking-tight text-brand-800">
                            THERMOCLEAN
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            The original vacuum flask cleaner. Bleach-free, non-discolouring
                            and trusted by professionals and adventurers alike.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                            Contact
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    href="https://www.thermoclean.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-700"
                                >
                                    <Globe className="h-4 w-4"/>
                                    www.thermoclean.uk
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+447938422208"
                                    className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-700"
                                >
                                    <Phone className="h-4 w-4"/>
                                    +44 7938 422208
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                            Trusted by
                        </h4>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {demographics.map((d) => (
                                <li
                                    key={d}
                                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                                >
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-10"/>

                <div
                    className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} R&amp;R Chemicals Ltd. All rights
                        reserved.
                    </p>
                    <div className="space-y-1 sm:text-right">
                        <p>
                            Thermoclean is the registered Trade Mark of R&amp;R Chemicals Ltd.
                        </p>
                        <p>
                            In Class 3 across the European Union and the UK · EUIPO Reg no
                            001908052
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
