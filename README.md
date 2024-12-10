# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.

///

Running time:
![Figure_1](https://github.com/user-attachments/assets/12443a30-e51c-4b38-9e39-4fe3df64b9cf)


The growth curve of held-karp grows exponentially, the complexity grows exponentially with the input scale, and the amount of calculation increases rapidly.

The running time of local search is almost unaffected by the growth of scale, and it shows good adaptability to scale changes. Its complexity mainly depends on the number of exchanges and path length, and changes little with the growth of scale.



Path length:
![Figure_2](https://github.com/user-attachments/assets/6679b386-cf16-494f-be9e-8b82bd34950f)


Held-Karp always finds the optimal solution in all input scales, and its path length is either better than or equal to Local Search. As an exact algorithm, it can find the global optimal solution, and its path length reflects the quality advantage of the solution.

Local Search can find the same optimal path as Held-Karp in small-scale problems, but the path quality decreases significantly when the scale increases. Local Search is a heuristic algorithm. It may find a solution close to the optimal when the scale is small, but it is greatly affected by randomness when the scale increases, and the path length gradually deviates from the optimal value.


///


There seems to be some problems with my hk algorithm code. It runs very fast in the case of 1-19 size and meets the analysis of time complexity, but it takes a very long time to run in the case of size = 20. Currently, it has run for more than 6 hours and still has no results. It seems to enter infinite iteration.

So I temporarily choose to use other people's algorithm code instead. I used CadeMaynard's algorithm code for analysis and used my test code.

The analysis results are the same as my previous conclusions.

The graph and data will be updated soon after the run is completed

{
![Figure_1](https://github.com/user-attachments/assets/ff88f7f0-0220-4de5-932c-ac42d91c3f88)
![Figure_2](https://github.com/user-attachments/assets/95e142fb-b488-4fbf-b09f-f43d7e4c29e1)

}



###

source: ChatGPT help me with the timeFunction and generateDistanceMatrix

https://github.com/COSC3020/tsp-comparison-CadeMaynard

Plagiarism Statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
