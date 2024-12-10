import json
import matplotlib.pyplot as plt

with open("results.json", "r") as f:
    data = json.load(f)

sizes = [item["size"] for item in data]
hk_times = [item["hkTime"] for item in data]
ls_times = [item["lsTime"] for item in data]
hk_lengths = [item["hkLength"] for item in data]
ls_lengths = [item["lsLength"] for item in data]

plt.figure(figsize=(10, 5))
plt.plot(sizes, hk_times, label="Held-Karp Time")
plt.plot(sizes, ls_times, label="Local Search Time")
plt.xlabel("Input Size")
plt.ylabel("Time (s)")
plt.title("Runtime Comparison")
plt.legend()
plt.grid()
plt.show()

plt.figure(figsize=(10, 5))
plt.plot(sizes, hk_lengths, label="Held-Karp Tour Length")
plt.plot(sizes, ls_lengths, label="Local Search Tour Length")
plt.xlabel("Input Size")
plt.ylabel("Tour Length")
plt.title("Tour Length Comparison")
plt.legend()
plt.grid()
plt.show()
