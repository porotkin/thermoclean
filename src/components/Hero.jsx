import {ShieldCheck, Sparkles} from "lucide-react"
import {Button} from "@/components/ui/button"
import productImg from "../../assets/img/product.jpg"

export default function Hero() {
    return (
        <section
            id="top"
            className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white"
        >
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-medium text-brand-700">
                          <Sparkles className="h-3.5 w-3.5"/>
                          Trusted since 1994
                        </span>

                        <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            THERMOCLEAN
                        </h1>
                        <p className="mt-3 text-balance text-xl font-medium text-brand-700 sm:text-2xl">
                            The Ultimate Vacuum Flask Cleaner
                        </p>

                        <p className="mt-6 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
                            The original sachet cleaner for flasks, teapots and more. Contains
                            <span className="font-semibold text-slate-800"> no bleach </span>
                            and will
                            <span className="font-semibold text-slate-800"> not discolour </span>
                            your products.
                        </p>

                        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <Button asChild size="lg">
                                <a href="#stockists">Where to Buy</a>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <a href="#usage">How It Works</a>
                            </Button>
                        </div>

                        <div className="mt-10 flex items-center gap-2 text-xs text-slate-500">
                            <ShieldCheck className="h-4 w-4 text-brand-600"/>
                            Bleach-free · Non-discolouring · Made in the UK
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative group max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src={productImg}
                                    alt="Thermoclean Counter Display Unit (CDU) box on store shelf"
                                    className="w-full object-contain transition-transform duration-500 ease-out group-hover:scale-103"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <span className="inline-flex items-center rounded-md bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-700/10">
                                    Look for this package on store shelves
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
