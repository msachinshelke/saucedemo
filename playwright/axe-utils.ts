// /*
//  Default axe config options
// */

// export const axeConfigOptions = {
//   axeOptions: {
//     rules: {
//       "aria-hidden-focus": { enabled: false },
//       "button-name": { enabled: false },
//       bypass: { enabled: false },
//       "color-contrast": { enabled: false },
//       "html-has-lang": { enabled: false },
//       label: { enabled: false },
//       "landmark-one-main": { enabled: false },
//       list: { enabled: false },
//       "nested-interactive": { enabled: false },
//       "page-has-heading-one": { enabled: false },
//       region: { enabled: false },
//       "scrollable-region-focusable": { enabled: false },
//     },
//   },
//   detailedReport: false,
// };

// /*
//  Create axe config object which helps to skip those axe errors
//  while performing accessibility check
// */
// export function buildAxeConfig(axeErrors: string[]) {
//   const ruleValue = { enabled: false };

//   axeErrors.forEach((error) => {
//     axeConfigOptions.axeOptions.rules = {
//       ...axeConfigOptions.axeOptions.rules,
//       [error]: ruleValue,
//     };
//   });

//   return axeConfigOptions;
// }
