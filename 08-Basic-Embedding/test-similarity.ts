import { pipeline } from "@xenova/transformers";

function cosineSimilarity(vecA: number[], vecB: number[]) {
    let dotProduct = 0;
    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
    }
    return dotProduct;
}

async function runTest() {
    const pipe = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

    const sentence1 = "Kedi matın üzerinde uyuyor.";
    const sentence2 = "Küçük bir evcil hayvan halıda dinleniyor.";
    const sentence3 = "Yarın borsa endeksi yükselebilir.";

    const emb1 = Array.from((await pipe(sentence1, { pooling: 'mean', normalize: true })).data) as number[];
    const emb2 = Array.from((await pipe(sentence2, { pooling: 'mean', normalize: true })).data) as number[];
    const emb3 = Array.from((await pipe(sentence3, { pooling: 'mean', normalize: true })).data) as number[];

    console.log(`Benzer Anlam Skoru: ${cosineSimilarity(emb1, emb2).toFixed(4)}`); 
    console.log(`Farklı Anlam Skoru: ${cosineSimilarity(emb1, emb3).toFixed(4)}`);
}

runTest();