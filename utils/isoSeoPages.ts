import type { IsoStandardSlug } from "./isoCities";
import { getStandardContent } from "./isoStandardContent";

export const SEO_VARIANTS = ["fast", "cheap", "low-cost", "easy"] as const;
export type SeoVariant = (typeof SEO_VARIANTS)[number];
export type OverviewVariant = "default" | SeoVariant;

export type IsoSeoPage = {
  path: string;
  standard: IsoStandardSlug;
  variant: SeoVariant;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
};

type VariantCopy = {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
};

function buildSeoPages(): IsoSeoPage[] {
  const pages: IsoSeoPage[] = [];

  for (const standard of ["9001", "14001", "45001"] as IsoStandardSlug[]) {
    const content = getStandardContent(standard);
    const short = content.shortName;
    const system = content.systemName;

    const variants: Record<SeoVariant, { path: string } & VariantCopy> = {
      fast: {
        path:
          standard === "9001"
            ? "/fast-qms-certification"
            : standard === "14001"
              ? "/fast-ems-certification"
              : "/fast-ohs-certification",
        h1: `Fast ${short} certification (ISO ${standard})`,
        metaTitle: `Fast ${short} Certification | ISO ${standard} | 4ES Hub`,
        metaDescription: `Get fast ISO ${standard} ${short} certification. Check audit readiness in minutes, then connect with a consultant or accredited certification body.`,
        heroIntro: `Need ISO ${standard} ${short} certification on a deadline? Start with a short readiness check, then we connect you with the right partner—consultant if you need implementation help, or a certification body if you are audit-ready.`,
      },
      cheap: {
        path: `/cheap-iso-${standard}-certification`,
        h1: `Cheap ISO ${standard} certification`,
        metaTitle: `Cheap ISO ${standard} Certification | Affordable ${short} | 4ES Hub`,
        metaDescription: `Cheap ISO ${standard} certification: use AI to implement the system, then a few consultant hours to review—not a full writing project. Check readiness, then sit an accredited audit when you are ready.`,
        heroIntro: `Cheap ISO ${standard} certification is about hours, not a cheap certificate. Use AI to implement the system yourself, then a few hours of expert review—instead of paying someone to write the whole ${system.toLowerCase()}. Take the readiness check so you only sit an accredited audit when you are actually ready.`,
      },
      "low-cost": {
        path: `/low-cost-iso-${standard}-certification`,
        h1: `Low-cost ISO ${standard} certification`,
        metaTitle: `Low-Cost ISO ${standard} Certification | ${system} | 4ES Hub`,
        metaDescription: `Low-cost ISO ${standard} certification: AI implements the system, consultants review in hours—not a writing retainer. Confirm readiness, then pay an accredited body for Stage 1 and Stage 2.`,
        heroIntro: `Low-cost ISO ${standard} certification means implementing with AI instead of buying weeks of consultant time. Your team builds the ${system.toLowerCase()} in 4ES Hub; a consultant reviews for a few hours. Then an accredited body runs Stage 1 and Stage 2.`,
      },
      easy: {
        path: `/easy-iso-${standard}-certification`,
        h1: `Easy ISO ${standard} certification`,
        metaTitle: `Easy ISO ${standard} Certification | Simple ${short} Path | 4ES Hub`,
        metaDescription: `Make ISO ${standard} certification easy. A short questionnaire tells you if you are audit-ready, then we introduce you to a consultant or certification body.`,
        heroIntro: `ISO ${standard} certification does not have to be confusing. Answer a few readiness questions, then we handle the introductions—consultant for implementation, or certification body for your external audit.`,
      },
    };

    for (const variant of SEO_VARIANTS) {
      const copy = variants[variant];
      pages.push({
        path: copy.path,
        standard,
        variant,
        h1: copy.h1,
        metaTitle: copy.metaTitle,
        metaDescription: copy.metaDescription,
        heroIntro: copy.heroIntro,
      });
    }
  }

  return pages;
}

export const ISO_SEO_PAGES: IsoSeoPage[] = buildSeoPages();

export function getSeoPageByPath(path: string): IsoSeoPage | undefined {
  return ISO_SEO_PAGES.find((page) => page.path === path);
}

export function getAllSeoPagePaths(): string[] {
  return ISO_SEO_PAGES.map((page) => page.path);
}

export function getOverviewSeo(
  standard: IsoStandardSlug,
  variant: OverviewVariant,
): {
  path: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
} {
  if (variant === "default") {
    const content = getStandardContent(standard);
    return {
      path: `/iso-${standard}`,
      h1: `ISO ${standard} certification`,
      metaTitle: `ISO ${standard} Certification Cost, Timeline & Next Steps | 4ES Hub`,
      metaDescription: `See what ISO ${standard} certification costs, what it takes, and your next steps. Check readiness, then connect with a consultant or accredited certification body.`,
      heroIntro: content.overviewIntro,
    };
  }

  const page = ISO_SEO_PAGES.find(
    (entry) => entry.standard === standard && entry.variant === variant,
  );
  if (!page) {
    throw new Error(`Missing SEO page for ISO ${standard} variant ${variant}`);
  }
  return {
    path: page.path,
    h1: page.h1,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    heroIntro: page.heroIntro,
  };
}
