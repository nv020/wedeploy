import { renderToString } from "react-dom/server";
import App from "./App";
export { pages, siteUrl, vacancies } from "./data/site";
export function render(path: string) { return renderToString(<App ssrPath={path} />); }

export { diensten } from "./data/diensten";
export { publicVacancies } from "./data/opportunities";
export { faqItems } from "./data/faq";
