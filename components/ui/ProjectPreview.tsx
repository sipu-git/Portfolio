interface ProjectPreviewProps {
  kind: "crm" | "expense" | "commerce" | "generic";
  title: string;
  featured?: boolean;
}

export function ProjectPreview({ kind, title, featured = false }: ProjectPreviewProps) {
  const size = featured ? "project-preview featured-preview" : "project-preview";

  if (kind === "crm") {
    return (
      <div className={`${size} crm-preview`} aria-hidden="true">
        <div className="preview-chrome">
          <span />
          <span />
          <span />
          <p>{title}</p>
        </div>
        <div className="preview-kpis">
          <div>
            <small>Leads</small>
            <strong>Pipeline</strong>
          </div>
          <div>
            <small>Deals</small>
            <strong>Kanban</strong>
          </div>
          <div>
            <small>Inbox</small>
            <strong>Gmail · WhatsApp</strong>
          </div>
        </div>
        <div className="preview-board">
          {["Discovery", "Proposal", "Won"].map((column) => (
            <div key={column} className="preview-column">
              <span>{column}</span>
              <i />
              <i />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "expense") {
    return (
      <div className={`${size} expense-preview`} aria-hidden="true">
        <div className="preview-chrome">
          <span />
          <span />
          <span />
          <p>{title}</p>
        </div>
        <div className="preview-chart">
          <div className="bars">
            <i style={{ height: "42%" }} />
            <i style={{ height: "68%" }} />
            <i style={{ height: "54%" }} />
            <i style={{ height: "86%" }} />
            <i style={{ height: "61%" }} />
          </div>
          <div className="preview-receipts">
            <p>Receipts · AWS S3</p>
            <p>Gemini · Parse</p>
            <p>Redis cache</p>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "commerce") {
    return (
      <div className={`${size} commerce-preview`} aria-hidden="true">
        <div className="preview-chrome">
          <span />
          <span />
          <span />
          <p>{title}</p>
        </div>
        <div className="preview-products">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  return (
    <div className={`${size} generic-preview`} aria-hidden="true">
      <div className="preview-chrome">
        <span />
        <span />
        <span />
        <p>{title}</p>
      </div>
      <div className="generic-lines">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
