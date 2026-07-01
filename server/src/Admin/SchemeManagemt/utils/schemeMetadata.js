// utils/schemeMetadata.js

export function schemeToMetadata(scheme) {
  return {
    mongoId: scheme._id.toString(),

    no: Number(scheme.no ?? 0),

    name: scheme.name ?? "",

    schemeType: scheme.schemeType ?? "",

    category: scheme.category ?? "",

    beneficiary: scheme.beneficiary ?? "",

    gender: scheme.eligibility?.gender ?? "All",

    caste: scheme.eligibility?.caste ?? "All",

    minAge: Number(scheme.eligibility?.age?.min ?? 0),

    maxAge: Number(scheme.eligibility?.age?.max ?? 100),

    income: Number(scheme.eligibility.income),
    
    benefit: scheme.benefit ?? "",

    documents: Array.isArray(scheme.documents)
      ? scheme.documents
      : [],

    apply: scheme.apply ?? "",

    status: scheme.status ?? "Active",
  };
}