# 08 Basic Embedding
In this chapter, we will learn how to use the `nn.Embedding` layer in PyTorch to create word embeddings. Word embeddings are a way to represent words as dense vectors in a continuous vector space, which can capture semantic relationships between words.

## What is an Embedding?
An embedding is a mapping of discrete objects, such as words, to continuous vectors. The `nn.Embedding` layer in PyTorch is a simple lookup table that stores embeddings of a fixed dictionary and size. It takes as input a list of indices and returns the corresponding embeddings.