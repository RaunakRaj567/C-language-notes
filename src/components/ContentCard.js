import React, { useState } from 'react';

export function ContentCard({ title, content }) {
  return (
    <div className="content-card">
      <h3>{title}</h3>
      <div className="card-content">
        {Array.isArray(content) ? (
          <ul className="bullet-points">
            {content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export function VivaSection({ questions }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="viva-section">
      <h2>🎓 Viva Questions & Answers (30 Questions)</h2>
      <div className="viva-container">
        {questions.map((qa, index) => (
          <div 
            key={index}
            className={`viva-item ${expandedIndex === index ? 'expanded' : ''}`}
          >
            <button 
              className="viva-question"
              onClick={() => toggleExpand(index)}
            >
              <span className="q-number">Q{index + 1}.</span>
              <span className="q-text">{qa.question}</span>
              <span className="q-icon">{expandedIndex === index ? '▼' : '▶'}</span>
            </button>
            {expandedIndex === index && (
              <div className="viva-answer">
                <strong>A:</strong> 
                <div 
                  dangerouslySetInnerHTML={{
                    __html: qa.answer.replace(/\n\n/g, '<br><br>')
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default { ContentCard, VivaSection };
