import type React from "react";

export type Locale = "en" | "zh";

export type DocFrontmatter = {
    title?: string;
    description?: string;
    slug?: string;
    chapter?: string;
    version?: string;
    updateAt?: string;
};

export type DocParagraph = {
    id: string;
    title: string;
    content: string;
};

export type DocEntry = Required<Pick<DocFrontmatter, "title" | "slug" | "chapter">> &
    Pick<DocFrontmatter, "description" | "version" | "updateAt"> & {
        locale: Locale;
        path: string;
        component: React.ComponentType<Record<string, unknown>>;
        paragraphs: DocParagraph[];
    };

export type DocParagraphRow = {
    id: string;
    locales: Partial<Record<Locale, DocParagraph>>;
};

export type DocArticle = {
    chapter: string;
    slug: string;
    title: string;
    version?: string;
    updateAt?: string;
    path: string;
    locales: Partial<Record<Locale, DocEntry>>;
    paragraphs: DocParagraphRow[];
};

export type DocChapter = {
    chapter: string;
    title: string;
    path: string;
    count: number;
    updateAt?: string;
    articles: DocArticle[];
};

type DocModule = {
    default: React.ComponentType<Record<string, unknown>>;
    paragraphs?: DocParagraph[];
};

type DocMetadata = Required<Pick<DocFrontmatter, "title" | "slug" | "chapter">> &
    Pick<DocFrontmatter, "description" | "version" | "updateAt">;

const docModules = import.meta.glob("/src/content/_pages/**/*.mdx", {
    eager: true,
}) as Record<string, DocModule>;

