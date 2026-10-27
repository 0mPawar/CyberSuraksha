import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { LEARN_TOPICS } from '../data/learnTopics';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SearchInput from '../components/common/SearchInput';

export default function Learn() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Foundations', 'Attack Vectors', 'Device Security', 'Account Security', 'Threats', 'Privacy', 'Payment Safety', 'Emerging Threats'];

  const filteredTopics = LEARN_TOPICS.filter((topic) => {
    const matchCat = selectedCategory === 'All' || topic.category === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const matchQuery =
      !q ||
      topic.title.toLowerCase().includes(q) ||
      topic.summary.toLowerCase().includes(q) ||
      topic.details.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Cyber Knowledge Base' }]} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
          Foundational Digital Defense
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Cybersecurity Knowledge Hub
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Plain-language explanations of essential cyber concepts, threat mechanics, and defense practices without confusing technical jargon.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          onClear={() => setSearchTerm('')}
          placeholder="Search cybersecurity concepts (e.g. MFA, Phishing, Ransomware, Wi-Fi, Social Engineering)..."
        />

        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            id={topic.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  {topic.category}
                </span>
                {topic.relatedScamSlug && (
                  <Link
                    to={`/scams/${topic.relatedScamSlug}`}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>View Related Scam</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {topic.title}
              </h2>

              <p className="text-sm font-medium text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                {topic.summary}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {topic.details}
              </p>

              {topic.practicalExample && (
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-amber-900">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    <span>Real-World Scenario:</span>
                  </div>
                  <p className="leading-relaxed">{topic.practicalExample}</p>
                </div>
              )}

              {topic.keyRules && topic.keyRules.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Defense Rules:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {topic.keyRules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
          <p className="text-sm text-slate-600">No knowledge topics matched your search.</p>
        </div>
      )}
    </div>
  );
}

