import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Upload, Layers, Zap, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload & Order",
    description:
      "Drop your STL, OBJ, or 3MF file. Tell us material, resolution, and quantity — we handle the rest.",
  },
  {
    icon: Layers,
    title: "Custom Design",
    description:
      "Need a model made from scratch? Our designers turn your sketch, idea, or brief into a print-ready file.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Standard parts ship in 3–5 days. Rush service available — because deadlines matter.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "Every order goes through dimensional inspection and surface quality checks before it ships.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:py-36">
          <Badge variant="accent" className="mb-6">
            Custom 3D Printing &amp; Design Services
          </Badge>

          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Upload.{" "}
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              Print.
            </span>{" "}
            Done.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Send us your model — or describe what you need — and we&apos;ll print it with precision.
            Fast quotes, transparent pricing, and quality you can feel.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/order">
              <Button size="lg" variant="accent" className="group">
                Place an Order
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/track">
              <Button size="lg" variant="outline">
                Track an Order
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* ── Features ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-3 text-muted-foreground">
            Designed around makers, engineers, and product teams.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="group transition-colors hover:border-accent/40">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{f.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-accent/20 bg-accent/5 px-8 py-12 text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Ready to bring your idea to life?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fill out our order form and we&apos;ll get back to you with a quote within 24 hours.
          </p>
          <Link href="/order">
            <Button size="lg" variant="accent" className="mt-8 group">
              Start your order
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
