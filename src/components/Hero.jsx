import {ShieldCheck, Sparkles} from "lucide-react"
import {Button} from "@/components/ui/button"

export default function Hero() {
    return (
        <section
            id="top"
            className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white"
        >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
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

                    <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
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
            </div>
        </section>
    )
}
