export function schemeToDocument(scheme) {
  return `
Scheme Name: ${scheme.name}

This is a ${scheme.scheme_type} government scheme in Rajasthan.

Target Beneficiaries:
${scheme.beneficiary}

Eligibility:
- Category: ${scheme.category}
- Gender: ${scheme.gender}
- Caste: ${scheme.caste}
- Age: ${scheme.age}
- Income: ${scheme.income}

Benefits:
${scheme.benefit}

Required Documents:
${scheme.documents}

Application:
${scheme.apply}
`.trim();
}