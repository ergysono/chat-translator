import {create} from "zustand";
import {Subscription} from "@/types/Subscription";

export type LanguageSupported = "en" | "it" | "sq" | "es" | "de" | "fr" | "ja";

export const LanguageSupportedMap: Record<LanguageSupported, string> = {
  en: "English",
  it: "Italian",
  sq: "Albanian",
  es: "Spanish",
  de: "German",
  fr: "French",
  ja: "Japanese",
};

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({subscription}),
}));
