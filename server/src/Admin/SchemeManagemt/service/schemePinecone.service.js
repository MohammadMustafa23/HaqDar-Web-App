import { index } from "../../../config/pinecone.js";
import { generateEmbedding } from "../../../services/embedding.service.js";
import { schemeToDocument } from "../../../utils/schemeToDocument.js";

export const uploadSchemeToPinecone = async (scheme) => {
  try {
    // Convert scheme to AI document
    const document = schemeToDocument(scheme);

    // Generate embedding
    const embedding = await generateEmbedding(document);

    // Stable vector id
    const vectorId = scheme._id.toString();

    // Upload to Pinecone
    await index.upsert({
      records: [
        {
          id: vectorId,
          values: embedding,

          metadata: {
            mongoId: vectorId,

            no: scheme.no,
            name: scheme.name,
            schemeType: scheme.schemeType,
            category: scheme.category,
            beneficiary: scheme.beneficiary,

            gender: scheme.eligibility.gender,
            caste: scheme.eligibility.caste,

            minAge: scheme.eligibility.age.min,
            maxAge: scheme.eligibility.age.max,

            maxIncome: scheme.eligibility.income.max,

            benefit: scheme.benefit,

            documents: scheme.documents.join(", "), // or keep only if your Pinecone version supports string arrays

            apply: scheme.apply,
            status: scheme.status,
          },
        },
      ],
    });

    return vectorId;
  } catch (error) {
    console.error("Pinecone Upload Error:", error);
    throw error;
  }
};

export async function updateSchemeVector(id, embedding, metadata) {
  await index.upsert({
    records: [
      {
        id: id.toString(),
        values: embedding,
        metadata,
      },
    ],
  });
}

export async function deleteSchemeVector(id) {
  try {
    await index.deleteOne({
      id,
    });

    console.log("Deleted Successfully");
  } catch (error) {
    console.error(error);
    throw error;
  }
}
