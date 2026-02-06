import { pipeline } from "@xenova/transformers";

async function generateEmbedding(text: string) {
    const piple = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");

    const output = await piple(text, {
        pooling: "mean",
        normalize: true,
    });

    const embedding = Array.from(output.data);

    console.log("\n--- Input Text ---");
    console.log(text);

    console.log("\n--- Embedding ---");
    console.log(`Vector Length: ${embedding.length}`);
    console.log(`First 5 values: ${embedding.slice(0, 5).map(v => v.toFixed(4))}`);

    return embedding;
}

// Example usage
const text = "Transformers provide state-of-the-art natural language processing capabilities.";
generateEmbedding(text);