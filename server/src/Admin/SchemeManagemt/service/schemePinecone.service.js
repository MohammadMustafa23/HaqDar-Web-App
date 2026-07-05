import { index } from "../../../config/pinecone.js";
import { generateEmbedding } from "../../../services/embedding.service.js";
import { schemeToDocument } from "../../../utils/schemeToDocument.js";
import { schemeToMetadata } from '../utils/schemeMetadata.js'
export const uploadSchemeToPinecone = async (scheme) => {
  try {
    // Convert scheme to AI document
    const document = schemeToDocument(scheme);

    // Generate embedding
    const embedding = await generateEmbedding(document);

    // Stable vector id
    const vectorId = scheme._id.toString();

    const metadata = schemeToMetadata(scheme);

    // Upload to Pinecone
    await index.upsert({
      records: [
        {
          id: vectorId,
          values: embedding,
          metadata: metadata
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
        metadata:metadata
      },
    ],
  });
}

export async function deleteSchemeVector(id) {
  try {
    await index.deleteOne({
      id,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
