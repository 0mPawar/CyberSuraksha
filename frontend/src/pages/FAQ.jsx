import { useState } from 'react';
import {
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { FAQ_DATA } from '../data/faq';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SearchInput from '../components/common/SearchInput';

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIds, setOpenIds] = useState(new Set(['lost-money']));

  const categories = ['All', 'Immediate Response', 'Helplines', 'Reporting Channels', 'Account Safety', 'Fraud Recognition', 'Digital Payments', 'Scam Traps', 'Device Security', 'About Platform', 'Banking Rights'];

  const toggleAccordion = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const matchQuery =
      !q ||
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
          Clear Answers to Critical Questions
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Verified answers regarding Indian cyber helplines, fraud recovery protocols, RBI rules, and reporting procedures.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          onClear={() => setSearchTerm('')}
          placeholder="Search questions (e.g. 1930, OTP, QR Code, Refund, Bank Liability)..."
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

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.has(faq.id);
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50 hover:bg-slate-50 transition"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                    {faq.category}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transform transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-700 space-y-4 border-t border-slate-100">
                  <div className="whitespace-pre-line leading-relaxed text-xs sm:text-sm text-slate-700">
                    {faq.answer}
                  </div>

                  {faq.sources && faq.sources.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs">
                      <span className="font-semibold text-slate-400">Verified Sources:</span>
                      {faq.sources.map((src, idx) => (
                        <a
                          key={idx}
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium"
                        >
                          <span>{src.name}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
            <p className="text-sm text-slate-600">No questions matched your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

