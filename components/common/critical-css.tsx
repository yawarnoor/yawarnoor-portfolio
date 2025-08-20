// Only inline critical CSS in production to avoid development server issues
export const CriticalCSS = () => {
  // Skip in development to prevent server-side file system issues
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // In production, inline the most critical styles
  const criticalCSS = `
    *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}
    html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif}
    body{margin:0;line-height:inherit;min-height:100vh}
    .container{width:100%;margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem}
    @media (min-width:640px){.container{max-width:640px}}
    @media (min-width:768px){.container{max-width:768px}}
    @media (min-width:1024px){.container{max-width:1024px}}
    @media (min-width:1280px){.container{max-width:1280px}}
    .hero-section{display:flex;align-items:center;justify-content:center;min-height:100vh;padding-top:6rem;padding-bottom:2rem}
    .hero-content{display:flex;flex-direction:column;align-items:center;gap:1rem;text-align:center;max-width:64rem}
    .hero-title{font-size:1.875rem;font-weight:700;line-height:1.1}
    @media (min-width:640px){.hero-title{font-size:3rem}}
    @media (min-width:768px){.hero-title{font-size:3.75rem}}
    @media (min-width:1024px){.hero-title{font-size:4.5rem}}
    .image-placeholder{background-color:#f3f4f6;border-radius:9999px;width:60%;max-width:16rem;aspect-ratio:1;margin-bottom:1rem;animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
    @media (prefers-color-scheme:dark){.image-placeholder{background-color:#374151}}
  `;
  
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: criticalCSS,
      }}
    />
  );
};
