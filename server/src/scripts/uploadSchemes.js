import schemes from "../data/Rajasthan-schemes.json" with { type: "json" };

import { index } from "../config/pinecone.js";
import { generateEmbedding } from "../services/embedding.service.js";
import { schemeToDocument } from "../utils/schemeToDocument.js";

const vectors = [];

for (const scheme of schemes) {
  const document = schemeToDocument(scheme);

  const embedding = await generateEmbedding(document);

  vectors.push({
    id: `scheme_${scheme.no}`,
    values: embedding,
    metadata: {
      // Filtering ke liye
      schemeId: scheme.no,
      category: scheme.category,
      gender: scheme.gender.toLowerCase(),
      caste: scheme.caste.toLowerCase(),
      schemeType: scheme.scheme_type.toLowerCase(),

      // Display ke liye
      name: scheme.name,
      beneficiary: scheme.beneficiary,
      age: scheme.age,
      income: scheme.income,
      benefit: scheme.benefit,
      documents: scheme.documents,
      apply: scheme.apply,
    },
  });

  console.log(`Processed: ${scheme.name}`);
  console.log("Vectors Count:", vectors.length);
}
const BATCH_SIZE = 4;

for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
  const batch = vectors.slice(i, i + BATCH_SIZE);

  await index.upsert({
    records: batch,
  });

  console.log(
    `Uploaded batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} records)`
  );
}

console.log(
  `Total ${vectors.length} schemes uploaded ✅`
);