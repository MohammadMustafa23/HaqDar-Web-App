export function schemeToDocument(scheme) {
  return `
Scheme Name: ${scheme.name}

Scheme Type:
${scheme.schemeType}

Category:
${scheme.category}

Beneficiary:
${scheme.beneficiary}

Eligibility

Gender:
${scheme.eligibility.gender}

Caste:
${scheme.eligibility.caste}

Age:
${scheme.eligibility.age.min} - ${scheme.eligibility.age.max}

Income:
${scheme.eligibility.income}

Benefits

${scheme.benefit}

Documents

${scheme.documents.join(", ")}

Application

${scheme.apply}
`.trim();
}
