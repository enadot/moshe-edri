import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="text-9xl font-black text-gold-gradient mb-6">404</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-midnight mb-4">
          העמוד לא נמצא
        </h1>
        <p className="text-midnight-600 mb-8 leading-relaxed">
          נראה שהדף שחיפשת לא קיים. בואו נמצא עבורכם פתרון אחר!
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild variant="orange" size="lg">
            <Link href="/">
              <Home className="size-5" />
              חזרה לדף הבית
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#quick-form">
              קבלת ייעוץ חינם
              <ArrowLeft className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
