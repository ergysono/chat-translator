import {create} from "zustand";
import {Subscription} from "@/types/Subscription";

export type LanguagesSupported = "en" | "it" | "sq" | "es" | "de" | "fr" | "ja";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  it: "Italian",
  sq: "Albanian",
  es: "Spanish",
  de: "German",
  fr: "French",
  ja: "Japanese",
};

const LANGUAGES_IN_FREE = 2;
interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: "en",
  setLanguage: (language: LanguagesSupported) => set({language}),
  getLanguages: (isPro: boolean) => {
    if (isPro) {
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];
    }
    return Object.keys(LanguagesSupportedMap).slice(
      0,
      LANGUAGES_IN_FREE
    ) as LanguagesSupported[];
  },
  getNotSupportedLanguages(isPro: boolean) {
    if (isPro) {
      return [];
    }
    return Object.keys(LanguagesSupportedMap).slice(
      LANGUAGES_IN_FREE
    ) as LanguagesSupported[];
  },
}));

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({subscription}),
}));
