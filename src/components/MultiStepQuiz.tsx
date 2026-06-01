"use client";

import { useState, useTransition } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Home,
  Banknote,
  MapPin,
  Phone,
  User,
  RefreshCw,
  XCircle,
  Layers,
  Building2,
  Briefcase,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { submitLead } from "@/app/actions/lead";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Step = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    id: "service",
    title: "באיזה נושא נוכל לסייע?",
    subtitle: "בחרו את הנושא הרלוונטי",
    icon: Home,
  },
  {
    id: "payment",
    title: "מה ההחזר החודשי הנוכחי?",
    subtitle: "מידע כללי לבדיקת פוטנציאל החיסכון",
    icon: Banknote,
  },
  {
    id: "city",
    title: "באיזו עיר אתם גרים?",
    subtitle: "פרט בסיסי שיעזור לנו להתאים פתרון",
    icon: MapPin,
  },
  {
    id: "contact",
    title: "השאירו פרטים ונחזור אליכם",
    subtitle: "מענה אישי תוך שעה",
    icon: Phone,
  },
];

const SERVICES = [
  { value: "refinance", label: "מיחזור משכנתא", Icon: RefreshCw },
  { value: "rejected", label: "סורבתי בבנק", Icon: XCircle },
  { value: "consolidation", label: "איחוד הלוואות", Icon: Layers },
  { value: "new", label: "משכנתא חדשה", Icon: Home },
  { value: "purpose", label: "משכנתא לכל מטרה", Icon: Building2 },
  { value: "business", label: "מימון לעסקים", Icon: Briefcase },
];

const PAYMENT_RANGES = [
  { value: "0-3000", label: "עד 3,000 ₪" },
  { value: "3000-5000", label: "3,000 - 5,000 ₪" },
  { value: "5000-8000", label: "5,000 - 8,000 ₪" },
  { value: "8000-12000", label: "8,000 - 12,000 ₪" },
  { value: "12000+", label: "מעל 12,000 ₪" },
  { value: "none", label: "אין לי משכנתא כרגע" },
];

