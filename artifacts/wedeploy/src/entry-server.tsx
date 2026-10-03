import { renderToString } from "react-dom/server";
import App from "./App";
export { pages, siteUrl, vacancies } from "./data/site";
export function render(path: string) { return renderToString(<App ssrPath={path} />); }

export { amsterdamServices, amsterdamPages } from "./data/amsterdam";
export { faqItems } from "./data/faq";
