"use client";

import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Home,
  Banknote,
  MapPin,
  Phone,
  User,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { submitLead } from "@/app/actions/lead";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Step = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
};

const STEPS: Step[] = [
  {
    id: "service",
    title: "באיזה תחום נוכל לעזור?",
    subtitle: "בחר את השירות הרלוונטי עבורך",
    icon: Home,
  },
  {
    id: "payment",
    title: "מה ההחזר החודשי הנוכחי?",
    subtitle: "המידע יעזור לנו להבין כמה אפשר לחסוך",
    icon: Banknote,
  },
  {
    id: "city",
    title: "באיזו עיר אתם גרים?",
    subtitle: "פרטים בסיסיים לבדיקת הזכאות",
    icon: MapPin,
  },
  {
    id: "contact",
    title: "אליי מי לחזור?",
    subtitle: "פרטים אחרונים ונחזור אליך תוך שעה",
    icon: Phone,
  },
];

const SERVICES = [
  { value: "refinance", label: "מיחזור משכנתא", emoji: "🔄" },
  { value: "rejected", label: "סורבתי בבנק", emoji: "🚫" },
  { value: "consolidation", label: "איחוד הלוואות", emoji: "🔗" },
  { value: "new", label: "משכנתא חדשה", emoji: "🏠" },
  { value: "purpose", label: "משכנתא לכל מטרה", emoji: "💰" },
  { value: "business", label: "מימון לעסקים", emoji: "💼" },
];

const PAYMENT_RANGES = [
  { value: "0-3000", label: "עד 3,000 ₪" },
  { value: "3000-5000", label: "3,000 - 5,000 ₪" },
  { value: "5000-8000", label: "5,000 - 8,000 ₪" },
  { value: "8000-12000", label: "8,000 - 12,000 ₪" },
  { value: "12000+", label: 'מעל 12,000 ₪' },
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
      case 0:
        return !!formData.serviceType;
      case 1:
        return !!formData.currentPayment;
      case 2:
        return formData.city.length >= 2;
      case 3:
        return (
          formData.fullName.length >= 2 &&
          /^0\d{1,2}-?\d{7}$/.test(formData.phone)
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <div className="size-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="size-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-extrabold text-midnight mb-3">
          תודה רבה!
        </h3>
        <p className="text-midnight-600 text-lg mb-2">
          קיבלנו את הפרטים שלך.
        </p>
        <p className="text-midnight-600 mb-6">
          משה או אחד מהיועצים יחזור אליך תוך <strong className="text-orange">שעה</strong>!
        </p>
        <div className="bg-gold/10 border-2 border-gold/30 rounded-2xl p-4 inline-block">
          <p className="text-sm text-midnight font-bold">
            💡 בינתיים: עקוב אחרינו בוואטסאפ לעדכונים וטיפים
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-midnight-100/50 p-6 md:p-8 max-w-xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-sm font-bold text-midnight">
            <Sparkles className="size-4 text-gold" />
            שלב {currentStep + 1} מתוך {STEPS.length}
          </div>
          <span className="text-xs text-midnight-500">
            {Math.round(progress)}% הושלם
          </span>
        </div>
        <Progress value={progress} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start gap-3 mb-6">
            <div className="size-12 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0 shadow-gold">
              <StepIcon className="size-6 text-midnight" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-midnight leading-tight">
                {STEPS[currentStep].title}
              </h3>
              <p className="text-midnight-500 text-sm mt-1">
                {STEPS[currentStep].subtitle}
              </p>
            </div>
          </div>

          {currentStep === 0 && (
            <div className="grid grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <button
                  key={s.value}
                  onClick={() =>
                    setFormData({ ...formData, serviceType: s.value })
                  }
                  className={cn(
                    "p-4 rounded-2xl border-2 text-right transition-all hover:shadow-lg",
                    formData.serviceType === s.value
                      ? "border-gold bg-gold/5 shadow-gold"
                      : "border-midnight-100 hover:border-gold/50"
                  )}
                >
                  <div className="text-3xl mb-2">{s.emoji}</div>
                  <div className="font-bold text-midnight text-sm">
                    {s.label}
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentStep === 1 && (
            <RadioGroup
              value={formData.currentPayment}
              onValueChange={(v) =>
                setFormData({ ...formData, currentPayment: v })
              }
              className="space-y-2"
            >
              {PAYMENT_RANGES.map((r) => (
                <label
                  key={r.value}
                  htmlFor={r.value}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all",
                    formData.currentPayment === r.value
                      ? "border-gold bg-gold/5"
                      : "border-midnight-100 hover:border-gold/50"
                  )}
                >
                  <RadioGroupItem value={r.value} id={r.value} />
                  <span className="font-bold text-midnight">{r.label}</span>
                </label>
              ))}
            </RadioGroup>
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
              <p className="text-xs text-midnight-500 mt-3">
                💡 משה מטפל בלקוחות בכל הארץ - פיזית ודיגיטלית
              </p>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">
                  <User className="size-4 inline ml-1" />
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
                  <Phone className="size-4 inline ml-1" />
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
              <div className="bg-midnight/5 rounded-xl p-3 text-xs text-midnight-600 leading-relaxed">
                🔒 הפרטים שלך מאובטחים ולא יועברו לצד שלישי. בלחיצה על "סיים" אתה
                מאשר שננצור איתך קשר.
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="lg"
          onClick={handleBack}
          disabled={currentStep === 0 || isPending}
          className="text-midnight"
        >
          <ArrowRight className="size-5" />
          חזרה
        </Button>

        <Button
          variant={currentStep === STEPS.length - 1 ? "orange" : "gold"}
          size="lg"
          onClick={handleNext}
          disabled={!canProceed() || isPending}
          className="flex-1 max-w-xs"
        >
          {isPending
            ? "שולח..."
            : currentStep === STEPS.length - 1
              ? "בדוק כמה אני יכול לחסוך!"
              : "הבא"}
          {!isPending && currentStep < STEPS.length - 1 && (
            <ArrowLeft className="size-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
