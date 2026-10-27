/**
 * Search and filter utility for Scam Library
 */
export function filterScams(scams, { searchTerm = '', category = 'All', riskType = 'All' } = {}) {
  const query = searchTerm.trim().toLowerCase();

  return scams.filter((scam) => {
    // Category match
    const categoryMatch =
      category === 'All' || scam.category.toLowerCase() === category.toLowerCase();

    // Risk type match
    const riskMatch =
      riskType === 'All' ||
      (Array.isArray(scam.riskIndicators) &&
        scam.riskIndicators.some((r) => r.toLowerCase() === riskType.toLowerCase()));

    if (!categoryMatch || !riskMatch) {
      return false;
    }

    if (!query) {
      return true;
    }

    // Keyword match across title, description, category, and warning signs
    const inTitle = scam.title.toLowerCase().includes(query);
    const inDesc = scam.shortDescription.toLowerCase().includes(query);
    const inCat = scam.category.toLowerCase().includes(query);
    const inWarnings =
      Array.isArray(scam.warningSigns) &&
      scam.warningSigns.some((w) => w.toLowerCase().includes(query));
    const inTactics =
      Array.isArray(scam.typicalTactics) &&
      scam.typicalTactics.some((t) => t.toLowerCase().includes(query));

    return inTitle || inDesc || inCat || inWarnings || inTactics;
  });
}

