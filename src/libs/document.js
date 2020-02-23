export const cleanColumns = content => {
  const pattern = /(\|[0-9\s]+\r?\n)/g;
  return content.replace(pattern, "");
};

const parseMeta = row => {
  const meta = row
    .replace(/\|/g, "")
    .split(": ")
    .map(s => s.trim());
  // Handle case for key: key: value
  // const key = meta[0];
  // meta.shift();
  // const values = meta.join(": ");
  // return { [key]: values };
  return meta;
};

export const parsePage = page => {
  let meta = [];
  const metaPattern = /(\|\s(.*?):\s+(.*)\r?\n)/g;
  const metaMatch = page.match(metaPattern);
  if (metaMatch && metaMatch.length) {
    meta = metaMatch.map(parseMeta);
    page = page.replace(metaPattern, "");
  }
  const pattern = /(\|[0-9\s]+\r?\n)/g;
  const match = page.match(pattern);
  if (match) {
    const rowCount = match.length;
    const cols = match.map(m => {
      return m
        .trim()
        .replace(/\|/g, "")
        .split(/\s+/)
        .filter(m => m && !m.match(/\s+/));
    });
    const colCount = cols[0].length;
    const areas = cols
      .map(m => `'${m.map(m => `a${m}`).join(" ")}'`)
      .join("\n");
    const content = page.split(/\r?\n-\r?\n/).map(c => c.replace(pattern, ""));

    return Object.assign({ rowCount, colCount, areas, content }, ...meta);
  } else {
    const content = page.split(/\r?\n-\r?\n/);
    return Object.assign(
      {
        rowCount: 1,
        colCount: content.length,
        areas: `'${content.map((_, i) => `a${i + 1}`).join(" ")}'`,
        content: content
      },
      ...meta
    );
  }
};

export const parseDocument = document => {
  return document.split(/\r?\n---\r?\n/).map(parsePage);
};

import { ref } from "../deps/vue.js";

export const state = ref({ slides: false, index: 0 });
