# 🔄 JavaScript Event Loop — Complete Guide

> **Key idea:** The Event Loop is not something to memorize. It's a `while` loop with a priority chain inside.
> Is the Stack empty? → Microtasks? → Macrotasks? — Ask these 3 questions and the answer reveals itself.

---

## 📌 Table of Contents

- [What is the Event Loop?](#what-is-the-event-loop)
- [Parts of the JavaScript Runtime](#parts-of-the-javascript-runtime)
- [Call Stack](#1-call-stack)
- [Web APIs](#2-web-apis)
- [Task Queues](#3-task-queues)
- [Event Loop — The Real Hero](#4-event-loop--the-real-hero)
- [Code Trace — Step by Step](#-code-trace--step-by-step)
- [Golden Rules](#-5-golden-rules)
- [Practice Problems](#-practice-problems)
- [Cheat Sheet](#-cheat-sheet)

---

## What is the Event Loop?

The **Event Loop** is the mechanism that decides **when which code runs** in JavaScript.

JavaScript is **single-threaded** — it can only do one thing at a time. But the Browser gives us **multi-threaded** power (via Web APIs). The Event Loop is the bridge between them.

### Restaurant Analogy 🧑‍🍳

- Chef = JavaScript (one task at a time)
- Oven = Web API (works in background)
- Bell = Event Loop (notifies when done)
- Order queue = Call Stack

The chef puts pizza in the oven and moves on. When the pizza is ready, the bell rings, and the chef picks it up.

---

## Parts of the JavaScript Runtime

```
┌─────────────────────────────────────────────────────┐
│                JavaScript Runtime                    │
│                                                       │
│  ┌──────────────┐         ┌───────────────────────┐  │
│  │  Call Stack  │         │      Web APIs         │  │
│  │              │         │  (provided by Browser)│  │
│  │  one task    │  ───→   │  • setTimeout          │  │
│  │  at a time   │         │  • DOM events          │  │
│  │              │  ←───   │  • fetch / AJAX        │  │
│  └──────────────┘         │  • setInterval         │  │
│         ↑                  └───────────────────────┘  │
│         │                            ↓                │
│         │                  ┌───────────────────────┐  │
│         │                  │   Callback Queues     │  │
│         │                  │  ┌─────────────────┐  │  │
│         │                  │  │ Microtask Queue │  │  │
│         │                  │  │ (Promise.then)  │  │  │
│         │                  │  └─────────────────┘  │  │
│         │                  │  ┌─────────────────┐  │  │
│         │                  │  │ Macrotask Queue │  │  │
│         │                  │  │ (setTimeout)    │  │  │
│         │                  │  └─────────────────┘  │  │
│         │                  └───────────────────────┘  │
│         │                            ↑                │
│         └──────── Event Loop ────────┘                │
│                                                       │
└─────────────────────────────────────────────────────┘
```

---

## 1. Call Stack

- **LIFO** (Last In, First Out) structure
- JavaScript **only runs code here**
- Nothing new starts until the Stack is empty

```javascript
function a() {
  b();
}
function b() {
  console.log("Hi");
}
a();
```

Stack trace:
```
b()      ← top
a()
global
```

---

## 2. Web APIs

Browser-provided features. JavaScript **hands off work to them** and moves on immediately.

| Web API | What it does |
|---------|--------------|
| `setTimeout` | Runs a timer |
| `setInterval` | Repeating timer |
| `fetch` / `XMLHttpRequest` | Network requests |
| DOM events | Click, scroll, keypress |
| `Promise` | Handles microtasks |

---

## 3. Task Queues

### 🔹 Microtask Queue (HIGH priority)

- `Promise.then()` / `.catch()` / `.finally()`
- `queueMicrotask()`
- `MutationObserver`

### 🔹 Macrotask Queue (LOW priority)

- `setTimeout` / `setInterval`
- DOM events (click, keypress)
- `setImmediate` (Node.js)
- I/O operations

> ⭐ **Most important rule:** Microtask Queue has far higher priority than Macrotask. The Event Loop ALWAYS empties the Microtask Queue completely before touching Macrotasks.

---

## 4. Event Loop — The Real Hero

The Event Loop is an **infinite while loop**:

```javascript
while (true) {
  // 1. Is Call Stack empty? If not, wait.
  // 2. Is Microtask Queue empty? If not, run ALL microtasks.
  // 3. If Stack empty, take ONE macrotask and run it.
  // 4. Go back to step 1.
}
```

Knowing this one rule lets you predict any output.

---

## 🎬 Code Trace — Step by Step

### Input

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

### Expected Output

```
A
D
C
B
```

### Why This Order?

#### Step 1: `console.log("A")` runs
```
Stack: [main]
→ "A" printed ✅
```

#### Step 2: `setTimeout(..., 0)` — handed to Browser
- JavaScript **does NOT stop**, tells Browser: "send this callback to the queue after 0ms"
- ⚠️ **0ms does NOT mean "right now"!** It means "as soon as the Stack is empty"
- Callback → **Macrotask Queue**

```
Macrotask Queue: [() => console.log("B")]
```

#### Step 3: `Promise.resolve().then(...)` — Microtask

```
Microtask Queue: [() => console.log("C")]
```

#### Step 4: `console.log("D")` runs

```
→ "D" printed ✅
```

#### Step 5: Main script done → Call Stack empty

#### Step 6: Event Loop → Microtasks first

```
Microtask Queue: [() => console.log("C")]
→ "C" printed ✅
```

#### Step 7: Event Loop → Macrotasks

```
Macrotask Queue: [() => console.log("B")]
→ "B" printed ✅
```

### Q&A

**❓ Why A?**
- `A` is the first line, runs synchronously in the Call Stack. No delay, no queue.

**❓ Why D?**
- `setTimeout` and `Promise.then` are both **asynchronous** — they leave the Stack.
- `D` is synchronous, so it runs right after `A`.

**❓ Why C before B?**
- `Promise.then` → **Microtask** (VIP line 🎩)
- `setTimeout` → **Macrotask** (regular line 🧍)
- The Event Loop always runs Microtasks first.

---

## 💎 5 Golden Rules

> **1.** Synchronous code runs first. Nothing starts until the Call Stack is empty.

> **2.** `setTimeout(fn, 0)` does NOT mean "right now". It means "as soon as the Stack is empty".

> **3.** Microtask > Macrotask. Promises always run before setTimeout.

> **4.** Macrotasks only run after the Microtask Queue is COMPLETELY empty. No exceptions.

> **5.** After every Macrotask, check Microtasks again. New microtasks created during a macrotask run first.

---

## 🔥 Priority Chain

```
Call Stack (sync)
    ↓ (when empty)
Microtask Queue (Promise, queueMicrotask)
    ↓ (when empty)
Macrotask Queue (setTimeout, DOM event)
    ↓ (after one macrotask, check microtasks again)
Microtask Queue
    ↓
Macrotask Queue
    ↓
... (loops forever)
```

---

## 🧪 Practice Problems

### Practice 1 — Basic

```javascript
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
```

<details>
<summary>Show answer</summary>

```
1
4
3
2
```
**Reason:** sync (1, 4) → microtask (3) → macrotask (2)
</details>

---

### Practice 2 — Multiple Microtasks

```javascript
setTimeout(() => console.log("timeout 1"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

setTimeout(() => console.log("timeout 2"), 0);

Promise.resolve().then(() => console.log("promise 3"));
```

<details>
<summary>Show answer</summary>

```
promise 1
promise 3
promise 2
timeout 1
timeout 2
```

**Trace:**
1. Microtask Queue: `[promise 1, promise 3]`
2. `promise 1` runs → its `.then` is added as a new microtask
3. `promise 3` runs
4. `promise 2` runs (added at the end)
5. Macrotasks: `timeout 1`, `timeout 2`
</details>

---

### Practice 3 — Nested Timers

```javascript
console.log("start");

setTimeout(() => {
  console.log("timeout");
  Promise.resolve().then(() => console.log("promise inside timeout"));
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
  setTimeout(() => console.log("timeout inside promise"), 0);
});

console.log("end");
```

<details>
<summary>Show answer</summary>

```
start
end
promise 1
timeout
promise inside timeout
timeout inside promise
```

**Trace:**
1. sync: `start`, `end`
2. Microtask: `promise 1` → adds a new macrotask
3. Microtasks empty → Macrotask: `timeout` → adds a new microtask
4. Microtasks first → `promise inside timeout`
5. Macrotask: `timeout inside promise`
</details>

---

### Practice 4 — Async/Await

```javascript
async function foo() {
  console.log("foo start");
  await Promise.resolve();
  console.log("foo after await");
}

console.log("script start");
foo();
console.log("script end");
```

<details>
<summary>Show answer</summary>

```
script start
foo start
script end
foo after await
```

**Reason:** Everything after `await` goes to the microtask queue. So `script end` prints first.
</details>

---

### Practice 5 — setTimeout vs Promise vs Sync

```javascript
setTimeout(() => console.log("1"), 0);
Promise.resolve().then(() => console.log("2"));
console.log("3");
Promise.resolve().then(() => console.log("4"));
setTimeout(() => console.log("5"), 0);
```

<details>
<summary>Show answer</summary>

```
3
2
4
1
5
```
sync → microtask → macrotask
</details>

---

## 📋 Cheat Sheet

| Concept | In one line |
|---------|-------------|
| **JavaScript Runtime** | JS + Browser APIs + Queues |
| **Call Stack** | Where code runs, LIFO |
| **Web APIs** | Browser help (setTimeout, fetch, DOM) |
| **Microtask Queue** | Promise, queueMicrotask — **HIGH priority** |
| **Macrotask Queue** | setTimeout, DOM events — **LOW priority** |
| **Event Loop** | Runs microtasks → macrotasks when Stack is empty |

### Priority Order

```
1. Synchronous code (Call Stack)
2. Microtasks (Promise, queueMicrotask)
3. Macrotasks (setTimeout, DOM events)
```

### Common Traps ⚠️

- `setTimeout(fn, 0)` does NOT run immediately
- Promise callbacks are NOT synchronous (they're microtasks)
- Everything after `await` becomes a microtask
- New microtasks added during microtask phase run before macrotasks

---

## 🎯 Goal Checklist

- [ ] I can explain the Event Loop without memorizing
- [ ] I understand why `setTimeout(0)` runs last
- [ ] I can explain why Promises run before setTimeout
- [ ] I can predict output of any sync/async mixed code
- [ ] I understand the real difference between sync and async

---

## 🔗 Related Topics

- [Hoisting + TDZ](./hoisting.md)
- [Execution Context + Call Stack](./execution-context.md)
- [Scope, Closures, `this`](./scope-closures-this.md)
- Promise + async/await (next)

---

> **Final thought:** The only way to understand the Event Loop is to write code, trace it, and predict output.
> Memorize it and you'll forget. Understand it and it stays forever.