const docMetadata: Record<string, DocMetadata> = Object.fromEntries([
    [
        "/src/content/_pages/1-data-representation/data-representation.en.mdx",
        {
            title: "Data representation",
            slug: "data-representation",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/data-representation.zh.mdx",
        {
            title: "数据表示",
            slug: "data-representation",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/data-transmission.en.mdx",
        {
            title: "Data transmission",
            slug: "data-transmission",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/data-transmission.zh.mdx",
        {
            title: "数据传输",
            slug: "data-transmission",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/hardware.en.mdx",
        {
            title: "Hardware",
            slug: "hardware",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/hardware.zh.mdx",
        {
            title: "硬件",
            slug: "hardware",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/software.en.mdx",
        {
            title: "Software",
            slug: "software",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/software.zh.mdx",
        {
            title: "软件",
            slug: "software",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/internet-and-uses.en.mdx",
        {
            title: "The internet and its uses",
            slug: "internet-and-uses",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/internet-and-uses.zh.mdx",
        {
            title: "互联网及其应用",
            slug: "internet-and-uses",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/automated-and-emerging-technologies.en.mdx",
        {
            title: "Automated and emerging technologies",
            slug: "automated-and-emerging-technologies",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/automated-and-emerging-technologies.zh.mdx",
        {
            title: "自动化与新兴技术",
            slug: "automated-and-emerging-technologies",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/algorithm-design-and-problem-solving.en.mdx",
        {
            title: "Algorithm design and problem solving",
            slug: "algorithm-design-and-problem-solving",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/algorithm-design-and-problem-solving.zh.mdx",
        {
            title: "算法设计与问题求解",
            slug: "algorithm-design-and-problem-solving",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/programming.en.mdx",
        {
            title: "Programming",
            slug: "programming",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/programming.zh.mdx",
        {
            title: "编程",
            slug: "programming",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/9-databases/databases.en.mdx",
        {
            title: "Databases",
            slug: "databases",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/9-databases/databases.zh.mdx",
        {
            title: "数据库",
            slug: "databases",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/boolean-logic.en.mdx",
        {
            title: "Boolean logic",
            slug: "boolean-logic",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/boolean-logic.zh.mdx",
        {
            title: "布尔逻辑",
            slug: "boolean-logic",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    // generated detailed pages from textbook-raw/pages

    [
        "/src/content/_pages/1-data-representation/1-1-1-binary-represents-data.en.mdx",
        {
            title: "Binary represents data",
            slug: "1-1-1-binary-represents-data",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-1-binary-represents-data.zh.mdx",
        {
            title: "第 1.1.1 节：Binary represents data",
            slug: "1-1-1-binary-represents-data",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-2-binary-denary-and-hexadecimal-systems.en.mdx",
        {
            title: "Binary, denary and hexadecimal systems",
            slug: "1-1-2-binary-denary-and-hexadecimal-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-2-binary-denary-and-hexadecimal-systems.zh.mdx",
        {
            title: "第 1.1.2 节：Binary, denary and hexadecimal systems",
            slug: "1-1-2-binary-denary-and-hexadecimal-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-3-use-of-the-hexadecimal-system.en.mdx",
        {
            title: "Use of the hexadecimal system",
            slug: "1-1-3-use-of-the-hexadecimal-system",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-3-use-of-the-hexadecimal-system.zh.mdx",
        {
            title: "第 1.1.3 节：Use of the hexadecimal system",
            slug: "1-1-3-use-of-the-hexadecimal-system",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-4-addition-of-binary-numbers.en.mdx",
        {
            title: "Addition of binary numbers",
            slug: "1-1-4-addition-of-binary-numbers",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-4-addition-of-binary-numbers.zh.mdx",
        {
            title: "第 1.1.4 节：Addition of binary numbers",
            slug: "1-1-4-addition-of-binary-numbers",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-5-logical-binary-shifts.en.mdx",
        {
            title: "Logical binary shifts",
            slug: "1-1-5-logical-binary-shifts",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-5-logical-binary-shifts.zh.mdx",
        {
            title: "第 1.1.5 节：Logical binary shifts",
            slug: "1-1-5-logical-binary-shifts",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-6-two-s-complement-binary-numbers.en.mdx",
        {
            title: "Two's complement (binary numbers)",
            slug: "1-1-6-two-s-complement-binary-numbers",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-1-6-two-s-complement-binary-numbers.zh.mdx",
        {
            title: "第 1.1.6 节：Two's complement (binary numbers)",
            slug: "1-1-6-two-s-complement-binary-numbers",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-2-1-character-sets-ascii-code-and-unicode.en.mdx",
        {
            title: "Character sets — ASCII code and Unicode",
            slug: "1-2-1-character-sets-ascii-code-and-unicode",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-2-1-character-sets-ascii-code-and-unicode.zh.mdx",
        {
            title: "第 1.2.1 节：Character sets — ASCII code and Unicode",
            slug: "1-2-1-character-sets-ascii-code-and-unicode",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-2-2-representation-of-sound.en.mdx",
        {
            title: "Representation of sound",
            slug: "1-2-2-representation-of-sound",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-2-2-representation-of-sound.zh.mdx",
        {
            title: "第 1.2.2 节：Representation of sound",
            slug: "1-2-2-representation-of-sound",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-3-1-measurement-of-data-storage.en.mdx",
        {
            title: "Measurement of data storage",
            slug: "1-3-1-measurement-of-data-storage",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-3-1-measurement-of-data-storage.zh.mdx",
        {
            title: "第 1.3.1 节：Measurement of data storage",
            slug: "1-3-1-measurement-of-data-storage",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-3-2-calculation-of-file-size.en.mdx",
        {
            title: "Calculation of file size",
            slug: "1-3-2-calculation-of-file-size",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-3-2-calculation-of-file-size.zh.mdx",
        {
            title: "第 1.3.2 节：Calculation of file size",
            slug: "1-3-2-calculation-of-file-size",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-3-3-data-compression.en.mdx",
        {
            title: "Data compression",
            slug: "1-3-3-data-compression",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-3-3-data-compression.zh.mdx",
        {
            title: "第 1.3.3 节：Data compression",
            slug: "1-3-3-data-compression",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-3-4-lossy-and-lossless-file-compression.en.mdx",
        {
            title: "Lossy and lossless file compression",
            slug: "1-3-4-lossy-and-lossless-file-compression",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/1-data-representation/1-3-4-lossy-and-lossless-file-compression.zh.mdx",
        {
            title: "第 1.3.4 节：Lossy and lossless file compression",
            slug: "1-3-4-lossy-and-lossless-file-compression",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-1-2-data-transmission.en.mdx",
        {
            title: "Data transmission",
            slug: "2-1-2-data-transmission",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-1-2-data-transmission.zh.mdx",
        {
            title: "第 2.1.2 节：Data transmission",
            slug: "2-1-2-data-transmission",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-2-1-the-need-to-check-for-errors.en.mdx",
        {
            title: "The need to check for errors",
            slug: "2-2-1-the-need-to-check-for-errors",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-2-1-the-need-to-check-for-errors.zh.mdx",
        {
            title: "第 2.2.1 节：The need to check for errors",
            slug: "2-2-1-the-need-to-check-for-errors",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-2-3-check-digits.en.mdx",
        {
            title: "Check digits",
            slug: "2-2-3-check-digits",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-2-3-check-digits.zh.mdx",
        {
            title: "第 2.2.3 节：Check digits",
            slug: "2-2-3-check-digits",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-2-4-automatic-repeat-requests-arqs.en.mdx",
        {
            title: "Automatic Repeat Requests (ARQs)",
            slug: "2-2-4-automatic-repeat-requests-arqs",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-2-4-automatic-repeat-requests-arqs.zh.mdx",
        {
            title: "第 2.2.4 节：Automatic Repeat Requests (ARQs)",
            slug: "2-2-4-automatic-repeat-requests-arqs",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-3-2-symmetric-and-asymmetric-encryption.en.mdx",
        {
            title: "Symmetric and asymmetric encryption",
            slug: "2-3-2-symmetric-and-asymmetric-encryption",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/2-data-transmission/2-3-2-symmetric-and-asymmetric-encryption.zh.mdx",
        {
            title: "第 2.3.2 节：Symmetric and asymmetric encryption",
            slug: "2-3-2-symmetric-and-asymmetric-encryption",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-1-the-central-processing-unit-cpu.en.mdx",
        {
            title: "The central processing unit (CPU)",
            slug: "3-1-1-the-central-processing-unit-cpu",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-1-the-central-processing-unit-cpu.zh.mdx",
        {
            title: "第 3.1.1 节：The central processing unit (CPU)",
            slug: "3-1-1-the-central-processing-unit-cpu",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-2-von-neumann-architecture.en.mdx",
        {
            title: "Von Neumann architecture",
            slug: "3-1-2-von-neumann-architecture",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-2-von-neumann-architecture.zh.mdx",
        {
            title: "第 3.1.2 节：Von Neumann architecture",
            slug: "3-1-2-von-neumann-architecture",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-3-cores-cache-and-internal-clock.en.mdx",
        {
            title: "Cores, cache and internal clock",
            slug: "3-1-3-cores-cache-and-internal-clock",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-3-cores-cache-and-internal-clock.zh.mdx",
        {
            title: "第 3.1.3 节：Cores, cache and internal clock",
            slug: "3-1-3-cores-cache-and-internal-clock",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-4-instruction-set.en.mdx",
        {
            title: "Instruction set",
            slug: "3-1-4-instruction-set",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-4-instruction-set.zh.mdx",
        {
            title: "第 3.1.4 节：Instruction set",
            slug: "3-1-4-instruction-set",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-5-embedded-systems.en.mdx",
        {
            title: "Embedded systems",
            slug: "3-1-5-embedded-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-1-5-embedded-systems.zh.mdx",
        {
            title: "第 3.1.5 节：Embedded systems",
            slug: "3-1-5-embedded-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-2-1-input-devices.en.mdx",
        {
            title: "Input devices",
            slug: "3-2-1-input-devices",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-2-1-input-devices.zh.mdx",
        {
            title: "第 3.2.1 节：Input devices",
            slug: "3-2-1-input-devices",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-2-2-output-devices.en.mdx",
        {
            title: "Output devices",
            slug: "3-2-2-output-devices",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-2-2-output-devices.zh.mdx",
        {
            title: "第 3.2.2 节：Output devices",
            slug: "3-2-2-output-devices",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-1-primary-memory.en.mdx",
        {
            title: "Primary memory",
            slug: "3-3-1-primary-memory",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-1-primary-memory.zh.mdx",
        {
            title: "第 3.3.1 节：Primary memory",
            slug: "3-3-1-primary-memory",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-2-secondary-and-off-line-storage.en.mdx",
        {
            title: "Secondary and off-line storage",
            slug: "3-3-2-secondary-and-off-line-storage",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-2-secondary-and-off-line-storage.zh.mdx",
        {
            title: "第 3.3.2 节：Secondary and off-line storage",
            slug: "3-3-2-secondary-and-off-line-storage",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-3-magnetic-optical-and-solid-state-storage.en.mdx",
        {
            title: "Magnetic, optical and solid-state storage",
            slug: "3-3-3-magnetic-optical-and-solid-state-storage",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-3-magnetic-optical-and-solid-state-storage.zh.mdx",
        {
            title: "第 3.3.3 节：Magnetic, optical and solid-state storage",
            slug: "3-3-3-magnetic-optical-and-solid-state-storage",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-4-virtual-memory.en.mdx",
        {
            title: "Virtual memory",
            slug: "3-3-4-virtual-memory",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-4-virtual-memory.zh.mdx",
        {
            title: "第 3.3.4 节：Virtual memory",
            slug: "3-3-4-virtual-memory",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-5-cloud-storage.en.mdx",
        {
            title: "Cloud storage",
            slug: "3-3-5-cloud-storage",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-3-5-cloud-storage.zh.mdx",
        {
            title: "第 3.3.5 节：Cloud storage",
            slug: "3-3-5-cloud-storage",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-4-1-network-interface-card-nic.en.mdx",
        {
            title: "Network interface card (NIC)",
            slug: "3-4-1-network-interface-card-nic",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-4-1-network-interface-card-nic.zh.mdx",
        {
            title: "第 3.4.1 节：Network interface card (NIC)",
            slug: "3-4-1-network-interface-card-nic",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-4-2-media-access-control-mac.en.mdx",
        {
            title: "Media Access Control (MAC)",
            slug: "3-4-2-media-access-control-mac",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-4-2-media-access-control-mac.zh.mdx",
        {
            title: "第 3.4.2 节：Media Access Control (MAC)",
            slug: "3-4-2-media-access-control-mac",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/3-hardware/3-4-4-routers.en.mdx",
        { title: "Routers", slug: "3-4-4-routers", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/3-hardware/3-4-4-routers.zh.mdx",
        {
            title: "第 3.4.4 节：Routers",
            slug: "3-4-4-routers",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-1-1-system-software-and-application-software.en.mdx",
        {
            title: "System software and application software",
            slug: "4-1-1-system-software-and-application-software",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-1-1-system-software-and-application-software.zh.mdx",
        {
            title: "第 4.1.1 节：System software and application software",
            slug: "4-1-1-system-software-and-application-software",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-1-2-operating-systems.en.mdx",
        {
            title: "Operating systems",
            slug: "4-1-2-operating-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-1-2-operating-systems.zh.mdx",
        {
            title: "第 4.1.2 节：Operating systems",
            slug: "4-1-2-operating-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-1-3-running-of-applications.en.mdx",
        {
            title: "Running of applications",
            slug: "4-1-3-running-of-applications",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-1-3-running-of-applications.zh.mdx",
        {
            title: "第 4.1.3 节：Running of applications",
            slug: "4-1-3-running-of-applications",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-1-4-interrupts.en.mdx",
        { title: "Interrupts", slug: "4-1-4-interrupts", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/4-software/4-1-4-interrupts.zh.mdx",
        {
            title: "第 4.1.4 节：Interrupts",
            slug: "4-1-4-interrupts",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-2-2-assembly-languages.en.mdx",
        {
            title: "Assembly languages",
            slug: "4-2-2-assembly-languages",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-2-2-assembly-languages.zh.mdx",
        {
            title: "第 4.2.2 节：Assembly languages",
            slug: "4-2-2-assembly-languages",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-2-3-translators.en.mdx",
        {
            title: "Translators",
            slug: "4-2-3-translators",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-2-3-translators.zh.mdx",
        {
            title: "第 4.2.3 节：Translators",
            slug: "4-2-3-translators",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-2-4-advantages-and-disadvantages-of-compilers-and-interpreters.en.mdx",
        {
            title: "Advantages and disadvantages of compilers and interpreters",
            slug: "4-2-4-advantages-and-disadvantages-of-compilers-and-interpreters",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-2-4-advantages-and-disadvantages-of-compilers-and-interpreters.zh.mdx",
        {
            title: "第 4.2.4 节：Advantages and disadvantages of compilers and interpreters",
            slug: "4-2-4-advantages-and-disadvantages-of-compilers-and-interpreters",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-2-5-integrated-development-environment-ide.en.mdx",
        {
            title: "Integrated Development Environment (IDE)",
            slug: "4-2-5-integrated-development-environment-ide",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/4-software/4-2-5-integrated-development-environment-ide.zh.mdx",
        {
            title: "第 4.2.5 节：Integrated Development Environment (IDE)",
            slug: "4-2-5-integrated-development-environment-ide",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-1-1-the-differences-between-the-internet-and-the-world-wide-web-www.en.mdx",
        {
            title: "The differences between the internet and the World Wide Web (WWW)",
            slug: "5-1-1-the-differences-between-the-internet-and-the-world-wide-web-www",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-1-1-the-differences-between-the-internet-and-the-world-wide-web-www.zh.mdx",
        {
            title: "第 5.1.1 节：The differences between the internet and the World Wide Web (WWW)",
            slug: "5-1-1-the-differences-between-the-internet-and-the-world-wide-web-www",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-1-3-http-and-https.en.mdx",
        {
            title: "HTTP and HTTPS",
            slug: "5-1-3-http-and-https",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-1-3-http-and-https.zh.mdx",
        {
            title: "第 5.1.3 节：HTTP and HTTPS",
            slug: "5-1-3-http-and-https",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-1-4-web-browsers.en.mdx",
        {
            title: "Web browsers",
            slug: "5-1-4-web-browsers",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-1-4-web-browsers.zh.mdx",
        {
            title: "第 5.1.4 节：Web browsers",
            slug: "5-1-4-web-browsers",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-2-1-what-is-digital-currency.en.mdx",
        {
            title: "What is digital currency?",
            slug: "5-2-1-what-is-digital-currency",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-2-1-what-is-digital-currency.zh.mdx",
        {
            title: "第 5.2.1 节：What is digital currency?",
            slug: "5-2-1-what-is-digital-currency",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-2-2-blockchaining.en.mdx",
        {
            title: "Blockchaining",
            slug: "5-2-2-blockchaining",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-2-2-blockchaining.zh.mdx",
        {
            title: "第 5.2.2 节：Blockchaining",
            slug: "5-2-2-blockchaining",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-3-1-cyber-security-threats.en.mdx",
        {
            title: "Cyber security threats",
            slug: "5-3-1-cyber-security-threats",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-3-1-cyber-security-threats.zh.mdx",
        {
            title: "第 5.3.1 节：Cyber security threats",
            slug: "5-3-1-cyber-security-threats",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-3-2-keeping-data-safe-from-security-threats.en.mdx",
        {
            title: "Keeping data safe from security threats",
            slug: "5-3-2-keeping-data-safe-from-security-threats",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/5-internet-and-uses/5-3-2-keeping-data-safe-from-security-threats.zh.mdx",
        {
            title: "第 5.3.2 节：Keeping data safe from security threats",
            slug: "5-3-2-keeping-data-safe-from-security-threats",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-1-2-advantages-and-disadvantages-of-automated-systems.en.mdx",
        {
            title: "Advantages and disadvantages of automated systems",
            slug: "6-1-2-advantages-and-disadvantages-of-automated-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-1-2-advantages-and-disadvantages-of-automated-systems.zh.mdx",
        {
            title: "第 6.1.2 节：Advantages and disadvantages of automated systems",
            slug: "6-1-2-advantages-and-disadvantages-of-automated-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-2-1-what-is-robotics.en.mdx",
        {
            title: "What is robotics?",
            slug: "6-2-1-what-is-robotics",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-2-1-what-is-robotics.zh.mdx",
        {
            title: "第 6.2.1 节：What is robotics?",
            slug: "6-2-1-what-is-robotics",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-3-1-introduction.en.mdx",
        {
            title: "Introduction",
            slug: "6-3-1-introduction",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-3-1-introduction.zh.mdx",
        {
            title: "第 6.3.1 节：Introduction",
            slug: "6-3-1-introduction",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-3-2-characteristics-of-ai.en.mdx",
        {
            title: "Characteristics of AI",
            slug: "6-3-2-characteristics-of-ai",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-3-2-characteristics-of-ai.zh.mdx",
        {
            title: "第 6.3.2 节：Characteristics of AI",
            slug: "6-3-2-characteristics-of-ai",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-3-3-ai-systems.en.mdx",
        { title: "AI systems", slug: "6-3-3-ai-systems", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/6-automated-and-emerging-technologies/6-3-3-ai-systems.zh.mdx",
        {
            title: "第 6.3.3 节：AI systems",
            slug: "6-3-3-ai-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-1-1-analysis.en.mdx",
        { title: "Analysis", slug: "7-1-1-analysis", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-1-1-analysis.zh.mdx",
        {
            title: "第 7.1.1 节：Analysis",
            slug: "7-1-1-analysis",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-1-2-design.en.mdx",
        { title: "Design", slug: "7-1-2-design", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-1-2-design.zh.mdx",
        {
            title: "第 7.1.2 节：Design",
            slug: "7-1-2-design",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-1-3-coding-and-iterative-testing.en.mdx",
        {
            title: "Coding and iterative testing",
            slug: "7-1-3-coding-and-iterative-testing",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-1-3-coding-and-iterative-testing.zh.mdx",
        {
            title: "第 7.1.3 节：Coding and iterative testing",
            slug: "7-1-3-coding-and-iterative-testing",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-1-4-testing.en.mdx",
        { title: "Testing", slug: "7-1-4-testing", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-1-4-testing.zh.mdx",
        {
            title: "第 7.1.4 节：Testing",
            slug: "7-1-4-testing",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-2-1-the-computer-system-and-its-sub-systems.en.mdx",
        {
            title: "The computer system and its sub-systems",
            slug: "7-2-1-the-computer-system-and-its-sub-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-2-1-the-computer-system-and-its-sub-systems.zh.mdx",
        {
            title: "第 7.2.1 节：The computer system and its sub-systems",
            slug: "7-2-1-the-computer-system-and-its-sub-systems",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-2-2-decomposing-a-problem.en.mdx",
        {
            title: "Decomposing a problem",
            slug: "7-2-2-decomposing-a-problem",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-2-2-decomposing-a-problem.zh.mdx",
        {
            title: "第 7.2.2 节：Decomposing a problem",
            slug: "7-2-2-decomposing-a-problem",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-2-3-methods-used-to-design-and-construct-a-solution.en.mdx",
        {
            title: "Methods used to design and construct a solution",
            slug: "7-2-3-methods-used-to-design-and-construct-a-solution",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-2-3-methods-used-to-design-and-construct-a-solution.zh.mdx",
        {
            title: "第 7.2.3 节：Methods used to design and construct a solution",
            slug: "7-2-3-methods-used-to-design-and-construct-a-solution",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-1-totalling.en.mdx",
        { title: "Totalling", slug: "7-4-1-totalling", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-1-totalling.zh.mdx",
        {
            title: "第 7.4.1 节：Totalling",
            slug: "7-4-1-totalling",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-2-counting.en.mdx",
        { title: "Counting", slug: "7-4-2-counting", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-2-counting.zh.mdx",
        {
            title: "第 7.4.2 节：Counting",
            slug: "7-4-2-counting",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-3-maximum-minimum-and-average.en.mdx",
        {
            title: "Maximum, minimum and average",
            slug: "7-4-3-maximum-minimum-and-average",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-3-maximum-minimum-and-average.zh.mdx",
        {
            title: "第 7.4.3 节：Maximum, minimum and average",
            slug: "7-4-3-maximum-minimum-and-average",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-4-linear-search.en.mdx",
        {
            title: "Linear search",
            slug: "7-4-4-linear-search",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-4-linear-search.zh.mdx",
        {
            title: "第 7.4.4 节：Linear search",
            slug: "7-4-4-linear-search",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-5-bubble-sort.en.mdx",
        {
            title: "Bubble sort",
            slug: "7-4-5-bubble-sort",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-4-5-bubble-sort.zh.mdx",
        {
            title: "第 7.4.5 节：Bubble sort",
            slug: "7-4-5-bubble-sort",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-5-1-validation.en.mdx",
        { title: "Validation", slug: "7-5-1-validation", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-5-1-validation.zh.mdx",
        {
            title: "第 7.5.1 节：Validation",
            slug: "7-5-1-validation",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-5-2-verification.en.mdx",
        {
            title: "Verification",
            slug: "7-5-2-verification",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-5-2-verification.zh.mdx",
        {
            title: "第 7.5.2 节：Verification",
            slug: "7-5-2-verification",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-6-1-how-to-suggest-and-apply-suitable-test-data.en.mdx",
        {
            title: "How to suggest and apply suitable test data",
            slug: "7-6-1-how-to-suggest-and-apply-suitable-test-data",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/7-algorithm-design-and-problem-solving/7-6-1-how-to-suggest-and-apply-suitable-test-data.zh.mdx",
        {
            title: "第 7.6.1 节：How to suggest and apply suitable test data",
            slug: "7-6-1-how-to-suggest-and-apply-suitable-test-data",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-1-variables-and-constants.en.mdx",
        {
            title: "Variables and constants",
            slug: "8-1-1-variables-and-constants",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-1-variables-and-constants.zh.mdx",
        {
            title: "第 8.1.1 节：Variables and constants",
            slug: "8-1-1-variables-and-constants",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-2-basic-data-types.en.mdx",
        {
            title: "Basic data types",
            slug: "8-1-2-basic-data-types",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-2-basic-data-types.zh.mdx",
        {
            title: "第 8.1.2 节：Basic data types",
            slug: "8-1-2-basic-data-types",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-3-input-and-output.en.mdx",
        {
            title: "Input and output",
            slug: "8-1-3-input-and-output",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-3-input-and-output.zh.mdx",
        {
            title: "第 8.1.3 节：Input and output",
            slug: "8-1-3-input-and-output",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4-basic-concepts.en.mdx",
        {
            title: "Basic concepts",
            slug: "8-1-4-basic-concepts",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4-basic-concepts.zh.mdx",
        {
            title: "第 8.1.4 节：Basic concepts",
            slug: "8-1-4-basic-concepts",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4a-sequence.en.mdx",
        { title: "Sequence", slug: "8-1-4a-sequence", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4a-sequence.zh.mdx",
        {
            title: "第 8.1.4(a) 节：Sequence",
            slug: "8-1-4a-sequence",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4b-selection.en.mdx",
        { title: "Selection", slug: "8-1-4b-selection", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4b-selection.zh.mdx",
        {
            title: "第 8.1.4(b) 节：Selection",
            slug: "8-1-4b-selection",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4c-iteration.en.mdx",
        { title: "Iteration", slug: "8-1-4c-iteration", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4c-iteration.zh.mdx",
        {
            title: "第 8.1.4(c) 节：Iteration",
            slug: "8-1-4c-iteration",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4d-totalling-and-counting.en.mdx",
        {
            title: "Totalling and counting",
            slug: "8-1-4d-totalling-and-counting",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4d-totalling-and-counting.zh.mdx",
        {
            title: "第 8.1.4(d) 节：Totalling and counting",
            slug: "8-1-4d-totalling-and-counting",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4e-string-handling.en.mdx",
        {
            title: "String Handling",
            slug: "8-1-4e-string-handling",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4e-string-handling.zh.mdx",
        {
            title: "第 8.1.4(e) 节：String Handling",
            slug: "8-1-4e-string-handling",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4f-arithmetic-logical-and-boolean-operators.en.mdx",
        {
            title: "Arithmetic, logical and Boolean operators",
            slug: "8-1-4f-arithmetic-logical-and-boolean-operators",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-4f-arithmetic-logical-and-boolean-operators.zh.mdx",
        {
            title: "第 8.1.4(f) 节：Arithmetic, logical and Boolean operators",
            slug: "8-1-4f-arithmetic-logical-and-boolean-operators",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-5-use-of-nested-statements.en.mdx",
        {
            title: "Use of nested statements",
            slug: "8-1-5-use-of-nested-statements",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-5-use-of-nested-statements.zh.mdx",
        {
            title: "第 8.1.5 节：Use of nested statements",
            slug: "8-1-5-use-of-nested-statements",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-6-procedures-and-functions.en.mdx",
        {
            title: "Procedures and functions",
            slug: "8-1-6-procedures-and-functions",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-1-6-procedures-and-functions.zh.mdx",
        {
            title: "第 8.1.6 节：Procedures and functions",
            slug: "8-1-6-procedures-and-functions",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-2-1-one-and-two-dimensional-arrays.en.mdx",
        {
            title: "One- and Two-dimensional arrays",
            slug: "8-2-1-one-and-two-dimensional-arrays",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-2-1-one-and-two-dimensional-arrays.zh.mdx",
        {
            title: "第 8.2.1 节：One- and Two-dimensional arrays",
            slug: "8-2-1-one-and-two-dimensional-arrays",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-2-2-declaring-and-populating-arrays-with-iteration.en.mdx",
        {
            title: "Declaring and populating arrays with iteration",
            slug: "8-2-2-declaring-and-populating-arrays-with-iteration",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-2-2-declaring-and-populating-arrays-with-iteration.zh.mdx",
        {
            title: "第 8.2.2 节：Declaring and populating arrays with iteration",
            slug: "8-2-2-declaring-and-populating-arrays-with-iteration",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-3-1-purpose-of-storing-data-in-a-file.en.mdx",
        {
            title: "Purpose of storing data in a file",
            slug: "8-3-1-purpose-of-storing-data-in-a-file",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-3-1-purpose-of-storing-data-in-a-file.zh.mdx",
        {
            title: "第 8.3.1 节：Purpose of storing data in a file",
            slug: "8-3-1-purpose-of-storing-data-in-a-file",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-3-2-using-files.en.mdx",
        {
            title: "Using files",
            slug: "8-3-2-using-files",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/8-programming/8-3-2-using-files.zh.mdx",
        {
            title: "第 8.3.2 节：Using files",
            slug: "8-3-2-using-files",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/9-databases/9-1-2-basic-data-types.en.mdx",
        {
            title: "Basic data types",
            slug: "9-1-2-basic-data-types",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/9-databases/9-1-2-basic-data-types.zh.mdx",
        {
            title: "第 9.1.2 节：Basic data types",
            slug: "9-1-2-basic-data-types",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/9-databases/9-1-3-primary-keys.en.mdx",
        {
            title: "Primary keys",
            slug: "9-1-3-primary-keys",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/9-databases/9-1-3-primary-keys.zh.mdx",
        {
            title: "第 9.1.3 节：Primary keys",
            slug: "9-1-3-primary-keys",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/9-databases/9-1-4-sql.en.mdx",
        { title: "SQL", slug: "9-1-4-sql", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/9-databases/9-1-4-sql.zh.mdx",
        { title: "第 9.1.4 节：SQL", slug: "9-1-4-sql", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-1-1-logic-gate-symbols.en.mdx",
        {
            title: "Logic gate symbols",
            slug: "10-1-1-logic-gate-symbols",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-1-1-logic-gate-symbols.zh.mdx",
        {
            title: "第 10.1.1 节：Logic gate symbols",
            slug: "10-1-1-logic-gate-symbols",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-1-not-gate.en.mdx",
        { title: "NOT gate", slug: "10-2-1-not-gate", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-1-not-gate.zh.mdx",
        {
            title: "第 10.2.1 节：NOT gate",
            slug: "10-2-1-not-gate",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-2-and-gate-note-the-use-of-boolean-algebra-to.en.mdx",
        {
            title: "AND gate Note the use of Boolean algebra to",
            slug: "10-2-2-and-gate-note-the-use-of-boolean-algebra-to",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-2-and-gate-note-the-use-of-boolean-algebra-to.zh.mdx",
        {
            title: "第 10.2.2 节：AND gate Note the use of Boolean algebra to",
            slug: "10-2-2-and-gate-note-the-use-of-boolean-algebra-to",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-3-or-gate.en.mdx",
        { title: "OR gate", slug: "10-2-3-or-gate", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-3-or-gate.zh.mdx",
        {
            title: "第 10.2.3 节：OR gate",
            slug: "10-2-3-or-gate",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-4-nand-gate-not-and.en.mdx",
        {
            title: "NAND gate (NOT AND)",
            slug: "10-2-4-nand-gate-not-and",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-4-nand-gate-not-and.zh.mdx",
        {
            title: "第 10.2.4 节：NAND gate (NOT AND)",
            slug: "10-2-4-nand-gate-not-and",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-5-nor-gate-not-or.en.mdx",
        {
            title: "NOR gate (NOT OR)",
            slug: "10-2-5-nor-gate-not-or",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-5-nor-gate-not-or.zh.mdx",
        {
            title: "第 10.2.5 节：NOR gate (NOT OR)",
            slug: "10-2-5-nor-gate-not-or",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-6-xor-gate.en.mdx",
        { title: "XOR gate", slug: "10-2-6-xor-gate", chapter: "computer-science", version: "2025", updateAt: "2025-01-13" },
    ],
    [
        "/src/content/_pages/10-boolean-logic/10-2-6-xor-gate.zh.mdx",
        {
            title: "第 10.2.6 节：XOR gate",
            slug: "10-2-6-xor-gate",
            chapter: "computer-science",
            version: "2025",
            updateAt: "2025-01-13",
        },
    ],
]) as Record<string, DocMetadata>;

const entries = Object.entries(docModules).flatMap(([path, module]) => {
    const meta = docMetadata[path];
    if (!meta) {
        return [];
    }

    return [
        {
            ...meta,
            description: getDescription(meta.title, getLocale(path)),
            locale: getLocale(path) as Locale,
            path,
            component: module.default,
            paragraphs: module.paragraphs ?? [],
        } satisfies DocEntry,
    ];
});

const articleMap = new Map<string, DocArticle>();

for (const entry of entries) {
    const key = `${entry.chapter}/${entry.slug}`;
    const existing = articleMap.get(key);

    if (existing) {
        existing.locales[entry.locale] = entry;
        existing.title = existing.title ?? entry.title;
        existing.version = existing.version ?? entry.version;
        existing.updateAt = pickLatest(existing.updateAt, entry.updateAt);
        existing.paragraphs = mergeParagraphRows(existing.locales);
        continue;
    }

    articleMap.set(key, {
        chapter: entry.chapter,
        slug: entry.slug,
        title: entry.title,
        version: entry.version,
        updateAt: entry.updateAt,
        path: `/docs/${entry.chapter}/${entry.slug}`,
        locales: { [entry.locale]: entry },
        paragraphs: mergeParagraphRows({ [entry.locale]: entry }),
    });
}

const articleList = [...articleMap.values()].sort((left, right) => {
    const chapterOrder = compareText(left.chapter, right.chapter);
    if (chapterOrder !== 0) {
        return chapterOrder;
    }

    return compareText(left.slug, right.slug);
});

const chapterMap = new Map<string, DocChapter>();

for (const article of articleList) {
    const current = chapterMap.get(article.chapter);
    if (current) {
        current.articles.push(article);
        current.count += 1;
        current.updateAt = pickLatest(current.updateAt, article.updateAt);
        continue;
    }

    chapterMap.set(article.chapter, {
        chapter: article.chapter,
        title: titleCase(article.chapter),
        path: `/docs/${article.chapter}/catalog`,
        count: 1,
        updateAt: article.updateAt,
        articles: [article],
    });
}

export const docArticles = articleList;
export const docChapters = [...chapterMap.values()].map((chapter) => ({
    ...chapter,
    articles: chapter.articles.sort((left, right) => compareText(left.slug, right.slug)),
}));

export function getArticleByPath(chapter: string, slug: string) {
    return articleMap.get(`${chapter}/${slug}`);
}

export function getArticlesByChapter(chapter: string) {
    return docArticles.filter((article) => article.chapter === chapter);
}

export function getDocSummary() {
    return {
        articleCount: docArticles.length,
        chapterCount: docChapters.length,
        latestUpdateAt: docArticles.reduce(
            (latest, article) => pickLatest(latest, article.updateAt),
            undefined as string | undefined
        ),
    };
}

export function getLocaleEntry(article: DocArticle, locale: Locale) {
    return article.locales[locale];
}

function mergeParagraphRows(locales: Partial<Record<Locale, DocEntry>>) {
    const rows = new Map<string, DocParagraphRow>();

    for (const locale of ["en", "zh"] as const) {
        const entry = locales[locale];
        if (!entry) {
            continue;
        }

        for (const paragraph of entry.paragraphs) {
            const current = rows.get(paragraph.id) ?? { id: paragraph.id, locales: {} };
            current.locales[locale] = paragraph;
            rows.set(paragraph.id, current);
        }
    }

    return [...rows.values()];
}

function getDescription(title: string, locale: Locale) {
    const topic = title.replace(/^第\s*[\d.()a-f]+\s*节：\s*/, "").replace(/[?!.。！？]+$/, "");
    return locale === "zh" ? `简要介绍${topic}的核心概念。` : `A concise guide to ${topic}.`;
}

function getLocale(path: string): Locale {
    return path.endsWith(".zh.mdx") ? "zh" : "en";
}

function compareText(left: string, right: string) {
    const leftNumber = extractNumericPrefix(left);
    const rightNumber = extractNumericPrefix(right);

    if (leftNumber !== undefined && rightNumber !== undefined && leftNumber !== rightNumber) {
        return leftNumber - rightNumber;
    }

    return left.localeCompare(right, "en");
}

function extractNumericPrefix(value: string) {
    const match = value.match(/^\d+(?:-\d+)*/);
    return match ? Number(match[0].replaceAll("-", "")) : undefined;
}

function pickLatest(current?: string, incoming?: string) {
    if (!current) {
        return incoming;
    }

    if (!incoming) {
        return current;
    }

    return incoming > current ? incoming : current;
}

function titleCase(value: string) {
    return value
        .split(/[-_]/g)
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(" ");
}
