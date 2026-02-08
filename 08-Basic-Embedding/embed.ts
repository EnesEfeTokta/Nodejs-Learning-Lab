/// <reference types="node" />
import { pipeline } from "@xenova/transformers";

async function runCli() {
    const args = process.argv.slice(2);
    const inputPath = args[0];

    if (!inputPath) {
        console.error("Please provide an input string to embed.");
        console.log('Example: npx tsx embed.ts "Artificial intelligence is changing the future"');
        process.exit(1);
    }

    console.log("Creating embedding...");

    try {
        const extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");

        const output = await extractor(inputPath, {
            pooling: "mean",
            normalize: true,
        });

        const vector = Array.from(output.data);

        console.log("Embedding successfully created:");
        console.log("------------------------------");
        console.log(`Input: ${inputPath}`);
        console.log(`Vector Size: ${vector.length}`);
        console.log(`Vector Sample: [${vector.slice(0, 10).map((v) => v.toFixed(4)).join(", ")}...]`);
        console.log("------------------------------");
    }
    catch (error) {
        console.error("An error occurred while creating the embedding:", error);
    }
}

runCli();