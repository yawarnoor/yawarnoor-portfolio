import fs from 'fs';
import path from 'path';

// Read critical CSS at build time
const getCriticalCSS = () => {
  if (process.env.NODE_ENV === 'production') {
    try {
      const criticalCssPath = path.join(process.cwd(), 'styles', 'critical.css');
      return fs.readFileSync(criticalCssPath, 'utf8');
    } catch (error) {
      console.warn('Critical CSS file not found');
      return '';
    }
  }
  return '';
};

export const CriticalCSS = () => {
  const criticalCSS = getCriticalCSS();
  
  if (!criticalCSS) return null;
  
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: criticalCSS,
      }}
    />
  );
};
