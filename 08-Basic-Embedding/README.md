# 08 Basic Embedding
This example demonstrates how to create an embedding for a given input string using the `@xenova/transformers` library. The script takes a text input, processes it through a pre-trained model to generate a feature vector (embedding), and then outputs the resulting vector along with some details about it.

## What is an Embedding?
An embedding is a mapping of discrete objects, such as words, to continuous vectors. The `nn.Embedding` layer in PyTorch is a simple lookup table that stores embeddings of a fixed dictionary and size. It takes as input a list of indices and returns the corresponding embeddings.