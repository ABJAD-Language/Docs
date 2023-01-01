import siteConfig from '@generated/docusaurus.config';
export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: {prism},
  } = siteConfig;
  const {additionalLanguages} = prism;
  globalThis.Prism = PrismObject;

  globalThis.Prism.languages.abjad = getAbjadLanguage()
  
  additionalLanguages.forEach((lang) => {
    require(`prismjs/components/prism-${lang}`);
  });
  delete globalThis.Prism;
}

function getAbjadLanguage() {
  return Prism.languages.extend('clike', {
    'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/,
    'string': {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true
    },
    'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\]؛()،.]/,
    'boolean': /(صحيح|خطأ|خطا)/,
    'null': {
      pattern: /عدم/,
      alias: 'keyword'
    },
    'comment': [
      {
        lookbehind: true,
        pattern: /(^|[^#:])#.*/
      }
    ],
    keyword: /(متغير|ثابت|صنف|دالة|إذا|وإلا|أرجع|ارجع|إرجع|والا|عدم|لاشيء|طالما|كرر|كرّر|نوع|رقم|مقطع|منطق|اكتب|أكتب|انشئ|أنشئ|إنشئ|منشئ)/,
    operator: /-[-=]?|\+[+=]?|!=?|<=?|>=?|=(?:==?|>)?|&|\||\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
  });
}