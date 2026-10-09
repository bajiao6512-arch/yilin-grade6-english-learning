* {
  box-sizing: border-box;
}

:root {
  --primary: #1f6feb;
  --primary-dark: #174ea6;
  --bg: #f5f9ff;
  --card: #ffffff;
  --text: #1f2a37;
  --muted: #5e6d7b;
  --line: #dfeaf7;
  --success: #2d9a6d;
  --warning: #f5b942;
  --danger: #d85a5a;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Segoe UI", "Microsoft YaHei", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
}

a {
  text-decoration: none;
}

button {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(10px);
  z-index: 10;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
  gap: 1rem;
}

.brand {
  font-weight: 800;
  color: var(--primary-dark);
  letter-spacing: 0.04em;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
}

nav a {
  color: var(--text);
  font-size: 0.95rem;
}

nav a:hover {
  color: var(--primary);
}

.hero {
  padding: 5rem 0 4rem;
  background: linear-gradient(135deg, #eef7ff 0%, #f8fbff 100%);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  align-items: center;
}

.tag {
  display: inline-block;
  background: #e8f2ff;
  color: var(--primary-dark);
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  font-size: 0.84rem;
  font-weight: 700;
}

.hero-copy h1 {
  font-size: clamp(2.3rem, 4vw, 4rem);
  line-height: 1.12;
  margin: 1rem 0 0.8rem;
}

.hero-copy p {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 680px;
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.primary-btn,
.secondary-btn,
.mini-btn,
.ghost-btn {
  border: none;
  cursor: pointer;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn {
  background: var(--primary);
  color: #fff;
  padding: 0.8rem 1.4rem;
  box-shadow: 0 10px 22px rgba(31, 111, 235, 0.2);
}

.secondary-btn,
.ghost-btn {
  background: #fff;
  color: var(--text);
  border: 1px solid var(--line);
  padding: 0.8rem 1.2rem;
}

.mini-btn {
  background: #edf4ff;
  color: var(--primary-dark);
  font-weight: 700;
  padding: 0.5rem 0.9rem;
}

.primary-btn:hover,
.secondary-btn:hover,
.mini-btn:hover,
.ghost-btn:hover {
  transform: translateY(-1px);
}

.hero-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1.7rem;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.05);
}

.hero-card h3 {
  margin: 0 0 1rem;
  font-size: 1.3rem;
}

.hero-card ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--muted);
}

.hero-card li + li {
  margin-top: 0.5rem;
}

.section {
  padding: 4.5rem 0;
}

.alt {
  background: #edf5ff;
}

.section h2 {
  margin: 0 0 2rem;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

.feature-grid,
.unit-grid,
.grammar-grid {
  display: grid;
  gap: 1.25rem;
}

.feature-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.feature,
.unit-card,
.grammar-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.35rem;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);
}

.feature .icon {
  width: 52px;
  height: 52px;
  background: #edf4ff;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  margin-bottom: 0.85rem;
}

.feature h3,
.unit-card h3,
.grammar-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
}

.feature p,
.unit-card p,
.grammar-card p,
.timeline-item p,
.list-box li {
  color: var(--muted);
}

.unit-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.unit-number {
  display: inline-block;
  background: #edf4ff;
  color: var(--primary-dark);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.reading-wrap {
  max-width: 980px;
}

.reading-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.exercise-panel {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.75rem;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.05);
}

.exercise-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.exercise-tag {
  display: inline-block;
  background: #edf5ff;
  color: var(--primary-dark);
  font-weight: 700;
  border-radius: 999px;
  padding: 0.35rem 0.8rem;
}

.progress-text {
  color: var(--muted);
  font-size: 0.9rem;
}

.exercise-title {
  margin: 0 0 1rem;
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.passage-box {
  background: #f8fbff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1.2rem 1rem;
  margin-bottom: 1.5rem;
}

.passage-box p {
  margin: 0;
  color: var(--text);
}

.question-list {
  display: grid;
  gap: 1rem;
}

.question-item {
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem;
  background: #fff;
}

.question-item h4 {
  margin: 0 0 0.8rem;
  font-size: 1.05rem;
}

.option-list {
  display: grid;
  gap: 0.6rem;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.7rem 0.8rem;
  background: #f9fbff;
}

.option-item input {
  accent-color: var(--primary);
}

.answer-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.result-box {
  margin-top: 1.25rem;
  border-left: 5px solid var(--primary);
  background: #f5f9ff;
  border-radius: 12px;
  padding: 1rem 1.1rem;
}

.result-box.success {
  border-left-color: var(--success);
  background: #eefaf4;
}

.result-box.warning {
  border-left-color: var(--warning);
  background: #fffaf0;
}

.result-box strong {
  display: block;
  margin-bottom: 0.4rem;
}

.hidden {
  display: none;
}

.two-column {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.5rem;
  align-items: center;
}

.list-box {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.3rem 1.5rem;
}

.list-box ul {
  margin: 0;
  padding-left: 1.3rem;
  columns: 2;
  column-gap: 2rem;
}

.grammar-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}

.timeline {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.timeline-item {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1.1rem 1rem;
}

.timeline-item span {
  display: inline-block;
  background: #ecf8f0;
  color: var(--success);
  border-radius: 999px;
  padding: 0.3rem 0.7rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.footer {
  background: #0e1d35;
  color: #edf5ff;
  padding: 1.3rem 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.footer a {
  color: #ebf3ff;
}

@media (max-width: 900px) {
  .feature-grid,
  .grammar-grid,
  .unit-grid,
  .timeline {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-inner,
  .two-column {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .nav,
  .footer-inner,
  .reading-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .feature-grid,
  .grammar-grid,
  .unit-grid,
  .timeline {
    grid-template-columns: 1fr;
  }

  .list-box ul {
    columns: 1;
  }

  .answer-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