export function MultiStepQuiz({ source = "טופס מהיר" }: { source?: string }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [done, setDone] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    serviceType: "",
    currentPayment: "",
    city: "",
    fullName: "",
    phone: "",
  });

  const progress = ((currentStep + 1) / STEPS.length) * 100;
  const StepIcon = STEPS[currentStep].icon;

  const canProceed = () => {
    switch (currentStep) {
      case 0: return !!formData.serviceType;
      case 1: return !!formData.currentPayment;
      case 2: return formData.city.length >= 2;
      case 3:
        return (
          formData.fullName.length >= 2 &&
          /^0\d{1,2}-?\d{7}$/.test(formData.phone)
        );
      default: return false;
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep(currentStep + 1);
    else handleSubmit();
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const fd = new FormData();
      Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
      fd.append("source", source);

      const result = await submitLead(null, fd);
      if (result.success) {
        setDone(true);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  if (done) {
    return (
      <div className="bg-white rounded-3xl border border-midnight-100 p-8 md:p-10 shadow-elevation text-center">
        <div className="size-16 mx-auto mb-5 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle2 className="size-8 text-green-600" strokeWidth={2.2} />
        </div>
        <h3 className="font-display text-2xl font-bold text-midnight mb-2">
          תודה רבה!
        </h3>
        <p className="text-midnight-600 mb-1">קיבלנו את הפרטים שלכם.</p>
        <p className="text-midnight-600">
          נחזור אליכם תוך{" "}
          <span className="font-semibold text-orange">שעה</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-midnight-100 p-6 md:p-7 shadow-elevation">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-medium text-midnight-500">
          שלב {currentStep + 1} מתוך {STEPS.length}
        </div>
        <span className="text-xs text-midnight-400">
          {Math.round(progress)}%
        </span>
      </div>
      <Progress value={progress} className="mb-6" />

      <div className="flex items-start gap-3 mb-6">
        <div className="size-11 rounded-xl bg-midnight text-gold flex items-center justify-center shrink-0">
          <StepIcon className="size-5" strokeWidth={2} />
        </div>
        <div className="pt-1">
          <h3 className="font-display text-lg md:text-xl font-bold text-midnight leading-tight">
            {STEPS[currentStep].title}
          </h3>
          <p className="text-midnight-500 text-xs md:text-sm mt-0.5">
            {STEPS[currentStep].subtitle}
          </p>
        </div>
      </div>

      <div key={currentStep} className="animate-slide-in-up">
        {currentStep === 0 && (
          <div className="grid grid-cols-2 gap-2.5">
            {SERVICES.map((s) => {
              const Icon = s.Icon;
              const selected = formData.serviceType === s.value;
              return (
                <button
                  key={s.value}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, serviceType: s.value })
                  }
                  className={cn(
                    "p-3.5 rounded-2xl border text-right transition-all duration-200",
                    selected
                      ? "border-gold bg-gold/[0.04] shadow-gold"
                      : "border-midnight-100 hover:border-midnight-200 hover:bg-midnight-50/50"
                  )}
                >
                  <Icon
                    className={cn(
                      "size-5 mb-2",
                      selected ? "text-gold-600" : "text-midnight-500"
                    )}
                    strokeWidth={2}
                  />
                  <div
                    className={cn(
                      "font-medium text-xs md:text-sm leading-tight",
                      selected ? "text-midnight" : "text-midnight-700"
                    )}
                  >
                    {s.label}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-2">
            {PAYMENT_RANGES.map((r) => {
              const selected = formData.currentPayment === r.value;
              return (
                <button
                  key={r.value}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, currentPayment: r.value })
                  }
                  className={cn(
                    "w-full flex items-center justify-between p-3.5 rounded-2xl border text-right transition-all duration-200",
                    selected
                      ? "border-gold bg-gold/[0.04]"
                      : "border-midnight-100 hover:border-midnight-200"
                  )}
                >
                  <span
                    className={cn(
                      "size-5 rounded-full border-2 flex items-center justify-center transition-colors",
                      selected ? "border-gold" : "border-midnight-200"
                    )}
                  >
                    {selected && (
                      <span className="size-2.5 rounded-full bg-gold" />
                    )}
                  </span>
                  <span className="font-medium text-midnight">{r.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <Label htmlFor="city">עיר מגורים</Label>
            <Input
              id="city"
              placeholder="לדוגמה: תל אביב, ירושלים, חיפה"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              autoFocus
            />
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-3">
            <div>
              <Label htmlFor="fullName">
                <User className="size-3.5 inline ml-1" />
                שם מלא
              </Label>
              <Input
                id="fullName"
                placeholder="ישראל ישראלי"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                autoFocus
              />
            </div>
            <div>
              <Label htmlFor="phone">
                <Phone className="size-3.5 inline ml-1" />
                טלפון
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="050-1234567"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <p className="flex items-center gap-1.5 text-[11px] text-midnight-500">
              <ShieldCheck className="size-3.5" />
              הפרטים שלכם מאובטחים ולא יועברו לצד שלישי.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBack}
          disabled={currentStep === 0 || isPending}
          className="text-midnight-500"
        >
          <ArrowRight className="size-4" />
          חזרה
        </Button>

        <Button
          variant={currentStep === STEPS.length - 1 ? "orange" : "default"}
          size="lg"
          onClick={handleNext}
          disabled={!canProceed() || isPending}
          className="flex-1 max-w-[240px] rounded-full"
        >
          {isPending
            ? "שולח..."
            : currentStep === STEPS.length - 1
              ? "שלחו פרטים"
              : "המשך"}
          {!isPending && currentStep < STEPS.length - 1 && (
            <ArrowLeft className="size-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
