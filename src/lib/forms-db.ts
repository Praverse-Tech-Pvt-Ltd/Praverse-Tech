import { Pool } from "pg";

type WaitlistSubmission = {
  name: string;
  email: string;
  org: string;
  role: string;
  useCase: string;
  consent: boolean;
};

type BriefingSubmission = {
  name: string;
  email: string;
  org: string;
  website: string;
  purpose: string;
  region: string;
  consent: boolean;
};

type MediaSubmission = {
  name: string;
  email: string;
  publication: string;
  link: string;
  embargoAck: boolean;
};

type InnovationSubmission = {
  name: string;
  email: string;
  projectName: string;
  pitch: string;
  description: string;
  stage: string;
  ipAck: boolean;
};

type ContactSubmission = {
  name: string;
  email: string;
  company?: string;
  message: string;
  interest: string;
};

type HealthmateFaqItem = {
  question: string;
  answer: string;
};

type HealthmateTimelineItem = {
  date: string;
  description: string;
};

let pool: Pool | null = null;

function normalizeConnectionString(rawConnectionString: string) {
  const url = new URL(rawConnectionString);
  const sslMode = url.searchParams.get("sslmode");

  if (
    !sslMode ||
    sslMode === "prefer" ||
    sslMode === "require" ||
    sslMode === "verify-ca"
  ) {
    url.searchParams.set("sslmode", "verify-full");
  }

  return url.toString();
}

function getPool() {
  if (pool) {
    return pool;
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  pool = new Pool({
    connectionString: normalizeConnectionString(connectionString),
  });

  return pool;
}

let schemaReadyPromise: Promise<void> | null = null;

async function ensureSchema() {
  const db = getPool();

  await db.query(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id BIGSERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS hm_waitlist_submissions (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      organization TEXT NOT NULL,
      role TEXT NOT NULL,
      use_case TEXT NOT NULL,
      consent BOOLEAN NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS hm_briefing_requests (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      organization TEXT NOT NULL,
      website TEXT NOT NULL,
      purpose TEXT NOT NULL,
      region TEXT NOT NULL,
      consent BOOLEAN NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS hm_media_requests (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      publication TEXT NOT NULL,
      article_link TEXT NOT NULL,
      embargo_ack BOOLEAN NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS blog_idea_generations (
      id BIGSERIAL PRIMARY KEY,
      topic TEXT NOT NULL,
      ideas JSONB NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS innovation_pitches (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      project_name TEXT NOT NULL,
      pitch TEXT NOT NULL,
      description TEXT NOT NULL,
      stage TEXT NOT NULL,
      ip_ack BOOLEAN NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT NOT NULL,
      interest TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS healthmate_faq (
      id BIGSERIAL PRIMARY KEY,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS healthmate_timeline (
      id BIGSERIAL PRIMARY KEY,
      date_text TEXT NOT NULL,
      description TEXT NOT NULL,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
}

async function ensureSchemaReady() {
  if (!schemaReadyPromise) {
    schemaReadyPromise = ensureSchema();
  }
  await schemaReadyPromise;
}

export async function saveNewsletterSubscriber(email: string) {
  await ensureSchemaReady();
  await getPool().query(
    `
      INSERT INTO newsletter_subscribers (email)
      VALUES ($1)
      ON CONFLICT (email) DO NOTHING
    `,
    [email],
  );
}

export async function saveWaitlistSubmission(data: WaitlistSubmission) {
  await ensureSchemaReady();
  await getPool().query(
    `
      INSERT INTO hm_waitlist_submissions (name, email, organization, role, use_case, consent)
      VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [data.name, data.email, data.org, data.role, data.useCase, data.consent],
  );
}

export async function saveBriefingRequest(data: BriefingSubmission) {
  await ensureSchemaReady();
  await getPool().query(
    `
      INSERT INTO hm_briefing_requests (name, email, organization, website, purpose, region, consent)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    [
      data.name,
      data.email,
      data.org,
      data.website,
      data.purpose,
      data.region,
      data.consent,
    ],
  );
}

export async function saveMediaRequest(data: MediaSubmission) {
  await ensureSchemaReady();
  await getPool().query(
    `
      INSERT INTO hm_media_requests (name, email, publication, article_link, embargo_ack)
      VALUES ($1, $2, $3, $4, $5)
    `,
    [data.name, data.email, data.publication, data.link, data.embargoAck],
  );
}

export async function saveBlogIdeas(topic: string, ideas: string[]) {
  await ensureSchemaReady();
  await getPool().query(
    `
      INSERT INTO blog_idea_generations (topic, ideas)
      VALUES ($1, $2::jsonb)
    `,
    [topic, JSON.stringify(ideas)],
  );
}

export async function saveInnovationPitch(data: InnovationSubmission) {
  await ensureSchemaReady();
  await getPool().query(
    `
      INSERT INTO innovation_pitches (name, email, project_name, pitch, description, stage, ip_ack)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    [
      data.name,
      data.email,
      data.projectName,
      data.pitch,
      data.description,
      data.stage,
      data.ipAck,
    ],
  );
}

export async function saveContactSubmission(data: ContactSubmission) {
  await ensureSchemaReady();
  await getPool().query(
    `
      INSERT INTO contact_submissions (name, email, company, message, interest)
      VALUES ($1, $2, $3, $4, $5)
    `,
    [data.name, data.email, data.company ?? null, data.message, data.interest],
  );
}

const fallbackFaq: HealthmateFaqItem[] = [
  {
    question: "What is HealthMate?",
    answer:
      "HealthMate is Praverse Tech's humanoid-assistive robotics initiative for healthcare and educational environments.",
  },
  {
    question: "Is HealthMate available publicly?",
    answer:
      "HealthMate is currently in private beta. You can register interest through the waitlist.",
  },
  {
    question: "Which organizations can collaborate?",
    answer:
      "Hospitals, health-tech partners, and research institutions can request access through briefing and media channels.",
  },
];

const fallbackTimeline: HealthmateTimelineItem[] = [
  {
    date: "Q1 2026",
    description: "Private beta expansion with select healthcare partners.",
  },
  {
    date: "Q2 2026",
    description:
      "Pilot workflows focused on assistive communication and care support.",
  },
  {
    date: "Q3 2026",
    description: "Operational readiness for broader institutional onboarding.",
  },
];

export async function getHealthmateFaq(): Promise<HealthmateFaqItem[]> {
  await ensureSchemaReady();
  const result = await getPool().query<HealthmateFaqItem>(
    `
      SELECT question, answer
      FROM healthmate_faq
      ORDER BY sort_order ASC, id ASC
    `,
  );

  if (!result.rows.length) {
    return fallbackFaq;
  }

  return result.rows;
}

export async function getHealthmateTimeline(): Promise<
  HealthmateTimelineItem[]
> {
  await ensureSchemaReady();
  const result = await getPool().query<HealthmateTimelineItem>(
    `
      SELECT date_text AS date, description
      FROM healthmate_timeline
      ORDER BY sort_order ASC, id ASC
    `,
  );

  if (!result.rows.length) {
    return fallbackTimeline;
  }

  return result.rows;
}
