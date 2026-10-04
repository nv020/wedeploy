import type { ReactNode } from "react";
import { ActionLink, Section } from "./PageLayout";

type SectionTone = "plain" | "white" | "wash";

/** Shared section compositions: page content varies, layout stays central. */
export function EditorialSection({ eyebrow, title, children, tone = "plain", offset = false }: {
  eyebrow: string; title: string; children: ReactNode; tone?: SectionTone; offset?: boolean;
}) {
  return <Section tone={tone}><div className={`editorial-composition${offset ? " editorial-offset" : ""}`}>
    <header><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2></header>
    <div className="editorial-body">{children}</div>
  </div></Section>;
}

export function NumberedSection({ eyebrow, title, items, children, layout = "rows", tone = "white" }: {
  eyebrow: string; title: string; items: { id?: string; title: string; body: ReactNode }[];
  children?: ReactNode; layout?: "rows" | "steps"; tone?: SectionTone;
}) {
  return <Section tone={tone}><div className={`numbered-composition numbered-${layout}`}>
    <header><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2></header>
    <div><ol className="numbered-list">{items.map((item, index) => <li id={item.id} key={item.id ?? item.title}>
      <span className="section-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <div><h3>{item.title}</h3><div className="numbered-copy">{item.body}</div></div>
    </li>)}</ol>{children && <div className="numbered-after">{children}</div>}</div>
  </div></Section>;
}

export function StatementSection({ eyebrow, title, children, action, dark = false }: {
  eyebrow: string; title: string; children: ReactNode; action?: { label: string; href: string }; dark?: boolean;
}) {
  return <Section navy={dark} tone="wash"><div className={`statement-composition${dark ? " statement-dark" : ""}`}>
    <header><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></header>
    <div className="statement-body">{children}{action && <div className="mt-6"><ActionLink href={action.href} arrow>{action.label}</ActionLink></div>}</div>
  </div></Section>;
}
