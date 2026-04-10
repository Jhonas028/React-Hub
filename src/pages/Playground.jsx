import { useState } from "react";
import { Play, RotateCcw, Copy, Download } from "lucide-react";

const templates = {
  useStateCounter: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: 40 }}>
      <h2 style={{ fontSize: 48, marginBottom: 20 }}>{count}</h2>
      <button onClick={() => setCount(c => c + 1)}
        style={{ padding: '8px 20px', marginRight: 8, cursor: 'pointer' }}>
        +
      </button>
      <button onClick={() => setCount(c => c - 1)}
        style={{ padding: '8px 20px', cursor: 'pointer' }}>
        -
      </button>
    </div>
  );
}

export default Counter;`,

  useEffectFetch: `import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(r => r.json())
      .then(d => {
        setData(d);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default DataFetcher;`,

  CustomHook: `import { useState, useCallback } from 'react';

function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  return [value, toggle];
}

function App() {
  const [on, toggle] = useToggle();
  return (
    <div style={{ padding: 40 }}>
      <p>Status: <strong>{on ? 'ON' : 'OFF'}</strong></p>
      <button onClick={toggle} style={{ padding: '8px 20px', cursor: 'pointer' }}>
        Toggle
      </button>
    </div>
  );
}

export default App;`,

  ContextProvider: `import { createContext, useContext, useState } from 'react';

const ThemeCtx = createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeCtx);
  return (
    <button style={{
      background: theme === 'dark' ? '#333' : '#eee',
      color: theme === 'dark' ? '#fff' : '#000',
      padding: '10px 20px', cursor: 'pointer', border: 'none',
    }}>
      Theme: {theme}
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeCtx.Provider value={theme}>
      <div style={{ padding: 40 }}>
        <ThemedButton />
        <br /><br />
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
          style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Switch Theme
        </button>
      </div>
    </ThemeCtx.Provider>
  );
}

export default App;`,
};

const defaultCode = `function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;`;

export default function Playground() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [running, setRunning] = useState(false);

  const handleRun = () => {
    setRunning(true);
    setError(null);
    // In a real playground we'd use a sandboxed iframe. Here we show a placeholder.
    setTimeout(() => {
      setOutput(code);
      setRunning(false);
    }, 600);
  };

  const handleReset = () => {
    setCode(defaultCode);
    setOutput(null);
    setError(null);
  };

  const handleTemplate = (key) => {
    setCode(templates[key]);
    setOutput(null);
  };

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>
            React Playground
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            Experiment with React code in real-time
          </p>
        </div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "8px 16px",
            color: "var(--text-secondary)",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          <Download size={15} /> Export
        </button>
      </div>

      {/* Editor + Preview */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginBottom: 20,
        }}
      >
        {/* Editor */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Editor topbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 16px",
              borderBottom: "1px solid var(--border)",
              background: "var(--bg-elevated)",
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: "var(--text-secondary)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              App.jsx
            </span>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={handleReset}
                style={{
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                <RotateCcw size={14} />
              </button>
              <button
                onClick={() => navigator.clipboard.writeText(code)}
                style={{
                  color: "var(--text-muted)",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                <Copy size={14} />
              </button>
            </div>
          </div>

          {/* Textarea editor */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#a8b1c4",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 13,
              lineHeight: 1.7,
              padding: "16px 20px",
              resize: "none",
              minHeight: 280,
            }}
          />

          {/* Run button */}
          <button
            onClick={handleRun}
            disabled={running}
            style={{
              margin: 16,
              background: running ? "#16a34a" : "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "background 0.15s",
            }}
          >
            <Play size={16} fill="#fff" />
            {running ? "Running..." : "Run Code"}
          </button>
        </div>

        {/* Preview */}
        <div
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 16px",
              borderBottom: "1px solid #e5e7eb",
              background: "#f9fafb",
            }}
          >
            <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>
              Preview
            </span>
            <div style={{ display: "flex", gap: 6 }}>
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#ff5f57",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#febc2e",
                }}
              />
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#28c840",
                }}
              />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 280,
              padding: 20,
              color: "#9ca3af",
              fontSize: 14,
            }}
          >
            {output ? (
              <div
                style={{
                  width: "100%",
                  color: "#374151",
                  fontSize: 13,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                <p
                  style={{ color: "#22c55e", fontWeight: 700, marginBottom: 8 }}
                >
                  ✓ Code executed
                </p>
                <p style={{ color: "#6b7280", fontSize: 12 }}>
                  A live preview would render here in a sandboxed iframe
                  environment.
                </p>
              </div>
            ) : (
              'Click "Run Code" to see the output'
            )}
          </div>
        </div>
      </div>

      {/* Quick templates */}
      <div>
        <p
          style={{
            fontSize: 13,
            color: "var(--text-secondary)",
            marginBottom: 12,
          }}
        >
          Quick Templates
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {Object.keys(templates).map((key) => (
            <button
              key={key}
              onClick={() => handleTemplate(key)}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 13,
                color: "var(--text-secondary)",
                cursor: "pointer",
                fontWeight: 500,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-light)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {key.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
