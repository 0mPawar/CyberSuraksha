import { useState, useMemo } from 'react';
import { SCAMS_DATA } from '../data/scams';
import { filterScams } from '../utils/searchUtils';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ScamFilters from '../components/scams/ScamFilters';
import ScamGrid from '../components/scams/ScamGrid';

export default function ScamLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRisk, setSelectedRisk] = useState('All');

  const filteredScams = useMemo(() => {
    return filterScams(SCAMS_DATA, {
      searchTerm,
      category: selectedCategory,
      riskType: selectedRisk,
    });
  }, [searchTerm, selectedCategory, selectedRisk]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedRisk('All');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Scam Library' }]} />

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
          Comprehensive Directory
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Indian Cyber Scam Library
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Detailed, verified guides covering all major cyber frauds, psychological manipulation tactics, recognizable warning signs, and actionable response steps in India.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <ScamFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedRisk={selectedRisk}
        setSelectedRisk={setSelectedRisk}
        onReset={handleReset}
        totalResults={filteredScams.length}
      />

      {/* Scam Cards Grid */}
      <ScamGrid scams={filteredScams} onReset={handleReset} />
    </div>
  );
}

